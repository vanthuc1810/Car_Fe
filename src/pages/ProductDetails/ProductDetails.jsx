import { useParams } from "react-router-dom";
import { ProductDecription } from "./components/ProductDecription/ProductDecription";
import { ProductImage } from "./components/ProductImage/ProductImage";
import { getProductByIdCarApi } from "../../api/product-api/getAllProductApi";
import './ProductDetails.scss';
import { useEffect, useState } from "react";

export const ProductDetails = (props) => {
    const {idCar: urlIdCar} = useParams();  
    const {idCar: propIdCar} = props;
    const idCar = urlIdCar || propIdCar;
    const [car, setCar] = useState(null); 
    const [error, setError] = useState("");

    const getCarByIdCar = async (idCar) => {
        try {
            const data = await getProductByIdCarApi(idCar);
            setCar(data.result);
          } catch (error) {
            setError(error); // Handle the error if the API call fails
          }
    };
    useEffect(() => {
        getCarByIdCar(idCar);
    },[]) 
    return(
        <div className="products-page-container">
            <ProductImage car={car} />
            <ProductDecription car={car}/>
        </div>
    );
}