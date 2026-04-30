import React, { useState, useEffect } from 'react';
import './styles/designSystem.css';
import './styles/global.css';

// Import screens
import { SplashScreen, OnboardingScreens, WelcomeScreen } from './components/PreAuthScreens';
import { LoginScreen, SignUpScreen, SecurityLayerScreen } from './components/AuthScreens';
import { DashboardScreen, ScanReceiptScreen } from './components/MainScreens';
import { TransactionsScreen, AnalyticsScreen, ProfileScreen } from './components/AppScreens';

// Import Navigation
import './components/navigation.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [appState, setAppState] = useState({
    isLoggedIn: false,
    showOnboarding: true
  });

  // Auto-hide splash screen
  const handleSplashComplete = () => {
    if (appState.showOnboarding) {
      setCurrentScreen('onboarding');
    } else {
      setCurrentScreen('welcome');
    }
  };

  // Navigation handler
  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  // Bottom Navigation - only show on authenticated screens
  const showNavigation = [
    'dashboard',
    'transactions',
    'scan',
    'analytics',
    'profile'
  ].includes(currentScreen);

  // Render appropriate screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={handleSplashComplete} />;
      case 'onboarding':
        return (
          <OnboardingScreens
            onComplete={() => {
              setAppState({ ...appState, showOnboarding: false });
              setCurrentScreen('welcome');
            }}
          />
        );
      case 'welcome':
        return <WelcomeScreen onNavigate={handleNavigate} />;
      case 'login':
        return <LoginScreen onNavigate={handleNavigate} />;
      case 'signup':
        return <SignUpScreen onNavigate={handleNavigate} />;
      case 'security':
        return (
          <SecurityLayerScreen
            onNavigate={(screen) => {
              setAppState({ ...appState, isLoggedIn: true });
              handleNavigate(screen);
            }}
          />
        );
      case 'dashboard':
        return <DashboardScreen onNavigate={handleNavigate} />;
      case 'scan':
        return <ScanReceiptScreen onNavigate={handleNavigate} />;
      case 'transactions':
        return <TransactionsScreen onNavigate={handleNavigate} />;
      case 'analytics':
        return <AnalyticsScreen onNavigate={handleNavigate} />;
      case 'profile':
        return <ProfileScreen onNavigate={handleNavigate} />;
      default:
        return <DashboardScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
      {showNavigation && (
        <div className="bottom-navigation">
          <button
            className={`nav-item ${currentScreen === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleNavigate('dashboard')}
            title="Dashboard"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-icon">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span className="nav-label">Dashboard</span>
          </button>
          <button
            className={`nav-item ${currentScreen === 'transactions' ? 'active' : ''}`}
            onClick={() => handleNavigate('transactions')}
            title="Transactions"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-icon">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
              <line x1="9" y1="12" x2="15" y2="12" />
            </svg>
            <span className="nav-label">Transactions</span>
          </button>
          <button
            className={`nav-item ${currentScreen === 'scan' ? 'active' : ''}`}
            onClick={() => handleNavigate('scan')}
            title="Scan"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-icon">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span className="nav-label">Scan</span>
          </button>
          <button
            className={`nav-item ${currentScreen === 'analytics' ? 'active' : ''}`}
            onClick={() => handleNavigate('analytics')}
            title="Analytics"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-icon">
              <line x1="12" y1="2" x2="12" y2="22" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="nav-label">Analytics</span>
          </button>
          <button
            className={`nav-item ${currentScreen === 'profile' ? 'active' : ''}`}
            onClick={() => handleNavigate('profile')}
            title="Profile"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="nav-icon">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="nav-label">Profile</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

