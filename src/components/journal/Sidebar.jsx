import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StartlogOut } from '../../actions/auth';
import { newEntryAction } from '../../actions/notes-action';
import { JournalEntries } from './JournalEntries';


export const Sidebar = () =>{
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const handleLogOut = () => {
        dispatch( StartlogOut() );
    }

    const handleNewEntry = () => {
        dispatch(newEntryAction())
    }

    return(
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-2">
                    <i className="far fa-moon"></i>
                    <span> {auth.name} </span>
                </h3>
                <button onClick={handleLogOut} className="btn">Log out</button>
            </div>
            <div className="journal__new-entry" onClick={handleNewEntry}>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-2">New enrtry</p>
            </div>

           <JournalEntries/> 
        </aside>
    )
};