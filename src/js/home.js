document.addEventListener('DOMContentLoaded', () => {

  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;

    const startPlayback = () => {
      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {

          const playOnGesture = () => {
            heroVideo.muted = true;
            heroVideo.play().catch(() => {});
            ['click', 'touchstart', 'scroll', 'keydown'].forEach(evt => {
              window.removeEventListener(evt, playOnGesture);
            });
          };
          ['click', 'touchstart', 'scroll', 'keydown'].forEach(evt => {
            window.addEventListener(evt, playOnGesture, { once: true, passive: true });
          });
        });
      }
    };

    if (heroVideo.readyState >= 2) {
      startPlayback();
    } else {
      heroVideo.addEventListener('loadeddata', startPlayback, { once: true });
      heroVideo.addEventListener('canplay', startPlayback, { once: true });
      startPlayback();
    }
  }

  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide-item');
  const btnPrev = document.querySelector('.slider-btn-prev');
  const btnNext = document.querySelector('.slider-btn-next');
  const dots = document.querySelectorAll('.slider-dot');

  if (sliderTrack && slides.length > 0) {
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval = null;

    function goToSlide(index) {
      if (index < 0) {
        currentSlide = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }

      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add('active');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('active');
          dot.removeAttribute('aria-current');
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetAutoSlide();
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetAutoSlide();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetAutoSlide();
      });
    });

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 6000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
      sliderContainer.addEventListener('mouseleave', () => startAutoSlide());
    }

    startAutoSlide();
  }
});
