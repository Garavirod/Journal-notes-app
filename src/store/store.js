import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/* Reducers */
import { authReducer } from '../reducers/authReducer';
import { noteReducer } from '../reducers/noteReducer';
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: noteReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk ) //this is for working with asycrunus actions
    ),
);