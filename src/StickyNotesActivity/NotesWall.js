import React from "react";
import { AddStickyForm } from "./AddStickyForm";
import { StickyNote } from "./StickyNote";

export const NotesWall = ({
  notes,
  users,
  user,
  newNote,
  handleChange,
  handleSubmit,
}) => {
  // Bring current user to top of list
  let userIds = Object.keys(users).filter((u) => u !== user.userId);
  userIds.unshift(user.userId);

  notes = addUserNameToNotes(notes, users);

  return userIds.map((userId) => {
    return (
      <div key={userId}>
        <div className="row">
          <h4 className="display-4">
            {userId === user.userId ? "My " : users[userId].userName + "'s "}
            Ideas
          </h4>
        </div>
        <div className="row mb-3">
          {notes &&
            notes
              .filter((n) => n.userId === userId)
              .map((note) => <StickyNote note={note} />)}

          <div
            hidden={user.userId !== userId}
            className="col-xs .float-right"
            style={{ backgroundColor: newNote.background }}
          >
            <AddStickyForm
              value={newNote}
              onSave={handleSubmit}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    );
  });
};

function addUserNameToNotes(notes, users) {
  return (
    notes &&
    notes.map((note, i) => {
      return {
        ...note,
        id: i,
        userName: users[note.userId] ? users[note.userId].userName : "",
      };
    })
  );
}
