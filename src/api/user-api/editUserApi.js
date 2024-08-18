import axios from "axios";
import toast from "react-hot-toast";
export const editProfile = async (data, token) => await axios.put(`${process.env.REACT_APP_API_URL}/editProfile`,data,{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}).then(res => res.data)
.catch(error => toast.error(error.response.data.message));