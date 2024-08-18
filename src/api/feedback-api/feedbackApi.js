import axios from "axios";
import toast from "react-hot-toast";
export const ratetingApi = async (idbooking, data) => await axios.post(`${process.env.REACT_APP_API_URL}/add_feedback/thucApi/${idbooking}`,data,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    toast.success("Rating success!");
    return response.data;
})
.catch(error => toast.error(error.response.data.message));

export const getFeedbackReport = async () => await axios.get(`${process.env.REACT_APP_API_URL}/viewFeedbackReport/thucApi`,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    return response.data;
})
.catch(error => toast.error(error.response.data.message));