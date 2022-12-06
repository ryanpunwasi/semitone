import { useState, useEffect } from "react";
import axios from "axios";

export const useNoteAudio = () => {
  const [notes, setNotes] = useState({});
  axios.get("https://semitone-api.fly.dev/notes").then(response => {
    setNotes(response.data.notes);
  });

  useEffect(() => {
    if (Object.keys(notes).length) return notes;
  }, [notes]);
};
