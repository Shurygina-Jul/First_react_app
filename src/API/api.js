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
    console.warn("Obsolete method. Please profileAPI object.");
    return profileAPI.getProfile(userId);
  },

  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
