import Tilt from "react-parallax-tilt";
import "./ProductImage.scss";
import { useEffect, useState } from "react";
import { getCarByIdCarApi } from "../../../../../../api/car-api/getCarByIdBookingApi";
export const ProductImage = ({booking}) =>{
    const [car, setCar] = useState(null);
    useEffect(() => {
        if(booking){
          getCarByIdCarApi(booking?.carIdcar, localStorage.getItem('authToken')).then(response => {
            setCar(response.result);
            console.log("setCar");  
          });
        }
    },[booking])  
    return (
        <Tilt
        tiltEnable={false}
        scale={1.05}
        transitionSpeed={1000}
        className="product-details-image"
        >
            <img src={car?.images} />
        </Tilt>
    );
}