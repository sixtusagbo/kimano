$('.block-container').each(function () {
  let totalHeight = 0;
  let startHeight = 0;
  startHeight += $(this).find(".start").height() + $(this).find(".end").offset().top - $(this).find(".start").offset().top;

  totalHeight += startHeight - $(this).find(".end").height();
  $(this).find(".other-connector").css("height", totalHeight);
});
