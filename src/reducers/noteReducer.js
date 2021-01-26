/* 
    {
        notes:[],
        active:null,
        active:{
            id: '',
            title: '',
            body:'',
            image:'',
            date: ''
        }
    }

*/

import { types } from "../types/types";

const initialState = {
    notes:[],
    active:null,    
}


export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.noteActive:
            return{
                ...state,
                active:{
                    ...action.payload
                }
            }
        case types.loadNote:
            return{
                ...state,
                notes:[...action.payload]
            }
        default:
            return state;
    }
}