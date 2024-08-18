import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductImage } from "./components/ProductImage/ProductImage";
import { ProductDecription } from "./components/ProductDecription/ProductDecription";
import { getBookingByIdApi } from "../../../../api/booking-api/getBookingByIdApi";
import { getCarByIdCarApi } from "../../../../api/car-api/getCarByIdBookingApi";
export const Checkout = () => {
    const {idbooking} = useParams(null);
    let [booking, setBooking] = useState(null);
    const updateBooking = (bookingItem) => {
        setBooking(bookingItem);
    }
    useEffect(() => {
        getBookingByIdApi(idbooking, localStorage.getItem('authToken')).then(response => setBooking(response.result));
    },[])   
    
    return(
        <div className="products-page-container">
            <ProductImage booking= {booking}/>
            <ProductDecription booking= {booking} updateBooking = {updateBooking}/>
        </div>
    );
}