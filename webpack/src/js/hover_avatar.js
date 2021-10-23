'use strict'

/* Hover on Avatar */

import $ from 'jquery';

$(".changebgonhover").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});
