(($) => {
  'use strict';

  $('.ecosystem.show');

  $('.ecosystem').on('click', function () {
    if ($(window).width() > 960) {
      if ($('.ecosystem-dropdown').css('display') == 'none') {
        $('.ecosystem-dropdown').css('display', 'grid');
        $(this).find('.material-icons').text('keyboard_arrow_up');
      } else {
        $('.ecosystem-dropdown').css('display', 'none');
        $(this).find('.material-icons').text('keyboard_arrow_down');
      }
    } else {
      // on mobile use mobile dropdown
      if ($('.ecosystem-dropdown-mobile').css('display') == 'none') {
        $('.ecosystem-dropdown-mobile').css('display', 'grid');
        $(this).find('.material-icons').text('keyboard_arrow_up');
      } else {
        $('.ecosystem-dropdown-mobile').css('display', 'none');
        $(this).find('.material-icons').text('keyboard_arrow_down');
      }
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const navbarTogglerButton = document.querySelector(".navbar-toggler");
  navbarTogglerButton.addEventListener('click', () => {
    hamburger.classList.toggle("flip");
  });

})(jQuery);