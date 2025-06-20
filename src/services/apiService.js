import axios from "../utils/axiosCustomize";

const postCreateNewUser = async (email, password, username, role, image) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("username", username);
  formData.append("role", role);
  formData.append("userImage", image);

  return axios.post(`api/v1/participant`, formData);
};

const getAllUsers = async () => {
  return axios.get(`api/v1/participant/all`);
};

const putUpdateUser = async (id, username, role, image) => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("username", username);
  formData.append("role", role);
  formData.append("userImage", image);

  return axios.put(`api/v1/participant`, formData);
};

const deleteDeleteUser = async (id) => {
  return axios.delete(`/api/v1/participant`, { data: { id: id } });
};

const getUsersWithPaginate = async (page, limit) => {
  return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = async (email, password) => {
  return axios.post(`api/v1/login`, { email: email, password: password });
};

const postRegister = async (email, password, username) => {
  return axios.post(`api/v1/register`, {
    email: email,
    password: password,
    username: username,
  });
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteDeleteUser,
  getUsersWithPaginate,
  postLogin,
  postRegister,
};
