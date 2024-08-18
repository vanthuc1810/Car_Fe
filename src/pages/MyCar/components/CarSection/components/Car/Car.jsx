import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { stopCarApi } from "../../../../../../api/car-api/stopCarApi";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const Car = ({ car }) => {
  const [status, setStatus] = useState(car.status);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleStopCar = (idCar) => {
    stopCarApi(idCar).then((res) => {
      setStatus(res.result.status);
    });
  };

  useEffect(() => {}, [car]);
  return (
    <div className="row">
      <div className="product-img col-6">
        <Tilt transitionSpeed={1500} tiltEnable={false} scale={1.15}>
          <img src={car?.images} />
        </Tilt>
      </div>
      <div className="col-6 py-4 my-4 d-flex align-items-center">
        <div className="content flex-grow-1">
          <div className="row decription">
            <h3>Name: {car?.name}</h3>
            <h6>Descripton: {car?.descripton}</h6>
            <h6>Deposite: ${car?.deposite}</h6>
            <h6>Base price: ${car?.baseprice}</h6>
          </div>
          <div className="row btn-container d-flex mt-2">
            {status == "Available" && (
              <div className="col-5 text-center flex-grow-1">
                <button
                  className="btn btn-danger w-100"
                  onClick={handleShow}
                >
                  Stop car
                </button>
              </div>
            )}

            <div className="col-5 text-center flex-grow-1">
              <Link
                className="btn btn-dark w-100"
                to={`/product-details/${car?.idcar}`}
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm stop Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleStopCar(car?.idcar)} className="btn btn-dark">
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
