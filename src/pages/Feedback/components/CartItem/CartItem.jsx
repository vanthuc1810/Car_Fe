import { useEffect, useState } from "react";
import { CartItemDescription } from "./CartItemDescription/CartItemDescription";
import { CartItemImage } from "./CartItemImage/CartItemImage";
import { getCarByIdCarApi } from "../../../../api/car-api/getCarByIdBookingApi";
import { useNavigate } from "react-router-dom";
import { getBookingByIdApi } from "../../../../api/booking-api/getBookingByIdApi";

export const CartItem = ({ feedback }) => {
  const [car, setCar] = useState(null);
  const [booking, setBooking] = useState(null);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   getCarByIdCarApi(booking.carIdcar, localStorage.getItem("authToken")).then(
  //     (res) => setCar(res.result)
  //   );
  // }, []);

  useEffect(() => {
    getCarByIdCarApi(feedback.bookingCarIdcar, localStorage.getItem("authToken")).then(
      (res) => setCar(res.result)
    );
    getBookingByIdApi(feedback.bookingIdbooking,localStorage.getItem("authToken")).then(
      (res) => setBooking(res.result)
    );
  }, []);
  return (
    <div
      className="cart-product-card d-flex align-items-center "
      key={booking?.idbooking}
    >
      <CartItemImage car={car} />
      <CartItemDescription car={car} booking={booking} feedback={feedback}/>
    </div>
  );
};
