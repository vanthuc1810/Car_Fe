import { Filter } from "./components/Filter/Filter";
import { ProductListingSection } from "./components/ProductListingSection/ProductListingSection";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductListing.scss";
import { getAllProductApi } from "../../api/product-api/getAllProductApi";
import { useLocation } from "react-router-dom";

export const ProductListing = () => {
  const location = useLocation();
  const {result} = location.state ? location.state : {};

  const [listCar, setListCar] = useState(result);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllProduct = async () => {
    try {
      const data = await getAllProductApi();
      setListCar(data.result);
    } catch (error) {
      setError(error); // Handle the error if the API call fails
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };
  useEffect(() => {
    if(listCar === undefined)
    {
      getAllProduct();
    }        
  }, []);

  return (
    <div className="page-container">
      <Filter className="filters" />
      <ProductListingSection
        className="products-container"
        listCar={listCar?.filter((car) => car.status == "Available")}
      />
    </div>
  );
};
