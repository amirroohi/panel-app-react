import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// request
// response

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const orginalErrorConfig = err.config;
    if (err.response.status === 401 && !orginalErrorConfig) {
      orginalErrorConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return app(orginalErrorConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
