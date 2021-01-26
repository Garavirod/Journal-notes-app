import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,  
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
/* Firebase */
import { firebase } from '../firebase/firebase-config';
/* Redux */
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoue';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes-action';
export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setLoggedIn(true);
                dispatch(startLoadingNotes(user.uid));
            }else{
                setLoggedIn(false); 
            }
            setChecking(false);
        })
    }, [dispatch,checking]);


    if(checking){
        return(
            <h1>Please wait...</h1>
        )
    }

    return(
        <Router>
            <Switch>
                <PublicRoute 
                    path="/auth" 
                    component={AuthRouter}
                    isAuthenticated={isLoggedIn}
                />
                <PrivateRoute
                    exact
                    path="/"
                    component={JournalScreen}
                    isAuthenticated={isLoggedIn}
                />
                <Redirect to="/auth/login"/>
            </Switch>
        </Router>
    )
}