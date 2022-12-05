import express, { Request, Response } from "express";
import users from "../mockData/users";
import { createToken } from "../utils/handleToken";
const loginRouter = express.Router();

const findUser = (name: string) =>
  users.find((user) => user.n === name) || false;

loginRouter.post("/", (req: Request, res: Response) => {
  const { n, p } = req.body;
  const user = findUser(n);

  if (!user)
    return res
      .status(404)
      .json({ info: "no user found", from: "loginRouter.post" });

  if (n === user.n && p === user.p) {
    const token = createToken({ n: user.n, id: user.id });
    return res
      .status(200)
      .json({ info: "logged in", from: "loginRouter.post", token });
  }
});

export default loginRouter;
