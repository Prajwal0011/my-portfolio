/* ============================================
   PRAJWAL CHAUDHARY - PORTFOLIO SCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // ============================================
  // CUSTOM CURSOR
  // ============================================
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  
  if (cursor && cursorRing) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });
    
    function animateCursor() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top = ry + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag, .stat-card, .timeline-content, .edu-card, .cert-item, .contact-link');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorRing.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorRing.classList.remove('hover');
      });
    });
  }
  
  // ============================================
  // SCROLL PROGRESS BAR
  // ============================================
  const scrollProgress = document.getElementById('scrollProgress');
  
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    });
  }
  
  // ============================================
  // PARTICLE BACKGROUND
  // ============================================
  const particlesContainer = document.getElementById('particles');
  
  if (particlesContainer) {
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particlesContainer.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 20000);
    }
    
    // Create initial particles
    for (let i = 0; i < 30; i++) {
      setTimeout(createParticle, i * 200);
    }
    
    // Continuously create new particles
    setInterval(createParticle, 2000);
  }
  
  // ============================================
  // NAVBAR SCROLL EFFECT
  // ============================================
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }
  
  // ============================================
  // TYPEWRITER EFFECT FOR NAME
  // ============================================
  const nameFirst = document.getElementById('nameFirst');
  const fullName = 'Prajwal';
  
  if (nameFirst) {
    let charIndex = 0;
    
    function typeWriter() {
      if (charIndex < fullName.length) {
        nameFirst.textContent = fullName.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 150);
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
  }
  
  // ============================================
  // TYPEWRITER EFFECT FOR TAGLINE
  // ============================================
  const taglineElement = document.getElementById('tagline');
  const taglines = [
    'MIS Executive · Data Analyst · Automation Enthusiast',
    'Turning raw data into actionable decisions',
    'Building efficient workflows with technology'
  ];
  
  if (taglineElement) {
    let taglineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentTagline = '';
    
    function typeTagline() {
      const currentFullTagline = taglines[taglineIndex];
      
      if (isDeleting) {
        currentTagline = currentFullTagline.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentTagline = currentFullTagline.substring(0, charIndex + 1);
        charIndex++;
      }
      
      taglineElement.textContent = currentTagline + '|';
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentFullTagline.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        taglineIndex = (taglineIndex + 1) % taglines.length;
        typeSpeed = 500; // Pause before new word
      }
      
      setTimeout(typeTagline, typeSpeed);
    }
    
    // Start after name typing completes
    setTimeout(typeTagline, 2500);
  }
  
  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
  
  // ============================================
  // COUNTER ANIMATION
  // ============================================
  const counters = document.querySelectorAll('.counter');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
          current += step;
          if (current >= target) {
            counter.textContent = target;
          } else {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          }
        };
        
        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => counterObserver.observe(counter));
  
  // ============================================
  // STARTUP PROGRESS BAR ANIMATION
  // ============================================
  const progressFill = document.querySelector('.progress-fill');
  
  if (progressFill) {
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = progressFill.dataset.width;
          setTimeout(() => {
            progressFill.style.width = width + '%';
          }, 300);
          progressObserver.unobserve(progressFill);
        }
      });
    }, { threshold: 0.5 });
    
    progressObserver.observe(progressFill);
  }
  
  // ============================================
  // STAT BAR ANIMATION
  // ============================================
  const statFills = document.querySelectorAll('.stat-fill');
  
  const statBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.dataset.width;
        setTimeout(() => {
          fill.style.width = width + '%';
        }, 300);
        statBarObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });
  
  statFills.forEach(fill => statBarObserver.observe(fill));
  
  // ============================================
  // TIMELINE ITEM STAGGER
  // ============================================
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach((item, index) => {
    item.style.transitionDelay = (index * 0.15) + 's';
  });
  
  // ============================================
  // SKILL TAG HOVER EFFECT
  // ============================================
  const skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      tag.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // ============================================
  // PROJECT CARD PARALLAX EFFECT
  // ============================================
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
  
  // ============================================
  // SMOOTH SCROLL FOR NAVIGATION LINKS
  // ============================================
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // ============================================
  // ACTIVE NAV LINK HIGHLIGHT
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  
  const navHighlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
        const mobileLink = document.querySelector(`.mobile-link[href="#${id}"]`);
        
        if (navLink) {
          navLinks.forEach(l => l.style.color = '');
          navLink.style.color = 'var(--accent)';
        }
        if (mobileLink) {
          mobileLink.style.color = 'var(--accent)';
        }
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => navHighlightObserver.observe(section));
  
  // ============================================
  // HERO BACKGROUND CIRCLES PARALLAX
  // ============================================
  const heroCircles = document.querySelectorAll('.hero-bg-circle');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    heroCircles.forEach((circle, index) => {
      const speed = 0.1 + (index * 0.05);
      circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
  
  // ============================================
  // CONTACT FORM ANIMATION (if added later)
  // ============================================
  const contactLinks = document.querySelectorAll('.contact-link');
  
  contactLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-5px)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
    });
  });
  
  // ============================================
  // FLOATING DATA ELEMENTS ANIMATION
  // ============================================
  const floatingData = document.querySelectorAll('.floating-data');
  
  floatingData.forEach((el, index) => {
    el.style.animationDelay = (index * 0.5) + 's';
  });
  
  // ============================================
  // CONSOLE EASTER EGG
  // ============================================
  console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #00e5ff;');
  console.log('%cInterested in the code? Feel free to reach out!', 'font-size: 14px; color: #a8ff78;');
  console.log('%c📧 prajwalchh2025@gmail.com', 'font-size: 12px; color: #ff6b35;');
  
  // ============================================
  // PERFORMANCE OPTIMIZATION - LAZY LOADING
  // ============================================
  // Add loading="lazy" to images if any are added later
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
  
  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================
  document.addEventListener('keydown', (e) => {
    // Press 'H' to go to top
    if (e.key === 'h' || e.key === 'H') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
      const contact = document.getElementById('contact');
      if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
  
  // ============================================
  // PAGE LOAD ANIMATION
  // ============================================
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add entrance animation class to hero elements
    const heroElements = document.querySelectorAll('#hero > *');
    heroElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.animation = `fadeUp 0.8s ${0.2 + (index * 0.1)}s forwards`;
    });
  });
  
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
