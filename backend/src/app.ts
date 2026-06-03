import express from "express";
import { errorMiddleware } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.use(errorMiddleware);

export default app;
