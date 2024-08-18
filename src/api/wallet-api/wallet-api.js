import axios from "axios";
import toast from "react-hot-toast";
export const topUpApi = async (data, token) => await axios.post(`${process.env.REACT_APP_API_URL}/viewWallet/topup`,data,{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(res => res.data)
.catch(error => toast.error(error.response.data.message));

export const withDrawApi = async (data, token) => await axios.post(`${process.env.REACT_APP_API_URL}/viewWallet/withdraw`,data,{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(res => res.data)
.catch(error => toast.error(error.response.data.message));

export const getWalletDetails = async () => await axios.get(`${process.env.REACT_APP_API_URL}/viewWallet`,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        'Content-Type': 'application/json'
    }
})
.then(res => res.data)
.catch(error => toast.error(error.response.data.message));