import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { differenceInDays } from "date-fns";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { getProductByIdCarApi } from "../../api/product-api/getAllProductApi";
import { makeABookingApi } from "../../api/booking-api/bookingApi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const MakeABooking = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    startdatetime: "",
    enddatetime: "",
    paymentmethod: "",
  });
  const { idCar } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState("");
  const [numOfDays, setNumOfDays] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getCarByIdCar = async (idCar) => {
    try {
      const data = await getProductByIdCarApi(idCar);
      setCar(data.result);
    } catch (error) {
      setError(error); // Handle the error if the API call fails
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (idCar, data) => {
    makeABookingApi(idCar, data, localStorage.getItem("authToken")).then(response => {
      if(response?.result?.idbooking !== undefined)
      {
        navigate(`/checkout/booking/${response?.result?.idbooking}`)
      }
    });
    };

  useEffect(() => {
    setNumOfDays(differenceInDays(data.enddatetime, data.startdatetime));
  }, [data.enddatetime, data.startdatetime]);
  useEffect(() => {
    getCarByIdCar(idCar);
  }, []);
  return (
    <div className="container mt-5">
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last d-flex flex-column">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted">{car?.name}</small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Brand</h6>
                <small className="text-muted">{car?.brand}</small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Num of days</h6>
                <small className="text-muted">{numOfDays} days</small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Deposite</h6>
                <small className="text-muted">{car?.deposite}$</small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Base price</h6>
                <small className="text-muted">{car?.baseprice}$</small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Payment method</h6>
                <small className="text-muted">{data.paymentmethod}</small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="">
                <h6 className="my-0">Total</h6>
              </div>
              <span className="">
                {numOfDays * car?.baseprice + car?.deposite}$
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between text-success">
              <span>Advance payment</span>
              <strong>{car?.deposite}$</strong>
            </li>
          </ul>

          <button type="submit" className="btn btn-dark" onClick={handleShow}>
            Confirm
          </button>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing information</h4>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="startdatetime" className="form-label">
                  Start date time
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="startdatetime"
                  placeholder=""
                  name="startdatetime"
                  value={data.startdatetime}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="enddatetime" className="form-label">
                  End date time
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="enddatetime"
                  name="enddatetime"
                  placeholder=""
                  value={data.enddatetime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input
                  id="wallet"
                  name="paymentmethod"
                  type="radio"
                  value="My wallet"
                  className="form-check-input"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="wallet">
                  Wallet
                </label>
              </div>
              <div className="form-check">
                <input
                  id="bank-transfer"
                  name="paymentmethod"
                  type="radio"
                  value="Bank transfer"
                  className="form-check-input"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="bank-transfer">
                  Bank transfer
                </label>
              </div>
              <div className="form-check">
                <input
                  id="cash"
                  name="paymentmethod"
                  type="radio"
                  value="Cash"
                  className="form-check-input"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="cash">
                  Cash
                </label>
              </div>
            </div>
            <ProductDetails idCar={idCar} />
            <hr className="my-4" />
          </form>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are already booking this car!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit(idCar,data)} className="btn btn-dark">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
