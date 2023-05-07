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

  $("li .faq_block_accordion .collapsible #collapsible_trigger, .faq_accordion .collapsible #collapsible_trigger").each(function (
    index,
    element
  ) {
    // element == this
    $(element).click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("is_closed")) {
        $(this).removeClass("is_closed");
        $(this).addClass("is_open");
        $(this).siblings("#collapsible_content").css("height", "auto");
        $(this).attr("aria-expanded", true);
      } else {
        $(this).removeClass("is_open");
        $(this).addClass("is_closed");
        $(this).siblings("#collapsible_content").css("height", 0);
        $(this).attr("aria-expanded", false);
      }
    });
  });
})(jQuery);
