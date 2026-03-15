import React, { useState } from "react";
import "./CreateAccount.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function CreateAccount() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

        <h1>Create Account</h1>
        <p className="subtitle">
          Join ZerORisk — protect your organization
        </p>

        <form>

          <div className="row2">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <label>WORK EMAIL</label>
          <input type="email" placeholder="john@company.com" />

          <label>ORGANIZATION</label>
          <input type="text" placeholder="Acme Corporation" />

          {/* PASSWORD */}

          <label>PASSWORD</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="•••••••••"
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <div className="strength">
            Medium strength — add symbols or numbers to strengthen
          </div>

          {/* CONFIRM PASSWORD */}

          <label>CONFIRM PASSWORD</label>

          <div className="password-box">

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="•••••••••"
            />

            <span
              className="eye"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <p className="hint">
            • Min 8 characters • Upper & lowercase • At least 1 number
          </p>

          <label className="terms">
            <input type="checkbox" />
            I agree to the Terms of Service and Privacy Policy
          </label>

          <button className="create-btn">
            Create Account
          </button>

          <p className="Signin">
            Already have an account? Sign in →
          </p>

        </form>

      </div>

    </div>
  );
}

export default CreateAccount;