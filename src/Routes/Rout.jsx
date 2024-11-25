import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Electronics from "../Pages/Categories/Electronics";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";
import Cart from "../Pages/Cart";
import Jewellery from "../Pages/Categories/Jewellery";
import MensClothing from "../Pages/Categories/Men's Clothing";
import WomensClothing from "../Pages/Categories/Women's Clothing";
import AddressPage from "../Pages/AddressPage";
import Payments from "../Pages/Payments";
import PaymentSuccess from "../Pages/PaymentSuccess";
import Logout from "../Pages/Logout";
import Profile from "../Pages/Profile";

const Rout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/profile" element={<PrivateRoute Component={Profile} />} />
                <Route path="/electronics" element={<PrivateRoute Component={Electronics} />}/>
                <Route path="/jewellery" element={<PrivateRoute Component={Jewellery} />}/>
                <Route path="/men'sclothing" element={<PrivateRoute Component={MensClothing} />}/>
                <Route path="/women'sclothing" element={<PrivateRoute Component={WomensClothing} />}/>
                <Route path="/address" element={<PrivateRoute Component={AddressPage} />}/>
                <Route path="/payments" element={<PrivateRoute Component={Payments} />}/>
                <Route path="/logout" element={<PrivateRoute Component={Logout} />}/>
                <Route path="/payments-success" element={<PrivateRoute Component={PaymentSuccess} />}/>
                <Route path="/" index element={<PrivateRoute Component={Home} />} />
                <Route path="/about" element={<PrivateRoute Component={About} />} />
                <Route path="/categories" element={<PrivateRoute Component={Categories} />} />
                <Route path="/cart" element={<PrivateRoute Component={Cart} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rout;
