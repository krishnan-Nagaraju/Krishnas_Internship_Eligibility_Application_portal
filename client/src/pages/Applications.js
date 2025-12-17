import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Applications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/applications/my-applications", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => setApps(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h2 style={{ margin: "20px" }}>My Applications</h2>

      {apps.map((a) => (
        <div key={a._id} style={styles.card}>
          <h3>{a.internshipId.title}</h3>
          <p>Status: <b>{a.status}</b></p>
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
};

export default Applications;
