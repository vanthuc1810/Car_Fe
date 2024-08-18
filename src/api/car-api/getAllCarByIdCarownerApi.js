import axios from "axios";
import toast from "react-hot-toast";
export const getAllCarByIdCarownerApi = async () => await axios.get(`${process.env.REACT_APP_API_URL}/stoprentingcar/getlistcarbyidcarowner`,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        'Content-Type': 'application/json'
    }
})
.then(response => response.data)
.catch(error => toast.error(error.response.data.message));