import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateDataOnBDD } from '../../actions/notes-action';

export const NotesApp = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch(updateDataOnBDD(active));        
    }

    return (
        <div className="notes__appbar">
            <span>28 Ago 2020</span>
            <div>
            <button className="btn">Picture</button>
            <button className="btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
