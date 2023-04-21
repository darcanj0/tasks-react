import axios from "axios";
import { AppPaths } from "../types/app.paths";

export const Api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem(AppPaths.APP_TOKEN)}`,
    "Content-Type": "application/json",
  },
});
