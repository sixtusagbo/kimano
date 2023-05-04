(($) => {
  "use strict";
  
  $(".toggle_dropdown").hide();
  $(".connect_wallet_modal_popup").hide();
  
  $(".toggle_dropdown_btn.home").click(function (e) { 
    e.preventDefault();
    $(".toggle_dropdown.nine_dots").hide();
    $(".toggle_dropdown.home").slideToggle();
  });
  
  $(".toggle_dropdown_btn.nine_dots").click(function (e) { 
    e.preventDefault();
    $(".toggle_dropdown.home").hide();
    $(".toggle_dropdown.nine_dots").slideToggle();
  });

  $(".header_wallet_login button").click(function (e) { 
    e.preventDefault();
    $(".connect_wallet_modal_popup").fadeIn();
  });

  $(".connect_wallet_modal_popup .exit_icon").click(function (e) { 
    e.preventDefault();
    $(".connect_wallet_modal_popup").fadeOut();
  });
  
})(jQuery);