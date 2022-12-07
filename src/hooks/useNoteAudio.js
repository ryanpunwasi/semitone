import { useState, useEffect } from "react";
import axios from "axios";

export const useNoteAudio = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    if (!notes) {
      axios.get("https://semitone-api.fly.dev/notes").then(response => {
        setNotes(response.data.notes);
      });
    }
  }, []);

  return notes;
};
