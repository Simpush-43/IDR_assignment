    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    function closeMobile() {
      mobileMenu.classList.remove('open');
    }

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    // Nav background intensity on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(10,10,10,0.98)';
      } else {
        nav.style.background = 'rgba(10,10,10,0.92)';
      }
    });

    // Form handler
    function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.btn-submit');
      btn.textContent = '✓ Submitted — We\'ll be in touch';
      btn.style.background = '#1a6b1a';
      btn.disabled = true;
    }