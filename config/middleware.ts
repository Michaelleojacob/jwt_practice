import express, { Application } from "express";
import morgan from "morgan";

const middewareConfig = (app: Application) => {
  app.use(morgan("short"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

export default middewareConfig;
