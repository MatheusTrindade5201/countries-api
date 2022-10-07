import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";


const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/" exact />
        </Routes>
            
        </BrowserRouter>
    )
}

export default Rotas;