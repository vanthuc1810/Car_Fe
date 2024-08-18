import { CartItem } from "./CartItem/CartItem";

export const CartListing = ({ listBooking }) => {
  return (
    <div className="cart-products-container row">
      {listBooking?.map((booking) => (
        <CartItem booking={booking} />
      ))}
    </div>
  );
};
