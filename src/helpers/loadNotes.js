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

export const fileUpload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dlapenluj/upload';
    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file',file);

    try {
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(response.ok){
            const cloudResp = await response.json();
            return cloudResp.secure_url;
        }else{
            throw await response.json();
        }
    } catch (error) {
        console.log("Error on upload to cloudinary >: ", error);
    }
}