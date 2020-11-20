import React from "react";

export const StickyNote = ({ note }) => {
  function getStyle() {
    return { backgroundColor: note.background };
  }

  return (
    <div key={note.id} className="card col-sm-3 mx-1 mb-3" style={getStyle()}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.text}</p>
      </div>
    </div>
  );
};
