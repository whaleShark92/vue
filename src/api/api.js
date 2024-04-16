// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance

export const getData = () => {
  return axios.get(`http://localhost:8000/person_view/?format=api`)
}

export const postData = (person_id, name, gender, age) => {
  return axios.post(`http://localhost:8000/person_view/?format=api`, { 'person_id': person_id, 'name': name, 'gender': gender, 'age': age })
}
