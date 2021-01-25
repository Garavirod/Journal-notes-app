import { types } from "../types/types"

/* Message error actions */
export const setError = (err) => ({
    type: types.uisetError,
    payload: err
})
export const removeError = () => ({
    type: types.uiRemoveError,
    payload: null
})

/* Loading actions */

export const uiSrartLoadingSte = () => ({
    type: types.uiStartLoading,
    isLoading:true,
})

export const uiFinishLoadingSte = () => ({
    type: types.uiFinishLoading,
    isLoading:false,
})

