import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
    const [login, setLogin] = useState(false);
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login setLogin={setLogin} />} />
                <Route path="/" element={<PrivateRouter login={login} component={<Home />} />} />
                <Route
                    path="/details"
                    element={<PrivateRouter login={login} component={<Details />} />}
                />
                <Route
                    path="/about"
                    element={<PrivateRouter login={login} component={<About />} />}
                />
            </Routes>
        </>
    );
};

export default AppRouter;
