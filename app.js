// Security Website JavaScript - Enhanced functionality with animations

// Define dark mode CSS variables
const darkModeVariables = {
    '--color-gray-400-rgb': '119, 124, 124',
    '--color-teal-300-rgb': '50, 184, 198',
    '--color-gray-300-rgb': '167, 169, 169',
    '--color-gray-200-rgb': '245, 245, 245',
    '--color-background': '#1f2121',
    '--color-surface': '#262828',
    '--color-text': '#f5f5f5',
    '--color-text-secondary': 'rgba(167, 169, 169, 0.7)',
    '--color-primary': 'rgb(50, 184, 198)',
    '--color-primary-hover': 'rgb(45, 166, 178)',
    '--color-primary-active': 'rgb(41, 150, 161)',
    '--color-secondary': 'rgba(119, 124, 124, 0.15)',
    '--color-secondary-hover': 'rgba(119, 124, 124, 0.25)',
    '--color-secondary-active': 'rgba(119, 124, 124, 0.3)',
    '--color-border': 'rgba(119, 124, 124, 0.3)',
    '--color-error': '#ff5459',
    '--color-success': 'rgb(50, 184, 198)',
    '--color-warning': '#e68161',
    '--color-info': '#a7a9a9',
    '--color-focus-ring': 'rgba(50, 184, 198, 0.4)',
    '--color-btn-primary-text': '#134252',
    '--color-card-border': 'rgba(119, 124, 124, 0.15)',
};

const lightModeVariables = {
    '--color-brown-600-rgb': '94, 82, 64',
    '--color-teal-500-rgb': '33, 128, 141',
    '--color-slate-900-rgb': '19, 52, 59',
    '--color-background': '#fcfcf9',
    '--color-surface': '#fffff5',
    '--color-text': '#134253',
    '--color-text-secondary': '#626c71',
    '--color-primary': 'rgb(33, 128, 141)',
    '--color-primary-hover': 'rgb(29, 116, 128)',
    '--color-primary-active': 'rgb(26, 104, 115)',
    '--color-secondary': 'rgba(94, 82, 64, 0.12)',
    '--color-secondary-hover': 'rgba(94, 82, 64, 0.2)',
    '--color-secondary-active': 'rgba(94, 82, 64, 0.25)',
    '--color-border': 'rgba(94, 82, 64, 0.2)',
    '--color-error': '#c0152f',
    '--color-success': 'rgb(33, 128, 141)',
    '--color-warning': '#a84b2f',
    '--color-info': '#626c71',
    '--color-focus-ring': 'rgba(33, 128, 141, 0.4)',
    '--color-btn-primary-text': '#fcfcf9',
    '--color-card-border': 'rgba(94, 82, 64, 0.12)',
};

// Global theme functions (must be defined before DOMContentLoaded for inline onclick)
function toggleTheme() {
    console.log('toggleTheme called!');
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = html.getAttribute('data-color-scheme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    console.log('Switching from', currentTheme, 'to', newTheme);
    
    // Apply theme CSS variables with !important
    const vars = newTheme === 'dark' ? darkModeVariables : lightModeVariables;
    Object.entries(vars).forEach(([key, value]) => {
        html.style.setProperty(key, value, 'important');
    });
    
    // Force body background/text update
    document.body.style.setProperty('background-color', newTheme === 'dark' ? '#1f2121' : '#fcfcf9', 'important');
    document.body.style.setProperty('color', newTheme === 'dark' ? '#f5f5f5' : '#134253', 'important');
    
    // Update data attribute and classes
    html.setAttribute('data-color-scheme', newTheme);
    html.classList.remove('theme-light', 'theme-dark');
    html.classList.add('theme-' + newTheme);
    html.style.colorScheme = newTheme;
    
    // Update button
    if (themeToggle) {
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        themeToggle.title = newTheme === 'dark' ? 'Светла тема' : 'Тъмна тема';
    }
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    console.log('✓ Theme changed to:', newTheme);
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initThemeToggle();
    initMobileNavigation();
    initFAQ();
    initContactForm();
    initScrollAnimations();
    initStatsCounter();
    initSmoothScrolling();
    initHeaderScroll();
    initFormAnimations();
    initButtonAnimations();
    initStaggeredAnimations();
    initParallaxEffects();
    initFloatingAnimations();
    initImageRevealAnimations();
    initBackgroundVisibility();
    initPageTransitions();
    initBlogModal();
    initImageModal();
    initStickyContact();
    initCookieConsent();
    initEmailJS();
});

