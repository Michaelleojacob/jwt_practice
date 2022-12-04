import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createToken = (user: { n: string; id: number }) => {
  try {
    const token = jwt.sign(
      { data: { name: user.n, id: user.id } },
      process.env.SECRET!,
      {
        expiresIn: "6h",
      }
    );
    return token;
  } catch (err) {
    console.log("error creating token in createToken", err);
  }
};

export const verifyToken = (token: string) => {
  try {
    jwt.verify(token, process.env.SECRET!, (err, decoded) => {
      if (err) throw new Error();
      console.log("decoded!");
      return decoded;
    });
  } catch (err) {
    console.log("error verifying token in verifyToken", err);
  }
};
