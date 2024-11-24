import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const createCategoryApi = async (categoryData) => {
  console.log(categoryData);
  const response = await axios.post(
    `${baseUrl}/categories/create`,
    categoryData,
    { withCredentials: true },
  );
  return response.data;
};
export const fetchAllCategories = async () => {
  const response = await axios.get(`${baseUrl}/categories`, {
    withCredentials: true,
  });
  return response.data;
};

export const getCategoryApi = async (id) => {
  const response = await axios.get(`${baseUrl}/categories/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const updateCategoryApi = async (id, categoryData) => {
  const response = await axios.put(
    `${baseUrl}/categories/${id}`,
    { ...categoryData },
    { withCredentials: true },
  );
  return response.data;
};

export const deleteCategoryApi = async (id) => {
  const response = await axios.delete(`${baseUrl}/categories/${id}`, {
    withCredentials: true,
  });
  return response.data;
};
