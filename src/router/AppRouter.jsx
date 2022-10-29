import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/notFound/NotFound";
import Navbar from "../components/navbar/Navbar";
const AppRouter = () => {
    const [login, setLogin] = useState(false);
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login setLogin={setLogin} />} />
                <Route path="/" element={<PrivateRouter login={login} component={<Home />} />} />
                <Route
                    path="/details/:id"
                    element={<PrivateRouter login={login} component={<Details />} />}
                />
                <Route
                    path="/about"
                    element={<PrivateRouter login={login} component={<About />} />}
                />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route
                    path="/404"
                    element={
                        <>
                            <Navbar />
                            <NotFound />
                        </>
                    }
                />
            </Routes>
        </>
    );
};

export default AppRouter;
