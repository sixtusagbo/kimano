(($) => {
  "use strict";
  
  $(".toggle_dropdown").hide();
  
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
  
})(jQuery);