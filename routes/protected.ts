import express, { Request, Response } from "express";
import authToken from "../middleware/tokenAuth";
const protectedRouter = express.Router();

protectedRouter.get("/", authToken, (req: Request, res: Response) => {
  const token = req.token.data;

  res.status(203).json({ info: "from protectedRouter", token: req.token });
});

export default protectedRouter;
