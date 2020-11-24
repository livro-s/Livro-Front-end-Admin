import { client } from "./client";

export const login = (userId, password) => {
  return client.post("/admin/auth", { userId, password })
    .then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.accessToken);
    })
    .catch((err) => console.log(err));
};