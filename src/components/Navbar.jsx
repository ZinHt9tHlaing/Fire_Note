const Navbar = ({ getNotes }) => {
  return (
    <section className="nav">
      <h1 className="title">FireNote</h1>
      <button className="nav-btn" onClick={getNotes}>Refresh Note</button>
    </section>
  );
};

export default Navbar;
