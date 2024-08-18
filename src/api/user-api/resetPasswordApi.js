import axios from "axios";
import toast from "react-hot-toast";
export const resetPasswordApi = async (data) => await axios.put(`${process.env.REACT_APP_API_URL}/user/forgot`,data,{
    headers:{
        'Content-Type': 'application/json'
    }
})
.then(res => res.data)
.catch(error => toast.error(error.response.data.message));
