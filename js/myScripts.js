/*===============================================
SCRIPTS.JS
===============================================*/
"use strict";

var width = window.innerWidth;
var height = window.innerHeight;


var portfolioSection = document.getElementsByClassName("portfolioSection");
var psInnerWrap = document.getElementsByClassName("psInnerWrap");
var psInfoReveal = document.getElementsByClassName("psInfoReveal");
var flowerBox = document.getElementById("flowerBox");

// NON-BLOCKING JAVASCRIPT SPECIFIC STYLES TO MAKE PAGE LOOK AND FUNCTION BETTER IF jAVASCRIPT IS ENABLED
for (var jss = 0; jss < portfolioSection.length; jss++) {
	psInfoReveal[jss].classList.toggle("jsPsInfoReveal", true);
	psInnerWrap[jss].classList.toggle("jsPsInnerWrap", true);
     portfolioSection[jss].classList.toggle("jsPortfolioSection", true);
}


// NAV VARIABLES
var navBarOuterWrap = document.getElementsByClassName("navBarOuterWrap")[0];
var navBarInnerWrap = document.getElementsByClassName("navBarInnerWrap")[0];
var navBarList = document.getElementsByClassName("navBarList")[0];
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
var primeWrap = document.getElementsByClassName("primeWrap")[0];
var outerMainWrap = document.getElementsByClassName("outerMainWrap")[0];
var mainWrap = document.getElementsByClassName("mainWrap")[0];
var footer = document.getElementsByTagName("footer")[0];

// BOOLEAN TO TRACK NAV OPEN STATE
var navOpen = false;

var blerHelper = function(blerTot, bler1) {
	bler1.style.webkitFilter = "blur(" + blerTot + "px)";
	bler1.style.filter = "blur(" + blerTot + "px)";
};


var closeNav = function() {
	navBarInnerWrap.style.height = "40px";
	navBarList.style.display = "inline-block";				
	nav.classList.toggle("openNav", false);
	burgerWrap.classList.toggle("burgerWrapToggle", false);
	blerHelper(0, outerMainWrap);				
	burgerPatty.style.display = "block";
	burger[0].classList.toggle("burgerTopClose", false);
	burger[2].classList.toggle("burgerBottomClose", false);
	navOpen = false;
};


/*===============================================
NAV
================================================*/
	var doTheNav = function() {

		// OPEN AND CLOSE NAV
		burgerWrap.onclick = function() {
			if (!navOpen) {
				navBarInnerWrap.style.height = "auto";
				navBarList.style.display = "none";
				nav.classList.toggle("openNav", true);
				if (width < 750) {	
					setTimeout(function(){ burgerWrap.classList.toggle("burgerWrapToggle", true); }, 100);
				} else if (width > 749) {
					blerHelper(3, outerMainWrap);
					setTimeout(function(){ burgerWrap.classList.toggle("burgerWrapToggle", true); }, 750);
					burgerWrap.classList.toggle("burgerWrapToggle", true);
				}	
				burgerPatty.style.display = "none";
				burger[0].classList.toggle("burgerTopClose", true);
				burger[2].classList.toggle("burgerBottomClose", true);
				navOpen = true;
			} else if (navOpen) {				
				closeNav();
			}
		}
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
		backToTop[0].style.background = "rgb(30,145,255)";
		backToTop[1].style.background = "rgb(30,145,255)";
		
	} else {
		backToTop[0].style.background = "rgb(245,245,245)";
		backToTop[1].style.background = "rgb(245,245,245)";
	}
};

window.onscroll = function() {stickyNav()};
window.onload = function() {stickyNav()};
//* ========================================= *//




/*===========================================================================
REVEAL PORTFOLIO INFO SECTION FROM SECTION ITSELF - NAV REVEAL LOCATED BELOW
=============================================================================*/
var CheckItOutBtn = document.getElementsByClassName("CheckItOutBtn");
var closeInfo = document.getElementsByClassName("closeInfo");
var psTitleWrap = document.getElementsByClassName("psTitleWrap");
// portfolioSection AND psInfoReveal AND psInnerWrap VARIABLES DECLARED ABOVE

var infoToggle = false;

var idee;
var checkMark;

var openDetes = function(indy) {
	checkMark = indy;
	portfolioSection[indy].classList.toggle("absoluteReveal", true);
	psInfoReveal[indy].classList.toggle("showReveal", true);
	psInnerWrap[indy].classList.toggle("showReveal", true);
	psTitleWrap[indy].style.boxShadow = "0px 5px 5px rgba(50,50,50,0.5)";					
	CheckItOutBtn[indy].innerHTML = "Close"
};

var closeDetes = function(indi) {
	portfolioSection[indi].classList.toggle("absoluteReveal", false);
	psInfoReveal[indi].classList.toggle("showReveal", false);
	psInnerWrap[indi].classList.toggle("showReveal", false);
	psTitleWrap[indi].style.boxShadow = "none";
	CheckItOutBtn[indi].innerHTML = "CHECK IT OUT"
};

