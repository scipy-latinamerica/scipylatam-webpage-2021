'use strict'

import $ from 'jquery';

$('.modal').on('show.bs.modal', function (e) {
    $('#carouselTalks').carousel('pause');
})

$('.modal').on('hide.bs.modal', function (e) {
    $('#carouselTalks').carousel('cycle');
})
