import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://admin.midvalleycollege.com/api",
});
export default axiosInstance;
