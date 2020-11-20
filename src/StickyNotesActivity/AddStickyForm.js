import React from "react";
import TextInput from "../components/TextInput";
import { Button } from "../components/Theme";

export const AddStickyForm = ({ value, onSave, onChange }) => {
  return (
    <form onSubmit={onSave} autoComplete="off">
      <TextInput
        name="title"
        placeholder="Title"
        value={value.title}
        onChange={onChange}
      />

      <TextInput
        name="text"
        placeholder="Text"
        value={value.text}
        onChange={onChange}
      />

      <Button type="submit" className="btn btn-primary">
        Add Note
      </Button>
    </form>
  );
};
