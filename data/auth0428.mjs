//회원 데이터

let users = [
  {
    id: "0",
    userid: "master",
    password: "12345678",
    name: "master",
    email: "master@master.com",
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
  return users;
}
