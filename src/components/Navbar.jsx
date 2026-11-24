import { Link } from "react-router";

export default function Navbar({ bookedCount }) {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">DocCare</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/appointments">Appointments ({bookedCount})</Link>
      </div>
    </nav>
  );
}
