import express from "express";
import { Request, Response } from "express";
const port = process.env.PORT || 3004;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [{ name: "migs", pw: "wigs", id: 1 }];

const findUserById = (id: number) =>
  users.find((user) => user.id === id) || false;
const findUserByName = (name: string) =>
  users.find((user) => user.name === name) || false;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ info: `got '/' successfully` });
});

app.post("/login", (req: Request, res: Response) => {
  const user = findUserByName(req.body.name);
  if (!user) return res.status(401).json({ info: "no user found" });
  if (user.pw !== req.body.pw)
    return res.status(401).json({ info: "incorrect username or password" });
  return res.status(200).json({ info: "logged in" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
