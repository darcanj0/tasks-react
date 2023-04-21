import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("tasks-app-token")}`,
    "Content-Type": "application/json",
  },
});
