import axios from "axios";
import toast from "react-hot-toast";
export const searchProductApi = async (data) => await axios.post(`${process.env.REACT_APP_API_URL}/searchCar/thucApi`,data)
.then(res => res.data)
.catch(error => toast.error(error.response.data.message));