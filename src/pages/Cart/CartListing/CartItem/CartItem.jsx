import { useEffect, useState } from "react";
import { CartItemDescription } from "./CartItemDescription/CartItemDescription";
import { CartItemImage } from "./CartItemImage/CartItemImage";
import { getCarByIdCarApi } from "../../../../api/car-api/getCarByIdBookingApi";
import { useNavigate } from "react-router-dom";

export const CartItem = ({ booking }) => {
  const [car, setCar] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getCarByIdCarApi(booking.carIdcar, localStorage.getItem("authToken")).then(
      (res) => setCar(res.result)
    );
  }, []);
  return (
    <div className="cart-product-card d-flex align-items-center " key={booking?.idbooking}>
      <CartItemImage car={car} />
      <CartItemDescription car={car} booking={booking} />
    </div>
  );
};
