import express from "express";
import middewareConfig from "./config/middleware";
import routerConfig from "./config/router";

const app = express();

middewareConfig(app);
routerConfig(app);

export default app;
