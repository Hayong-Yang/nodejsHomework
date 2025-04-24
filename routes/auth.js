const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원정보 조회
 *     responses:
 *       200:
 *         description: 회원정보 조회 성공 응답
 * /users/signup:
 *   post:
 *     summary: 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 성공
 * /users/login:
 *   post:
 *     summary: 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: 로그인 성공
 * /users/user:
 *   put:
 *     summary: 회원정보 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 성공
 *   delete:
 *     summary: 회원 탈퇴
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원탈퇴 완료
 */

//API
router.get("/", (req, res) => {
  res.status(200).send("GET: 회원 정보 조회");
});

router.post("/signup", (req, res) => {
  const { userid, password, email, name, phone } = req.body;
  res.status(201);
  // console.log("아이디:", userid);
  // console.log("비밀번호:", password);
  // console.log("이메일:", email);
  // console.log("이름:", name);
  // console.log("전화번호:", phone);
  res.send(
    `아이디: ${userid}, 비밀번호: ${password}, 이메일: ${email}, 이름: ${name}, 전화번호: ${phone}`
  );
});

router.post("/login", (req, res) => {
  const { userid, password } = req.body;
  res.status(201);
  // console.log("아이디:", userid);
  // console.log("비밀번호:", password);
  res.send(`아이디: ${userid}, 비밀번호: ${password}}`);
});

router.put("/user", (req, res) => {
  const { userid, email, name, phone } = req.body;
  res.status(201);
  // console.log("아이디:", userid);
  // console.log("이메일:", email);
  // console.log("이름:", name);
  // console.log("전화번호:", phone);
  res.send(
    `아이디: ${userid}, 이메일: ${email}, 이름: ${name}, 전화번호: ${phone}`
  );
});

router.delete("/user", (req, res) => {
  const { userid } = req.body;
  res.status(201);
  // console.log("아이디:", userid);
  res.send(`아이디: ${userid}`);
});

module.exports = router;
