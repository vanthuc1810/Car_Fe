import Tilt from "react-parallax-tilt";
import './CartItemImage.scss';
export const CartItemImage = ({car}) => {
    return (
        <Tilt
        tiltEnable={false}
        scale={1.05}
        transitionSpeed={1000}
        className="product-details-image"
        >
            <img src={car?.images} />
        </Tilt>
    );
}