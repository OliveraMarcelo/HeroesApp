import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/')
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
