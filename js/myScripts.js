/*===============================================
SCRIPTS.JS
===============================================*/
"use strict";

var width = window.innerWidth;
var height = window.innerHeight;

// alert("test");
// console.log("test");


// NAV VARIABLES
var navBar = document.getElementsByClassName("navBar")[0];
var body = document.getElementsByTagName("body")[0];
var nav = document.getElementsByTagName("nav")[0];
var burgerWrap = document.getElementsByClassName("burgerWrap")[0];
var burgerPattyClose = document.getElementsByClassName("burgerPattyClose")[0];
var siteMapWrap = document.getElementsByClassName("siteMapWrap")[0];
var navItem = document.getElementsByClassName("navItem");
var backToTop = document.getElementsByClassName("backToTop");

var siteMapSVG = document.getElementsByClassName("siteMapSVG");
var siteMapSvgPath = document.getElementsByClassName("siteMapSvgPath");

var header = document.getElementsByTagName("header")[0];
var mainWrap = document.getElementsByClassName("mainWrap")[0];
var footer = document.getElementsByTagName("footer")[0];

// BOOLEAN TO TRACK NAV OPEN STATE
var navOpen = false;

var blerHelper = function(bler1, bler2, blerTot) {
	bler1.style.webkitFilter = "blur(" + blerTot + "px)";
	bler1.style.filter = "blur(" + blerTot + "px)";
	bler2.style.webkitFilter = "blur(" + blerTot + "px)";
	bler2.style.filter = "blur(" + blerTot + "px)";
};




/*===============================================
NAV
================================================*/
	var doTheNav = function() {

		// OPEN AND CLOSE NAV
		burgerWrap.onclick = function() {
			if (!navOpen) {
				body.style.overflow = "hidden";
				nav.classList.toggle("openNav", true);
				burgerPattyClose.style.display = "block";
				blerHelper(navBar, footer, 1.5);
				blerHelper(header, mainWrap, 3);
				
				// siteMapSVG[0].querySelector(".siteMapSvgPath").classList.toggle("animateSiteMapSvgPath", true);
				// siteMapSVG[1].querySelector(".siteMapSvgPath").classList.toggle("animateSiteMapSvgPath", true);
				
				
				// for (var i2 = 0; i2 < siteMapSVG[2].querySelectorAll(".siteMapSvgPath").length; i2++) {
					// siteMapSVG[2].querySelectorAll(".siteMapSvgPath")[i2].classList.toggle("animateSiteMapSvgPath", true);
				// }
				
				
				// for (var i = 0; i < siteMapSvgPath.length; i++) {
					
					// siteMapSvgPath[1].classList.toggle("animateSiteMapSvgPath1", true);
				// }
				
				navOpen = true;
			} else if (navOpen) {
				body.style.overflow = "auto";
				nav.classList.toggle("openNav", false);
				burgerPattyClose.style.display = "none";
				blerHelper(header, mainWrap, 0);
				blerHelper(navBar, footer, 0);
				
				
				// siteMapSVG[0].querySelector(".siteMapSvgPath").classList.toggle("animateSiteMapSvgPath", false);
				// siteMapSVG[1].querySelector(".siteMapSvgPath").classList.toggle("animateSiteMapSvgPath", false);
				
				// for (var j2 = 0; j2 < siteMapSVG[2].querySelectorAll(".siteMapSvgPath").length; j2++) {
					// siteMapSVG[2].querySelectorAll(".siteMapSvgPath")[j2].classList.toggle("animateSiteMapSvgPath", false);
				// }
				
				// for (var i = 0; i < siteMapSvgPath.length; i++) {
					// siteMapSVG[0].classList.toggle("animateSiteMapSvgPath0", false);
					// siteMapSvgPath[1].classList.toggle("animateSiteMapSvgPath1", false);
				// }
				
				navOpen = false;
			}
		}
		
		// LOOP THROUGH NAV ITEMS
		// for (var i = 0; i < navItem.length; i++) {
			
			// // STICK A NUMBERED MARKER ON EACH NAV LI
			// navItem[i].marker = i;
			
			// // MAKE ITEMS IN PROJ MENU CLICKABLE, DISPLAY MATCHING PROJECT ON PAGE, AND HANDLE NECESSARY BOOLEANS AND COUNTERS
			// navItem[i].onclick = function() {
				// for (var j = 0; j < projWrap.length; j++) {
					// projWrap[j].classList.toggle("showProjWrap", false);
				// }
				// projWrap[0].classList.toggle("showFirstProj", false);
				
				// projWrap[this.marker].classList.toggle("showProjWrap", true);
				
				// nav.classList.toggle("openNav", false);
				// nav.classList.toggle("closeNav", true);
				
				// burgerPattyText.innerHTML = "";
				
				// navOpen = false;
				
				// counter = this.marker;
			// };
		// }
	};

	doTheNav();
//* ========================================= *//


//alert(navigator.userAgent);

