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
var openNav = document.getElementsByTagName("openNav")[0];
var burgerWrap = document.getElementsByClassName("burgerWrap")[0];
var burgerPatty = document.getElementsByClassName("burgerPatty")[0];
var siteMapWrap = document.getElementsByClassName("siteMapWrap")[0];
var siteMapListItem = document.getElementsByClassName("siteMapListItem");
var backToTop = document.getElementsByClassName("backToTop");

var burger = document.getElementsByClassName("burger");

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
				//nav.style.overflow = "auto";
				
				if (width < 750) {
					
					setTimeout(function(){ burgerWrap.classList.toggle("burgerWrapToggle", true); }, 100);
					//burgerWrap.classList.toggle("burgerWrapToggle", true);
				} else if (width > 749) {
					blerHelper(navBar, footer, 1.5);
					blerHelper(header, mainWrap, 3);
					setTimeout(function(){ burgerWrap.classList.toggle("burgerWrapToggle", true); }, 750);
					burgerWrap.classList.toggle("burgerWrapToggle", true);
					if (height < 850) {
						setTimeout(function(){ nav.style.overflow = "scroll"; }, 1000);
					}
					
				}
				
				burgerPatty.style.display = "none";
				burger[0].classList.toggle("burgerTopClose", true);
				burger[2].classList.toggle("burgerBottomClose", true);
				
				setTimeout(function(){ siteMapWrap.style.display = "block"; }, 250);
				
				
				//siteMapWrap.appendChild(burgerWrap);

				navOpen = true;
			} else if (navOpen) {
				body.style.overflow = "auto";
				nav.classList.toggle("openNav", false);
				//nav.style.overflow = "hidden";
				burgerWrap.classList.toggle("burgerWrapToggle", false);
				
				nav.style.overflow = "hidden";
				
				blerHelper(header, mainWrap, 0);
				blerHelper(navBar, footer, 0);
				
				burgerPatty.style.display = "block";
				burger[0].classList.toggle("burgerTopClose", false);
				burger[2].classList.toggle("burgerBottomClose", false);
				
				siteMapWrap.style.display = "none";
				
				//nav.insertBefore(burgerWrap, nav.childNodes[0]);
				
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
// var stickyNav = function() {
		
	// // VARIABLES TO GET SCROLL DISTANCE FOR ALL BROWSERS
	// var distance = document.getElementsByTagName("html")[0].scrollTop;
	// var distance2 = document.body.scrollTop;
	
	// // MAKE RESPONSIVE NAV STICK ON SCROLL
	// if (distance > 1 || distance2 > 1) {
		// if (navigator.userAgent.indexOf("Trident") > 0) {
			// return;
			
		// } else if (navigator.userAgent.indexOf("Firefox") > 0) {
			
			// if (!navOpen) {
				// navBar.style.top = distance + "px";
			// }	
		// } else if (navigator.userAgent.indexOf("Chrome") > 0) {
			
			// if (!navOpen) {
				// navBar.style.top = distance2 + "px";
			// }
		// }
		// backToTop[0].style.background = "rgb(30,145,255)";
		// backToTop[1].style.background = "rgb(30,145,255)";
		
	// } else {
		// navBar.style.top = "0";

		// backToTop[0].style.background = "rgb(245,245,245)";
		// backToTop[1].style.background = "rgb(245,245,245)";
	// }
// };

// window.onscroll = function() {stickyNav()};
// window.onload = function() {stickyNav()};
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