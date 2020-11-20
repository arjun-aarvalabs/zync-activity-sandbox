// THIS IS BOILER PLATE FOR CREATING NEW ACTIVITY
import React, { useState, useEffect } from "react";
import { Switch } from "../components/Switch";
import { NotesWall } from "./NotesWall";

const activityReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      let notes = Object.assign([], state.notes);
      notes.push(action.note);
      return {
        ...state,
        notes: notes,
      };
    default:
      return {
        ...state,
      };
  }
};

const StickyNotesActivity = ({ activity, users, user, dispatch }) => {
  const { activityId, instanceId, settings, state, details, notes } =
    activity || {};
  const { userId, role, userName } = user || {};
  const { title, description, icon } = details || {};

  const backgroundColors = [
    "#F3D5DB",
    "#FEF5F4",
    "#CCDDC0",
    "#F8E4C4",
    "#C9E0EC",
    "#F7DFEF",
    "#E0BBE4",
    "#957DAD",
  ];

  const blankNote = {
    userId: userId,
    title: "",
    text: "",
    background:
      backgroundColors[
        Math.floor(Math.random() * (backgroundColors.length - 1))
      ],
  };

  const [newNote, setNewNote] = useState(blankNote);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Only save if title and text are present
    if (newNote.title && newNote.text) {
      dispatch({
        type: "ADD_NOTE",
        note: newNote,
      });
      setNewNote(blankNote);
    }
  }

  return (
    <>
      <div className="jumbotron container-fluid">
        <h1 className="display-4">Sticky Notes Activity </h1>
        <h3>
          {userName} ({role})
        </h3>
      </div>

      <div className="col-xl">
        <NotesWall
          notes={notes}
          users={users}
          user={user}
          newNote={newNote}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

const Settings = ({ settings, setLaunchSettings }) => {
  const { booleanValue } = settings || {};
  const toggle = () => {
    setLaunchSettings({ ...settings, booleanValue: !booleanValue });
  };
  return (
    <div>
      Setting Switch
      <Switch checked={true} onChange={toggle}></Switch>
    </div>
  );
};

const Summary = ({ activity, users, user }) => {
  return <div> Summary - Activity Summary</div>;
};

export { StickyNotesActivity, Settings, Summary, activityReducer };
