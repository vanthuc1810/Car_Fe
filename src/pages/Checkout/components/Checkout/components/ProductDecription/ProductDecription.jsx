import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ProductDecription.scss";
import { useEffect, useState } from "react";
import {
  paidDepositeApi,
  confirmPickUpApi,
  cancleBookingApi,
  returnCarApi,
} from "../../../../../../api/booking-api/bookingApi";
import { getCarByIdCarApi } from "../../../../../../api/car-api/getCarByIdBookingApi";
import { bankTransferApi } from "../../../../../../api/booking-api/bankTransferApi";
export const ProductDecription = ({ booking, updateBooking }) => {
  const [isPendingDeposit, setIsPendingDeposit] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isPendingPayment, setIsPendingPayment] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [show, setShow] = useState(false);

  const [car, setCar] = useState(null);

  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCancle = () => {
    cancleBookingApi(booking.idbooking, localStorage.getItem("authToken")).then(
      (response) => updateBooking(response.result)
    );
  };
  const handlePickUp = () => {
    confirmPickUpApi(booking.idbooking, localStorage.getItem("authToken")).then(
      (response) => updateBooking(response.result)
    );
  };
  const handleReturnCar = () => {
    returnCarApi(booking.idbooking, localStorage.getItem("authToken")).then(
      (response) => updateBooking(response.result)
    );
  };
  const handlePayDeposite = () => {
    if (booking.paymentmethod == "My wallet") {
      paidDepositeApi(
        booking.idbooking,
        localStorage.getItem("authToken")
      ).then((response) => updateBooking(response.result));
    }
    if (booking.paymentmethod == "Bank transfer") {
      bankTransferApi(
        booking.idbooking,
        localStorage.getItem("authToken")
      ).then((response) => window.location.href = response);
    }
  };
  useEffect(() => {
    if (booking?.status == "Pending Deposit") {
      setIsPendingDeposit(true);
    }
    if (booking?.status == "Confirmed") {
      setIsConfirmed(true);
      setIsPendingDeposit(false);
    }
    if (booking?.status == "Pending Payment") {
      setIsPendingPayment(true);
      setIsInProgress(false);
    }
    if (booking?.status == "Completed") {
      setIsComplete(true);
      setIsInProgress(false);
    }
    if (booking?.status == "In - Progress") {
      setIsInProgress(true);
      setIsConfirmed(false);
    }
    if (booking?.status == "Cancelled") {
      setIsCancelled(true);
      setIsConfirmed(false);
    }
  }, [booking]);
  useEffect(() => {
    if (booking) {
      getCarByIdCarApi(
        booking?.carIdcar,
        localStorage.getItem("authToken")
      ).then((response) => {
        setCar(response.result);
        console.log("setCar");
      });
    }
  }, [booking]);

  return (
    <div className="product-details-description">
      <h1 className="product-name">{car?.name}</h1>
      <div className="product-price-container">
        <p className="product-discount-price text-success">
          Deposite: ${car?.deposite}
        </p>
      </div>
      <p className="description-container">
        <span>Description</span>: {car?.descripton}
      </p>
      <span className="gender-container">
        <span>Brand</span>: {car?.brand}
      </span>
      <span className="gender-container">
        <span>Production years</span>: {car?.productionyears}
      </span>
      <span className="gender-container">
        <span>Fueltype</span>: {car?.fueltype}
      </span>
      <p className="size-container">
        <span>Color</span>: {car?.color}
      </p>
      <h5 className="text-success">Status: {booking?.status} </h5>
      {isPendingDeposit && (
        <div className="product-card-buttons-container mt-2">
          <button className="add-to-cart-btn" onClick={handlePayDeposite}>
            Pay deposite
          </button>
        </div>
      )}
      {isCancelled ||
        (isComplete && (
          <div className="product-card-buttons-container mt-2">
            <button className="add-to-cart-btn" onClick={() => navigate("/")}>
              Back
            </button>
          </div>
        ))}
      {isInProgress && (
        <div className="product-card-buttons-container mt-2">
          <button className="add-to-cart-btn" onClick={handleReturnCar}>
            Return car
          </button>
        </div>
      )}
      {isPendingPayment && (
        <div className="product-card-buttons-container mt-2">
          <button className="add-to-cart-btn" onClick={handleReturnCar}>
            Pay
          </button>
        </div>
      )}
      {isConfirmed && (
        <div className="product-card-buttons-container mt-2">
          <div className="row justify-content-between">
            <button className="col-5 btn btn-danger p-3" onClick={handleCancle}>
              Cancle
            </button>
            <button className="col-5 btn btn-dark p-3" onClick={handlePickUp}>
              Confirm pick up
            </button>
          </div>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are already booking this car!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handlePickUp}
            className="btn btn-dark"
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
