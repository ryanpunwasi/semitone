import React from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import _ from "lodash";

import "./NoteAudio.css";

const NoteAudio = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState({});

  useEffect(() => {
    axios.get("https://semitone-api.fly.dev/notes").then(response => {
      setNotes({ ...response.data.notes });
      setLoading(false);
    });
  }, []);

  const refsById = useMemo(() => {
    const refs = {};

    if (Array.isArray(notes["1"])) {
      notes["1"].forEach(note => {
        refs[note.id] = React.createRef(null);
      });
    }
    return refs;
  }, [notes]);

  const renderAudio = () => {
    const keys = Object.keys(notes);
    let notesAudio = [];
    for (let key of keys) {
      const notesInAnOctave = notes[key].map(note => {
        return (
          <audio
            controls
            key={note.id}
            src={note.src}
            ref={refsById[note.id]}
          ></audio>
        );
      });

      notesAudio = [...notesAudio, ...notesInAnOctave];
    }

    return notesAudio;
  };

  return (
    <div>
      {!_.isEmpty(notes) && !loading && renderAudio()}
      <button
        onClick={() => {
          const note = refsById["12"].current;
          note.load();
          note.play();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default NoteAudio;
