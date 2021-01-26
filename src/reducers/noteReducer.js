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

const initialState = {
    notes:[],
    active:null,    
}


export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}