import { useState } from "react";
import { login } from "../../services/authService";


export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(username, password);
      onLogin(); // tell App login succeeded
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "32px",
          borderRadius: "8px",
          width: "320px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Login</h2>

        {error && (
          <p style={{ color: "red", marginBottom: "12px" }}>{error}</p>
        )}

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Login
        </button>

        <div style={{ marginTop: "12px", fontSize: "12px" }}>
          <p>Admin → admin / admin123</p>
          <p>Employee → employee / emp123</p>
        </div>
      </form>
    </div>
  );
}
