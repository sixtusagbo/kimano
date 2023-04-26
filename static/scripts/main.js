let kimano = (($) => {
  'use strict';

  let kimano = {};

  $(document).ready(function () {
    console.log('Hello World!');
  });

  kimano.a = 'yeah';

  return kimano;
})(jQuery);