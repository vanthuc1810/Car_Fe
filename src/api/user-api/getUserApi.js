import axios from "axios";

export const getMyInfo = async (token) => await axios.get(`${process.env.REACT_APP_API_URL}/user/myInfo`,{
    headers:{
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}).then(response => response.data)