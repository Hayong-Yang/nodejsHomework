// 게시판 데이터

export let posts = [
  {
    id: "0",
    name: "master",
    userid: "master",
    text: "master의 디폴트 게시물입니다.",
    createdAt: Date.now().toString(),
    url: "x",
  },
  {
    id: "1",
    name: "master",
    userid: "master",
    text: "master가 테스트로 여러 글을 쓰고 있습니다. 조금 알거같으니까 재밌네요.",
    createdAt: Date.now().toString(),
    url: "x",
  },
  {
    id: "2",
    name: "6bim",
    userid: "6bim",
    text: "6bim입니다. 육회비빔밥이 먹고싶어요",
    createdAt: Date.now().toString(),
    url: "x",
  },
  {
    id: "3",
    name: "master",
    userid: "master",
    text: "master글만 불러오도록 테스트 해볼려구요.",
    createdAt: Date.now().toString(),
    url: "x",
  },
  {
    id: "5",
    name: "6bim",
    userid: "6bim",
    text: "6bim입니다. 육빔집 인기가 너무 많아요...ㅜㅜ",
    createdAt: Date.now().toString(),
    url: "x",
  },
];

// 회원 userid로 게시물 찾기 기능
export async function findPostByID(userid) {
  return posts.filter((post) => post.userid === userid);
}

// 새로운 게시물 작성 기능
export async function writeNewPost(name, userid, text) {
  const newpost = {
    id: Date.now().toString(),
    userid,
    name,
    text,
    createdAt: Date.now().toString(),
  };
  posts = [newpost, ...posts];
  return posts;
}
