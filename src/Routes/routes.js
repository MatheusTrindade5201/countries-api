import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Descricao from "./Descricao";


const Rotas = (props) => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<Descricao />} path={'/pais/:nome'} />
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;