function initEmailJS() {
    emailjs.init("xH47zAtDwI1ufht24"); // Replace with your EmailJS Public Key
    window.EMAILJS_SERVICE_ID = "service_sx02sld"; // Replace with your EmailJS Service ID
    window.EMAILJS_TEMPLATE_ID = "template_9mzfwm8"; // Replace with your EmailJS Template ID
}

// Theme Toggle initialization
function initThemeToggle() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    
    console.log('=== initThemeToggle ===');
    
    // Check system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    console.log('Saved theme:', savedTheme);
    console.log('System prefers dark:', prefersDark);
    console.log('Initial theme:', initialTheme);
    
    // Apply theme CSS variables with !important
    const vars = initialTheme === 'dark' ? darkModeVariables : lightModeVariables;
    Object.entries(vars).forEach(([key, value]) => {
        html.style.setProperty(key, value, 'important');
    });
    
    // Force body background/text update
    document.body.style.setProperty('background-color', initialTheme === 'dark' ? '#1f2121' : '#fcfcf9', 'important');
    document.body.style.setProperty('color', initialTheme === 'dark' ? '#f5f5f5' : '#134253', 'important');
    
    // Set attributes and classes
    html.setAttribute('data-color-scheme', initialTheme);
    html.classList.remove('theme-light', 'theme-dark');
    html.classList.add('theme-' + initialTheme);
    html.style.colorScheme = initialTheme;
    
    // Update button
    if (themeToggle) {
        themeToggle.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
        themeToggle.title = initialTheme === 'dark' ? 'Светла тема' : 'Тъмна тема';
    }
    
    console.log('✓ Theme initialized:', initialTheme);
}

// Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__list a');

    if (navToggle && nav) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            nav.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Reset hamburger animation
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Reset hamburger animation
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// FAQ Accordion with enhanced animations
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function(e) {
                e.preventDefault();
                const isActive = item.classList.contains('active');
                
                // Close all other items with animation
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0';
                        }
                    }
                });
                
                // Toggle current item with enhanced animation
                if (isActive) {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0';
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    
                    // Add subtle bounce effect
                    setTimeout(() => {
                        answer.style.transform = 'scale(1.01)';
                        setTimeout(() => {
                            answer.style.transform = 'scale(1)';
                        }, 150);
                    }, 100);
                }
            });
        }
    });
}

// Contact Form Handling with enhanced validation
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous error states
            clearFormErrors();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name')?.trim();
            const phone = formData.get('phone')?.trim();
            const email = formData.get('email')?.trim();
            const service = formData.get('service');
            const message = formData.get('message')?.trim();
            
            let hasErrors = false;
            
            // Validate fields
            if (!name) {
                showFieldError('name', 'Моля, въведете вашето име.');
                hasErrors = true;
            }
            
            if (!phone) {
                showFieldError('phone', 'Моля, въведете телефонен номер.');
                hasErrors = true;
            }
            
            if (email && !isValidEmail(email)) {
                showFieldError('email', 'Моля, въведете валиден имейл адрес.');
                hasErrors = true;
            }
            
            if (hasErrors) {
                showNotification('Моля, коригирайте грешките във формуляра.', 'error');
                return;
            }
            
            // Submit form
            submitForm(form);
        });
    }
}

// Form validation helpers
function isValidBulgarianPhone(phone) {
    const cleaned = phone.replace(/[\s\-]/g, '');
    const phoneRegex = /^(\+359|0)[0-9]{8,9}$/;
    return phoneRegex.test(cleaned);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearFormErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.remove());
    
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => control.classList.remove('error'));
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    if (field) {
        field.classList.add('error');
        
        // Add shake animation
        field.style.animation = 'shake 0.4s ease-in-out';
        setTimeout(() => {
            field.style.animation = '';
        }, 400);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        field.parentElement.appendChild(errorDiv);
    }
}

function submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Изпращане...';
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    
    // Get form data
    const formData = new FormData(form);
    const templateParams = {
        from_name: formData.get('name'),
        from_phone: formData.get('phone'),
        from_email: formData.get('email') || 'Не е посочен',
        service: formData.get('service') || 'Не е избрана услуга',
        message: formData.get('message') || 'Няма съобщение',
        to_email: 'dt3rziyski@gmail.com' // Your email address
    };
    
    // Check if EmailJS is configured
    if (!window.EMAILJS_SERVICE_ID || window.EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        !window.EMAILJS_TEMPLATE_ID || window.EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
        // Fallback: Show success message (form won't actually send email)
        console.warn('EmailJS not configured. Please set up EmailJS to send emails.');
        showNotification('EmailJS не е конфигуриран. Моля, настройте EmailJS за изпращане на имейли.', 'error');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
        return;
    }
    
    // Send email using EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.send(
            window.EMAILJS_SERVICE_ID,
            window.EMAILJS_TEMPLATE_ID,
            templateParams
        )
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            showNotification('Благодарим за заявката! Ще се свържем с вас в рамките на 24 часа.', 'success');
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
            
            // Add success animation to form
            form.style.transform = 'scale(1.02)';
            setTimeout(() => {
                form.style.transform = 'scale(1)';
            }, 200);
        }, function(error) {
            console.error('Email sending failed:', error);
            showNotification('Възникна грешка при изпращането на заявката. Моля, опитайте отново или се обадете на +359 878 439 577.', 'error');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
        });
    } else {
        // EmailJS library not loaded
        showNotification('EmailJS библиотеката не е заредена. Моля, проверете интернет връзката.', 'error');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const colors = {
        error: '#ef4444',
        success: '#10b981',
        info: '#3b82f6'
    };
    
    const icons = {
        error: '⚠️',
        success: '✅',
        info: 'ℹ️'
    };
    
    const bgColor = colors[type] || colors.info;
    const icon = icons[type] || icons.info;
    
    notification.innerHTML = `
        <div class="notification__content">
            <span class="notification__icon">${icon}</span>
            <span class="notification__message">${message}</span>
            <button class="notification__close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
        backdrop-filter: blur(10px);
    `;
    
    // Ensure animation styles exist
    ensureNotificationStyles();
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function ensureNotificationStyles() {
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            .notification__content { 
                display: flex; 
                align-items: center; 
                gap: 12px; 
            }
            .notification__icon {
                font-size: 18px;
                flex-shrink: 0;
            }
            .notification__close { 
                background: none; 
                border: none; 
                color: white; 
                font-size: 20px; 
                font-weight: bold;
                cursor: pointer; 
                padding: 0;
                line-height: 1;
                min-width: 24px;
                opacity: 0.8;
                transition: opacity 0.2s;
                margin-left: auto;
                flex-shrink: 0;
            }
            .notification__close:hover {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
}

// Image modal (open/close) - used by gallery items in index.html
function initImageModal() {
    // expose global functions so inline onclick in HTML works
    window.openImageModal = function(src, alt) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        if (!modal || !modalImg) return;

        modalImg.src = src;
        if (alt) modalImg.alt = alt;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // focus close button for accessibility
        const closeBtn = modal.querySelector('.gallery-modal__close');
        if (closeBtn) closeBtn.focus();
    };

    window.closeImageModal = function(e) {
        // allow passing event or nothing
        try { if (e && e.preventDefault) e.preventDefault(); } catch (err) {}
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        if (!modal) return;

        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        // clear src after animation to free memory
        setTimeout(() => {
            if (modalImg) modalImg.src = '';
        }, 300);
    };

    // Close on ESC key
    document.addEventListener('keydown', function(ev) {
        if (ev.key === 'Escape') {
            const modal = document.getElementById('imageModal');
            if (modal && modal.classList.contains('active')) {
                window.closeImageModal(ev);
            }
        }
    });
}

// Statistics Counter Animation
function initStatsCounter() {
    const statsSection = document.querySelector('.stats');
    const stats = document.querySelectorAll('.stat__number[data-count]');
    const statContainers = document.querySelectorAll('.stat');
    
    if (!statsSection || stats.length === 0) return;
    
    let hasAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                
                // Animate stat containers first
                statContainers.forEach((stat, index) => {
                    setTimeout(() => {
                        stat.classList.add('animate');
                        stat.style.transform = 'translateY(0) scale(1.05)';
                        setTimeout(() => {
                            stat.style.transform = 'translateY(0) scale(1)';
                        }, 200);
                    }, index * 150);
                });
                
                // Then animate counters
                setTimeout(() => {
                    stats.forEach((stat, index) => {
                        setTimeout(() => {
                            animateCounter(stat);
                        }, index * 200);
                    });
                }, 300);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
    });
    
    observer.observe(statsSection);
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2500;
    const start = Date.now();
    
    function update() {
        const now = Date.now();
        const progress = Math.min((now - start) / duration, 1);
        
        // Use easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);
        
        const suffix = element.getAttribute('data-suffix') || '';
        element.textContent = `${current}${suffix}`;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = `${target}${suffix}`;
            // Add pulse effect when animation completes
            element.classList.add('pulse');
            setTimeout(() => {
                element.classList.remove('pulse');
            }, 800);
        }
    }
    
    update();
}

