//회원 데이터

let users = [
  {
    id: "0",
    userid: "master",
    password: "12345678",
    name: "master",
    email: "master@master.com",
  },
  {
    id: "1",
    userid: "6bim",
    password: "12345678",
    name: "6bim",
    email: "6bim@6bim.com",
  },
];

// 회원가입 함수
export async function signUp(userid, password, name, email) {
  const user = {
    id: Date.now().toString(),
    userid,
    password,
    name,
    email,
  };
  users = [user, ...users];
  return user;
}

// 로그인 함수
export async function login(userid, password) {
  const user = users.find((user) => {
    return user.userid === userid && user.password === password;
  });
  return user;
}
