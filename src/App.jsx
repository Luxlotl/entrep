import { useEffect, useMemo, useState } from 'react'

const transactions = [
  { id: 1, name: 'Starbucks', category: 'Food & Drink', amount: 5.5, date: 'Today', icon: '☕' },
  { id: 2, name: 'Uber', category: 'Transportation', amount: 12.4, date: 'Yesterday', icon: '🚗' },
  { id: 3, name: 'Whole Foods', category: 'Groceries', amount: 42.3, date: '2 days ago', icon: '🛒' },
  { id: 4, name: 'Cineplex', category: 'Entertainment', amount: 15, date: '3 days ago', icon: '🎬' },
  { id: 5, name: 'Thai Restaurant', category: 'Food & Drink', amount: 28.75, date: '4 days ago', icon: '🍜' },
]

function App() {
  const [screen, setScreen] = useState('splash')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [hideAmounts, setHideAmounts] = useState(false)

  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('welcome'), 1400)
      return () => clearTimeout(timer)
    }
  }, [screen])

  const goToApp = (tab = 'dashboard') => {
    setActiveTab(tab)
    setScreen('app')
  }

  const appContent = useMemo(() => {
    if (activeTab === 'dashboard') {
      return <Dashboard hideAmounts={hideAmounts} setHideAmounts={setHideAmounts} goToApp={goToApp} />
    }
    if (activeTab === 'transactions') {
      return <Transactions hideAmounts={hideAmounts} setHideAmounts={setHideAmounts} />
    }
    if (activeTab === 'scan') {
      return <ScanReceipt goToApp={goToApp} />
    }
    if (activeTab === 'analytics') {
      return <Analytics />
    }
    return <Profile setScreen={setScreen} />
  }, [activeTab, hideAmounts])

  if (screen === 'splash') return <Splash />
  if (screen === 'welcome') return <Welcome setScreen={setScreen} goToApp={goToApp} />
  if (screen === 'login') return <Login setScreen={setScreen} goToApp={goToApp} />
  if (screen === 'signup') return <Signup setScreen={setScreen} goToApp={goToApp} />
  if (screen === 'security') return <Security goToApp={goToApp} />

  return (
    <main className="phone-shell">
      <section className="screen with-nav">{appContent}</section>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  )
}

function Splash() {
  return (
    <main className="phone-shell">
      <section className="screen center gradient">
        <div className="logo">CF</div>
        <h1>Clarity Finance</h1>
        <p>Smart Expense Tracking</p>
      </section>
    </main>
  )
}

function Welcome({ setScreen, goToApp }) {
  return (
    <main className="phone-shell">
      <section className="screen">
        <div className="hero-card">
          <div className="logo small">CF</div>
          <h1>Welcome to Clarity Finance</h1>
          <p>Your personal expense tracking companion.</p>
        </div>

        <div className="feature-grid">
          <Feature icon="📸" title="Smart Scanning" text="Scan receipts instantly." />
          <Feature icon="📊" title="Analytics" text="Track spending trends." />
          <Feature icon="🔒" title="Secure" text="Your data is protected." />
        </div>

        <button className="primary" onClick={() => setScreen('signup')}>Create Account</button>
        <button className="secondary" onClick={() => setScreen('login')}>Login</button>
        <button className="ghost" onClick={() => goToApp('dashboard')}>Continue as Guest</button>
      </section>
    </main>
  )
}

function Login({ setScreen, goToApp }) {
  return (
    <main className="phone-shell">
      <section className="screen">
        <button className="back" onClick={() => setScreen('welcome')}>← Back</button>
        <h2>Login</h2>
        <p className="muted">Welcome back! Sign in to your account.</p>

        <form className="form" onSubmit={(e) => { e.preventDefault(); setScreen('security') }}>
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="Enter password" required />

          <button className="primary" type="submit">Login</button>
        </form>

        <p className="center-text">Don't have an account? <button className="link" onClick={() => setScreen('signup')}>Create one</button></p>
        <button className="ghost" onClick={() => goToApp('dashboard')}>Continue as Guest</button>
      </section>
    </main>
  )
}

