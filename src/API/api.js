import * as axios from "axios";
import { unfollow } from "../Redux/users-reduser";

//const baseUrl = "https://social-network.samuraijs.com/api/1.0";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "5772b158-0a03-4b5b-b874-a53013c29b2d",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(userTd) {
    return instance.delete(`follow/${userTd}`).then;
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  getHeaders() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
