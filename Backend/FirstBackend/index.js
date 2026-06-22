import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRouter from "./routers/auth.route.js";
import publicRouter from "./routers/public.route.js";

const app = express();

app.use("/auth", authRouter);
app.use("/public", publicRouter);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend project" });
});

app.listen(port, () => {
  console.log("Server Started on port", port);
});