function Signup({ setScreen }) {
  return (
    <main className="phone-shell">
      <section className="screen">
        <button className="back" onClick={() => setScreen('welcome')}>← Back</button>
        <h2>Create Account</h2>
        <p className="muted">Join us and start tracking your expenses.</p>

        <form className="form" onSubmit={(e) => { e.preventDefault(); setScreen('security') }}>
          <label>Full Name</label>
          <input placeholder="Your name" required />

          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="Create password" required />

          <button className="primary" type="submit">Create Account</button>
        </form>

        <p className="center-text">Already have an account? <button className="link" onClick={() => setScreen('login')}>Login here</button></p>
      </section>
    </main>
  )
}

function Security({ goToApp }) {
  return (
    <main className="phone-shell">
      <section className="screen">
        <h2>Secure Your Account</h2>
        <p className="muted">Protect your financial data with extra security.</p>

        <div className="card row">
          <div>
            <h3>Biometric Authentication</h3>
            <p>Face ID / Fingerprint</p>
          </div>
          <input type="checkbox" />
        </div>

        <div className="card row">
          <div>
            <h3>Two-Factor Authentication</h3>
            <p>Extra security layer</p>
          </div>
          <input type="checkbox" />
        </div>

        <button className="primary" onClick={() => goToApp('dashboard')}>Secure My Account</button>
        <button className="ghost" onClick={() => goToApp('dashboard')}>Maybe Later</button>
      </section>
    </main>
  )
}

function Dashboard({ hideAmounts, setHideAmounts, goToApp }) {
  const totalBalance = 2450.5
  const monthlyBudget = 1500
  const spent = 1200
  const remaining = monthlyBudget - spent
  const budgetPercent = Math.round((spent / monthlyBudget) * 100)

  return (
    <>
      <div className="topbar">
        <div>
          <p className="muted">Hello, User</p>
          <h2>Dashboard</h2>
        </div>
        <button className="icon-btn" onClick={() => setHideAmounts(!hideAmounts)}>{hideAmounts ? '🙈' : '👁️'}</button>
      </div>

      <div className="balance-card">
        <p>Total Balance</p>
        <h1>{hideAmounts ? '••••••' : `$${totalBalance.toFixed(2)}`}</h1>
        <small>Card ending in 4829</small>
      </div>

      <div className="card">
        <div className="row">
          <h3>Monthly Budget</h3>
          <strong>${spent}/${monthlyBudget}</strong>
        </div>
        <div className="progress"><span style={{ width: `${budgetPercent}%` }} /></div>
        <p className="muted">${remaining} remaining this month</p>
      </div>

      <div className="row">
        <h3>Recent Transactions</h3>
        <button className="link" onClick={() => goToApp('transactions')}>View All →</button>
      </div>

      {transactions.slice(0, 3).map((item) => <TransactionItem key={item.id} item={item} hideAmounts={hideAmounts} />)}

      <div className="insight">💡 You're spending 20% more on groceries this month. Try meal planning to save money.</div>
    </>
  )
}

function Transactions({ hideAmounts, setHideAmounts }) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Food & Drink', 'Transportation', 'Groceries', 'Entertainment']
  const filtered = transactions.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'All' || item.category === filter
    return matchesSearch && matchesFilter
  })

  return (
    <>
      <div className="topbar">
        <h2>Transactions</h2>
        <button className="icon-btn" onClick={() => setHideAmounts(!hideAmounts)}>{hideAmounts ? '🙈' : '👁️'}</button>
      </div>

      <input className="search" placeholder="Search transactions..." value={search} onChange={(e) => setSearch(e.target.value)} />

      <div className="chips">
        {categories.map((category) => (
          <button key={category} className={filter === category ? 'chip active' : 'chip'} onClick={() => setFilter(category)}>{category}</button>
        ))}
      </div>

      {filtered.length ? filtered.map((item) => <TransactionItem key={item.id} item={item} hideAmounts={hideAmounts} />) : <p className="empty">No transactions found.</p>}
    </>
  )
}

