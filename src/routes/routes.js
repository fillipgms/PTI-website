import { Home, Login, Noticias, CreateAcount } from "../pages";
import PrivateRoutes from ".";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/index" element={<Navigate to="/" replace />} />
            <Route path="/news" element={<Noticias />} />
            <Route path="/coins" element="Coins" />
            <Route path="/favorite-coins" element="favorite Coins" />
            <Route path="/profile" exact element="Profile" />
            <Route path="/signup" element={<PrivateRoutes />}>
                <Route path="/signup" exact element={<CreateAcount />} />
            </Route>
            <Route path="/signin" element={<PrivateRoutes />}>
                <Route path="/signin" exact element={<Login />} />
            </Route>
            <Route path="/guide" exact element="Guia" />

            <Route path="ErrorPage" element="erro" />
            <Route path="*" element={<Navigate to="/ErrorPage" replace />} />
        </Routes>
    );
};

export default AppRoutes;
