import axios from "axios";

const url = "https://api.homologation.cliqdrive.com.br";
const api = axios.create({ baseURL: url });

api.interceptors.request.use((config) => {
  const tokenAccess = localStorage.getItem("access");
  config.headers["Content-Type"] = "application/json";
  config.headers.Accept = "application/json;version=v1_web";
  config.headers.Authorization = tokenAccess ? `Bearer ${tokenAccess}` : "";

  return config;
});
export default api;