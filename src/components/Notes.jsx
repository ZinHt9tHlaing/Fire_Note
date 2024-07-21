const Notes = ({ note}) => {
  return (
    <div className=" card-form py-1 px-5 mt-5 text-white">
      <h3 className=" text-lg font-bold">+ {note}.</h3>
    </div>
  );
};

export default Notes;
