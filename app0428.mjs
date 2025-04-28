import express from "express";
import authRouter from "./routes/auth0428.mjs";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.listen(8080, () => {
  console.log("서버 실행 중..");
});
