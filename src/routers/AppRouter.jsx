import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,    
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
/* Firebase */
import { firebase } from '../firebase/firebase-config';
/* Redux */
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setLoggedIn(true);
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
                <Route path="/auth" component={AuthRouter}/>
                <Route exact path="/" component={JournalScreen}/>
                <Redirect to="/auth/login"/>
            </Switch>
        </Router>
    )
}