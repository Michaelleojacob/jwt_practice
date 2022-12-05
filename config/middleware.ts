import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

const middewareConfig = (app: Application) => {
  app.use(morgan("short"));
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

export default middewareConfig;
