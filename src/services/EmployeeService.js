import http from "../http-common";


const getAll = () => {
  return http.get("employees/");
};

const authorize = (data) => {
  return http.post("/authenticate", data);
};

const get = (id) => {
  return http.get(`employees/${id}`);
};

const create = (data) => {
  console.log(data);
  return http.post("employees/", data);
};

const update = (id, data) => {
  return http.put(`employees/${id}`, data);
};

const remove = (id) => {
  return http.delete(`employees/${id}`);
};

const removeAll = () => {
  return http.delete(`employees/`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  authorize,
};
