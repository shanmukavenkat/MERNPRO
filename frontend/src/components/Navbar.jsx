import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/students">Students</Link>
        <Link to="/contact">Contact</Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <div style={styles.profile}>
            <span>👤 {user.name}</span>
            <div style={styles.dropdown}>
              <Link to="/profile">View Profile</Link>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "15px" },
  profile: { position: "relative", cursor: "pointer" },
  dropdown: {
    position: "absolute",
    top: "30px",
    right: "0",
    background: "white",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
};

export default Navbar;
