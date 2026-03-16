$(function () {
  var $slider = $('#hero-slider');
  var $slides = $slider.find('.slide');
  var $dots = $slider.find('.slider-dot');
  var total = $slides.length;
  var current = 0;
  var autoplayInterval;

  function goTo(index) {
    $slides.eq(current).removeClass('active').addClass('leaving');
    $dots.eq(current).removeClass('active');

    current = (index + total) % total;

    $slides.eq(current).addClass('active');
    $dots.eq(current).addClass('active');

    setTimeout(function () {
      $slides.filter('.leaving').removeClass('leaving');
    }, 600);
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    autoplayInterval = setInterval(next, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  $slider.find('.slider-prev').on('click', function () {
    prev();
    resetAutoplay();
  });

  $slider.find('.slider-next').on('click', function () {
    next();
    resetAutoplay();
  });

  $dots.on('click', function () {
    goTo($(this).index());
    resetAutoplay();
  });

  $slides.eq(0).addClass('active');
  $dots.eq(0).addClass('active');
  startAutoplay();
});
