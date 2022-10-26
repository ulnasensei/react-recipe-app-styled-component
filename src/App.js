import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./router/PrivateRouter";
import AppRouter from "./router/AppRouter";
import Login from "./pages/login/Login";

function App() {
    const [login, setLogin] = useState(false);
    return (
        <Routes>
            <Route path="/" element={<PrivateRouter login={login} />}>
                <Route path="/" element={<AppRouter />} />
            </Route>
            <Route path="/login" element={<Login setLogin={setLogin} />} />
        </Routes>
    );
}

export default App;
