import express, { Request, Response } from "express";
import authToken from "../middleware/tokenAuth";
const protectedRouter = express.Router();

protectedRouter.get("/", authToken, (req: Request, res: Response) => {
  // console.log(req.headers);
  // console.log(req.token);

  const token = req.token.data;

  console.log(token);

  res
    .status(203)
    .json({ info: "lol from protectedRouter.get", token: req.token });
});

export default protectedRouter;
