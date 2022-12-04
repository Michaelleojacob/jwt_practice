import { Request, Response, NextFunction } from "express";
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

// naive way to verify AFTER the request has been made - not middleware.
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

// export interface CustomRequest extends Request {
//   token: string | JwtPayload;
// }

declare global {
  namespace Express {
    interface Request {
      token?: any;
      // token?:
      //   | { data: { name: string; id: number }; iat: number; exp: number }
      //   | JwtPayload;
    }
  }
}

export const authToken = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.get("Authorization")?.replace("token ", ""));
  // console.log(req.get("token"));
  try {
    // const token = req.header("Authorization")?.replace("Bearer ", "");
    const token = req.get("token");
    console.log(token);

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.SECRET!);
    console.log(decoded);
    req.token = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ info: "invalid token from authToken" });
  }
};
