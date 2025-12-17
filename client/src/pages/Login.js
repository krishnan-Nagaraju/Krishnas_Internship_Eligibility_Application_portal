import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", res.data.token);
      window.location.href = "/internships";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.box}>
      <h2>Login</h2>

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

      <button onClick={login} style={styles.button}>
        Login
      </button>
    </div>
  );
}

const styles = {
  box: {
    width: "320px",
    margin: "120px auto",
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

export default Login;
