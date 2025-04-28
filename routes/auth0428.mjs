// 회원가입, 로그인에 관한 기능을 담은 라우터
import express from "express";
import * as authController from "../controller/auth0428.mjs";

const router = express.Router();

// POST http://127.0.0.1:8080/auth/signup
router.post("/signup", authController.signUp);

export default router;
