'use strict'

import $ from 'jquery'

$.fn.selectpicker.Constructor.BootstrapVersion = '4';

$(document).ready(function () { SITE.init() })

var SITE = {

  init: function () {
    this.language_selector()
  },

  language_selector: function () {
    $('.language-picker-select').selectpicker()
    $('.language-picker-select').change(function () {
      var option = $(this).find('option:selected');
      window.location.href = option.data('url');
    })

  },

  go_to_top: function () {
    $('.to-top').on('click', function (e) {
      e.preventDefault()
      $('html, body').animate({scrollTop: 0}, 2000)
    })
  }

}

