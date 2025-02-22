import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false); // Toggle Login/Signup

  if (!isOpen) return null;

  return (
    <div className="login-popup">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        <h2>{isSignup ? "Sign Up" : "Login"}</h2>

        <form>
          {isSignup && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        {/* Toggle between Login & Signup */}
        <p onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
