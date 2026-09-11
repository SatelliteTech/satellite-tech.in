/**
 * SATELLITE TECH — Modern Vanilla JavaScript Engine
 * Handles Navigation, Responsive Menus, Intersection Animations,
 * Interactive Solutions Flow, Service Modals, and Accessible Form Validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Service Data Dictionary for Interactive Exploration
  // -------------------------------------------------------------------------
  const serviceDetails = {
    '01': {
      title: 'Cloud Solutions & Optimization',
      tag: 'Cloud Engineering',
      pageUrl: 'service-cloud-solutions.html',
      contactParam: 'cloud-optimization',
      desc: 'Satellite Tech architects resilient, high-performance cloud environments tailored to modern workload demands. We benchmark and refine resource allocation, eliminate cloud waste, enforce least-privilege security postures, and implement robust FinOps frameworks to lower total cost of ownership while maximizing uptime.',
      highlights: [
        'Infrastructure as Code (Terraform, CloudFormation, Pulumi)',
        'Continuous FinOps & Cloud Cost Optimization',
        'High-Availability (HA) & Disaster Recovery (DR) design',
        'Auto-scaling and container orchestration strategies'
      ]
    },
    '02': {
      title: 'Cloud Migration & Enablement',
      tag: 'Modernization',
      pageUrl: 'service-cloud-migration.html',
      contactParam: 'cloud-migration',
      desc: 'Seamless migration of legacy infrastructure and monolithic workloads to scalable, cloud-native architectures. We utilize phased rehosting, replatforming, and refactoring strategies with zero business disruption and strict verification checks.',
      highlights: [
        'Comprehensive workload readiness assessment & discovery',
        'Database and application migration pipelines',
        'Zero-downtime cutover and fallback contingency planning',
        'Post-migration performance verification and staff enablement'
      ]
    },
    '03': {
      title: 'Well-Architected Architecture Review',
      tag: 'Enterprise Review',
      pageUrl: 'service-architecture-review.html',
      contactParam: 'architecture-review',
      desc: 'Deep-dive architectural evaluation benchmarked against industry standards. We assess systems across the five key pillars: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization to uncover latent vulnerabilities and inefficiencies.',
      highlights: [
        'Rigorous 5-pillar architectural audit',
        'Risk remediation matrix categorized by business priority',
        'Security posture analysis & compliance gap detection',
        'Actionable executive summary & engineering roadmaps'
      ]
    },
    '04': {
      title: 'Integrated IoT Solutions',
      tag: 'IoT & Edge Computing',
      pageUrl: 'service-iot-solutions.html',
      contactParam: 'iot-solutions',
      desc: 'End-to-end connected IoT ecosystems spanning hardware, firmware, edge gateways, secure cloud ingress, and real-time operational telemetry. We empower organizations to digitize operational assets and transform real-world signals into actionable business intelligence.',
      highlights: [
        'Hardware selection, configuration & deployment',
        'Embedded firmware development & edge sensor interfacing',
        'Secure Cloud-IoT ingestion pipelines (MQTT, WebSockets, HTTPS)',
        'Live telemetry dashboards, anomaly alerts & predictive analytics'
      ]
    },
    '05': {
      title: 'Serverless Implementations',
      tag: 'Event-Driven Systems',
      pageUrl: 'service-serverless.html',
      contactParam: 'serverless',
      desc: 'Build scalable, highly responsive event-driven applications that execute code on demand without the overhead of server provisioning, maintenance, or idle compute costs. Optimized for resilience, rapid time-to-market, and microsecond elasticity.',
      highlights: [
        'Microservices and asynchronous event routing',
        'API Gateway design with token-based access controls',
        'Serverless databases and event triggers',
        'Cold-start mitigation and distributed tracing'
      ]
    },
    '06': {
      title: 'Networking & Development',
      tag: 'Infrastructure & Engineering',
      pageUrl: 'service-networking-development.html',
      contactParam: 'networking',
      desc: 'Enterprise network topology engineering, secure software-defined networking (SDN), hybrid cloud connectivity, and custom backend software development engineered directly around mission-critical operational requirements.',
      highlights: [
        'Hybrid cloud interconnects, VPNs, and VPC topologies',
        'Secure API & backend microservices development',
        'Network traffic management, load balancing & DDoS mitigation',
        'Comprehensive CI/CD build pipelines and test automation'
      ]
    }
  };

  // -------------------------------------------------------------------------
  // 2. Sticky Navbar & Active Navigation State
  // -------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Update active link based on scroll position
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // -------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // -------------------------------------------------------------------------
  const navToggle = document.querySelector('.navbar__toggle');
  const navMenu = document.querySelector('.navbar__menu');

  if (navToggle && navMenu) {
    const toggleMenu = () => {
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
      } else {
        navMenu.classList.add('is-open');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Close navigation menu');
      }
    };

    navToggle.addEventListener('click', toggleMenu);

    // Close when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          toggleMenu();
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        toggleMenu();
      }
    });

    // Close when window resized past mobile threshold
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 4. Smooth Anchor Scrolling with Navbar Offset
  // -------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 76;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Set focus for accessibility without jumping
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 5. Scroll Reveal with IntersectionObserver
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // -------------------------------------------------------------------------
  // 6. Interactive Solutions Pipeline Flow
  // -------------------------------------------------------------------------
  const pipelineSteps = document.querySelectorAll('.pipeline-step');
  const detailTitle = document.getElementById('pipeline-detail-title');
  const detailDesc = document.getElementById('pipeline-detail-desc');

  const pipelineInfo = {
    'devices': {
      title: 'Tier 1: Devices & Edge Sensors',
      desc: 'Industrial sensors, PLCs, smart meters, and edge hardware capturing mission-critical physical telemetry with local resilience.'
    },
    'iot-conn': {
      title: 'Tier 2: Secure IoT Connectivity & Edge Gateways',
      desc: 'Robust industrial gateways performing edge normalization, encryption, and telemetry forwarding via MQTT, TLS, or secure wireless channels.'
    },
    'cloud-infra': {
      title: 'Tier 3: Resilient Cloud Infrastructure',
      desc: 'Multi-region, auto-scaling cloud compute, container clusters, and elastic storage environments engineered for high throughput and zero data loss.'
    },
    'data-proc': {
      title: 'Tier 4: Distributed Stream & Event Processing',
      desc: 'Microsecond message queues, serverless stream transformers, and time-series pipelines converting raw telemetry into structured events.'
    },
    'apps': {
      title: 'Tier 5: Enterprise Applications & APIs',
      desc: 'Modern web, mobile, and microservice interfaces delivering secure role-based control and real-time command dispatch.'
    },
    'bi': {
      title: 'Tier 6: Predictive Analytics & Business Intelligence',
      desc: 'Actionable executive dashboards, operational alerting, predictive maintenance models, and automated resource scheduling.'
    }
  };

  pipelineSteps.forEach(step => {
    step.addEventListener('click', () => {
      pipelineSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      const stepKey = step.dataset.step;
      if (pipelineInfo[stepKey] && detailTitle && detailDesc) {
        detailTitle.textContent = pipelineInfo[stepKey].title;
        detailDesc.textContent = pipelineInfo[stepKey].desc;
      }
    });
  });

  // -------------------------------------------------------------------------
  // 7. Service Detail Modal
  // -------------------------------------------------------------------------
  const modal = document.getElementById('service-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalTag = document.getElementById('modal-tag');
  const modalBody = document.getElementById('modal-body');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalClose = document.getElementById('modal-close');
  const modalInquireBtn = document.getElementById('modal-inquire-btn');
  let previouslyFocusedElement = null;

  const openModal = (serviceId) => {
    const data = serviceDetails[serviceId];
    if (!data || !modal) return;

    previouslyFocusedElement = document.activeElement;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalTag) modalTag.textContent = data.tag;
    if (modalBody) modalBody.textContent = data.desc;

    if (modalHighlights) {
      modalHighlights.innerHTML = data.highlights
        .map(h => `
          <div class="modal__highlight-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${h}</span>
          </div>
        `).join('');
    }

    if (modalInquireBtn) {
      modalInquireBtn.href = `contact.html?service=${data.contactParam}`;
    }
    const modalViewPageBtn = document.getElementById('modal-view-page-btn');
    if (modalViewPageBtn) {
      modalViewPageBtn.href = data.pageUrl;
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (modalClose) modalClose.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  };

  // Only bind modal open for elements explicitly configured with data-open-modal or button with data-service-id
  document.querySelectorAll('button[data-service-id], [data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = trigger.dataset.serviceId;
      if (serviceId) {
        openModal(serviceId);
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Preselect service dropdown if URL contains ?service=...
  const urlParams = new URLSearchParams(window.location.search);
  const requestedService = urlParams.get('service');
  if (requestedService) {
    const serviceSelect = document.getElementById('form-service');
    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value === requestedService) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // 8. Contact Form Client-Side Validation & Submission
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const companyInput = document.getElementById('form-company');
      const phoneInput = document.getElementById('form-phone');
      const serviceInput = document.getElementById('form-service');
      const messageInput = document.getElementById('form-message');

      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const messageError = document.getElementById('message-error');

      // Reset errors
      [nameInput, emailInput, messageInput].forEach(inp => inp?.classList.remove('is-invalid'));
      if (nameError) nameError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (messageError) messageError.textContent = '';
      if (formStatus) {
        formStatus.className = 'form-status';
        formStatus.style.display = 'none';
      }

      // Validate Name
      if (!nameInput?.value.trim()) {
        nameInput?.classList.add('is-invalid');
        if (nameError) nameError.textContent = 'Please provide your full name.';
        isValid = false;
      }

      // Validate Email
      if (!emailInput?.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailInput?.classList.add('is-invalid');
        if (emailError) emailError.textContent = 'Please enter a valid corporate or business email address.';
        isValid = false;
      }

      // Validate Message
      if (!messageInput?.value.trim() || messageInput.value.trim().length < 10) {
        messageInput?.classList.add('is-invalid');
        if (messageError) messageError.textContent = 'Please include a brief description of your project or inquiry (minimum 10 characters).';
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      // Successful Client Validation Simulation
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn?.innerHTML || 'Send Inquiry';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting Inquiry...';
      }

      setTimeout(() => {
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.innerHTML = `
            <strong>Inquiry Received Successfully!</strong><br>
            Thank you, <strong>${nameInput.value.trim()}</strong>. Our enterprise solutions team will review your specifications and reach out to <strong>${emailInput.value.trim()}</strong> within one business day.<br>
            <span style="font-size: 0.8125rem; color: #047857; margin-top: 6px; display: inline-block;">
              Need immediate discussion? Direct email: <a href="mailto:admin@satellite-tech.in?subject=Inquiry from ${encodeURIComponent(nameInput.value.trim())}" style="text-decoration: underline; font-weight: 600;">admin@satellite-tech.in</a>
            </span>
          `;
          formStatus.style.display = 'block';
        }

        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }, 600);
    });
  }
});
