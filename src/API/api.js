import * as axios from "axios";

//const baseUrl = "https://social-network.samuraijs.com/api/1.0";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "5772b158-0a03-4b5b-b874-a53013c29b2d",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
};

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance
//     .get(`users?page=${currentPage}&count=${pageSize}`)
//     .then((response) => {
//       return response.data;
//     });
// };

// export const getProfile = (userId) => {
//   return axios.get(baseUrl + `/profile/` + userId).then((response) => {
//     return response.data;
//   });
// };

// export const getProfile = (userId) => {
//   return instance.get(`profile/` + userId).then((response) => {
//     return response.data;
//   });
// };
