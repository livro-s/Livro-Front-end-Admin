import { client } from "./client";

export const login = (userId, password) => {
  return client.post("/admin/auth", { userId, password })
    .then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.accessToken);
    })
    .catch((err) => alert("로그인에 실패하였습니다. 다시 시도해주세요!"));
};