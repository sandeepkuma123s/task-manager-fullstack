import axios from "axios";

const API = "https://task-manager-fullstack-t4ou.onrender.com/api/tasks";

const getConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getTasks = async () => {
  const response = await axios.get(API, getConfig());
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(API, taskData, getConfig());
  return response.data;
};

export const updateTask = async (id, taskData) => {
  const response = await axios.put(
    `${API}/${id}`,
    taskData,
    getConfig()
  );
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(
    `${API}/${id}`,
    getConfig()
  );
  return response.data;
};