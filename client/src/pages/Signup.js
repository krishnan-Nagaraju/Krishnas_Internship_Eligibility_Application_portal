import { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post(
        "krishnas-internship-eligibility-app.vercel.app/api/auth/register",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Registration successful! Please login.");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={styles.box}>
      <h2>Sign Up</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={signup} style={styles.button}>
        Register
      </button>

      <p style={{ marginTop: "10px" }}>
        Already have an account?{" "}
        <a href="/" style={{ color: "#0d6efd" }}>Login</a>
      </p>
    </div>
  );
}

const styles = {
  box: {
    width: "320px",
    margin: "100px auto",
    background: "white",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#0d6efd",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Signup;
