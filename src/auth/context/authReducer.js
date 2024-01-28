import { types } from "../types/types";

/* 
la logica vendria a ser asi

const initialState = {
    logged : false
} 
si no esta autenticado un usuario
y en el caso que este autenticado entonces el state vendria a estar asi 
const initialState = {
    logged : true
} 

*/

/* 

nosotros necesitamos persistir la informacion


*/

export const authReducer = (state = {}, action) => {
// yo retorno un estado en nuestro caso un objeto

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged : true,
                user : action.payload
            };
        case types.logout:
            return {
                ...state,
                logged : false
            };
        default : 
        return state;
    }
};
