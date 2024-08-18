import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./ProductDecription.scss";

export const ProductDecription = ({ car }) => {
  return (
    <div className="product-details-description">
      <h1 className="product-name">{car?.name}</h1>
      <div className="product-price-container">
        <p className="product-original-price">Base price: ${car?.baseprice} </p>
        <p className="product-discount-price">Deposite: ${car?.deposite}</p>
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

      <div className="tags">
        <span className="out-of-stock">In Stock </span>
        <span className="trending">Trending</span>
      </div>

      <div className="product-card-buttons-container">
        <Link to={`/checkout/${car?.idcar}`} className="add-to-cart-btn">
          Rent now!
        </Link>
      </div>
    </div>
  );
};
