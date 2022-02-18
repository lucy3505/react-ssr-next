import axios from "axios";

const req = axios.create({
  baseURL: "http://localhost:3003/api",
  timeout: 2500,
});

req.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export const fetchHome = () => req.get("/home");
export const fetchUser = () => req.get("/user");