for (var cbi = 0; cbi < CheckItOutBtn.length; cbi++) {	
	CheckItOutBtn[cbi].marker = cbi;		
     CheckItOutBtn[cbi].onclick = function() {		
		idee = portfolioSection[this.marker].getAttribute("id");		
		if (!infoToggle) {
			openDetes(this.marker);
			window.location.assign("#" + idee);
			infoToggle = true;
		} else {
			if(this.marker !== checkMark) {
				for (var clsps = 0; clsps < portfolioSection.length; clsps++) {
					closeDetes(clsps);
				}
				openDetes(this.marker);
				window.location.assign("#" + idee);
			} else {
				closeDetes(this.marker);
				window.location.assign("#" + idee);
				infoToggle = false;
			}
		}
		
	};
	closeInfo[cbi].marker = cbi;
	closeInfo[cbi].onclick = function() {
		closeDetes(this.marker);
		window.location.assign("#" + idee);
		infoToggle = false;
	};
}




/*===========================================================================
NAV REVEAL
=============================================================================*/

var siteMapLink = document.getElementsByClassName("siteMapLink");


// GRAB NAV LINKS, SET HREF VALUE
for (var navInd = 0; navInd < siteMapLink.length; navInd++) {
	
	siteMapLink[navInd].marker = navInd;
	
	var whereTo = portfolioSection[navInd].getAttribute("id");
	
	var goingTo = siteMapLink[navInd].setAttribute("href", "#" + whereTo);
     
	siteMapLink[navInd].onclick = function() {
		for (var navInd2 = 0; navInd2 < siteMapLink.length; navInd2++) {
			closeDetes(navInd2);
		}
		openDetes(this.marker);
		closeNav();
	};
}

// ADD ONLCICK FUNCTION, OPEN CORRESPONDING SECTION


















// FUNCTION FOR ADDING VENDOR PREFIXES TO ANIMATION PROPERTY
var styleAnimation = function(element, value) {
	element.style.webkitAnimation = value;
	element.style.animation = value;
};


// SLIDE IN SUBHEADER IMAGES
var codeSection = document.getElementById("codeSection");
codeSection.addEventListener("DOMMouseScroll", flower);
codeSection.addEventListener("mousewheel", flower);
codeSection.addEventListener("wheel", flower);
codeSection.addEventListener("touchstart", flower);


function flower() {	
	// ADD ANIMATIONS TO HEADER FLOWER FOR LARGER SCREENS
	if (width > 999) {
		styleAnimation(document.getElementById("flowerBox"), "petalGlow 5s ease forwards");
		styleAnimation(document.getElementById("petal_2"), "petal_2 .5s ease forwards");
		styleAnimation(document.getElementById("petal_3"), "petal_3 1s ease forwards");
		styleAnimation(document.getElementById("petal_4"), "petal_4 1.5s ease forwards");
		styleAnimation(document.getElementById("petal_5"), "petal_5 2s ease forwards");
		styleAnimation(document.getElementById("petal_6"), "petal_6 2.5s ease forwards");
		styleAnimation(document.getElementById("petal_7"), "petal_7 3s ease forwards");
		styleAnimation(document.getElementById("petal_8"), "petal_8 3.5s ease forwards");
	}
};






// FUNCTION FOR ADDING VENDOR PREFIXES TO TRANSFORM PROPERTY
// var styleTransform = function(element, value) {
	// element.style.msTransform = value;
	// element.style.webkitTransform = value;
	// element.style.transform = value;
// };





// // GOOD LIFE CODE TRANSOFRMS
// var codeSection = document.getElementById("codeSection");
// codeSection.addEventListener("DOMMouseScroll", codeSlide);
// codeSection.addEventListener("mousewheel", codeSlide);
// codeSection.addEventListener("wheel", codeSlide);
// codeSection.addEventListener("touchstart", codeSlide);

// var codeTag = document.getElementsByTagName("code");
// var quoteDiv = document.getElementById("quoteDiv");

// function codeSlide() {
	// if (width > 999) {
		// setTimeout(function(){ styleTransform(codeTag[0], "translate(0px, 0px)"); }, 0);
		// setTimeout(function(){ styleTransform(codeTag[1], "translate(0px, 0px)"); }, 100);
		// setTimeout(function(){ styleTransform(codeTag[2], "translate(0px, 0px)"); }, 200);
		// setTimeout(function(){ styleTransform(codeTag[3], "translate(0px, 0px)"); }, 300);
		// setTimeout(function(){ styleTransform(codeTag[4], "translate(0px, 0px)"); }, 400);
		// setTimeout(function(){ styleTransform(codeTag[5], "translate(0px, 0px)"); }, 500);
		// setTimeout(function(){ styleTransform(codeTag[6], "translate(0px, 0px)"); }, 600);
		// setTimeout(function(){ styleTransform(codeTag[7], "translate(0px, 0px)"); }, 700);
		// setTimeout(function(){ styleTransform(codeTag[8], "translate(0px, 0px)"); }, 800);
		// setTimeout(function(){ styleTransform(codeTag[9], "translate(0px, 0px)"); }, 900);
		// setTimeout(function(){ styleTransform(codeTag[10], "translate(0px, 0px)"); }, 1000);
		// setTimeout(function(){ styleTransform(codeTag[11], "translate(0px, 0px)"); }, 1100);
		// setTimeout(function(){ styleTransform(codeTag[12], "translate(0px, 0px)"); }, 1200);
		// setTimeout(function(){ styleTransform(codeTag[13], "translate(0px, 0px)"); }, 1300);
		// setTimeout(function(){ styleTransform(codeTag[14], "translate(0px, 0px)"); }, 1400);
		// setTimeout(function(){ styleTransform(quoteDiv, "translate(0px, 0px)"); }, 1500);
	// }
// };





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