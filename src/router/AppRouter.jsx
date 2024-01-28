import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoute } from "../heroes/routes/HeroesRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <HeroesRoute />
                        </PrivateRoute>
                    }
                ></Route>

                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }></Route>
                {/*  <Route path="/*" element={}></Route> */}
            </Routes>
        </>
    );
};