// Enhanced Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 70;
                const rect = targetElement.getBoundingClientRect();
                const absoluteY = window.pageYOffset + rect.top;
                const top = Math.max(0, absoluteY - headerHeight - 20);
                window.scrollTo({ top, behavior: 'smooth' });
                if (history && history.pushState) {
                    history.pushState(null, '', targetId);
                }
            }
        });
    });
}

// Scroll to section function (for buttons)
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 70;
        const rect = element.getBoundingClientRect();
        const absoluteY = window.pageYOffset + rect.top;
        const top = Math.max(0, absoluteY - headerHeight - 20);
        window.scrollTo({ top, behavior: 'smooth' });
    }
}

// Enhanced header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = 0;
    let ticking = false;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.style.background = 'rgba(26, 54, 93, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            header.style.background = '#1a365d';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.borderBottom = 'none';
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Enhanced scroll animations for elements
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.contact-item, .service__image-placeholder'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial state
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px) scale(0.95)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(element);
    });
}

// Enhanced form animations and interactions
function initFormAnimations() {
    const formControls = document.querySelectorAll('.form-control');
    
    formControls.forEach(control => {
        // Focus animations
        control.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.2s ease-out';
            this.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.2)';
        });
        
        control.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
            if (!this.value.trim()) {
                this.parentElement.classList.remove('focused');
            }
            
            // Remove error state on blur if field now has valid value
            if (this.classList.contains('error') && this.value.trim()) {
                this.classList.remove('error');
                const errorMessage = this.parentElement.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        });
        
        // Real-time validation with animations
        control.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                // Remove error state if user starts typing
                this.classList.remove('error');
                const errorMessage = this.parentElement.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.style.animation = 'fadeOut 0.3s ease-out';
                    setTimeout(() => {
                        errorMessage.remove();
                    }, 300);
                }
            }
        });
        
        // Check if field has value on load
        if (control.value.trim()) {
            control.parentElement.classList.add('focused');
        }
    });
}

// Enhanced button interactions with ripple effect
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Add ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        button.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '';
            }
        });
        
        button.addEventListener('mousedown', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0) scale(0.98)';
            }
        });
        
        button.addEventListener('mouseup', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px) scale(1)';
            }
        });
    });
    
    // Add ripple animation to stylesheet
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            @keyframes fadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced intersection Observer for staggered animations
function initStaggeredAnimations() {
    const featureGroups = document.querySelectorAll('.features-grid .feature');
    const serviceGroups = document.querySelectorAll('.services-grid .service');
    const stepGroups = document.querySelectorAll('.process-steps .step');
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 150;
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    
                    // Add extra bounce for pricing cards
                    if (entry.target.classList.contains('pricing-card')) {
                        setTimeout(() => {
                            entry.target.style.transform = 'translateY(0) scale(1.05)';
                            setTimeout(() => {
                                entry.target.style.transform = 'translateY(0) scale(1)';
                            }, 150);
                        }, 200);
                    }
                }, delay);
                
                staggerObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
    });
    
    [...featureGroups, ...serviceGroups, ...stepGroups, ...pricingCards].forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        staggerObserver.observe(element);
    });
}

// Parallax effects for background images - DISABLED to fix background visibility
function initParallaxEffects() {
    // Disabled parallax effects to ensure backgrounds are always visible
    return;
}

// Ensure backgrounds are always visible
function initBackgroundVisibility() {
    const backgroundElements = document.querySelectorAll(
        '.hero__background, .why-choose__background, .services__background, .pricing__background, .process__background, .stats__background, .faq__background, .contact__background'
    );
    
    backgroundElements.forEach((element, index) => {
        const computed = getComputedStyle(element);
        
        // Reset any transforms that might hide the background
        element.style.transform = 'none';
        element.style.display = 'block';
        element.style.visibility = 'visible';
        element.style.opacity = '1';
    });
}

