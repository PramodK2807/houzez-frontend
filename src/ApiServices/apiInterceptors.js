import axios from "axios";

const errorCallBack = (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    //toast.error("an unexpected error occured");
  }
  return Promise.reject(error);
};
axios.defaults.headers.common["x-auth-token-user"] =
  localStorage.getItem("houzez-token");
axios.interceptors.request.use(async (req) => {
  req.headers["x-auth-token-user"] = await localStorage.getItem("houzez-token");
  return req;
});
//intercept errors while communicating with backend server
axios.interceptors.response.use(null, errorCallBack);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
