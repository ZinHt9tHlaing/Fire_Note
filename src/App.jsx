import { useState } from "react";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import { useEffect } from "react";
import Intro from "./components/Intro";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // TODO: Show notes when start
  useEffect(() => {
    getNotes();
  }, []);

  // get notes
  const getNotes = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://firenode-b8f17-default-rtdb.firebaseio.com/notes.json"
      );
      // console.log(res);
      if (!res.ok) {
        throw new Error("Cannot connect to the firebase.");
      }
      const notes = await res.json();
      const modifiedNote = [];

      for (const key in notes) {
        modifiedNote.push({
          id: key,
          note: notes[key],
        });
      }
      setNotes(modifiedNote);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  };

  return (
    <section>
      <div className="px-3 w-full md:w-[60%] mx-auto">
        <Navbar totalNotes={notes.length} />
        {isLoading && !error && <h3 className="message">Getting notes...</h3>}
        {error && !isLoading && (
          <h3 className="message text-red-400">{error}</h3>
        )}
        {!isLoading && !error && (
          <>
            <AddNote getNotes={getNotes} />
            {notes.map((note, index) => (
              <Notes key={index} note={note} getNotes={getNotes} />
            ))}
          </>
        )}
        {notes.length < 1 && <Intro />}
      </div>
    </section>
  );
};

export default App;
