import { db } from "../firebase/firebase-config";
import { types } from "../types/types";


/* Asyncrunus actions */
/* Are executed by middleware thunk and propones 'dispatch' */
  export const newEntryAction = () => {
      return async (dispatch, getState) => {
        const uid = getState().auth.uid; //current state from reducer 'auth'
        
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


  export const updateDataOnBDD = (note) => {
    return async (dispatch, getState) => {
      const {uid} = getState().auth;
      
      if( !note.url ){
        delete note.url;
      }
      
      const noteToFireStore = {...note};
      //Delete id property it is not necessary 
      delete noteToFireStore.id;
      try {
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFireStore);        
      } catch (error) {
        console.log("Error on update note >: ",error);
      }
    }
  };

  /* Synconus */

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