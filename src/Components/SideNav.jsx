import { NavLink } from "react-router-dom";

function SideNav() {
  const linkBaseStyle = {
    fontWeight: 500,
    color: "#555",
    textDecoration: "none",
    borderRadius: "4px",
    padding: "0.5rem 0.75rem",
    display: "block",
    transition: "color 0.2s, background-color 0.2s",
  };

  const activeStyle = {
    backgroundColor: "#e7f0ff",
    color: "#0d6efd",
    fontWeight: "bold",
    borderLeft: "4px solid #0d6efd",
  };

  const hoverStyle = {
    backgroundColor: "#f0f4ff",
    color: "#0d6efd",
  };

  return (
    <nav
      className="bg-light shadow-sm"
      style={{
        width: "140px",
        padding: "1rem",
        position: "fixed",
        height: "100vh",
        borderRadius: "0 8px 8px 0",
        backgroundColor: "#fff",
        zIndex: 1100,
      }}
    >
      <div style={{ marginLeft: "0.5rem", marginBottom: "2rem" }}>
        <span
          className="navbar-brand text-primary fw-bold"
          style={{
            fontSize: "1.2rem",
            color: "#0d6efd",
            fontWeight: "bold",
          }}
        >
          Pharma
          <br />
          Track
        </span>
      </div>

      <ul className="navbar-nav flex-column">
        <li className="nav-item mb-3">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              ...linkBaseStyle,
              ...(isActive ? activeStyle : {}),
            })}
            onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
            onMouseOut={(e) => Object.assign(e.target.style, linkBaseStyle)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink
            to="/quiz"
            style={({ isActive }) => ({
              ...linkBaseStyle,
              ...(isActive ? activeStyle : {}),
            })}
            onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
            onMouseOut={(e) => Object.assign(e.target.style, linkBaseStyle)}
          >
            Quiz
          </NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              ...linkBaseStyle,
              ...(isActive ? activeStyle : {}),
            })}
            onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
            onMouseOut={(e) => Object.assign(e.target.style, linkBaseStyle)}
          >
            About Us
          </NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              ...linkBaseStyle,
              ...(isActive ? activeStyle : {}),
            })}
            onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
            onMouseOut={(e) => Object.assign(e.target.style, linkBaseStyle)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
