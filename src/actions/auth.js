import { types } from "../types/types";


/* MIDDLEWARES */
export const startLoginEmailPass = (email,password) =>{
    return ( dispatch ) => {
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