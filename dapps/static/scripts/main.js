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

  $(".connect_wallet_trigger").click(function (e) {
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

  $("#from_token_select_trigger").click(function (e) {
    e.preventDefault();
    $("#from_token_select_modal").fadeIn();
  });

  $("#bridge_to_modal_trigger").click(function (e) {
    e.preventDefault();
    $("#bridge_to_modal").fadeIn();
  });

  $(".header_account_info .lock_button").click(function (e) {
    e.preventDefault();
    $(".account_info_modal").fadeIn();
  });

  $("#bridge_txns_tab").click(function (e) {
    e.preventDefault();
    if ($("#bridge_form_tab").hasClass("active")) {
      $("#bridge_form_tab").removeClass("active").addClass("inactive");
      $("#bridge_txns_tab").removeClass("inactive").addClass("active");
      $(".form_top_half.bridge_main_form").hide();
      $(".form_bottom_half.bottom_half_split").hide();
      $(".form_top_half.transaction_form").fadeIn();
    }
  });

  $("#bridge_form_tab").click(function (e) {
    e.preventDefault();
    if ($("#bridge_txns_tab").hasClass("active")) {
      $("#bridge_txns_tab").removeClass("active").addClass("inactive");
      $("#bridge_form_tab").removeClass("inactive").addClass("active");
      $(".form_top_half.transaction_form").hide();
      $(".form_top_half.bridge_main_form").fadeIn();
      $(".form_bottom_half.bottom_half_split").fadeIn();
    }
  });

  const query_params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  })

  if (query_params.isEmbedded) {
    $(document.body).addClass('embedded');

    if (query_params.theme) {
      if (query_params.theme === "dark") {
        $(document.body).removeClass('light_mode');
        $(document.body).addClass('dark_mode');
      }
    }
  }

})(jQuery);