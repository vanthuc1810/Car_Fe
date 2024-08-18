import axios from "axios";
import toast from "react-hot-toast";
export const makeABookingApi = async (idCar,data, token) => await axios.post(`${process.env.REACT_APP_API_URL}/makeABooking/${idCar}`,data,{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    toast.success("Tạo hóa đơn thành công!");
    return response.data;
})
.catch(error => toast.error(error.response.data.message));

export const paidDepositeApi = async (idbooking, token) => await axios.post(`${process.env.REACT_APP_API_URL}/paidDeposid/${idbooking}`,{},{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    toast.success("Thanh toán cọc thành công!");
    return response.data;
})
.catch(error => toast.error(error.response.data.message));

export const confirmPickUpApi = async (idbooking, token) => await axios.post(`${process.env.REACT_APP_API_URL}/confirmpickup/${idbooking}`,{},{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    toast.success("Xác nhận lấy xe thành công!");
    return response.data;
})
.catch(error => toast.error(error.response.data.message));

export const cancleBookingApi = async (idbooking, token) => await axios.post(`${process.env.REACT_APP_API_URL}/cancelbooking/${idbooking}`,{},{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    toast.success("Hủy hóa đơn thành công!");
    return response.data;
})
.catch(error => toast.error(error.response.data.message));

export const returnCarApi = async (idbooking, token) => await axios.post(`${process.env.REACT_APP_API_URL}/returncar/${idbooking}`,{},{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    toast.success("Thanh toán thành công!");
    return response.data;
})
.catch(error => toast.error(error.response.data.message));


