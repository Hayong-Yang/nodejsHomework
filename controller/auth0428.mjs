import express from "express";
import * as authRepository from "../data/auth0428.mjs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//회원가입 페이지 보여주기(GET)
export async function showSignup(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/signUp_042825.html"));
}

//회원가입 처리기능(post)
export async function signUp(req, res, next) {
  const { userid, password, name, email } = req.body;
  const user = await authRepository.signUp(userid, password, name, email);
  if (user) {
    res.status(201).json({ message: `${user.userid}님, 회원가입 성공!` });
  } else {
    res.status(400).json({ message: "회원가입 실패" });
  }
}

// 로그인 페이지 보여주기 (get)
export async function showLogin(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/login_042825.html"));
}

// 로그인 처리기능(post)
export async function loginHandler(req, res, next) {
  const { userid, password } = req.body;
  const user = await authRepository.login(userid, password);
  if (user) {
    res.status(201).json({ message: `${user.userid}님이 로그인하셨습니다.` });
  } else {
    res.status(400).json({ message: "로그인 실패" });
  }
}


