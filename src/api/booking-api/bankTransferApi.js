import axios from "axios";
import toast from "react-hot-toast";

export const bankTransferApi = async (idbooking, token) => await axios.post(`${process.env.REACT_APP_API_URL}/createbanktransfer/${idbooking}`,{},{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(response => response.data.result)
.catch(error => toast.error(error.response.data.message));

export const confirmReturnUrlApi = async (vnp_ResponseCode,vnp_OrderInfo,token) => await axios.get(`${process.env.REACT_APP_API_URL}/returnurl?vnp_ResponseCode=${vnp_ResponseCode}&vnp_OrderInfo=${vnp_OrderInfo}`,{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}).then(response => response.data)
.catch(error => toast.error(error.response.data.message));
