import express from "express";
import { Request, Response } from "express";
const port = process.env.PORT || 3004;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ info: `got '/' successfully` });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
