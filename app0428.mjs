import express from "express";
import authRouter from "./routes/auth0428.mjs";
import postRouter from "./routes/post0428.mjs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { config } from "./config0428.mjs";

const __filename = fileURLToPath(import.meta.url); // 현재 파일 디렉토리
const __dirname = path.dirname(__filename); // 파일명 없앤 디렉토리만 저장
const app = express();
app.use(express.json());

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// 동적 라우터 등록
// http://127.0.0.1:8080/auth  fetch로 /auth/login 등으로 접속해야 동적기능 구현 가능
app.use("/auth", authRouter);
// http://127.0.0.1:8080/posts
app.use("/posts", postRouter);

// 루트 접속시 메인화면.
// http://127.0.0.1:8080/ 만 입력했을때 나오는 화면 지정
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/main_042825.html")); // sendFile은 절대경로를 주어야 함.
});

app.listen(8080, () => {
  console.log("서버 실행 중..");
});
