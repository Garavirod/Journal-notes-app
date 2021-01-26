import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
    const noteSnaphot = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];
    noteSnaphot.forEach(noteChild => {
        notes.push({
            id: noteChild.id,
            ...noteChild.data()
        })
    })
    console.log(notes);
    return notes;
}