import React, { useState } from 'react';
import './screens.css';

// Splash Screen Component
export const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="app-screen splash-screen">
      <div className="splash-content">
        <div className="splash-logo">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="45" />
            <path d="M50 20v30M20 50h60M65 50c0 8.28-7.16 15-16 15S33 58.28 33 50" />
          </svg>
        </div>
        <h1>Clarity Finance</h1>
        <p>Smart Expense Tracking</p>
        <div className="splash-loader">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
      </div>
    </div>
  );
};

// Onboarding Screen Component
export const OnboardingScreens = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Track Your Expenses Easily',
      description: 'Scan receipts with our smart OCR technology to instantly categorize and track all your spending',
      icon: (
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="40" y="60" width="120" height="80" rx="8" />
          <circle cx="100" cy="100" r="30" fill="none" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="20" fill="none" strokeWidth="1.5" />
          <path d="M100 80v20M100 100v20M80 100h20M100 100h20" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Smart Insights & Budget Control',
      description: 'Get detailed analytics and visual insights to understand your spending patterns and stay within budget',
      icon: (
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="30" y="40" width="140" height="120" rx="8" />
          <path d="M50 140V80M80 140V60M110 140V100M140 140V70M170 140V90" strokeWidth="3" />
          <line x1="30" y1="140" x2="170" y2="140" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Secure & Private',
      description: 'Your financial data is protected with end-to-end encryption and stored securely in the cloud',
      icon: (
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M60 70v-20a40 40 0 0 1 80 0v20M60 70h80v80H60z" />
          <path d="M100 100v30M85 115h30" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const slide = slides[currentSlide];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="app-screen onboarding-screen">
      <div className="onboarding-content">
        <div className="onboarding-icon">
          {slide.icon}
        </div>

        <div className="onboarding-text">
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>

        <div className="onboarding-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
            ></div>
          ))}
        </div>

        <div className="onboarding-buttons">
          <button className="btn btn-large btn-primary" onClick={handleNext}>
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          </button>
          <button className="btn btn-large btn-ghost" onClick={handleSkip}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

// Welcome Screen Component
export const WelcomeScreen = ({ onNavigate }) => {
  return (
    <div className="app-screen welcome-screen">
      <div className="welcome-gradient"></div>
      <div className="welcome-content">
        <div className="welcome-greeting">
          <h1>Welcome to Clarity Finance</h1>
          <p>Your personal expense tracking companion</p>
        </div>

        <div className="welcome-feature-cards">
          <div className="feature-card">
            <div className="feature-icon receipt">📸</div>
            <h4>Smart Scanning</h4>
            <p>Scan receipts instantly</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon analytics">📊</div>
            <h4>Analytics</h4>
            <p>Track spending trends</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon security">🔒</div>
            <h4>Secure</h4>
            <p>Your data is encrypted</p>
          </div>
        </div>

        <div className="welcome-buttons">
          <button
            className="btn btn-large btn-primary"
            onClick={() => onNavigate('signup')}
          >
            Create Account
          </button>
          <button
            className="btn btn-large btn-outline"
            onClick={() => onNavigate('login')}
          >
            Login
          </button>
          <button
            className="btn btn-large btn-ghost"
            onClick={() => onNavigate('dashboard')}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};
