const express = require("express");
const port = 3000;
const app = express();

// user.js 파일 import
const userRoute = require("./routes/auth.js");

// swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

//미들웨어
app.use(express.json());
app.use("/users", userRoute);
// app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
  console.log(`Swagger 문서 보기: http://localhost:${port}/api-docs`);
});
