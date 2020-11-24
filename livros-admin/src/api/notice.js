import { getClientAccessToken } from "./client";

export const addNotice = (title, content) => {
  return getClientAccessToken.post("/admin/notice", { title, content });
};

export const deleteNotice = (id) => {
  return getClientAccessToken.delete("/admin/notice/" + id);
};

export const putNotice = (id, title, content) => {
  return getClientAccessToken.put("/admin/notice/" + id, { title, content });
};

export const getNotice = (page) => {
  return getClientAccessToken.get("/notice?page=" + page);
};

export const detailGetNotice = (id) => {
  return getClientAccessToken.get("/notice/" + id);
};
