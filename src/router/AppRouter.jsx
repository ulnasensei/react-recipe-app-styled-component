import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </>
    );
};

export default AppRouter;
