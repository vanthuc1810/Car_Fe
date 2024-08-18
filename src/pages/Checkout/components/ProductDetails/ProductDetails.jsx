import { useEffect, useState } from "react";
import { getProductByIdCarApi } from "../../../../api/product-api/getAllProductApi";
import { ProductImage } from "./ProductImages/ProductImage";
import { ProductDescription } from "./ProductDescription/ProductDescription";
export const ProductDetails = ({idCar}) => {
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
        <div className="container">
            <div className="col-6">
            <ProductImage car={car} />

            </div>
        </div>
    );
}