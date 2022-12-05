import express, { Request, Response } from "express";
import { findUserName } from "../mockData/users";
import { createToken } from "../utils/createToken";
const loginRouter = express.Router();

loginRouter.post("/", (req: Request, res: Response) => {
  const { n, p } = req.body;
  const user = findUserName(n);

  if (req.token) {
    return res.status(300).json({ info: "user already has a token" });
  }

  if (!user)
    return res
      .status(404)
      .json({ info: "no user found", from: "loginRouter.post" });

  // username and password matched
  if (n === user.n && p === user.p) {
    const token = createToken({ n: user.n, id: user.id });

    return res
      .status(200)
      .json({ info: "logged in", from: "loginRouter.post", token });
  }
  // username and passowrd DID NOT match
  return res.status(404).json({ info: "incorrect username or password" });
});

export default loginRouter;
