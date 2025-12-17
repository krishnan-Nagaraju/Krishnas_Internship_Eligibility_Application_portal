import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Internships() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/internships/eligible", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => setInternships(res.data));
  }, []);

  const apply = async (id) => {
    await axios.post(
      "http://localhost:5001/api/applications/apply",
      { internshipId: id },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    alert("Applied successfully");
  };

  return (
    <>
      <Navbar />
      <h2 style={{ margin: "20px" }}>Eligible Internships</h2>

      {internships.map((i) => (
        <div key={i._id} style={styles.card}>
          <h3>{i.title}</h3>
          <p><b>Company:</b> {i.company}</p>
          <p><b>Duration:</b> {i.duration}</p>
          <button style={styles.btn} onClick={() => apply(i._id)}>Apply</button>
        </div>
      ))}
    </>
  );
}

const styles = {
  card: {
    background: "white",
    margin: "20px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  btn: {
    background: "#0d6efd",
    color: "white",
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
  },
};

export default Internships;
