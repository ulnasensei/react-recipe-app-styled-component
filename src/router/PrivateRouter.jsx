import { Navigate, Outlet } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const PrivateRouter = ({ login, component }) => {
    console.log(login);
    return (
        <>
            {login ? (
                <>
                    <Navbar /> {component}
                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
};

export default PrivateRouter;
