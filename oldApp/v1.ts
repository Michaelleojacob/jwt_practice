import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
const port = process.env.PORT || 3004;
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [{ name: "migs", pw: "wigs", id: 1 }];

const findUserById = (id: number) =>
  users.find((user) => user.id === id) || false;
const findUserByName = (name: string) =>
  users.find((user) => user.name === name) || false;

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader !== undefined) {
      console.log(bearerHeader);
      // const bearer = bearerHeader.split(" ");
      // const bearerToken = bearer[1];
      // console.log(bearerToken);
      // jwt.verify(bearerToken, process.env.SECRET!);
      next();
    } else {
      return res.status(403).json({ info: "verify token failed" });
    }
  } catch (e) {
    res.status(403).json({ info: "something went wrong in verify token" });
  }
};

app.get("/", verifyToken, (req: Request, res: Response) => {
  res.status(200).json({ info: `got '/' successfully` });
});

app.post("/login", async (req: Request, res: Response) => {
  const user = findUserByName(req.body.name);
  if (!user) return res.status(401).json({ info: "no user found" });
  if (user.pw !== req.body.pw)
    return res.status(401).json({ info: "incorrect username or password" });
  try {
    const token = jwt.sign(
      {
        data: {
          user: {
            id: user.id,
            name: user.name,
          },
        },
      },
      process.env.SECRET!,
      { expiresIn: "2s" }
      // { expiresIn: "15m" }
    );
    res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ info: `something went wrong with login` });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
