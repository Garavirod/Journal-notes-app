import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';


/* MIDDLEWARES */
export const startLoginEmailPass = (email,password) =>{
    return ( dispatch ) => {
        // An action is executed when middleware is done
        setTimeout(()=>{
            dispatch( login(123,'Rodrigo'));
        },3000);
    }
}


export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then(({user}) =>{
            dispatch ( login(user.uid, user.displayName) )
        })
        .catch(err => {
            console.log(err);
        })
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