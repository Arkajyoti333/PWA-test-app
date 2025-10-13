import "./App.css";

const  App=()=> {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">⚡</div>
            <span>PWA Demo</span>
          </div>
          
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link">Features</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#demo" className="nav-link">Demo</a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="install-btn">
              📱 Install App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <header className="app-header">
          <div className="header-content">
            <h1 className="main-title">
              Progressive Web App
              <span className="title-accent">Test</span>
            </h1>
            <p className="tagline">Experience the future of web applications 🚀</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </header>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Progressive Web Apps?</h2>
            <p>Discover the power of modern web technology</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Installable</h3>
              <p>Add to your home screen or desktop like a native app</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Offline Capable</h3>
              <p>Works seamlessly even without internet connection</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast performance with smooth interactions</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Built with HTTPS for safe and secure browsing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="about" className="content-section">
        <div className="container">
          <div className="content-card">
            <h2>About This Demo</h2>
            <div className="content-grid">
              <div className="content-block">
                <p>
                  This is a React-based Progressive Web App designed to showcase 
                  modern web capabilities. Experience app-like features directly 
                  in your browser.
                </p>
                <ul className="feature-list">
                  <li>✅ Install on any device</li>
                  <li>✅ Offline functionality</li>
                  <li>✅ Push notifications</li>
                  <li>✅ Native app feel</li>
                </ul>
              </div>
              
              <div id="demo" className="demo-section">
                <div className="demo-card">
                  <h4>Try It Out</h4>
                  <p>Add this app to your home screen to see PWA magic in action!</p>
                  <button className="cta-button">
                    Learn More About PWAs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <p>© 2025 Arkajyoti Kundu — PWA Test Demo</p>
              <p className="footer-subtitle">Built with React & Modern Web Technologies</p>
            </div>
            <div className="footer-badge">
              <span className="pwa-badge">PWA READY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;