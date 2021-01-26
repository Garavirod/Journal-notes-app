import { db } from "../firebase/firebase-config";
import { types } from "../types/types";


/* Asyncrunus actions */
  export const newEntryAction = () => {
      return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${ uid }/journal/notes`).add(newNote);
        dispatch(activeNote(docRef.id, newNote));
      }
  }

  export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const noteSnaphot = await db.collection(`${uid}/journal/notes`).get();
        const notes = [];
        noteSnaphot.forEach(noteChild => {
            notes.push({
                id: noteChild.id,
                ...noteChild.data()
            })
        })
        dispatch(setNote(notes));
    }
  }


  export const activeNote = ( id, note ) => ({
        type: types.noteActive,
        payload:{
            id,
            ...note
        }
  })


  export const setNote = (notes) => ({
    type:types.loadNote,
    payload:notes
  })