import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../../../../../api/user-api/getUserApi";
import { confirmDepositApi } from "../../../../../api/booking-api/confirmDepositApi";

export const CartItemDescription = ({ car, booking }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(booking?.status);
  const handleConfirmDeposit = () => {
    confirmDepositApi(booking?.idbooking).then(res => setStatus(res.result.status));
  }

  useEffect(() => {
    getMyInfo(localStorage.getItem("authToken")).then((res) =>
      setUser(res.result)
    );
  }, []);
  const navigate = useNavigate();
  return (
    <div className="product-description d-flex flex-column">
      <div className="content">
        <h3>{car?.name}</h3>
        <h6>Deposite: {car?.deposite} $</h6>
        <h6>Base price: {car?.baseprice} $</h6>
        <h6 className="text-success">Status: {status}</h6>
      </div>
      {user?.role == "CUSTOMER" && (
        <div
          className="button-section btn btn-dark px-4 py-2 mt-2 "
          onClick={() => navigate(`/checkout/booking/${booking?.idbooking}`)}
        >
          View my booking details
        </div>
      )}

      {user?.role == "CAROWNER" &&  status == "Pending Deposit" &&(
        <div
          className="button-section btn btn-dark px-4 py-2 mt-2 "
          onClick={handleConfirmDeposit}
        >
          Confirm deposite
        </div>
      )}
    </div>
  );
};
