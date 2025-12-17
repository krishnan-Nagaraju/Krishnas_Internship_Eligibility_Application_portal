import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h3>Internship Portal</h3>
      <div>
        <Link to="/internships" style={styles.link}>Internships</Link>
        <Link to="/applications" style={styles.link}>My Applications</Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          style={styles.logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#0d6efd",
    color: "white",
    alignItems: "center",
  },
  link: {
    color: "white",
    marginRight: "20px",
    textDecoration: "none",
  },
  logout: {
    background: "white",
    color: "#0d6efd",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
  },
};

export default Navbar;