/*===============================================
STICKY NAV
===============================================*/
var stickyNav = function() {
		
	// VARIABLES TO GET SCROLL DISTANCE FOR ALL BROWSERS
	var distance = document.getElementsByTagName("html")[0].scrollTop;
	var distance2 = document.body.scrollTop;
	
	// MAKE RESPONSIVE NAV STICK ON SCROLL
	if (distance > 1 || distance2 > 1) {
		if (navigator.userAgent.indexOf("Trident") > 0) {
			return;
			
		} else if (navigator.userAgent.indexOf("Firefox") > 0) {
			
			if (!navOpen) {
				navBar.style.top = distance + "px";
			}	
		} else if (navigator.userAgent.indexOf("Chrome") > 0) {
			
			if (!navOpen) {
				navBar.style.top = distance2 + "px";
			}
		}
		backToTop[0].style.background = "rgb(30,145,255)";
		backToTop[1].style.background = "rgb(30,145,255)";
		
	} else {
		if (!navOpen) {
			nav.style.top = "2px";
		} else {
			if (width < 750) {
				nav.style.top = "0px";
			} else {
				nav.style.top = "50px";
			}
			
		}
		navBar.style.top = "0";

		backToTop[0].style.background = "rgb(245,245,245)";
		backToTop[1].style.background = "rgb(245,245,245)";
	}
};

window.onscroll = function() {stickyNav()};
//* ========================================= *//



// MODAL VARIABLES
var modalWrap = document.getElementById("modalWrap");
var modal = document.getElementById("modal");
var closeModal = document.getElementById("closeModal");

var myCounter;
	
/*==============================================
OPEN MODAL
===============================================*/

// var openThatModal = function () {
	
	// for (var i = 0; i < .length; i++) {
		
		// [i].marker = i;
		
		// [i].onclick = function() {
				
			// modalWrap.style.display = "block";
			// modalWrap.classList.toggle("closeModal", false);
			// modalWrap.classList.toggle("openModal", true);
		
			// // MAKE LIGHTBOX OPEN IN WINDOW INSTEAD OF TOP OF DOCUMENT IN CASE OF USER SCROLL - ACOUNTS FOR CORSS-BROWSER 
			// if (navigator.userAgent.indexOf("Firefox") > 0) {
				// modal.style.top = document.documentElement.scrollTop + "px";
			// } else if (navigator.userAgent.indexOf("AppleWebKit") > 0 || navigator.userAgent.indexOf("Trident") > 0) {
				// modal.style.top = window.pageYOffset + "px";
			// }

			// [this.marker].style.display = "block";
			// myCounter = this.marker;
				
		// }
	// }
// };

// openThatModal();
//* ========================================= *//


/*==============================================
CLOSE MODAL
===============================================*/
// var closeThatModal = function() {

	// closeModal.onclick = function() {	
			
		// for (var i = 0; i < .length; i++) {
			// [i].style.display = "none";
		// }
		
		// modalWrap.classList.toggle("openModal", false);
		// modalWrap.classList.toggle("closeModal", true);
		
		// setTimeout(function(){ modalWrap.style.display = "none"; },750);

		// modalNavWrap.classList.toggle("arrowFixed", false);
	// };
// };

// closeThatModal();
//* ========================================= *//



/*==============================================
ARROWS
===============================================*/
// var arrowsAreGreat = function() {

	// var arrowWrapLeft = document.getElementById("arrowWrapLeft");
	// var arrowWrapRight = document.getElementById("arrowWrapRight");

	// arrowWrapLeft.onclick = function() {
		// if (myCounter === 0) {
			// [0].style.display = "none";
			// [.length-1].style.display = "block";
			
			// myCounter = .length-1;
		// } else {
			// [myCounter].style.display = "none";
			// [myCounter - 1].style.display = "block";
			// myCounter -= 1;
		// }
	// };

	// arrowWrapRight.onclick = function() {
		// if (myCounter === .length-1) {
			// [.length-1].style.display = "none";
			// [0].style.display = "block";

			// myCounter = 0;
		// } else {
			// [myCounter].style.display = "none";
			// [myCounter + 1].style.display = "block";
			// myCounter += 1;
		// }
	// };
// };

// arrowsAreGreat();
//* ========================================= *//



/*===============================================
STICKY MODAL NAV
===============================================*/
// var stickyNav = function() {
	
	// var arrowWrap = document.getElementsByClassName("arrowWrap");
	// var modalNavWrap = document.getElementById("modalNavWrap");
		
	// // VARIABLES TO GET SCROLL DISTANCE FOR ALL BROWSERS
	// var distance = document.getElementsByTagName("html")[0].scrollTop;
	// var distance2 = document.body.scrollTop;
	
	// // MAKE RESPONSIVE NAV STICK ON SCROLL
	// if (distance > 45 || distance2 > 45) {
		// modalNavWrap.classList.toggle("arrowFixed", true);
	// }
// };

// window.onscroll = function() {stickyNav()};
//* ========================================= *//


/*==============================================

===============================================*/

//* ========================================= *//



/*==============================================

===============================================*/

//* ========================================= *//