import express from "express";
import * as authRepository from "../data/auth0428.mjs";

//회원가입 함수
export async function signUp(req, res, next) {
  const { userid, password, name, email } = req.body;
  const user = await authRepository.signUp(userid, password, name, email);
  if (user) {
    res
      .status(200)
      .json({ message: `${user.userid}님, 회원가입 축하드립니다.` });
  }
}
