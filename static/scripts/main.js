(($) => {
  "use strict";

  $(".dapp_menu_item .dropdown_trigger").click(function (e) {
    e.preventDefault();
    $(".dapp_menu_item").toggleClass("active");
  });

  $("#hamburger").click(function (e) {
    e.preventDefault();
    $(".primary_links").slideToggle({
      complete: () => {
        $("html").toggleClass("our_mobile_menu");

        if ($(".primary_links").css("display") == "block") {
          // Because jquery toggles with display block and none
          $(".primary_links").css("display", "flex");
        }
      },
    });
  });
})(jQuery);
