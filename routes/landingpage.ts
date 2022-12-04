import express, { Request, Response } from "express";
const landingpageRouter = express.Router();

landingpageRouter.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ info: "get" });
});

landingpageRouter.post("/", (req: Request, res: Response) => {
  return res.status(200).json({ info: "post" });
});

export default landingpageRouter;
