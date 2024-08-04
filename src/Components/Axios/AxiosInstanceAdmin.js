import axios from "axios";
import { toast } from "react-toastify";

const AxiosInstance = axios.create({
  baseURL: "https://coffeemanagementbackend-bgdjbpgmc8e0b4ec.eastus-01.azurewebsites.net/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.response);
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      toast.warn("Unautorized please login");
      
      setTimeout(() => {
        window.location.href = "/EmployeeLogin";
    }, 1500);
    error.isHandled = true;
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;