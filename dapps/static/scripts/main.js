(($) => {
  "use strict";

  $(".toggle_dropdown").hide();
  $(".select_option_popup_wrap").hide();

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

  $(".select_option_popup_wrap .exit_icon").click(function (e) {
    e.preventDefault();
    $(".select_option_popup_wrap").fadeOut();
  });

  // Light and Dark mode
  let currentTheme = localStorage["currentTheme"] || "light_mode";
  $("body").removeClass("light_mode");
  $("body").addClass(currentTheme);
  $(".dropdown_dark_mode_toggle").click(function (e) {
    e.preventDefault();
    if (localStorage.currentTheme == "light_mode") {
      localStorage.currentTheme = "dark_mode";
      $("body").removeClass("light_mode");
      $("body").addClass(localStorage.currentTheme);
    } else {
      localStorage.currentTheme = "light_mode";
      $("body").removeClass("dark_mode");
      $("body").addClass(localStorage.currentTheme);
    }
  });

  $("#nft_terms_trigger").click(function (e) {
    e.preventDefault();
    $(".nft_terms_modal").fadeIn();
  });

})(jQuery);