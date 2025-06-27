import React, { useState } from 'react';
import './App.css';
import './BentoGrid.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <nav className="Header">
        <div className="Logo">Quantum Courses</div>
        <ul className="NavLinks">
          <li><a href="#courses">Courses</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={toggleTheme} className="ThemeToggle">
          {isLightMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </nav>

      <header className="HeroSection">
        <div className="HeroContent">
          <h1>Future-Proof Your Skills: The Quantum Leap in Learning</h1>
          <p>Dive into cutting-edge courses designed for tomorrow's innovators. Experience knowledge that adapts and evolves.</p>
          <button className="CallToAction">Begin Your Journey</button>
        </div>
      </header>

      <section className="BentoGridContainer">
        <div className="BentoGrid">
          <div className="BentoItem FeatureItem Feature1">
            <h2>Adaptive AI Learning Paths</h2>
            <p>Personalized modules that evolve with your progress and interests.</p>
          </div>
          <div className="BentoItem FeatureItem Feature2">
            <h2>Virtual Reality Labs</h2>
            <p>Immersive simulations for hands-on experience in virtual environments.</p>
          </div>
          <div className="BentoItem FeatureItem Feature3">
            <h2>Decentralized Knowledge Network</h2>
            <p>Access a global repository of insights, constantly updated by experts.</p>
          </div>
          <div className="BentoItem FeatureItem Feature4">
            <h2>Quantum Computing Fundamentals</h2>
            <p>Master the basics of the next technological frontier.</p>
          </div>
          <div className="BentoItem TestimonialItem Testimonial1">
            <h3>"Revolutionary learning experience!"</h3>
            <p>- Alex Chen, AI Ethicist</p>
          </div>
          <div className="BentoItem TestimonialItem Testimonial2">
            <h3>"Beyond traditional education."</h3>
            <p>- Dr. Lena Petrova, Bio-Engineer</p>
          </div>
          <div className="BentoItem CallToActionBox">
            <h2>Ready to Shape the Future?</h2>
            <button className="CallToActionSecondary">Enroll Now</button>
          </div>
        </div>
      </section>

      <footer className="Footer">
        <div className="FooterContent">
          <div className="FooterSection">
            <h3>Quantum Courses</h3>
            <p>Innovating education for the future.</p>
          </div>
          <div className="FooterSection">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="FooterSection">
            <h3>Connect</h3>
            <div className="SocialLinks">
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
        <p className="Copyright">&copy; 2025 Quantum Courses. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
