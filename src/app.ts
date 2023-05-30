import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";

const app: Application = express();

// using cors
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("working successfully");
  next;
});

export default app;
