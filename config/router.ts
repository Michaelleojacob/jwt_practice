import { Application } from "express";
import landingpageRouter from "../routes/landingpage";
import loginRouter from "../routes/login";
import protectedRouter from "../routes/protected";

const routerConfig = (app: Application) => {
  app.use("/", landingpageRouter);
  app.use("/login", loginRouter);
  app.use("/prot", protectedRouter);
};

export default routerConfig;
