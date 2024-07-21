import { useState } from "react";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import { useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // TODO: Show notes when start
  // useEffect(() => {
  //     getNotes();
  // },[])

  // get notes
  const getNotes = async () => {
    try {
      const res = await fetch(
        "https://firenode-b8f17-default-rtdb.firebaseio.com/notes.json"
      );
      const notes = await res.json();
      const modifiedNote = [];

      for (const note in notes) {
        modifiedNote.push(notes[note]);
      }
      setNotes(modifiedNote);
    } catch (e) {
      alert("Cannot find any notes. Please try again later.");
    }
  };

  return (
    <section>
      <div className="px-3 w-full md:w-[60%] mx-auto">
        <Navbar getNotes={getNotes} />
        <AddNote />
        {notes.map((note, index) => (
          <div key={index}>
            <Notes note={note} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;
