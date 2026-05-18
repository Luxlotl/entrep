# 💰 Clarity Finance - Smart Expense Tracking App

A beautifully designed, modern, and user-friendly mobile app UI for smart expense tracking with OCR receipt scanning and robust data privacy protection.

## ✨ Key Features

### 🎯 Pre-Login Experience
- **Splash Screen** with animated logo
- **3-Slide Onboarding** covering features, insights, and security
- **Welcome Screen** with feature highlights
- **Login/Sign Up** screens with social auth
- **Security Setup** with biometric and 2FA options

### 📊 Main Application

#### Dashboard
- Total balance display with privacy toggle
- Monthly budget progress tracking
- Spending by category pie chart
- Recent transactions list
- Smart spending insights
- Floating action button for receipt scanning

#### 📷 Scan Receipt
- Live camera interface with guide frame
- Auto-detection of amount, date, and store
- Editable receipt form
- End-to-end encryption indicator
- Category selection

#### 📋 Transactions
- Searchable transaction list
- Filter by category
- Privacy-aware amount display
- Detailed transaction information
- Empty state handling

#### 📈 Analytics
- Weekly/Monthly spending trends
- Interactive bar charts
- Spending insights cards
- Category breakdown
- Visual trend analysis

#### 👤 Profile
- User information card
- Premium subscription management
- Security settings (biometrics, 2FA, password)
- Account management options
- Logout functionality

## 🎨 Design System

### Colors
- **Primary Blue**: `#2563eb` - Trust and confidence
- **Secondary Green**: `#10b981` - Growth and success
- **Neutral Scale**: Complete gray palette for hierarchy
- **Semantic Colors**: Green (success), Orange (warning), Red (error)

### Typography
- **Font Family**: System UI sans-serif for optimal readability
- **Font Sizes**: Xs to 4xl with consistent scale
- **Font Weights**: Light to Bold for hierarchy

### Components
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Cards**: Elevated, gradient, with soft shadows
- **Forms**: Styled inputs with focus states
- **Charts**: SVG-based pie and bar charts
- **Navigation**: Bottom tab bar with 5 main sections

### Animations
- Smooth transitions and interactions
- Loading states and spinners
- Page transitions
- Button interactions

## 📁 Project Structure

```
clarity-finance/
├── src/
│   ├── App.jsx                     # Main app with routing
│   ├── App.css                     # App-level styles
│   ├── index.css                   # Design system & globals
│   ├── main.jsx                    # React entry point
│   ├── components/
│   │   ├── Icons.jsx               # Icon library (24+ icons)
│   │   ├── NavIcons.jsx            # Navigation icons
│   │   ├── PreAuthScreens.jsx      # Splash, onboarding, welcome
│   │   ├── AuthScreens.jsx         # Login, signup, security
│   │   ├── MainScreens.jsx         # Dashboard, scan
│   │   ├── AppScreens.jsx          # Transactions, analytics, profile
│   │   ├── Navigation.jsx          # Bottom navigation
│   │   ├── screens.css             # Screen styles
│   │   └── navigation.css          # Nav styles
│   └── styles/
│       ├── designSystem.css        # Design tokens
│       └── global.css              # Component styles
├── public/
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint rules
├── package.json
├── README.md
└── UI_DESIGN_GUIDE.md              # Detailed design documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
cd clarity-finance

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎬 App Navigation

**Splash Screen** (3 seconds)
↓
**Onboarding** (3 slides, skippable)
↓
**Welcome Screen**
├─ Create Account
├─ Login
└─ Continue as Guest
↓
**Security Setup** (optional)
↓
**Main App** (Bottom navigation):
- 📊 Dashboard
- 📋 Transactions
- 📷 Scan Receipt
- 📈 Analytics
- 👤 Profile

## 💡 Highlights

### Mobile-First Design
- Optimized for mobile devices (375px+)
- Touch-friendly interface
- Responsive layouts

### Data Privacy
- Privacy toggle on sensitive screens
- Encryption indicators
- Privacy settings in profile
- Clear data handling policies

### User Experience
- Smooth animations
- Clear visual hierarchy
- Consistent branding
- Responsive feedback
- Accessible UI

### Visual Design
- Modern gradients
- Soft shadows
- Rounded corners
- Ample whitespace
- Consistent color coding
- Professional typography

## 🔐 Security Features

- Biometric authentication option
- Two-factor authentication setup
- End-to-end encryption indicators
- Privacy-aware amount display
- Account security settings
- Data deletion option

## 📊 Data Visualization

- **Pie Charts**: Category distribution
- **Bar Charts**: Spending trends
- **Progress Bars**: Budget tracking
- **Metric Cards**: Key insights

## 🎯 Target Users

- 👨‍🎓 Students managing allowance
- 💼 Freelancers tracking project expenses
- 🏢 Small business owners monitoring cash flow
- 💰 Employees tracking reimbursements

## 📚 Documentation

For detailed design documentation and specifications, see [UI_DESIGN_GUIDE.md](./UI_DESIGN_GUIDE.md)

## 🛠️ Technologies

- **React 19.2.5** - UI library
- **Vite 8.0.10** - Build tool and dev server
- **CSS3** - Styling with CSS variables
- **JavaScript ES6+** - Core language

## 📝 License

This project is designed for educational and demonstration purposes.

## 🎨 Design Credits

Built as a comprehensive mobile app UI design showcasing:
- Modern fintech aesthetics
- Responsive design principles
- Component-based architecture
- User-centered design practices
- Accessibility best practices

---

**Ready to track your expenses with style!** 💰✨

