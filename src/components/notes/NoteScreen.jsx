import React from "react";
import { NotesApp } from "./NotesApp";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesApp />
      <div className="notes__content">
        <input
          type="text"
          name=""
          id=""
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="What happend today?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
            <div>
                {/* <img src="https://preview.redd.it/9g7hf0k9jz561.png?width=640&height=798&crop=smart&auto=webp&s=44249240939a799a1c0314b6b86772fbc2c46c3f" alt="Entry's image"/> */}
                <img src="https://preview.redd.it/1ckhhjmd6o461.jpg?width=640&height=853&crop=smart&auto=webp&s=b8931378eafbda90af4f75cb0ad0a00867ed5ad3" alt=""/>
            </div>
        </div>
      </div>
    </div>
  );
};
