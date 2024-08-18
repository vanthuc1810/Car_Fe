import axios from "axios";
import toast from "react-hot-toast";
export const stopCarApi = async (idCar) => await axios.post(`${process.env.REACT_APP_API_URL}/stoprentingcar/${idCar}`,{},{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    toast.success("Stop car success!");
    return response.data;
})
.catch(error => toast.error(error.response.data.message));