import { types } from "../types/types";


/* MIDDLEWARES */
export const startLoginEmailPass = (email,password) =>{
    return ( dispatch ) => {
        // An action is executed when middleware is done
        setTimeout(()=>{
            dispatch( login(123,'Rodrigo'));
        },3000);
    }
}


/* ACTIONS */
export const login = (uid, displayName) => ({
    
    type: types.login,
    payload:{
        uid,
        displayName
    }
    
})