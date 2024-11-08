import React from "react";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";
import Cart from "../Pages/Cart";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout";

function Rout() {
    return(
    <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/"  element={<Layout />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" index element={<Home />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path="/about" element ={<About/>} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path="/categories" element ={<Categories/>} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path="/cart" element ={<Cart/>} />
                </Route>
                
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rout;