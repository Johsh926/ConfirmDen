import React from "react";
import "./ContactUs.css";


export default function ContactUs() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
                Feel free to contact us? Submit your queries here and we will listen.
            </p>


            <div className="contact-content">
                {/* Contact Info Boxes */}
                <div className="contact-info">
                    <div className="contact-box blue-box">
                        <div className="icon-text">
                            <span className="icon">📞</span>
                            <span>Call Us Directly At</span>
                        </div>
                        <p className="contact-number">0901 - 235 - 1237</p>
                        <button className="contact-btn">Contact Us</button>
                    </div>


                    <div className="contact-box light-blue-box">
                        <div className="icon-text">
                            <span className="icon">💬</span>
                            <span>Chat With Our Team</span>
                        </div>
                        <a className="contact-email" href="mailto:confirmden@gmail.com">
                            confirmden@gmail.com
                        </a>
                        <button className="contact-btn">Contact Us</button>
                    </div>
                </div>


                {/* Contact Form */}
                <div className="contact-form">
                    <input type="text" placeholder="Full Name" className="input-field full-width" />
                    <div className="input-group">
                        <input type="email" placeholder="Email Address" className="input-field" />
                        <input type="tel" placeholder="Phone Number" className="input-field" />
                    </div>
                    <textarea placeholder="Message Here..." className="textarea-field"></textarea>
                    <button className="send-btn">Send Message</button>
                </div>
            </div>
        </div>
    );
}
