/* ================= APP.JS ================= */
document.addEventListener("DOMContentLoaded", () => {
  
  // ---------------- DOM ELEMENT REFERENCES ---------------- //
  const screens = {
    splash: document.getElementById("screen-splash"),
    onboarding: document.getElementById("screen-onboarding"),
    welcome: document.getElementById("screen-welcome"),
    login: document.getElementById("screen-login"),
    signup: document.getElementById("screen-signup"),
    dashboard: document.getElementById("screen-dashboard"),
  };

  // Onboarding Nodes
  const slidesContainer = document.getElementById("slides-container");
  const onboardingDots = document.querySelectorAll("#onboarding-dots .dot-nav");
  const btnOnboardingAction = document.getElementById("btn-onboarding-action");
  const btnOnboardingSkip = document.getElementById("btn-onboarding-skip");

  // Welcome Nodes
  const btnWelcomeSignup = document.getElementById("btn-welcome-signup");
  const btnWelcomeLogin = document.getElementById("btn-welcome-login");
  const btnWelcomeGuest = document.getElementById("btn-welcome-guest");

  // Login Nodes
  const btnLoginBack = document.getElementById("btn-login-back");
  const formLogin = document.getElementById("form-login");
  const loginEmail = document.getElementById("login-email");
  const loginPassword = document.getElementById("login-password");
  const btnLoginPwToggle = document.getElementById("btn-login-pw-toggle");
  const linkForgotPw = document.getElementById("link-forgot-pw");
  const btnLoginGoogle = document.getElementById("btn-login-google");
  const btnLoginFacebook = document.getElementById("btn-login-facebook");
  const linkGotoSignup = document.getElementById("link-goto-signup");

  // Signup Nodes
  const btnSignupBack = document.getElementById("btn-signup-back");
  const formSignup = document.getElementById("form-signup");
  const signupName = document.getElementById("signup-name");
  const signupEmail = document.getElementById("signup-email");
  const signupPassword = document.getElementById("signup-password");
  const signupConfirmPassword = document.getElementById("signup-confirm-password");
  const btnSignupPwToggle = document.getElementById("btn-signup-pw-toggle");
  const btnSignupConfirmPwToggle = document.getElementById("btn-signup-confirm-pw-toggle");
  const signupPasswordError = document.getElementById("signup-password-error");
  const signupTerms = document.getElementById("signup-terms");
  const btnSignupSubmit = document.getElementById("btn-signup-submit");
  const btnSignupGoogle = document.getElementById("btn-signup-google");
  const btnSignupFacebook = document.getElementById("btn-signup-facebook");
  const linkGotoLogin = document.getElementById("link-goto-login");

  // Dashboard Nodes
  const dashboardUserGreeting = document.getElementById("dashboard-user-greeting");
  const transactionList = document.getElementById("dashboard-transaction-list");
  const navHome = document.getElementById("nav-home");
  const navScan = document.getElementById("nav-scan");
  const navAnalytics = document.getElementById("nav-analytics");
  const navLogout = document.getElementById("nav-logout");
  const welcomeFeatureCards = document.querySelectorAll(".feature-card");

  // Camera OCR Overlay Nodes
  const cameraOverlay = document.getElementById("camera-overlay");
  const btnCameraClose = document.getElementById("btn-camera-close");
  const btnCameraSnap = document.getElementById("btn-camera-snap");
  const ocrLoader = document.getElementById("ocr-loader");

  // ---------------- STATE VARIABLES ---------------- //
  let currentOnboardingSlideIndex = 0;
  let ocrReceiptScanCount = 0;

  // Set Current Date/Time in Simulator top header
  function updateSimulatorTime() {
    const timeDisplay = document.getElementById("status-time");
    if (timeDisplay) {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      timeDisplay.textContent = `${hours}:${minutes}`;
    }
  }
  updateSimulatorTime();
  setInterval(updateSimulatorTime, 1000 * 60); // update every minute

  // ---------------- NAVIGATION ROUTER ---------------- //
  function navigateTo(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
      screen.classList.remove("active");
    });
    
    // Show designated screen
    if (screens[screenName]) {
      screens[screenName].classList.add("active");
    }
  }

  // ---------------- 1. SPLASH SCREEN SEQUENCE ---------------- //
  // Auto transition to Onboarding after 3 seconds
  setTimeout(() => {
    navigateTo("onboarding");
  }, 3000);

  // ---------------- 2. ONBOARDING SLIDES CONTROLLER ---------------- //
  function updateOnboardingSlide(index) {
    currentOnboardingSlideIndex = index;
    
    // Slide container translation (3 slides = 0%, -33.333%, -66.666%)
    const offsetPercent = -33.3333 * index;
    slidesContainer.style.transform = `translateX(${offsetPercent}%)`;
    
    // Toggle active classes on dots
    onboardingDots.forEach((dot, dotIdx) => {
      if (dotIdx === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Update active class on slides for fade effects
    const slides = document.querySelectorAll(".slides-container .slide");
    slides.forEach((slide, sIdx) => {
      if (sIdx === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    // Handle final slide CTA content
    if (index === 2) {
      btnOnboardingAction.textContent = "Get Started";
    } else {
      btnOnboardingAction.textContent = "Next";
    }
  }

  // Handle dot clicks
  onboardingDots.forEach((dot, dotIdx) => {
    dot.addEventListener("click", () => {
      updateOnboardingSlide(dotIdx);
    });
  });

  // Handle Next button click
  btnOnboardingAction.addEventListener("click", () => {
    if (currentOnboardingSlideIndex < 2) {
      updateOnboardingSlide(currentOnboardingSlideIndex + 1);
    } else {
      // Finished onboarding, go to Welcome
      navigateTo("welcome");
    }
  });

  // Handle Skip onboarding
  btnOnboardingSkip.addEventListener("click", () => {
    navigateTo("welcome");
  });

  // ---------------- 3. WELCOME SCREEN CTAS ---------------- //
  btnWelcomeSignup.addEventListener("click", () => navigateTo("signup"));
  btnWelcomeLogin.addEventListener("click", () => navigateTo("login"));
  btnWelcomeGuest.addEventListener("click", () => {
    dashboardUserGreeting.textContent = "Hello, Guest";
    navigateTo("dashboard");
  });

  // Welcome Feature Card interactions
  welcomeFeatureCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      // 0: Smart Scanning, 1: Analytics, 2: Secure
      if (index === 0) {
        // Go straight to camera scanning overlay inside dashboard context
        dashboardUserGreeting.textContent = "Hello, Guest";
        navigateTo("dashboard");
        setTimeout(() => {
          openCameraOverlay();
        }, 500);
      } else if (index === 1) {
        // Go to dashboard
        dashboardUserGreeting.textContent = "Hello, Guest";
        navigateTo("dashboard");
      } else {
        // Go to signup
        navigateTo("signup");
      }
    });
  });

  // ---------------- 4. LOGIN ACTIONS ---------------- //
  btnLoginBack.addEventListener("click", () => navigateTo("welcome"));
  linkGotoSignup.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("signup");
  });

  // Password Reveal Toggle
  btnLoginPwToggle.addEventListener("click", () => {
    const eyeOpen = btnLoginPwToggle.querySelector(".eye-open");
    const eyeClosed = btnLoginPwToggle.querySelector(".eye-closed");
    
    if (loginPassword.type === "password") {
      loginPassword.type = "text";
      eyeOpen.classList.add("hidden");
      eyeClosed.classList.remove("hidden");
    } else {
      loginPassword.type = "password";
      eyeOpen.classList.remove("hidden");
      eyeClosed.classList.add("hidden");
    }
  });

  // Handle Social Login clicks
  [btnLoginGoogle, btnLoginFacebook, btnForgotPw].forEach(btn => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        // Simulate immediate success as guest/authorized identity
        dashboardUserGreeting.textContent = "Hello, Clarity Member";
        navigateTo("dashboard");
      });
    }
  });

  // Submit Login
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailVal = loginEmail.value.trim();
    // Extract simple username prefix from email if valid
    let username = "User";
    if (emailVal.includes("@")) {
      username = emailVal.split("@")[0];
    } else if (emailVal) {
      username = emailVal;
    }
    // Capitalize first letter
    username = username.charAt(0).toUpperCase() + username.slice(1);
    
    dashboardUserGreeting.textContent = `Hello, ${username}`;
    formLogin.reset();
    navigateTo("dashboard");
  });

  // ---------------- 5. SIGNUP ACTIONS & VALIDATIONS ---------------- //
  btnSignupBack.addEventListener("click", () => navigateTo("welcome"));
  linkGotoLogin.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("login");
  });

  // Eye Toggles
  btnSignupPwToggle.addEventListener("click", () => {
    const eyeOpen = btnSignupPwToggle.querySelector(".eye-open");
    const eyeClosed = btnSignupPwToggle.querySelector(".eye-closed");
    if (signupPassword.type === "password") {
      signupPassword.type = "text";
      eyeOpen.classList.add("hidden");
      eyeClosed.classList.remove("hidden");
    } else {
      signupPassword.type = "password";
      eyeOpen.classList.remove("hidden");
      eyeClosed.classList.add("hidden");
    }
  });

  btnSignupConfirmPwToggle.addEventListener("click", () => {
    const eyeOpen = btnSignupConfirmPwToggle.querySelector(".eye-open");
    const eyeClosed = btnSignupConfirmPwToggle.querySelector(".eye-closed");
    if (signupConfirmPassword.type === "password") {
      signupConfirmPassword.type = "text";
      eyeOpen.classList.add("hidden");
      eyeClosed.classList.remove("hidden");
    } else {
      signupConfirmPassword.type = "password";
      eyeOpen.classList.remove("hidden");
      eyeClosed.classList.add("hidden");
    }
  });

  // Real-time signup form validation checks
  function validateSignupForm() {
    const nameVal = signupName.value.trim();
    const emailVal = signupEmail.value.trim();
    const passVal = signupPassword.value;
    const confirmPassVal = signupConfirmPassword.value;
    const termsChecked = signupTerms.checked;

    let isNameValid = nameVal.length >= 2;
    let isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
    let isPasswordValid = passVal.length >= 8;
    let isPasswordsMatching = passVal === confirmPassVal;

    // Show/Hide password mismatch error overlay
    if (confirmPassVal.length > 0 && !isPasswordsMatching) {
      signupPasswordError.classList.remove("hidden");
    } else {
      signupPasswordError.classList.add("hidden");
    }

    // Enable or disable Submit CTA based on holistic criteria
    if (isNameValid && isEmailValid && isPasswordValid && isPasswordsMatching && termsChecked) {
      btnSignupSubmit.removeAttribute("disabled");
    } else {
      btnSignupSubmit.setAttribute("disabled", "true");
    }
  }

  // Bind validations to form inputs
  [signupName, signupEmail, signupPassword, signupConfirmPassword].forEach(input => {
    input.addEventListener("input", validateSignupForm);
  });
  signupTerms.addEventListener("change", validateSignupForm);

  // Social Signups
  [btnSignupGoogle, btnSignupFacebook].forEach(btn => {
    btn.addEventListener("click", () => {
      dashboardUserGreeting.textContent = "Hello, Clarity Member";
      navigateTo("dashboard");
    });
  });

  // Submit Sign Up Form
  formSignup.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameVal = signupName.value.trim();
    dashboardUserGreeting.textContent = `Hello, ${nameVal.split(" ")[0]}`;
    
    // Clear forms and state
    formSignup.reset();
    btnSignupSubmit.setAttribute("disabled", "true");
    navigateTo("dashboard");
  });

  // ---------------- 6. DASHBOARD & TAB CONTROLS ---------------- //
  function resetNavTabs() {
    [navHome, navScan, navAnalytics].forEach(tab => {
      tab.classList.remove("active");
    });
  }

  navHome.addEventListener("click", () => {
    resetNavTabs();
    navHome.classList.add("active");
  });

  navScan.addEventListener("click", () => {
    openCameraOverlay();
  });

  navAnalytics.addEventListener("click", () => {
    resetNavTabs();
    navAnalytics.classList.add("active");
    alert("Analytics Insights Section: Simulated analysis displays loaded with HSL precision charts!");
  });

  navLogout.addEventListener("click", () => {
    resetNavTabs();
    navHome.classList.add("active");
    navigateTo("welcome");
  });

  // ---------------- 7. OCR CAMERA SCANNER SIMULATION ---------------- //
  function openCameraOverlay() {
    cameraOverlay.classList.remove("hidden");
    // Ensure scanner laser line animation runs smoothly
    document.getElementById("camera-line").style.animationPlayState = "running";
  }

  function closeCameraOverlay() {
    cameraOverlay.classList.add("hidden");
    document.getElementById("camera-line").style.animationPlayState = "paused";
  }

  btnCameraClose.addEventListener("click", closeCameraOverlay);

  btnCameraSnap.addEventListener("click", () => {
    // Show OCR Loader spinner
    ocrLoader.classList.remove("hidden");
    
    // Simulate OCR delay of 2.5 seconds
    setTimeout(() => {
      ocrLoader.classList.add("hidden");
      closeCameraOverlay();
      
      // Increment scanned receipts counts to vary transaction items inserted
      ocrReceiptScanCount++;
      
      // Create new transaction element node
      const newTx = document.createElement("div");
      newTx.className = "transaction-item";
      
      // Inject varying realistic receipts values
      let title, category, value, icon, iconClass;
      if (ocrReceiptScanCount % 2 === 1) {
        title = "Canned Roastery";
        category = "Food & Cafe";
        value = "-$11.94";
        icon = "☕";
        iconClass = "tx-cafe";
      } else {
        title = "Target Store #283";
        category = "Shopping";
        value = "-$42.60";
        icon = "🛒";
        iconClass = "tx-grocery";
      }
      
      newTx.innerHTML = `
        <div class="tx-icon ${iconClass}">${icon}</div>
        <div class="tx-details">
          <span class="tx-title">${title}</span>
          <span class="tx-timestamp">Just Scanned • OCR Verified</span>
        </div>
        <div class="tx-value negative">${value}</div>
      `;
      
      // Prepend at the absolute top of the scrollable list
      transactionList.insertBefore(newTx, transactionList.firstChild);
      
      // Apply immediate highlight glow animation style to the newly inserted transaction item
      newTx.style.background = "rgba(16, 185, 129, 0.12)";
      newTx.style.border = "1px solid rgba(16, 185, 129, 0.3)";
      newTx.style.transform = "scale(1.02)";
      newTx.style.transition = "all 0.5s ease";
      
      // Fade to normal background after 3 seconds
      setTimeout(() => {
        newTx.style.background = "rgba(255,255,255,0.02)";
        newTx.style.border = "1px solid rgba(255,255,255,0.04)";
        newTx.style.transform = "scale(1)";
      }, 3000);

      // Increment home ledger display balances by simulated transaction amount
      const balDisplay = document.querySelector(".balance-amount");
      const expensesDisplay = document.querySelector(".sub-detail-val:nth-child(2)");
      if (balDisplay) {
        let currentBal = parseFloat(balDisplay.textContent.replace("$", "").replace(",", ""));
        let ded = (ocrReceiptScanCount % 2 === 1) ? 11.94 : 42.60;
        let nextBal = currentBal - ded;
        balDisplay.textContent = `$${nextBal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
      }

    }, 2500);
  });

});
