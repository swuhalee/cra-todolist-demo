import api from "../utils/api";

export const getTaskApi = async () => {
  const response = await api.get("/tasks");
  return response;
};

export const addTaskApi = async (title, description) => {
  const response = await api.post("/tasks", { title, description });
  return response;
};

export const updateTaskApi = async (id, completed) => {
  const response = await api.put(`/tasks/${id}`, { completed });
  return response;
};

export const deleteTaskApi = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response;
};
