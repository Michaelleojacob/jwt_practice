import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      token?: any;
    }
  }
}

const authToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.get("token");

    // if no token, trigger the catch
    if (!token) throw new Error();

    const decoded = jwt.verify(token, process.env.SECRET!);
    req.token = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ info: "no token, or invalid token" });
  }
};

export default authToken;
