import DeleteIcon from "../svgs/DeleteIcon";

const Notes = ({ note, getNotes }) => {
  const { note: text, id } = note;

  const deleteNote = async () => {
    try {
      const res = await fetch(
        `https://firenode-b8f17-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method: "Delete",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete this note.");
      }
      getNotes();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className=" card-form py-1 px-5 mt-5 text-white">
      <h3 className={`text-lg font-bold  `}>+ {text}.</h3>
      <button onClick={deleteNote}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Notes;
