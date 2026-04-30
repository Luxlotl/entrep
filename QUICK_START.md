# 🚀 Quick Start Guide - Clarity Finance

## Getting Started

### 1. Installation & Setup
```bash
# Navigate to project directory
cd clarity-finance

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## 📱 App Flow

### On First Launch

1. **Splash Screen** (3 seconds)
   - Loading animation with logo
   - Auto-advances to next screen

2. **Onboarding** (Optional)
   - Slide 1: Features overview
   - Slide 2: Analytics & insights
   - Slide 3: Security & privacy
   - **Actions**: 
     - Click "Next" to advance slides
     - Click "Skip" to go directly to Welcome

3. **Welcome Screen**
   - Feature cards showcase
   - **Choose Action**:
     - "Create Account" → Sign Up screen
     - "Login" → Login screen
     - "Continue as Guest" → Dashboard (limited features)

### Authentication Flow

#### Option A: Create New Account
1. **Sign Up Screen**
   - Fill in: Name, Email, Password, Confirm Password
   - Agree to Privacy Policy & Terms
   - Click "Create Account"
   
2. **Security Setup**
   - Toggle Biometric Authentication (optional)
   - Toggle 2FA Setup (optional)
   - Click "Secure My Account"
   - Lands on Dashboard

#### Option B: Login
1. **Login Screen**
   - Enter Email/Username
   - Enter Password
   - Optional: Check "Remember me"
   - Click "Login"
   - Optional: Security Setup
   - Lands on Dashboard

#### Option C: Continue as Guest
- Skips auth entirely
- Limited to Dashboard and Analytics
- Prompted to create account in Profile

## 🎯 Main App Navigation

### Bottom Navigation Bar (Always Available)

```
📊 Dashboard | 📋 Transactions | 📷 Scan | 📈 Analytics | 👤 Profile
```

Click any icon to navigate to that section. Active tab is highlighted in blue.

### Dashboard (Home Screen)

**What You Can Do**:
1. View total balance (with privacy toggle)
2. Check monthly budget progress
3. See spending by category (pie chart)
4. View recent transactions
5. Read spending insights
6. **Tap floating camera button** → Opens Scan Receipt

**Key Features**:
- Privacy toggle (eye icon) hides/shows amounts
- Click "View All" on transactions → Goes to Transactions screen
- Scroll down for more content

### Scan Receipt Screen

**Steps**:
1. **Take Photo Phase**
   - Tap "Take Photo" button
   - Simulates camera scan (2-second delay)

2. **Review Phase** (Auto-transitions)
   - See scanned receipt details
   - Store name, date, items, total
   - Select category from dropdown
   - **Actions**:
     - "Save Receipt" → Returns to Dashboard
     - "Scan Again" → Back to camera mode

**Note**: Currently uses demo data. Real implementation would use OCR.

### Transactions Screen

**Features**:
1. **Search Bar**
   - Type store name or category
   - Real-time filtering

2. **Filter Chips**
   - All (default)
   - ☕ Food & Drink
   - 🚗 Transportation
   - 🛒 Groceries
   - 🎬 Entertainment

3. **Privacy Toggle**
   - Click eye icon in header
   - Hides/shows transaction amounts

4. **Transaction List**
   - Click any transaction (interactive)
   - Shows: Store, Category, Amount, Date/Time

**Try This**:
- Type "Starbucks" in search
- Click "Food & Drink" filter
- Toggle privacy to hide amounts

### Analytics Screen

**Features**:
1. **Period Toggle**
   - "Week" → 7 bars of data
   - "Month" → 12 bars of data

2. **Spending Trend Chart**
   - Visual bar chart
   - Shows spending patterns

3. **Insight Cards**
   - Highest spending category
   - Lowest spending category
   - Daily average

4. **Category Breakdown**
   - Horizontal bars for each category
   - Percentage and amount shown

**Try This**:
- Toggle between Week and Month
- Watch chart update
- Notice percentage changes

### Profile Screen

**Sections**:
1. **User Info**
   - View name and email

2. **Premium Section**
   - Click "Upgrade Now" to activate premium
   - See premium features list

3. **Security Settings**
   - Biometric status
   - 2FA status
   - Password info

4. **Account Settings**
   - Backup, Privacy, Notifications
   - Help & Feedback
   - (Currently show placeholder)

5. **Logout**
   - Red button at bottom
   - Returns to Welcome screen

## 🎨 UI Elements You'll See

### Buttons
- **Blue buttons** = Primary action (important)
- **Green buttons** = Secondary/positive action
- **Outline buttons** = Alternative action
- **Ghost buttons** = Less important action
- All buttons respond to hover/click

### Cards
- White containers with subtle shadows
- Hover effect (shadow increases)
- Organized information
- Consistent spacing

### Forms
- Clear labels above inputs
- Placeholder text in gray
- Focus effect: blue border + glow
- Error messages in red

### Colors & Meaning
- **Blue** = Trust, primary actions
- **Green** = Success, positive trends, good spending
- **Orange** = Warning, approaching budget limit
- **Red** = Error, overspending
- **Gray** = Neutral, less important

## 💡 Tips & Tricks

### Navigation
- Use bottom tabs to move between main sections
- Use header back buttons to go back
- Each screen updates based on what you're doing

### Testing Features
1. **Privacy Toggle**
   - Click eye icon on Dashboard
   - Amounts hide/show

2. **Search & Filter**
   - Type in Transactions search
   - Click filter chips
   - List updates in real-time

3. **Form Validation**
   - Sign up with mismatched passwords
   - Error message appears
   - Button stays disabled

4. **Interactive Charts**
   - Analytics: Toggle Week/Month
   - Charts update smoothly

### Mock Data
- Pre-filled transactions and data
- Realistic examples
- Good for UI testing

## 🔧 Customization

### Change Colors
Edit `src/index.css` CSS variables:
```css
:root {
  --primary-blue: #2563eb;    /* Change primary color */
  --secondary-green: #10b981; /* Change secondary color */
}
```

### Change Content
Edit component files:
- `src/components/MainScreens.jsx` → Dashboard content
- `src/components/AppScreens.jsx` → Other screens
- `src/components/PreAuthScreens.jsx` → Welcome content

### Add New Icons
Edit `src/components/Icons.jsx`:
- Add SVG components
- Use in screens
- Style with CSS classes

## 📖 Documentation

For more details, see:
- **README.md** - Project overview
- **UI_DESIGN_GUIDE.md** - Design system details
- **DESIGN_OVERVIEW.md** - Screen-by-screen features
- **IMPLEMENTATION_SUMMARY.md** - What's built

## 🎯 Next Steps

### To Deploy
```bash
npm run build
# Deploy the dist/ folder to your hosting
```

### To Add Backend
1. Install axios or fetch library
2. Replace mock data with API calls
3. Add authentication tokens
4. Connect to real database

### To Add More Features
1. Create new component in `src/components/`
2. Add screen to App.jsx routing
3. Add navigation if needed
4. Style with screens.css

## 🐛 Troubleshooting

### App won't start
- Run `npm install` again
- Clear node_modules and reinstall
- Check Node.js version (16+)

### Styles not showing
- Check CSS file imports in components
- Verify file paths match
- Clear browser cache

### Navigation not working
- Check currentScreen state in App.jsx
- Verify screen names match exactly
- Check console for errors

## 📞 Support

If you need help:
1. Check the documentation files
2. Review component source code
3. Check browser console for errors
4. Verify file structure matches

---

**Ready to explore the app? Start by running `npm run dev`!** 🚀

Enjoy exploring Clarity Finance! 💰✨
