import axios from "axios";
import { baseUrl } from "../constant";

export const client = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getClientAccessToken = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});