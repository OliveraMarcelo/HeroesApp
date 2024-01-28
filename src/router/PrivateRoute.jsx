import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  /* el children serian los componentes que vamos a recibir en nuestras rutas privadas */
  /* podemos guardar nuestra ultima ruta de navegacion 
  para mejorar la experiencia de usuario  con el hook useLocation
  yo se que todas mis rutas privadas pasan por aca por lo tanto siempre tendremos el lastPath mas actualizado
  cuando cambia de ruta o cambia el state se vuelve a disparar este component
  */
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);
  const { logged } = useContext(AuthContext);
  return logged ? children : <Navigate to="/login" />;
};
