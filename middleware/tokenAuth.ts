import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

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

const authToken = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.get("Authorization")?.replace("token ", ""));
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

export default authToken;
