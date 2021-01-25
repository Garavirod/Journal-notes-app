import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { uiSrartLoadingSte, uiFinishLoadingSte } from "./ui";



/* MIDDLEWARES */
export const startLoginEmailPass = (email,password) =>{
    return ( dispatch ) => {
        // An action is executed when middleware is done
        dispatch(uiSrartLoadingSte());
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(response =>{
            const {displayName, uid} = response.user;
            dispatch( login(uid,displayName));
            dispatch(uiFinishLoadingSte());
        })
        .catch(err =>{
            dispatch(uiFinishLoadingSte());
            console.log("Error on login");
        })
    }
}

export const startRegisterWithEmailPsd = ( email, password, name) =>{
    /* thunk me dispone del dispatch para realizar tareas asicnronas */
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