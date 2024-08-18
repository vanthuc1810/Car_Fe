import axios from "axios";
import toast from "react-hot-toast";
export const postEmailApi = async (data) => await axios.post(`${process.env.REACT_APP_API_URL}/resetpassword`,data)
.then(res => res.data)
.catch(error => toast.error(error.response.data.message));