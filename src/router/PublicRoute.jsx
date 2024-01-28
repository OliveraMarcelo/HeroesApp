import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    return (
        /* el children serian los componentes que vamos a recibir en nuestras rutas publicas
        en esta caso recibe de hijo al login entonces si no esta logueado logged false entonces renderizara el children
        la page de login en caso quie este logueado( logged true) entonces se rederigira a la pagina de marvel
        */
        !logged ? children : <Navigate to="/marvel" />
    );
};
