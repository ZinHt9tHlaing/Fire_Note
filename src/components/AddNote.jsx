import { useState } from "react";

const AddNote = ({ getNotes }) => {
  // define state
  const [note, setNote] = useState("");

  // add new note
  const addNote = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://firenode-b8f17-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setNote("");
      getNotes();
    } catch (e) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className=" ">
      <form onSubmit={addNote} className="card-form">
        <input
          type="text"
          className="card-input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add note here"
        />
        <button className="card-btn">Add Note</button>
      </form>
    </section>
  );
};

export default AddNote;