function ScanReceipt({ goToApp }) {
  const [scanned, setScanned] = useState(false)

  if (scanned) {
    return (
      <>
        <h2>Review Receipt</h2>
        <div className="card">
          <h3>Starbucks</h3>
          <p className="muted">April 29, 2026</p>
          <div className="row"><span>Caffe Latte</span><strong>$4.50</strong></div>
          <div className="row"><span>Tax</span><strong>$1.00</strong></div>
          <hr />
          <div className="row total"><span>Total</span><strong>$5.50</strong></div>
          <p className="secure">🔒 End-to-End Encrypted</p>
        </div>
        <button className="primary" onClick={() => goToApp('dashboard')}>Save Receipt</button>
        <button className="secondary" onClick={() => setScanned(false)}>Scan Again</button>
      </>
    )
  }

  return (
    <>
      <h2>Scan Receipt</h2>
      <div className="camera-box">
        <div className="receipt-frame">📄</div>
      </div>
      <p className="muted center-text">Align the receipt within the frame. Make sure the text is clear.</p>
      <button className="primary" onClick={() => setScanned(true)}>Take Photo</button>
      <button className="ghost" onClick={() => goToApp('dashboard')}>Cancel</button>
    </>
  )
}

function Analytics() {
  const data = [65, 90, 75, 95, 70, 85, 60]
  return (
    <>
      <h2>Analytics</h2>
      <div className="card">
        <h3>Spending Trend</h3>
        <div className="chart">
          {data.map((value, index) => <span key={index} style={{ height: `${value}%` }} />)}
        </div>
      </div>

      <div className="feature-grid">
        <Feature icon="☕" title="Highest Spending" text="Food & Drink +15%" />
        <Feature icon="🎬" title="Lowest Spending" text="Entertainment -5%" />
        <Feature icon="📅" title="Daily Average" text="$42.50 Stable" />
      </div>

      <div className="card">
        <h3>Category Breakdown</h3>
        <div className="row"><span>☕ Food & Drink</span><strong>$380</strong></div>
        <div className="row"><span>🚗 Transportation</span><strong>$210</strong></div>
        <div className="row"><span>🛒 Groceries</span><strong>$170</strong></div>
        <div className="row"><span>🎬 Entertainment</span><strong>$85</strong></div>
      </div>
    </>
  )
}

function Profile({ setScreen }) {
  return (
    <>
      <h2>Profile</h2>
      <div className="profile-card">
        <div className="avatar">JD</div>
        <h3>John Doe</h3>
        <p>john@example.com</p>
      </div>

      <div className="card premium">
        <h3>Upgrade to Premium</h3>
        <p>Unlock advanced features and analytics.</p>
        <button className="secondary">Upgrade Now</button>
      </div>

      {['Face ID / Fingerprint', 'Two-Factor Authentication', 'Password', 'Privacy Settings', 'Notification Settings', 'About & Help'].map((item) => (
        <div className="settings-row" key={item}>
          <span>{item}</span>
          <strong>›</strong>
        </div>
      ))}

      <button className="danger" onClick={() => setScreen('welcome')}>Logout</button>
    </>
  )
}

function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    ['dashboard', '🏠', 'Home'],
    ['transactions', '📋', 'List'],
    ['scan', '📸', 'Scan'],
    ['analytics', '📊', 'Stats'],
    ['profile', '👤', 'Profile'],
  ]

  return (
    <nav className="bottom-nav">
      {tabs.map(([id, icon, label]) => (
        <button key={id} className={activeTab === id ? 'active' : ''} onClick={() => setActiveTab(id)}>
          <span>{icon}</span>
          {label}
        </button>
      ))}
    </nav>
  )
}

function Feature({ icon, title, text }) {
  return (
    <div className="card feature">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function TransactionItem({ item, hideAmounts }) {
  return (
    <div className="transaction">
      <div className="transaction-icon">{item.icon}</div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.category} • {item.date}</p>
      </div>
      <strong>{hideAmounts ? '•••' : `-$${item.amount.toFixed(2)}`}</strong>
    </div>
  )
}

export default App
