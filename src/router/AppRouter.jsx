import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoute } from "../heroes/routes/HeroesRoute";
export const AppRouter = () => {
    return (
        <>
            <Routes>
                
                <Route path="login" element={<LoginPage />}></Route>
                <Route path="/*" element={<HeroesRoute />}></Route>
            </Routes>
        </>
    );
};
