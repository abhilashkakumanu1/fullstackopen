import axios from "axios";

const url = `http://localhost:3001/persons`;

const getAll = () => {
  return axios.get(url).then((res) => res.data);
};

const create = (newObject) => {
  return axios.post(url, newObject).then((res) => res.data);
};

const deletePerson = (id) => {
  return axios.delete(`${url}/${id}`);
};

const update = (id, newObject) => {
  return axios.put(`${url}/${id}`, newObject).then((res) => res.data);
};
const services = {
  getAll,
  create,
  deletePerson,
  update,
};

export default services;
