import React from "react";
import "./SignUp.css";


export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtext">
          Join our community and enjoy premium features!
        </p>


        {/* Name Fields */}
        <div className="name-fields">
          <input type="text" placeholder="First Name" className="input-field" />
          <input type="text" placeholder="Last Name" className="input-field" />
        </div>


        {/* Email & Password Fields */}
        <input type="email" placeholder="Email" className="input-field full-width" />
        <input type="password" placeholder="Password" className="input-field full-width" />


        {/* Login Redirect */}
        <p className="login-redirect">
          Already have an account? <a href="/sign-in">Login here!</a>
        </p>


        {/* Sign-Up Button */}
        <button className="signup-btn">Create Account</button>


        {/* OR Divider */}
        <div className="or-divider">
          <span>Or</span>
        </div>


        {/* Social Sign-Up Buttons */}
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
      </div>
    </div>
  );
}
