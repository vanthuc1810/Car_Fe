import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Login } from "../pages/Login/Login";
import {Signup} from "../pages/Signup/Signup";
import { ProductListing } from "../pages/ProductListing/ProductListing";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { MakeABooking } from "../pages/Checkout/MakeBooking";
import { Checkout } from "../pages/Checkout/components/Checkout/Checkout";
import { ReturnUrl } from "../pages/Checkout/components/Checkout/components/ReturnUrl/ReturnUrl";
import { Profile } from "../pages/Profile/Profile";
import { Forgot } from "../pages/Forgot/Forgot";
import { ResetPassword } from "../pages/Forgot/ResetPasword/ResetPassword";
import { MyCar } from "../pages/MyCar/MyCar";
import { AddCar } from "../pages/AddCar/AddCar";

export const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/cart" element = {<Cart/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/signup" element = {<Signup/>} />
            <Route path="/product-listing" element={<ProductListing/>}/>
            <Route path="/product-details/:idCar" element={<ProductDetails/>}/>
            <Route path="/checkout/:idCar" element={<MakeABooking/>}/>
            <Route path="/checkout/booking/:idbooking" element={<Checkout/>}/>
            <Route path="/returnurl" element={<ReturnUrl/>}/>
            <Route path="/myInfo" element = {<Profile/>} />
            <Route path="/forgot" element={<Forgot/>} />
            <Route path="/resetpassword/:email" element={<ResetPassword/>}/>
            <Route path="/myCar" element={<MyCar/>} />
            <Route path="/addCar" element={<AddCar/>} />
        </Routes>
    );
}