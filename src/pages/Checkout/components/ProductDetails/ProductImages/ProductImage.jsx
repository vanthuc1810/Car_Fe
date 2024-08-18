import Tilt from "react-parallax-tilt";
import "./ProductImage.scss";

export const ProductImage = ({car}) =>{
    return (
        <Tilt
        tiltEnable={false}
        transitionSpeed={1000}
        className="product-details-image"
        >
            <img src={car?.images}  className="image-car" style={{width: "40vw", margin: "0" }}/>
        </Tilt>
    );
}