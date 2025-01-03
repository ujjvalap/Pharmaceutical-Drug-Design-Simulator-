import React, { useState } from 'react';
import '../Style/Header.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To handle login state

  // Handle sign-in/sign-up toggle
  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="logo">PharmaSim</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#tutorials">Tutorials</a>
          <a href="#about-us">About Us</a>
          <a href="#contact">Contact</a>
          {!isLoggedIn ? (
            <div>
              <button className="auth-btn" onClick={handleAuth}>Sign In</button>
              <button className="auth-btn" onClick={handleAuth}>Sign Up</button>
            </div>
          ) : (
            <div>
              <button className="auth-btn" onClick={handleAuth}>Dashboard</button>
              <button className="auth-btn" onClick={handleAuth}>Logout</button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url('your-molecular-image.jpg')" }}>
        <div className="hero-text">
          <h1>Revolutionizing Drug Design Education and Research</h1>
          <div className="cta-buttons">
            <button className="cta-btn">Explore Now</button>
            <button className="cta-btn">Sign Up</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <i className="feature-icon">💊</i>
          <h3>Molecular Modeling</h3>
          <p>Simulate drug molecules for real-time design insights.</p>
        </div>
        <div className="feature-card">
          <i className="feature-icon">🔬</i>
          <h3>Reaction Simulation</h3>
          <p>Visualize complex chemical reactions with ease.</p>
        </div>
        <div className="feature-card">
          <i className="feature-icon">💉</i>
          <h3>Drug-Protein Interactions</h3>
          <p>Understand how drugs interact with proteins at a molecular level.</p>
        </div>
        <div className="feature-card">
          <i className="feature-icon">📚</i>
          <h3>Educational Resources</h3>
          <p>Access learning materials to enhance your knowledge.</p>
        </div>
      </section>

      {/* User Management Section (Login/Register) */}
      <section className="user-management">
        <form className="login-form">
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <select className="role-dropdown">
            <option value="student">Student</option>
            <option value="educator">Educator</option>
            <option value="researcher">Researcher</option>
          </select>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonial-card">
          <p>PharmaSim changed how I approach drug design! A fantastic tool for both students and professionals!</p>
          <div className="user-info">
            <img src="user1.jpg" alt="User 1" className="user-img" />
            <span>Ravi - Student</span>
          </div>
        </div>
        <div className="testimonial-card">
          <p>As a researcher, PharmaSim allowed me to simulate and test drug reactions virtually. Time-saving!</p>
          <div className="user-info">
            <img src="user2.jpg" alt="User 2" className="user-img" />
            <span>Jane Smith - Researcher</span>
          </div>
        </div>
      </section>

      {/* Footer */}
    

    </div>
  );
}

export default App;




