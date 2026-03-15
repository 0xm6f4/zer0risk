import React, { useState } from "react";
import "./login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page">

      <div className="card">

        <div className="logo">
          <div className="logo-icon">🛡️</div>
          <div>
            <h3>Zer0risk</h3>
            <span>SECURITY PLATFORM v3.2</span>
          </div>
        </div>

        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to your security dashboard</p>

        <form>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="demo@zerorisk.io"
          />

          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <div className="row">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forget password?</a>
          </div>

          <button className="login-btn">
            Sign In Securely
          </button>

          <div className="divider">
            <span></span>
            or continue with
            <span></span>
          </div>

          <button className="google-btn">
            Google
          </button>

          <p className="signup">
            Don't have an account? <a href="#">Create one →</a>
          </p>

          <p className="demo">
            Demo: demo@zerorisk.io / Demo1234!
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;