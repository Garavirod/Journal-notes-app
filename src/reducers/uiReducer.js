import { types } from "../types/types"

const initialState = {
    loading: false,
    msgError:null
}

export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uisetError:
            return{
                ...state,
                msgError: action.payload
            }
        case types.uiRemoveError:
            return{
                ...state,
                msgError: null
            }        
        case types.uiStartLoading:
            return{
                ...state,
                loading: action.isLoading
            }
        case types.uiFinishLoading:
            return{
                ...state,
                loading: action.isLoading
            }
        default:
            return state;
    }
}