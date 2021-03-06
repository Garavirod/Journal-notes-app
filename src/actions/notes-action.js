import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fileUpload } from "../helpers/loadNotes";


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
        dispatch(refreshNote(note.id, noteToFireStore));
        Swal.fire('Note was Saved',note.title, 'success');
      } catch (error) {
        console.log("Error on update note >: ",error);
      }
    }
  };


  export const startUploading = (file) => {
    return async (dispatch, getState) => {
      const {active:activeNote} = getState().notes;
      const fileURL = await fileUpload(file);
    }
  };

  /* Synconus */
/* react-journal */

  export const refreshNote = (id, note) => ({
    type: types.updatedNotes,
    payload:{
      id,
      note:{
        id,
        ...note
      }
    }
  });

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