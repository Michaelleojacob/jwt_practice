import express, { Request, Response } from "express";
import authToken from "../middleware/tokenAuth";
import { findUserId, updateCount } from "../mockData/users";
const updateCountRouter = express.Router();

updateCountRouter.post("/", authToken, (req: Request, res: Response) => {
  try {
    // user from token
    const token_user = req.token.data;

    // user exists in db
    const db_user: any = findUserId(token_user.id);

    // if no matching user - trigger catch
    if (!db_user) throw new Error();

    updateCount(db_user.id, Number(req.body.count));

    return res.status(200).json({ info: `updated user`, db_user });
  } catch (e) {
    return res.status(500).json({ info: "err in updateCount post" });
  }
});

export default updateCountRouter;
