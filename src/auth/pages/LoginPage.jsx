import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
/* 
tenemos que pensar que vamos a necesitar que tenemos un usuario autenticado o no 
toda la aplicacion .
vamos a necesitar un tipo de context 


*/
export const LoginPage = () => {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)
  const lastPath = localStorage.getItem('lastPath') || ''
  const onLogin = () => {
    login('Marcelo Olivera Cabrera') 
    navigate(lastPath)
  }
  return (
    <div className="container mt-5">Login
    <h1>Login</h1>
    <hr />
    <button
    className="btn btn-primary"
    onClick={onLogin}
    >
      Login
    </button>
    </div>  
  )
}
