import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="login-page">
      {/* Background glow */}
      <div className="login-glow"></div>

      <div className="login-box">
        <h2 className="mb-2">Admin Login</h2>
        <p className="text-muted mb-4">
          Welcome back 👋 Please login
        </p>

        {error && <div className="alert alert-danger py-2">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="admin123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 login-btn">
            Login
          </button>
        </form>

        <div className="mt-4 login-hint">
          <p className="mb-1">
            <strong>Email:</strong> admin@gmail.com
          </p>
          <p className="mb-0">
            <strong>Password:</strong> admin123
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
