import axios from "axios";
import toast from "react-hot-toast";
export const confirmDepositApi = async (idbooking) => await axios.post(`${process.env.REACT_APP_API_URL}/confirmdeposit/${idbooking}`,{},{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    toast.success("Xác nhận thành công!");
    return response.data;
})
.catch(error => toast.error(error.response.data.message));