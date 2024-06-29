import http from "./httpService";

export function getCategoryApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}

// export function removeProjectApi(id) {
//   return http.delete(`/project/${id}`).then(({ data }) => data.data);
// }