// Floating animations for icons and illustrations
function initFloatingAnimations() {
    const floatingElements = document.querySelectorAll(
        '.service__icon, .step__illustration, .pricing-card__illustration'
    );
    
    floatingElements.forEach((element, index) => {
        // Stagger the animation start
        element.style.animationDelay = `${index * 0.2}s`;
        element.style.animation = 'float 3s ease-in-out infinite';
    });
    
    // Add floating animation to stylesheet
    if (!document.getElementById('floating-styles')) {
        const style = document.createElement('style');
        style.id = 'floating-styles';
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Image reveal animations
function initImageRevealAnimations() {
    const imageElements = document.querySelectorAll('.service__image-placeholder');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
                entry.target.style.animation = 'imageReveal 0.8s ease-out forwards';
                
                imageObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    imageElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        element.style.transition = 'all 0.8s ease-out';
        imageObserver.observe(element);
    });
    
    // Add image reveal animation
    if (!document.getElementById('image-reveal-styles')) {
        const style = document.createElement('style');
        style.id = 'image-reveal-styles';
        style.textContent = `
            @keyframes imageReveal {
                from { 
                    opacity: 0; 
                    transform: scale(0.8) rotate(-2deg); 
                }
                to { 
                    opacity: 1; 
                    transform: scale(1) rotate(0deg); 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Keyboard navigation improvements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        const nav = document.getElementById('nav');
        const navToggle = document.getElementById('nav-toggle');
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            navToggle.classList.remove('active');
            
            // Reset hamburger animation
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        
        // Close notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
    
    // Navigation with arrow keys for FAQ
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.classList.contains('faq-question')) {
            e.preventDefault();
            const faqQuestions = document.querySelectorAll('.faq-question');
            const currentIndex = Array.from(faqQuestions).indexOf(activeElement);
            
            let nextIndex;
            if (e.key === 'ArrowDown') {
                nextIndex = (currentIndex + 1) % faqQuestions.length;
            } else {
                nextIndex = (currentIndex - 1 + faqQuestions.length) % faqQuestions.length;
            }
            
            faqQuestions[nextIndex].focus();
        }
    }
});

// Performance optimization: Debounced resize handler
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Ensure backgrounds stay visible on resize
        initBackgroundVisibility();
    }, 250);
});

// Initialize page transitions
function initPageTransitions() {
    const links = document.querySelectorAll('a[href^="#"]');
    const mainEl = document.querySelector('main');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (!mainEl) return;
            mainEl.style.opacity = '0.98';
            setTimeout(() => {
                mainEl.style.opacity = '1';
            }, 150);
        });
    });
}

// Blog modal functionality
function initBlogModal() {
    // Blog articles data
    window.blogArticles = {
        'video-surveillance-benefits': {
            category: 'Съвети',
            title: 'Пет основни предимства на модерното видеонаблюдение',
            date: '15 Декември 2024',
            readTime: '5 мин четене',
            content: `
                <p>Видеонаблюдението вече не е просто запис на кадри – новите IP камери предлагат детекция на движение, алармени известия, интеграция с мобилни телефони и автоматичен видеоанализ, което прави системите за сигурност по-ефективни и достъпни от всякога.</p>
                
                <h3>1. Дистанционно наблюдение 24/7</h3>
                <p>Съвременните IP камери ви позволяват да наблюдавате обекта си от всяка точка на света, в реално време, през мобилно приложение или уеб браузър. Това е особено полезно за собственици на бизнеси или недвижими имоти.</p>

                <h3>2. Интелигентен видеоанализ</h3>
                <p>Новите системи за видеонаблюдение могат да разпознават лица, автомобилни номера, да детектират движение в определени зони и да изпращат автоматични известия при подозрителна активност.</p>

                <h3>3. Висококачествен запис</h3>
                <p>IP камерите с 4K резолюция осигуряват кристално ясно изображение, което е от съществено значение при необходимост от идентификация на лица или детайли.</p>

                <h3>4. Интеграция с други системи</h3>
                <p>Видеонаблюдението може да се интегрира с алармени системи, контрол на достъп, осветление и други smart home решения за пълна автоматизация на сигурността.</p>

                <h3>5. Икономическа ефективност</h3>
                <p>Въпреки първоначалната инвестиция, модерните системи за видеонаблюдение намаляват нуждата от физическа охрана и помагат за предотвратяване на кражби и вандализъм.</p>

                <p><strong>За консултация и избор на най-подходящата система за видеонаблюдение, свържете се с нас на +359 878 439 577 или попълнете нашата контактна форма.</strong></p>
            `
        },
        'security-system-selection': {
            category: 'Ръководство',
            title: 'Как да изберем правилната система за сигурност за дома и офиса',
            date: '10 Декември 2024',
            readTime: '7 мин четене',
            content: `
                <p>В статията даваме съвети за проектиране според спецификата на обекта, подчертаваме значението на качествените компоненти и редовната профилактика, както и възможности за надграждане според бюджета.</p>

                <h3>Фактори за избор</h3>
                <h4>1. Тип обект</h4>
                <p>За жилищни домове са подходящи по-прости системи с фокус върху дистанционно наблюдение и аларми. За офиси и бизнес обекти са необходими по-сложни решения с интеграция към контрол на достъп и централизирано управление.</p>

                <h4>2. Размер на обекта</h4>
                <p>Броят на необходимите камери и датчици зависи от размера на обекта и броя на входовете и критичните зони.</p>

                <h4>3. Бюджет</h4>
                <p>Има решения за всеки бюджет – от основни пакети за малки обекти до комплексни корпоративни системи.</p>

                <h4>4. Нужди за интеграция</h4>
                <p>Ако вече имате алармена система или други системи за сигурност, важно е да изберете решение, което може да се интегрира с тях.</p>

                <h3>Нашите препоръки</h3>
                <p>След безплатна консултация, нашият екип изготвя индивидуален технически проект с конкретни препоръки за вашия обект и нужди.</p>

                <p><strong>За професионална консултация и безплатен оглед, свържете се с нас на +359 878 439 577.</strong></p>
            `
        },
        'incident-response': {
            category: 'Съвети',
            title: 'Какво да правим при инцидент – ръководство за бърза реакция',
            date: '5 Декември 2024',
            readTime: '10 мин четене',
            content: `
                <p>Професионалната видеодиагностика и навременната подкрепа са ключови при инцидент. Разглеждаме какво трябва да знаете – от настройка на аларми до ползване на облачни услуги и синхронизация с реакционен център.</p>

                <h3>При подадена тревога</h3>
                <h4>1. Не се паникьосвайте</h4>
                <p>Следвайте установените процедури и се свържете с реакционния център или полицията.</p>

                <h4>2. Използвайте видеодиагностика</h4>
                <p>Ако имате достъп до системата за видеонаблюдение, проверете какво се случва в реално време преди да предприемете действия.</p>

                <h4>3. Съдействие на специалисти</h4>
                <p>Нашият екип може да помогне с дистанционна диагностика и бърза реакция при инциденти.</p>

                <h3>Профилактика</h3>
                <p>Редовната профилактика и тестване на системите помага за предотвратяване на проблеми и осигуряване на надеждна работа.</p>

                <h3>24/7 поддръжка</h3>
                <p>С абонаментна поддръжка получавате приоритетен достъп до нашия екип 24/7, който може да реагира бързо при всяка ситуация.</p>

                <p><strong>За информация за нашите услуги за поддръжка и реакция при инциденти, свържете се с нас на +359 878 439 577.</strong></p>
            `
        }
    };
}

function openBlogModal(articleId) {
    const modal = document.getElementById('blogModal');
    const article = window.blogArticles[articleId];
    
    if (!article) return;
    
    // Update modal content
    document.getElementById('modalCategory').textContent = article.category;
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('modalDate').textContent = article.date;
    document.getElementById('modalReadTime').textContent = article.readTime;
    document.getElementById('modalBody').innerHTML = article.content;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Ensure body text isn't translucent
    const bodyEl = document.getElementById('modalBody');
    if (bodyEl) {
        bodyEl.style.opacity = '1';
        bodyEl.style.background = '#ffffff';
        bodyEl.style.color = '#1f2937';
    }
}

function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Sticky Contact Button functionality
function initStickyContact() {
    const stickyContact = document.getElementById('stickyContact');
    
    if (!stickyContact) {
        console.error('Sticky contact element not found!');
        return;
    }
    
    stickyContact.classList.add('visible');
}



// ==========================================================================
// COOKIE CONSENT SYSTEM
// ==========================================================================

// Cookie consent state
let cookieConsent = {
    necessary: true,
    analytics: false,
    marketing: false
};

// Initialize cookie consent system
function initCookieConsent() {
    // Check if user has already given consent
    const savedConsent = getCookieConsent();
    if (savedConsent) {
        cookieConsent = savedConsent;
        if (cookieConsent.analytics) {
            enableGoogleAnalytics();
        }
        return;
    }
    
    // Show cookie consent popup
    showCookieConsent();
    
    // Add event listeners
    addCookieEventListeners();
}

// Show cookie consent popup
function showCookieConsent() {
    const popup = document.getElementById('cookieConsent');
    if (popup) {
        popup.classList.add('show');
    }
}

// Hide cookie consent popup
function hideCookieConsent() {
    const popup = document.getElementById('cookieConsent');
    if (popup) {
        popup.classList.remove('show');
    }
}

// Add event listeners for cookie consent
function addCookieEventListeners() {
    // Accept all cookies
    const acceptAllBtn = document.getElementById('acceptAllCookies');
    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', () => {
            cookieConsent = {
                necessary: true,
                analytics: true,
                marketing: true
            };
            saveCookieConsent();
            hideCookieConsent();
            enableGoogleAnalytics();
        });
    }
    
    // Accept necessary only
    const acceptNecessaryBtn = document.getElementById('acceptNecessaryOnly');
    if (acceptNecessaryBtn) {
        acceptNecessaryBtn.addEventListener('click', () => {
            cookieConsent = {
                necessary: true,
                analytics: false,
                marketing: false
            };
            saveCookieConsent();
            hideCookieConsent();
        });
    }
    
    // Customize cookies
    const customizeBtn = document.getElementById('customizeCookies');
    if (customizeBtn) {
        customizeBtn.addEventListener('click', () => {
            showCookieSettings();
        });
    }
    
    // Cookie settings modal
    const settingsModal = document.getElementById('cookieSettings');
    const closeSettingsBtn = document.getElementById('closeCookieSettings');
    const saveSettingsBtn = document.getElementById('saveCookieSettings');
    const overlay = settingsModal?.querySelector('.cookie-settings__overlay');
    
    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', hideCookieSettings);
    }
    
    if (overlay) {
        overlay.addEventListener('click', hideCookieSettings);
    }
    
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', saveCookieSettings);
    }
}

// Show cookie settings modal
function showCookieSettings() {
    const modal = document.getElementById('cookieSettings');
    if (modal) {
        const analyticsCheckbox = document.getElementById('analyticsCookies');
        if (analyticsCheckbox) {
            analyticsCheckbox.checked = cookieConsent.analytics;
        }
        
        modal.classList.add('show');
        hideCookieConsent();
    }
}

// Hide cookie settings modal
function hideCookieSettings() {
    const modal = document.getElementById('cookieSettings');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Save cookie settings
function saveCookieSettings() {
    const analyticsCheckbox = document.getElementById('analyticsCookies');
    
    cookieConsent = {
        necessary: true,
        analytics: analyticsCheckbox ? analyticsCheckbox.checked : false,
        marketing: false
    };
    
    saveCookieConsent();
    hideCookieSettings();
    
    if (cookieConsent.analytics) {
        enableGoogleAnalytics();
    }
}

// Save cookie consent to localStorage
function saveCookieConsent() {
    try {
        localStorage.setItem('cookieConsent', JSON.stringify(cookieConsent));
    } catch (e) {
        console.warn('Could not save cookie consent:', e);
    }
}

// Get cookie consent from localStorage
function getCookieConsent() {
    try {
        const saved = localStorage.getItem('cookieConsent');
        return saved ? JSON.parse(saved) : null;
    } catch (e) {
        console.warn('Could not load cookie consent:', e);
        return null;
    }
}

// Enable Google Analytics (only if consent given)
function enableGoogleAnalytics() {
    if (!cookieConsent.analytics) {
        console.log('Google Analytics disabled - no consent given');
        return;
    }
    
    if (!window.GA_MEASUREMENT_ID || window.GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
        console.log('Google Analytics not configured - no GA_MEASUREMENT_ID');
        return;
    }
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${window.GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', window.GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=Strict;Secure'
    });
    
    console.log('Google Analytics enabled with consent');
}

// Image Modal Functions
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal(event) {
    if (event) {
        event.stopPropagation();
    }
    
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const imageModal = document.getElementById('imageModal');
        if (imageModal && imageModal.classList.contains('active')) {
            closeImageModal();
        }
    }
});

// Export functions for global use
window.scrollToSection = scrollToSection;
window.openBlogModal = openBlogModal;
window.closeBlogModal = closeBlogModal;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;

