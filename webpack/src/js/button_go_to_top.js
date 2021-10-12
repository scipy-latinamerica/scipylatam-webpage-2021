'use strict'

/* Back To Top Button */

import $ from 'jquery';

var myButton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunctionBTT(); // back to top button
};

function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({scrollTop: 0}, 600);
	// document.body.scrollTop = 0; // for Safari
	// document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

$("#myBtn").click(topFunction);
