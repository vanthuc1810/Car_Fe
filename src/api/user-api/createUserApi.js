import axios from "axios";
import toast from "react-hot-toast";
export const createUserApi = async (data) => await axios.post(`${process.env.REACT_APP_API_URL}/user/create`,data).then(res => res.data).catch(error => toast.error(error.response.data.message));