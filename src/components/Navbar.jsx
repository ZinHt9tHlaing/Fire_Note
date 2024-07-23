const Navbar = ({ totalNotes }) => {
  return (
    <section className="nav">
      <h1 className="title">FireNote</h1>
      <p className="nav-btn cursor-default active:scale-100">
        Total Notes - <span className="text-red-500 font-bold text-lg bg-white px-2 rounded">{totalNotes}</span>
      </p>
      {/* <button className="nav-btn" onClick={getNotes}>Refresh Note</button> */}
    </section>
  );
};

export default Navbar;
