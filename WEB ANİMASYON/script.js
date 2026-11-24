/**
 * Sude Gelişin - Portfolyo Animasyonları
 * GSAP 3 ve ScrollTrigger ile yumuşak geçişler
 */

document.addEventListener('DOMContentLoaded', () => {
  // Kullanıcının prefers-reduced-motion tercihini kontrol et
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || typeof gsap === 'undefined') {
    // Animasyon tercih edilmiyorsa hiçbir GSAP animasyonu çalıştırma
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 1. Kapak Bölümü Animasyonu
  gsap.from('.hero-cover-img', {
    scale: 1.12,
    opacity: 0.7,
    duration: 2.0,
    ease: 'power3.out'
  });

  gsap.from('.hero-content', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.3,
    ease: 'power3.out'
  });

  // 2. Hakkımda Bölümü Animasyonu
  gsap.from('.mascot-box', {
    scale: 0.75,
    opacity: 0,
    duration: 1.2,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: '#hakkimda',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.from('#hakkimda .section-title, .about-text', {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#hakkimda',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  });

  // 3. İlgi Alanlarım Kartları Animasyonu
  gsap.from('#ilgi-alanlarim .section-title', {
    y: 40,
    opacity: 0,
    duration: 1.0,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#ilgi-alanlarim',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.from('.cards-grid .card', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.25,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.cards-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // 4. İletişim Bölümü Animasyonu
  const contactSection = document.querySelector('#iletisim');
  if (contactSection) {
    gsap.from('#iletisim .section-title, .contact-description, .contact-btn', {
      y: 40,
      opacity: 0,
      duration: 1.1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#iletisim',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });
  }
});
