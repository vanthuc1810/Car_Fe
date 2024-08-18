import { Link } from "react-router-dom";
import "./CarSection.scss";
import Tilt from "react-parallax-tilt";
import { stopCarApi } from "../../../../api/car-api/stopCarApi";
import { Car } from "./components/Car/Car";
export const CarSection = ({ listCar }) => {
  const handleStopCar = (idCar) => {
    stopCarApi(idCar);
  };

  return (
    <div className="product-card-container container">
      {listCar?.map((car, index) => (
        <Car car={car} key={index}/>
      ))}
    </div>
  );
};
