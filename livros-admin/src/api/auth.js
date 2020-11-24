import { client } from "./client";

export const login = (userId, password) => {
  return client.post("/admin/auth", { userId, password })
};