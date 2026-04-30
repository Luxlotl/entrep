import React, { useState } from 'react';
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from './Icons';
import './screens.css';

// Login Screen Component
export const LoginScreen = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onNavigate('security');
    }
  };

  return (
    <div className="app-screen auth-screen">
      <div className="auth-header">
        <button
          className="btn btn-icon"
          onClick={() => onNavigate('welcome')}
        >
          <ArrowLeftIcon />
        </button>
        <h2>Login</h2>
        <div></div>
      </div>

      <div className="auth-content">
        <div className="auth-greeting">
          <p className="text-muted">Welcome back! Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              type="email"
              className="input-field"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <div className="auth-remember-forgot">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              className="forgot-password-link"
              onClick={() => onNavigate('forgot')}
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="btn btn-large btn-primary">
            Login
          </button>
        </form>

        <div className="divider-text">
          <span>or continue with</span>
        </div>

        <div className="social-login">
          <button className="btn btn-large social-btn google">
            <span>Google</span>
          </button>
          <button className="btn btn-large social-btn facebook">
            <span>Facebook</span>
          </button>
        </div>

        <div className="auth-footer">
          <p className="text-muted">
            Don't have an account?{' '}
            <button
              type="button"
              className="auth-link"
              onClick={() => onNavigate('signup')}
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Sign Up Screen Component
export const SignUpScreen = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && email && password && confirmPassword && agreedToTerms) {
      onNavigate('security');
    }
  };

  const isPasswordMatch = password === confirmPassword && password.length > 0;

  return (
    <div className="app-screen auth-screen">
      <div className="auth-header">
        <button
          className="btn btn-icon"
          onClick={() => onNavigate('welcome')}
        >
          <ArrowLeftIcon />
        </button>
        <h2>Create Account</h2>
        <div></div>
      </div>

      <div className="auth-content">
        <div className="auth-greeting">
          <p className="text-muted">Join us and start tracking your expenses</p>
        </div>

        <form onSubmit={handleSignUp} className="auth-form">
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              type="email"
              className="input-field"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <div className="password-input-wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className={`input-field ${
                  password && !isPasswordMatch ? 'input-field-error' : ''
                }`}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {password && !isPasswordMatch && (
              <div className="input-error-message">Passwords do not match</div>
            )}
          </div>

          <div className="auth-terms">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <span className="terms-text">
                I agree to the{' '}
                <button type="button" className="auth-link">
                  Privacy Policy
                </button>
                {' '}and{' '}
                <button type="button" className="auth-link">
                  Terms of Service
                </button>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-large btn-primary"
            disabled={!isPasswordMatch || !agreedToTerms}
          >
            Create Account
          </button>
        </form>

        <div className="divider-text">
          <span>or sign up with</span>
        </div>

        <div className="social-login">
          <button className="btn btn-large social-btn google">
            <span>Google</span>
          </button>
          <button className="btn btn-large social-btn facebook">
            <span>Facebook</span>
          </button>
        </div>

        <div className="auth-footer">
          <p className="text-muted">
            Already have an account?{' '}
            <button
              type="button"
              className="auth-link"
              onClick={() => onNavigate('login')}
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Security Layer Screen Component
export const SecurityLayerScreen = ({ onNavigate }) => {
  const [useBiometric, setUseBiometric] = useState(false);
  const [enable2FA, setEnable2FA] = useState(false);

  const handleComplete = () => {
    onNavigate('dashboard');
  };

  return (
    <div className="app-screen security-screen">
      <div className="security-header">
        <h2>Secure Your Account</h2>
        <p className="text-muted">Protect your financial data with security features</p>
      </div>

      <div className="security-content">
        <div className="security-option card">
          <div className="security-option-header">
            <div className="security-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1v22M6.5 5.5c3.5-3 7-3 7 0v10.5M12 19c-4 0-6-1-6-5v-5" />
              </svg>
            </div>
            <div className="security-option-text">
              <h4>Biometric Authentication</h4>
              <p className="text-muted">Face ID / Fingerprint</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={useBiometric}
                onChange={(e) => setUseBiometric(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="security-option card">
          <div className="security-option-header">
            <div className="security-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="security-option-text">
              <h4>Two-Factor Authentication</h4>
              <p className="text-muted">Extra security layer</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={enable2FA}
                onChange={(e) => setEnable2FA(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="security-info">
          <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 7v5l3 2" fill="white" />
          </svg>
          <p className="text-muted">
            These security features help protect your financial information from unauthorized access.
          </p>
        </div>

        <div className="security-buttons">
          <button className="btn btn-large btn-primary" onClick={handleComplete}>
            Secure My Account
          </button>
          <button className="btn btn-large btn-ghost" onClick={handleComplete}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};
