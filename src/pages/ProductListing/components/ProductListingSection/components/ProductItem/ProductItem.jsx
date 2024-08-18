import Tilt from "react-parallax-tilt";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import "./ProductItem.scss";
import toast from "react-hot-toast";
import { getAllProductApi } from "../../../../../../api/product-api/getAllProductApi";

export const ProductItem = ({car}) => {
  const navigate = useNavigate();
  return (
    <Tilt 
    transitionSpeed={2000} 
    tiltEnable={false}
    >
      <div className="product-card p-2">
        <Link to={`/product-details/${car.idcar}`}>
          <div className="product-card-image">
            <Tilt
            transitionSpeed={1500}
            tiltEnable={false}
            scale={1.15}
            >
            <img src={car.images} />
            </Tilt>
          </div>
        </Link>
        <div className="product-card-details">
          <h4>{car.name}</h4>
          <div className="price-container">
            <p className="discount-price">Base price: ${car.baseprice}</p>
            <p className="original-price">Deposite: ${car.deposite}</p>
          </div>
          <p>Brand: {car.brand}</p>
          <div className="info">
            <p className="out-of-stock">Out of stock</p>
            <p className="trending">Trending</p>
          </div>
        </div>
        <div className="product-card-buttons">
          <button
            className="cart-btn"
            onClick={() => navigate(`/product-details/${car.idcar}`)}
          >
            Rent Now!
          </button>
        </div>
      </div>
    </Tilt>
  );
};
