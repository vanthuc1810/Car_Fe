import { useEffect, useState } from "react";
import { getAllCarByIdCarownerApi } from "../../api/car-api/getAllCarByIdCarownerApi";
import { CarSection } from "./components/CarSection/CarSection";
export const MyCar = () => {
    const [listCar, setListCar] = useState([]);
    
    useEffect(() => {
        getAllCarByIdCarownerApi().then(res => setListCar(res.result));
    },[])

    return (
        <div className="container pt-4">
            <h2>My car</h2>
            <CarSection listCar={listCar}/> 
        </div>
    );
}