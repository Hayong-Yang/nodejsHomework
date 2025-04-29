import express from "express";
import * as postRepository from "../data/post0428.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 게시판 html로 이동하는 함수
export async function showPostList(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/postsList_042825.html"));
}

// 게시판이 열리면 게시물을 보여주는 기능
export async function loadAllPost(req, res, next) {
  res.status(200).json(postRepository.posts);
}

// userid에 맞는 게시물만 보여주는 함수
export async function showPostByID(req, res, next) {
  const { userid } = req.body;
  const post = await postRepository.findPostByID(userid);
  if (post.length > 0) {
    res.status(200).json(post); // 결과배열
  } else {
    res.status(404).json({ message: `${userid}의 게시물이 없습니다.` });
  }
}

// 새 게시물 작성하는 페이지로 이동
export async function toNewPost(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/newPost_042825.html"));
}

// 게시물 작성하는 함수
export async function writePost(req, res, next) {
  const { name, userid, text } = req.body;
  const post = await postRepository.writeNewPost(name, userid, text);
  if (post) {
    res.status(201).json({ message: `게시글 작성을 완료하셨습니다.` });
  } else {
    res.status(406).json({ message: `게시글 작성에 실패하셨습니다.` });
  }
}
