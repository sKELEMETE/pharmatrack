function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="container-fluid">
        <form
          className="d-flex"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              borderRadius: "4px",
              border: "1px solid #ced4da",
              padding: "0.375rem 0.75rem",
            }}
          />
        </form>
      </div>
    </>
  );
}

export default NavBar;
