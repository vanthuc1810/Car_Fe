import { useEffect, useState } from "react";
import { CartListing } from "./CartListing/CartListing";
import { getListBookingByIdUser } from "../../api/booking-api/getListBookingByIdUser";
import { getMyInfo } from "../../api/user-api/getUserApi";
import { getListBookingByIdCarOwner } from "../../api/booking-api/getListBookingByIdCarOwner";
export const Cart = () => {
  const [listBooking, setListBooking] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getMyInfo(localStorage.getItem("authToken")).then(res => setUser(res.result));
  },[])

  useEffect(() => {
    if(user){
      if(user?.role == "CUSTOMER")
      {
        getListBookingByIdUser(localStorage.getItem("authToken")).then((res) =>
          setListBooking(res.result.sort().reverse())
        );
      }
      if(user?.role == "CAROWNER")
        {
          getListBookingByIdCarOwner().then((res) =>
            setListBooking(res.result.sort().reverse())
        );
        }
    }
  }, [user]);
  return (
    <div className="container">
      <h1 className="page-heading">My booking</h1>
      <div className="cart-container">
        <CartListing listBooking={listBooking}/>
      </div>
    </div>
  );
};
