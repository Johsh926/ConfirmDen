import React from "react";
import "./Services.css";


export default function Services() {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Choose the plan that’s perfect for you.</h2>


      <div className="plan-container">
        {/* Free Plan */}
        <div className="plan-card free-plan">
          <h3 className="plan-title">Free</h3>
          <p className="count">5</p>
          <p className="confirmations">Confirmations per month</p>
          <p className="description">Suitable for light use</p>
          <div className="price-button">
            <button className="select-btn">Select</button>
          </div>
        </div>


        {/* Basic Plan */}
        <div className="plan-card featured">
          <h3 className="plan-title">
            Basic Plan <span className="star">⭐</span>
          </h3>
          <p className="count">25</p>
          <p className="confirmations">Confirmations per month</p>
          <p className="description">Ideal for small business or regular users</p>
          <div className="price-button">
            <button className="select-btn">Select</button>
            <p className="price">₱179</p>
          </div>
        </div>


        {/* Premium Plan */}
        <div className="plan-card">
          <h3 className="plan-title">Premium Plan</h3>
          <p className="count">50</p>
          <p className="confirmations">Confirmations per month</p>
          <p className="description">Best for frequent confirmation needs</p>
          <div className="price-button">
            <button className="select-btn">Select</button>
            <p className="price">₱359</p>
          </div>
        </div>
      </div>
    </div>
  );
}


