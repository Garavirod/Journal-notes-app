/* 
    {
        uid: asjdiasjdkljalksdjkld
        name: username
    }
*/

import { types } from "../types/types";



export const authReducer = (state = {}, action ) => {
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid, //from firebase
                name: action.payload.displayName
            }                        
        case types.logout:
            return{};
        default:
            return state;
    }
}
