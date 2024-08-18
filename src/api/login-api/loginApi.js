import axios from "axios";
import toast from "react-hot-toast";
export const loginApi = async (data) => await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, data)
.then(response => {
    toast.success("Đăng nhập thành công");
    return response.data.result.token;
})
.catch(error => toast.error(error.response.data.message));