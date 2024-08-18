import { getListBookingByIdCarOwner } from "../../api/booking-api/getListBookingByIdCarOwner";
import { CartListing } from "../Cart/CartListing/CartListing";
export const ListBookingCarOwner = () => {
    const [listBooking, setListBooking] = useState([]);

    useEffect(() => {
      getListBookingByIdCarOwner().then((res) =>
        setListBooking(res.result)
      );
    }, []);
  return (
    <div className="container">
      <h1 className="page-heading">My booking</h1>
      <div className="cart-container">
        <CartListing listBooking={listBooking} />
      </div>
    </div>
  );
};
