import express from "express";
import * as postController from "../controller/post.0428.mjs";

const router = express.Router();

// get: 게시판 보여주기
//http://127.0.0.1:8080/posts
router.get("/", postController.showPostList);

// get: 게시판 페이지 로딩되면 전체 게시물 보여주기
// http://127.0.0.1:8080/posts/load
router.get("/load", postController.loadAllPost);

// post: 내가 쓴 게시물 보기
//http://127.0.0.1:8080/posts:userid
router.post("/:userid", postController.showPostByID);

// get: 게시물 작성하는 페이지로 이동
//http://127.0.0.1:8080/posts/newPost
router.get("/newPost", postController.toNewPost);

// post: 글 작성하기
//http://127.0.0.1:8080/posts
router.post("/", postController.writePost);

// put: 글 수정하기

// delete: 글 삭제하기

export default router;
