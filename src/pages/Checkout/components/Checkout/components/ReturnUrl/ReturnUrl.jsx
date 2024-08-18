import { useLocation, useNavigate } from "react-router-dom";
import { confirmReturnUrlApi } from "../../../../../../api/booking-api/bankTransferApi";
import { useEffect } from "react";
import { getProductByIdCarApi } from "../../../../../../api/product-api/getAllProductApi";

export const ReturnUrl = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const vnp_Amount = queryParams.get("vnp_Amount");
  const vnp_BankTranNo = queryParams.get("vnp_BankTranNo");
  const vnp_ResponseCode = queryParams.get("vnp_ResponseCode");
  const vnp_OrderInfo = queryParams.get("vnp_OrderInfo");
  const vnp_PayDate = queryParams.get("vnp_PayDate");
    const navigate = useNavigate();

  return (
    <div
      className="container justify-content-center d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3 bg-dark">
            <h5 className="text-light">{vnp_ResponseCode == "00" ? "Success": "Payment Fail"}</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Bank transfer no:
                <span>{vnp_BankTranNo}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                BookingNo:
                <span>{vnp_OrderInfo}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                PayDate:
                <span>{vnp_PayDate}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>{vnp_Amount / 100}$</strong>
                </span>
              </li>
            </ul>
          </div>
        <button className="btn btn-dark w-100 border-0 rounded-0" onClick={() => navigate(`/checkout/booking/${vnp_OrderInfo}`) }>
            <h6>Back to my Booking</h6>
        </button>
        </div>
      </div>
    </div>
  );
};
