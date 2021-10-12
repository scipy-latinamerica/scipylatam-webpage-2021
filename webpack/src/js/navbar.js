'use strict'

import $ from 'jquery';

function resize() {
  if ($(window).width() < 979) {
    $('#navbar').addClass('fixed-top');
    $('#window-size').html($(window).width());;
  } else {
    $('#navbar').removeClass('fixed-top');
    $('#window-size').html($(window).width());;
  }
}

resize()

$(window).on('resize', function() {
  resize()
});
