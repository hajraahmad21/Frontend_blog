import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const loginAPI = async (values) => {
  const response = await axios.post(`${baseUrl}/user/login`, values, {
    withCredentials: true,
  }); // we are setting withCredentials to true to add cookies in the browser
  return response.data;
};

export const registerAPI = async (values) => {
  const response = await axios.post(`${baseUrl}/user/register`, values, {
    withCredentials: true,
  });
  return response.data;
};

export const checkAuthStatus = async () => {
  const response = await axios.get(`${baseUrl}/user/checkauthenticated`, {
    withCredentials: true,
  });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await axios.get(`${baseUrl}/user/profile`, {
    withCredentials: true,
  });
  return response.data;
};
export const logoutAPI = async () => {
  const response = await axios.get(`${baseUrl}/user/logout`, {
    withCredentials: true,
  });
  return response.data;
};
