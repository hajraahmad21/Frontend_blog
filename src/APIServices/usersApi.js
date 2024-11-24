import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const loginAPI = async (values) => {
  const response = await axios.post(`${baseUrl}/users/login`, values, {
    withCredentials: true,
  }); // we are setting withCredentials to true to add cookies in the browser
  return response.data;
};

export const registerAPI = async (values) => {
  const response = await axios.post(`${baseUrl}/users/register`, values, {
    withCredentials: true,
  });
  return response.data;
};

export const checkAuthStatus = async () => {
  const response = await axios.get(`${baseUrl}/users/checkauthenticated`, {
    withCredentials: true,
  });
  return response.data;
};
export const logoutAPI = async () => {
  const response = await axios.get(`${baseUrl}/users/logout`, {
    withCredentials: true,
  });
  return response.data;
};
