// 회원가입, 로그인에 관한 기능을 담은 라우터
import express from "express";
import * as authController from "../controller/auth0428.mjs";

const router = express.Router();

//회원가입 페이지 보여주기
// http://127.0.0.1:8080/auth/signup
router.get("/signup", authController.showSignup);

// 회원가입 처리
// POST http://127.0.0.1:8080/auth/signup
router.post("/signup", authController.signUp);

// 로그인 페이지 보여주기
// GET http://127.0.0.1:8080/auth/login
router.get("/login", authController.showLogin);

// 로그인 처리
// POST http://127.0.0.1:8080/auth/login
router.post("/login", authController.loginHandler);

export default router;
