(($) => {
  'use strict';

  $('.dapp_menu_item .dropdown_trigger').click(function (e) { 
    e.preventDefault();
    $('.dapp_menu_item').toggleClass('active');
  });

  $('#hamburger').click(function (e) { 
    e.preventDefault();
    $('.primary_links').slideToggle();
  });

})(jQuery);