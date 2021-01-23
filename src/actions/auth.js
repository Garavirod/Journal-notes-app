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

export const startRegisterWithEmailPsd = ( email, password, name) =>{
    /* thumb me dispone del dispatch para realizar tareas asicnronas */
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password)
        .then( async ({user}) =>{
            await user.updateProfile({displayName:name});
            dispatch ( login(user.uid, user.displayName) )
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        })
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