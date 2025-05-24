import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>OWASP Cheat Sheet Visualizer</h1>
        <p className="hero-description">
          Explore and visualize comprehensive security guidance from the OWASP Foundation. 
          Navigate through 97+ cheat sheets covering various security topics and best practices.
        </p>
      </div>
      
      <div className="features-section">
        <h2>What You'll Find Here</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🔐 Authentication & Authorization</h3>
            <p>Learn about secure authentication mechanisms, session management, and access control patterns.</p>
          </div>
          <div className="feature-card">
            <h3>🛡️ Web Security</h3>
            <p>Discover protection techniques against XSS, CSRF, injection attacks, and other web vulnerabilities.</p>
          </div>
          <div className="feature-card">
            <h3>🏗️ Secure Development</h3>
            <p>Explore secure coding practices, input validation, error handling, and cryptographic storage.</p>
          </div>
          <div className="feature-card">
            <h3>☁️ Cloud & Infrastructure</h3>
            <p>Find guidance on Docker security, Kubernetes hardening, and secure cloud architecture.</p>
          </div>
        </div>
      </div>
      
      <div className="getting-started">
        <h2>Getting Started</h2>
        <p>
          Select any cheat sheet from the navigation panel on the left to begin exploring OWASP's 
          comprehensive security guidance. Each cheat sheet provides practical, actionable advice 
          for developers and security professionals.
        </p>
      </div>
    </div>
  );
};

export default Home;
