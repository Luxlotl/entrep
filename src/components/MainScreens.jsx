import React, { useState } from 'react';
import {
  EyeIcon,
  EyeOffIcon,
  AlertIcon
} from './Icons';
import './screens.css';

// Dashboard Screen Component
export const DashboardScreen = ({ onNavigate }) => {
  const [hideAmounts, setHideAmounts] = useState(false);

  const totalBalance = 2450.50;
  const monthlyBudget = 1500;
  const spent = 1200;
  const remaining = monthlyBudget - spent;
  const budgetPercentage = (spent / monthlyBudget) * 100;

  const recentTransactions = [
    {
      id: 1,
      name: 'Starbucks',
      category: 'Food & Drink',
      amount: 5.50,
      date: 'Today',
      icon: '☕',
      color: 'rgb(249, 115, 22)'
    },
    {
      id: 2,
      name: 'Uber',
      category: 'Transportation',
      amount: 12.40,
      date: 'Yesterday',
      icon: '🚗',
      color: 'rgb(37, 99, 235)'
    },
    {
      id: 3,
      name: 'Whole Foods',
      category: 'Groceries',
      amount: 42.30,
      date: '2 days ago',
      icon: '🛒',
      color: 'rgb(34, 197, 94)'
    }
  ];

  return (
    <div className="app-screen dashboard-screen">
      <div className="dashboard-header">
        <div className="header-top">
          <h3>Hello, User 👋</h3>
          <button className="btn btn-icon" onClick={() => onNavigate('profile')}>
            <span className="avatar">👤</span>
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Balance Card */}
        <div className="balance-card card-gradient">
          <div className="balance-header">
            <div className="balance-title">
              <p className="text-muted">Total Balance</p>
              <h2 className="balance-amount">
                {hideAmounts ? '••••••' : `$${totalBalance.toFixed(2)}`}
              </h2>
            </div>
            <button
              className="btn btn-icon"
              onClick={() => setHideAmounts(!hideAmounts)}
            >
              {hideAmounts ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          <div className="balance-footer">
            <span>Card ending in 4829</span>
          </div>
        </div>

        {/* Budget Progress */}
        <div className="card">
          <div className="budget-header">
            <h4>Monthly Budget</h4>
            <span className="budget-label">
              {spent}/${monthlyBudget}
            </span>
          </div>
          <div className="progress-bar">
            <div
              className={`progress-fill ${
                budgetPercentage > 80 ? 'warning' : 'success'
              }`}
              style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="budget-footer">
            <span className="text-muted">
              ${remaining} remaining this month
            </span>
          </div>
        </div>

        {/* Spending Distribution */}
        <div className="card">
          <h4>Spending by Category</h4>
          <div className="pie-chart">
            <svg viewBox="0 0 120 120" className="pie-svg">
              <circle cx="60" cy="60" r="50" fill="rgb(59, 130, 246)" />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="transparent"
                stroke="rgb(245, 158, 11)"
                strokeWidth="15"
                strokeDasharray="78.5 314"
                transform="rotate(-90 60 60)"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="transparent"
                stroke="rgb(34, 197, 94)"
                strokeWidth="15"
                strokeDasharray="94.2 314"
                strokeDashoffset="-78.5"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="pie-legend">
              <div className="legend-item">
                <span className="legend-dot food"></span>
                <span>Food & Drink</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot transport"></span>
                <span>Transport</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot groceries"></span>
                <span>Groceries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="card">
          <div className="recent-header">
            <h4>Recent Transactions</h4>
            <button
              type="button"
              className="view-all-link"
              onClick={() => onNavigate('transactions')}
            >
              View All →
            </button>
          </div>

          <div className="transaction-list">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-icon" style={{ backgroundColor: transaction.color }}>
                  {transaction.icon}
                </div>
                <div className="transaction-details">
                  <h5>{transaction.name}</h5>
                  <p className="text-muted text-sm">{transaction.category}</p>
                </div>
                <div className="transaction-amount">
                  <h5>-${transaction.amount.toFixed(2)}</h5>
                  <p className="text-muted text-sm">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="card">
          <div className="insights-header">
            <AlertIcon className="icon-sm" />
            <h4>Spending Insight</h4>
          </div>
          <p className="text-muted">
            You're spending 20% more on groceries this month. Try meal planning to save money!
          </p>
        </div>

        <div style={{ height: '100px' }}></div>
      </div>

      {/* Floating Scan Button */}
      <button
        className="floating-button"
        onClick={() => onNavigate('scan')}
        title="Scan Receipt"
      >
        <CameraIcon className="icon-lg" />
      </button>
    </div>
  );
};

