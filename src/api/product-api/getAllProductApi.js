import axios from 'axios';

export const getAllProductApi = async () => await axios.get(`${process.env.REACT_APP_API_URL}/getlistcar`).then(response => response.data);
export const getProductByIdCarApi = async (idCar) => await axios.get(`${process.env.REACT_APP_API_URL}/getcar/${idCar}`).then(response => response.data);
