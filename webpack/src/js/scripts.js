'use strict'

/* Description: Custom JS file */

import Swiper from 'swiper';
import $ from 'jquery';
import anime from 'animejs';

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class

window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) { 
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}


/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});


/* Back To Top Button */
// Get the button

// myButton = $('#myBtn');
var myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({scrollTop: 0}, 1000);
	// document.body.scrollTop = 0; // for Safari
	// document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

$("#myBtn").click(topFunction);

// TIMER
const finaleDate = new Date("December 11, 2021 00:00:00").getTime();

const timer = () =>{
    const now = new Date().getTime();
    let diff = finaleDate - now;
    // Showing the alert when the counter time finishes.
    if(diff < 0){
        document.querySelector('.alert').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
    }

    let days = Math.floor(diff / (1000*60*60*24));
    let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
    let minutes = Math.floor(diff % (1000*60*60)/ (1000*60));
    let seconds = Math.floor(diff % (1000*60) / 1000);
  // Adding the zeros.
    // days <= 99 ? days = `0${days}` : days;
    // days <= 9 ? days = `0${days}` : days;
    hours <= 9 ? hours = `0${hours}` : hours;
    minutes <= 9 ? minutes = `0${minutes}` : minutes;
    seconds <= 9 ? seconds = `0${seconds}` : seconds;

    document.querySelector('#days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;

}
timer();
// Calling the function every 1000 milliseconds.
setInterval(timer,1000);


/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */

class ImgItem {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.svg = this.DOM.el.querySelector('.item__svg');
        // this.DOM.path = this.DOM.svg.querySelector('path');
        this.paths = {};
        // this.paths.start = this.DOM.path.getAttribute('d');
        this.paths.end = this.DOM.el.dataset.morphPath;
        this.DOM.deco = this.DOM.svg.querySelector('.item__deco');
        // this.DOM.image = this.DOM.svg.querySelector('image');
        this.DOM.title = this.DOM.el.querySelector('.item__meta > .item__title');
        this.DOM.subtitle = this.DOM.el.querySelector('.item__meta > .item__subtitle');
        this.CONFIG = {
            // Defaults:
            animation: {
                path: {
                    duration: this.DOM.el.dataset.animationPathDuration || 1500,
                    delay: this.DOM.el.dataset.animationPathDelay || 0,
                    easing: this.DOM.el.dataset.animationPathEasing || 'easeOutElastic',
                    elasticity: this.DOM.el.dataset.pathElasticity || 400,
                    scaleX: this.DOM.el.dataset.pathScalex || 1,
                    scaleY: this.DOM.el.dataset.pathScaley || 1,
                    translateX: this.DOM.el.dataset.pathTranslatex || 0,
                    translateY: this.DOM.el.dataset.pathTranslatey || 0,
                    rotate: this.DOM.el.dataset.pathRotate || 0
                },
                image: {
                    duration: this.DOM.el.dataset.animationImageDuration || 2000,
                    delay: this.DOM.el.dataset.animationImageDelay || 0,
                    easing: this.DOM.el.dataset.animationImageEasing || 'easeOutElastic',
                    elasticity: this.DOM.el.dataset.imageElasticity || 400,
                    scaleX: this.DOM.el.dataset.imageScalex || 1.1,
                    scaleY: this.DOM.el.dataset.imageScaley || 1.1,
                    translateX: this.DOM.el.dataset.imageTranslatex || 0,
                    translateY: this.DOM.el.dataset.imageTranslatey || 0,
                    rotate: this.DOM.el.dataset.imageRotate || 0
                },
                deco: {
                    duration: this.DOM.el.dataset.animationDecoDuration || 2500,
                    delay: this.DOM.el.dataset.animationDecoDelay || 0,
                    easing: this.DOM.el.dataset.animationDecoEasing || 'easeOutQuad',
                    elasticity: this.DOM.el.dataset.decoElasticity || 400,
                    scaleX: this.DOM.el.dataset.decoScalex || 0.9,
                    scaleY: this.DOM.el.dataset.decoScaley || 0.9,
                    translateX: this.DOM.el.dataset.decoTranslatex || 0,
                    translateY: this.DOM.el.dataset.decoTranslatey || 0,
                    rotate: this.DOM.el.dataset.decoRotate || 0
                }
            }
        };
        this.initEvents();
    }
    initEvents() {
        this.mouseenterFn = () => {
            this.mouseTimeout = setTimeout(() => {
                this.isActive = true;
                this.animate();
            }, 75);
        }
        this.mouseleaveFn = () => {
            clearTimeout(this.mouseTimeout);
            if( this.isActive ) {
                this.isActive = false;
                this.animate();
            }
        }
        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
        this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
    }
    getAnimeObj(targetStr) {
        const target = this.DOM[targetStr];
        let animeOpts = {
            targets: target,
            duration: this.CONFIG.animation[targetStr].duration,
            delay: this.CONFIG.animation[targetStr].delay,
            easing: this.CONFIG.animation[targetStr].easing,
            elasticity: this.CONFIG.animation[targetStr].elasticity,
            scaleX: this.isActive ? this.CONFIG.animation[targetStr].scaleX : 1,
            scaleY: this.isActive ? this.CONFIG.animation[targetStr].scaleY : 1,
            translateX: this.isActive ? this.CONFIG.animation[targetStr].translateX : 0,
            translateY: this.isActive ? this.CONFIG.animation[targetStr].translateY : 0,
            rotate: this.isActive ? this.CONFIG.animation[targetStr].rotate : 0
        };
        if( targetStr === 'path' ) {
            animeOpts.d = this.isActive ? this.paths.end : this.paths.start;
        }
        anime.remove(target);
        return animeOpts;
    }
    animate() {
        // Animate the path, the image and deco.
        // anime(this.getAnimeObj('path'));
        // anime(this.getAnimeObj('image'));
        anime(this.getAnimeObj('deco'));
        // Title and Subtitle animation
        // anime.remove(this.DOM.title);
        // anime({
        //     targets: this.DOM.title,
        //     easing: 'easeOutQuad',
        //     translateY: this.isActive ? [
        //         {value: '-50%', duration: 200},
        //         {value: ['50%', '0%'], duration: 200}
        //     ] : [
        //         {value: '50%', duration: 200},
        //         {value: ['-50%', '0%'], duration: 200}
        //     ],
        //     opacity: [
        //         {value: 0, duration: 200},
        //         {value: 1, duration: 200}
        //     ]
        // });
        // anime.remove(this.DOM.subtitle);
        // anime({
        //     targets: this.DOM.subtitle,
        //     easing: 'easeOutQuad',
        //     translateY: this.isActive ? {value: ['50%', '0%'], duration: 200, delay: 250} : {value: '0%', duration: 1},
        //     opacity: this.isActive ? {value: [0,1], duration: 200, delay: 250} : {value: 0, duration: 1}
        // });
    }
}

const items = Array.from(document.querySelectorAll('.item'));
const init = (() => items.forEach(item => new ImgItem(item)))();
setTimeout(() => document.body.classList.remove('loading'), 2000);
