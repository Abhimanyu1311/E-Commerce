import React from "react";
import Login from "../Pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout";

function Rout() {
    return(
    <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Layout />} />
                </Route>
                
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rout;