// Scan Receipt Screen Component
export const ScanReceiptScreen = ({ onNavigate }) => {
  const [scannedData, setScannedData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setScannedData({
        storeName: 'Starbucks',
        date: '2024-04-29',
        amount: 5.50,
        items: [
          { name: 'Caffe Latte', price: 4.50 },
          { name: 'Tax', price: 1.00 }
        ],
        category: 'Food & Drink'
      });
      setIsScanning(false);
    }, 2000);
  };

  if (scannedData) {
    return (
      <div className="app-screen scan-review-screen">
        <div className="scan-header">
          <button
            className="btn btn-icon"
            onClick={() => setScannedData(null)}
          >
            ←
          </button>
          <h2>Review Receipt</h2>
          <div></div>
        </div>

        <div className="scan-content">
          <div className="scanned-receipt card">
            <div className="receipt-header">
              <h3>{scannedData.storeName}</h3>
              <p className="text-muted">{scannedData.date}</p>
            </div>

            <div className="divider"></div>

            <div className="receipt-items">
              {scannedData.items.map((item, index) => (
                <div key={index} className="receipt-item">
                  <span>{item.name}</span>
                  <span className="text-bold">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            <div className="receipt-total">
              <h4>Total</h4>
              <h2>${scannedData.amount.toFixed(2)}</h2>
            </div>

            <div className="encryption-badge">
              🔒 End-to-End Encrypted
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Category</label>
            <select className="input-field">
              <option value="food">Food & Drink</option>
              <option value="transport">Transportation</option>
              <option value="groceries">Groceries</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="scan-buttons">
            <button
              className="btn btn-large btn-primary"
              onClick={() => onNavigate('dashboard')}
            >
              Save Receipt
            </button>
            <button
              className="btn btn-large btn-ghost"
              onClick={() => setScannedData(null)}
            >
              Scan Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-screen scan-screen">
      <div className="scan-header">
        <button className="btn btn-icon" onClick={() => onNavigate('dashboard')}>
          ←
        </button>
        <h2>Scan Receipt</h2>
        <div></div>
      </div>

      <div className="scan-content">
        <div className={`camera-preview ${isScanning ? 'scanning' : ''}`}>
          <div className="camera-frame">
            <svg viewBox="0 0 300 400" className="frame-svg">
              <rect x="20" y="50" width="260" height="300" fill="none" stroke="white" strokeWidth="3" />
              <circle cx="60" cy="70" r="5" fill="white" />
              <circle cx="240" cy="70" r="5" fill="white" />
              <circle cx="60" cy="330" r="5" fill="white" />
              <circle cx="240" cy="330" r="5" fill="white" />
            </svg>
            {isScanning && <div className="scan-line"></div>}
          </div>
        </div>

        <div className="scan-instructions">
          <h3>Position Receipt</h3>
          <p className="text-muted">
            Align the receipt within the frame. Make sure all text is visible and well-lit.
          </p>
        </div>

        <div className="scan-buttons">
          <button
            className="btn btn-large btn-primary"
            onClick={handleSimulateScan}
            disabled={isScanning}
          >
            {isScanning ? 'Scanning...' : 'Take Photo'}
          </button>
          <button
            className="btn btn-large btn-ghost"
            onClick={() => onNavigate('dashboard')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
