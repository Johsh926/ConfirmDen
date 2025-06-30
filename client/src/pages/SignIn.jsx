import React from "react";
import "./SignIn.css";


export default function SignIn() {
  return (
    <div className="signin-container">
      <div className="logo-section">
        <img src="/confirmdenLOGO.png" alt="ConfirmDen Logo" className="logo" />
        <p className="welcome-text">Welcome Back!</p>
      </div>
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>
        <input type="email" placeholder="Email Address" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="signin-btn">Sign In</button>
        <p className="or-text">Or Sign In with</p>
        <div className="social-login">
          <button className="google-btn">
            <img src="/google-icon.png" alt="Google" className="social-icon" />
            Continue with Google
          </button>
          <button className="facebook-btn">
            <img src="/facebook-icon.png" alt="Facebook" className="social-icon" />
            Continue with Facebook
          </button>
        </div>
        <p className="register-text">
          Don’t have an account yet? <a href="/sign-up">Register here!</a>
        </p>
      </div>
    </div>
  );
}


