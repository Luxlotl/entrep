import React, { useState } from 'react';
import {
  SearchIcon,
  FilterIcon,
  EyeIcon,
  EyeOffIcon,
  ChevronRightIcon
} from './Icons';
import './screens.css';

// Transactions Screen Component
export const TransactionsScreen = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hideAmounts, setHideAmounts] = useState(false);

  const categories = ['all', 'food', 'transport', 'groceries', 'entertainment'];
  const categoryLabels = {
    all: 'All',
    food: '☕ Food & Drink',
    transport: '🚗 Transportation',
    groceries: '🛒 Groceries',
    entertainment: '🎬 Entertainment'
  };

  const transactions = [
    {
      id: 1,
      name: 'Starbucks',
      category: 'food',
      amount: 5.50,
      date: '2024-04-29',
      time: '10:30 AM',
      icon: '☕'
    },
    {
      id: 2,
      name: 'Uber',
      category: 'transport',
      amount: 12.40,
      date: '2024-04-29',
      time: '2:15 PM',
      icon: '🚗'
    },
    {
      id: 3,
      name: 'Whole Foods',
      category: 'groceries',
      amount: 42.30,
      date: '2024-04-28',
      time: '5:45 PM',
      icon: '🛒'
    },
    {
      id: 4,
      name: 'Cineplex',
      category: 'entertainment',
      amount: 15.00,
      date: '2024-04-27',
      time: '7:00 PM',
      icon: '🎬'
    },
    {
      id: 5,
      name: 'Thai Restaurant',
      category: 'food',
      amount: 28.75,
      date: '2024-04-27',
      time: '6:30 PM',
      icon: '🍜'
    }
  ];

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || t.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app-screen transactions-screen">
      <div className="transactions-header">
        <button className="btn btn-icon" onClick={() => onNavigate('dashboard')}>
          ←
        </button>
        <h2>Transactions</h2>
        <button
          className="btn btn-icon"
          onClick={() => setHideAmounts(!hideAmounts)}
        >
          {hideAmounts ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>

      <div className="transactions-content">
        {/* Search and Filter */}
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search transactions"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-chips">
          {categories.map((category) => (
            <button
              key={category}
              className={`chip ${selectedFilter === category ? 'active' : ''}`}
              onClick={() => setSelectedFilter(category)}
            >
              <FilterIcon className="icon-sm" />
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Transactions List */}
        <div className="transactions-list">
          {filteredTransactions.length === 0 ? (
            <div className="empty-state">
              <p className="text-muted">No transactions found</p>
            </div>
          ) : (
            filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="transaction-card">
                <div className="transaction-left">
                  <div className="transaction-icon">{transaction.icon}</div>
                  <div className="transaction-info">
                    <h5>{transaction.name}</h5>
                    <p className="text-muted text-sm">
                      {transaction.date} at {transaction.time}
                    </p>
                  </div>
                </div>
                <div className="transaction-amount">
                  <h5 className="text-error">
                    {hideAmounts ? '•••' : `-$${transaction.amount.toFixed(2)}`}
                  </h5>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// Analytics Screen Component
export const AnalyticsScreen = ({ onNavigate }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const chartData = {
    week: [200, 350, 280, 400, 320, 380, 250],
    month: [800, 950, 1100, 1050, 1200, 1100, 1000, 900, 1050, 1150, 1200, 800]
  };

  const insights = [
    {
      title: 'Highest Spending',
      value: 'Food & Drink',
      change: '+15%',
      icon: '☕'
    },
    {
      title: 'Lowest Spending',
      value: 'Entertainment',
      change: '-5%',
      icon: '🎬'
    },
    {
      title: 'Daily Average',
      value: '$42.50',
      change: 'Stable',
      icon: '📊'
    }
  ];

  return (
    <div className="app-screen analytics-screen">
      <div className="analytics-header">
        <button className="btn btn-icon" onClick={() => onNavigate('dashboard')}>
          ←
        </button>
        <h2>Analytics</h2>
        <div></div>
      </div>

      <div className="analytics-content">
        {/* Period Toggle */}
        <div className="period-toggle">
          <button
            className={`period-btn ${selectedPeriod === 'week' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('week')}
          >
            Week
          </button>
          <button
            className={`period-btn ${selectedPeriod === 'month' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('month')}
          >
            Month
          </button>
        </div>

        {/* Chart */}
        <div className="chart-card card">
          <h4>Spending Trend</h4>
          <div className="bar-chart">
            <svg viewBox="0 0 300 200" className="chart-svg">
              {/* Y-axis line */}
              <line x1="30" y1="20" x2="30" y2="170" stroke="rgb(209, 213, 219)" strokeWidth="2" />
              {/* X-axis line */}
              <line x1="30" y1="170" x2="290" y2="170" stroke="rgb(209, 213, 219)" strokeWidth="2" />
              
              {/* Bars */}
              {chartData[selectedPeriod].map((value, index) => {
                const barWidth = 20;
                const spacing = (290 - 30) / chartData[selectedPeriod].length;
                const x = 30 + index * spacing + (spacing - barWidth) / 2;
                const height = (value / 1200) * 150;
                const y = 170 - height;
                return (
                  <rect
                    key={index}
                    x={x}
                    y={y}
                    width={barWidth}
                    height={height}
                    fill="rgb(37, 99, 235)"
                    rx="4"
                  />
                );
              })}
            </svg>
          </div>
          <p className="chart-label text-muted">Spending in $</p>
        </div>

        {/* Insights */}
        <div className="insights-section">
          <h4>Insights</h4>
          <div className="insights-grid">
            {insights.map((insight, index) => (
              <div key={index} className="insight-card card">
                <div className="insight-header">
                  <span className="insight-icon">{insight.icon}</span>
                  <span className={`insight-change ${insight.change.includes('-') ? 'decrease' : 'increase'}`}>
                    {insight.change}
                  </span>
                </div>
                <p className="text-muted text-sm">{insight.title}</p>
                <h5>{insight.value}</h5>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="card">
          <h4>Category Breakdown</h4>
          <div className="category-list">
            <div className="category-item">
              <div className="category-info">
                <span className="category-name">☕ Food & Drink</span>
                <div className="category-bar">
                  <div className="category-fill" style={{ width: '45%', backgroundColor: 'rgb(249, 115, 22)' }}></div>
                </div>
              </div>
              <span className="category-amount">$380</span>
            </div>
            <div className="category-item">
              <div className="category-info">
                <span className="category-name">🚗 Transportation</span>
                <div className="category-bar">
                  <div className="category-fill" style={{ width: '25%', backgroundColor: 'rgb(37, 99, 235)' }}></div>
                </div>
              </div>
              <span className="category-amount">$210</span>
            </div>
            <div className="category-item">
              <div className="category-info">
                <span className="category-name">🛒 Groceries</span>
                <div className="category-bar">
                  <div className="category-fill" style={{ width: '20%', backgroundColor: 'rgb(34, 197, 94)' }}></div>
                </div>
              </div>
              <span className="category-amount">$170</span>
            </div>
            <div className="category-item">
              <div className="category-info">
                <span className="category-name">🎬 Entertainment</span>
                <div className="category-bar">
                  <div className="category-fill" style={{ width: '10%', backgroundColor: 'rgb(168, 85, 247)' }}></div>
                </div>
              </div>
              <span className="category-amount">$85</span>
            </div>
          </div>
        </div>

        <div style={{ height: '100px' }}></div>
      </div>
    </div>
  );
};

// Profile Screen Component
export const ProfileScreen = ({ onNavigate }) => {
  const [isPremium, setIsPremium] = useState(false);

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '👤'
  };

  const securitySettings = [
    { name: 'Face ID / Fingerprint', status: 'Enabled' },
    { name: 'Two-Factor Authentication', status: 'Disabled' },
    { name: 'Password', status: 'Last changed 3 months ago' }
  ];

  const accountSettings = [
    { name: 'Backup Data', icon: '💾' },
    { name: 'Privacy Settings', icon: '🔒' },
    { name: 'Notification Settings', icon: '🔔' },
    { name: 'About & Help', icon: 'ℹ️' },
    { name: 'Feedback & Support', icon: '💬' }
  ];

  return (
    <div className="app-screen profile-screen">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>

      <div className="profile-content">
        {/* User Info */}
        <div className="user-card card">
          <div className="user-info">
            <div className="user-avatar">{user.avatar}</div>
            <div className="user-details">
              <h3>{user.name}</h3>
              <p className="text-muted">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Premium Section */}
        <div className={`premium-card card ${isPremium ? 'active' : ''}`}>
          <div className="premium-header">
            <div className="premium-info">
              <h4>{isPremium ? 'Premium Member' : 'Upgrade to Premium'}</h4>
              <p className="text-muted">
                {isPremium
                  ? 'You have unlimited features'
                  : 'Unlock advanced features and analytics'}
              </p>
            </div>
            <span className="premium-icon">✨</span>
          </div>
          {!isPremium && (
            <button className="btn btn-primary" onClick={() => setIsPremium(true)}>
              Upgrade Now
            </button>
          )}
        </div>

        {/* Premium Features */}
        {isPremium && (
          <div className="features-card card">
            <h4>Premium Features</h4>
            <div className="features-list">
              <div className="feature-item">
                <span>✓ Unlimited Receipt Scanning</span>
              </div>
              <div className="feature-item">
                <span>✓ Advanced Analytics & Reports</span>
              </div>
              <div className="feature-item">
                <span>✓ Budget Alerts & Notifications</span>
              </div>
              <div className="feature-item">
                <span>✓ Export Data to CSV/PDF</span>
              </div>
              <div className="feature-item">
                <span>✓ Multi-Device Sync</span>
              </div>
            </div>
          </div>
        )}

        {/* Security Settings */}
        <div className="settings-section">
          <h4>Security Settings</h4>
          {securitySettings.map((setting, index) => (
            <div key={index} className="setting-item card">
              <div className="setting-header">
                <h5>{setting.name}</h5>
                <ChevronRightIcon />
              </div>
              <p className="text-muted text-sm">{setting.status}</p>
            </div>
          ))}
        </div>

        {/* Account Settings */}
        <div className="settings-section">
          <h4>Account Settings</h4>
          {accountSettings.map((setting, index) => (
            <div
              key={index}
              className="setting-item card"
              onClick={() => onNavigate('dashboard')}
            >
              <div className="setting-header">
                <div className="setting-info">
                  <span className="setting-icon">{setting.icon}</span>
                  <h5>{setting.name}</h5>
                </div>
                <ChevronRightIcon />
              </div>
            </div>
          ))}
        </div>

        {/* Logout */}
        <button
          className="btn btn-large btn-ghost logout-btn"
          onClick={() => onNavigate('welcome')}
        >
          <LogoutIcon />
          <span>Logout</span>
        </button>

        <div style={{ height: '100px' }}></div>
      </div>
    </div>
  );
};
