import { getClientAccessToken } from "./client";

export const getRentalInfo = (page, date) => {
    return getClientAccessToken.get("/admin/loan?page=" + page + "&date=" + date);
};

export const getDelayInfo = (page, date) => {
    return getClientAccessToken.get("/admin/loan/delay?page=" + page + "&date=" + date);
};

export const deleteBook = (id) => {
    return getClientAccessToken.delete("/admin/loan/" + id);
};