import axios from "axios";
import toast from "react-hot-toast";
export const getListBookingByIdUser = async (token) => await axios.get(`${process.env.REACT_APP_API_URL}/getbooking/user`,{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}).then(response => response.data)
.catch(error => toast.error(error.response.data.message));