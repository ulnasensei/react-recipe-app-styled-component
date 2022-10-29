import { Navigate, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const PrivateRouter = ({ login, component }) => {
    console.log(login);
    const location = useLocation();
    return (
        <>
            {login ? (
                <>
                    <Navbar /> {component}
                </>
            ) : (
                <Navigate to={`/login?redirectTo=${location.pathname}`} />
            )}
        </>
    );
};

export default PrivateRouter;
