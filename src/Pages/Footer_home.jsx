import React, { useState } from "react";
import "../Style/Footer.css"; // Include the CSS file for styling

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}!`);
      setEmail(""); // Reset the email field
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#tutorials">Tutorials</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:ujjvalpateliya@gmail.com">ujjvalpateliya@gmail.com</a></p>
          <p>Phone: <a href="tel:+918435423244">8435423244</a></p>
          <p>Location: <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Map</a></p>
        </div>
        <div className="footer-section newsletter">
          <h4>Stay Updated</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
