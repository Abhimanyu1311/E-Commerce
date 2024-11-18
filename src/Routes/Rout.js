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

const Rout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/electronics" element={<Electronics />}/>
                <Route path="/jewellery" element={<Jewellery />}/>
                <Route path="/men'sclothing" element={<MensClothing />}/>
                <Route path="/women'sclothing" element={<WomensClothing/>}/>


                <Route path="/" index element={<PrivateRoute Component={Home} />} />
                <Route path="/about" element={<PrivateRoute Component={About} />} />
                <Route path="/categories" element={<PrivateRoute Component={Categories} />} />
                <Route path="/cart" element={<PrivateRoute Component={Cart} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rout;
