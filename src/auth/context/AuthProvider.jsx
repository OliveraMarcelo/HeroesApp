import  { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'
import {  useNavigate } from 'react-router-dom'
const initialState = {
  logged : false
} 
/* 
necesitamos persistir el usuario lo hariamos con el localstorage
aca no lo podemos hacer

las funcion de inicializacion la podemos utilizar
inicializaremos el estado del provider con la funcion init obteniendo el usuario por LocalStorage
*/
const init = () => {
const user = JSON.parse(localStorage.getItem('user'));
return {
  logged : !!user,/* si el user existe nos va regresar un true con la doble negacion*/
  user :  user
}
}
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
  const [authState , dispatch ]  = useReducer(authReducer, initialState, init)
console.log(authState);
  const login = async (name = '') => {
    const user = {
      id : '123',
      name : name,
    }
    const action = { 
      type : types.login,
      payload : user
    }
    localStorage.setItem('user',JSON.stringify(user))
    dispatch(action)
  }
  /* A
  deslogueamos dewsde el state con la action indicada despues setearemos logged copmo false
  */
  const logout = async () => {

    const action = { 
      type : types.logout,
    }
    //localStorage.clear()
    localStorage.removeItem('user')
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login : login,
      logout : logout
    }}>
    {children} 
    </AuthContext.Provider>
  )
}
