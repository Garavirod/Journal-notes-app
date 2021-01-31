import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesApp } from "./NotesApp";

export const NoteScreen = () => {

  const {active:noteActive} = useSelector(state => state.notes);
  const [values,handleInputchange, reset] = useForm(noteActive);

  const activeId = useRef(noteActive.id);

  useEffect(()=>{
    if( noteActive.id !== activeId.current){
      reset(noteActive);
      activeId.current = noteActive.id;
    }
  },[noteActive,reset]);

  const {
    title,
    body,
    url,
  } = values;



  return (
    <div className="notes__main-content">
      <NotesApp />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          id=""
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputchange}
        />

        <textarea
          name="body"
          value={body}
          onChange={handleInputchange}
          id=""
          cols="30"
          rows="10"
          placeholder="What happend today?"
          className="notes__textarea"
        ></textarea>
        {
          url &&
          <div className="notes__image">
              <div>
                  {/* <img src="https://preview.redd.it/9g7hf0k9jz561.png?width=640&height=798&crop=smart&auto=webp&s=44249240939a799a1c0314b6b86772fbc2c46c3f" alt="Entry's image"/> */}
                  <img src="https://preview.redd.it/1ckhhjmd6o461.jpg?width=640&height=853&crop=smart&auto=webp&s=b8931378eafbda90af4f75cb0ad0a00867ed5ad3" alt=""/>
              </div>
          </div>
        }
      </div>
    </div>
  );
};
