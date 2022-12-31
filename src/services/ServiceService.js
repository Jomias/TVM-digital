import http from "../api/serviceAxios";

const getAll = () => {
  return http.get(`${http.URL}`);
};

const get = (id) => {
  return http.get(`${http.URL}/${id}`);
};

const create = (data) => {
  return http.post(`${http.URL}`, data);
};

const update = (id, data) => {
  return http.put(`${http.URL}/${id}`, data);
};

const remove = (id) => {
  return http.delete(`${http.URL}/${id}`);
};

const removeAll = () => {
  return http.delete(`${http.URL}`);
};

const findByName = (name) => {
  return http.get(`${http.URL}?name=${name}`);
};

const ServiceService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default ServiceService;