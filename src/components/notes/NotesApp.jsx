import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startUploading, updateDataOnBDD } from '../../actions/notes-action';

export const NotesApp = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch(updateDataOnBDD(active));        
    }

    const selectFile = () => {
        document.querySelector('#fileSelector').click();        
    }

    const handleFileChange = (e) => {
        const file  = e.target.files[0];
        if(file){
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 Ago 2020</span>
            <input
                id="fileSelector" 
                type="file" 
                name="file"
                style={{display:'none'}} 
                onChange={handleFileChange} />
            <div>
            <button className="btn" onClick={(e)=>selectFile()}>Picture</button>
            <button className="btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
