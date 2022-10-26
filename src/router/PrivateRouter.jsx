import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = (login) => {
    console.log(login);
    return <>{login ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
