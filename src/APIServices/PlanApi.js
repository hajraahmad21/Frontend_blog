  import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const createPlanApi = async (PlanData) => {
  const response = await axios.post(
    `${baseUrl}/plans/create`,
     PlanData,
    { withCredentials: true },
  );
  return response.data;
};
export const fetchAllPlans = async () => {
  const response = await axios.get(`${baseUrl}/plans`, {
    withCredentials: true,
  });
  return response.data;
};

export const getPlanApi = async (id) => {
  const response = await axios.get(`${baseUrl}/Plans/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const updatePlanApi = async (id, planData) => {
  const response = await axios.put(
    `${baseUrl}/Plans/${id}`,
    { ...planData },
    { withCredentials: true },
  );
  return response.data;
};

export const deletePlanApi = async (id) => {
  const response = await axios.delete(`${baseUrl}/plans/${id}`, {
    withCredentials: true,
  });
  return response.data;
};
