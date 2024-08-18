import axios from "axios";
import toast from "react-hot-toast";
export const getListBookingByIdCarOwner = async () => await axios.get(`${process.env.REACT_APP_API_URL}/getbooking/carowner`,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        'Content-Type': 'application/json'
    }
}).then(response => response.data)
.catch(error => toast.error(error.response.data.message));