/*===============================================
SCRIPTS.JS
===============================================*/
(function(window, document) {
"use strict";

const portfolioSection = document.getElementsByClassName("portfolioSection");
const psInnerWrap = document.getElementsByClassName("psInnerWrap");
const psInfoWrap = document.getElementsByClassName("psInfoWrap");
const myProjOuterWrap = document.getElementsByClassName("myProjOuterWrap");
const awLeft = document.getElementsByClassName("awLeft")[0];
const awRight = document.getElementsByClassName("awRight")[0];


// NON-BLOCKING JAVASCRIPT SPECIFIC STYLES TO MAKE PAGE LOOK AND FUNCTION BETTER IF jAVASCRIPT IS ENABLED

[].forEach.call(portfolioSection, (vally, indy, arry) => {
	psInfoWrap[indy].classList.toggle("jsPsInfoReveal", true);
	psInnerWrap[indy].classList.toggle("jsPsInnerWrap", true);
     portfolioSection[indy].classList.toggle("jsPortfolioSection", true);
});

var projcounter;
var projLength = myProjOuterWrap.length;

[].forEach.call(myProjOuterWrap, (vally, indy, arry) => {
	if (indy > 0) {
		myProjOuterWrap[indy].style.display = "none";
	}
	projcounter = 0;
});


awLeft.addEventListener("click", () => {
	if (projcounter === 0) {
		myProjOuterWrap[0].style.display = "none";
		myProjOuterWrap[projLength- 1].style.display = "block";
		projcounter = projLength - 1;
	} else {
		myProjOuterWrap[projcounter].style.display = "none";
		myProjOuterWrap[projcounter - 1].style.display = "block";
		projcounter = projcounter - 1;
	}
});

awRight.addEventListener("click", () => {
	if (projcounter === projLength- 1) {
		myProjOuterWrap[projLength- 1].style.display = "none";
		myProjOuterWrap[0].style.display = "block";
		projcounter = 0;
	} else {
		myProjOuterWrap[projcounter].style.display = "none";
		myProjOuterWrap[projcounter + 1].style.display = "block";
		projcounter = projcounter + 1;
	}
});


// NAV VARIABLES
const navBarInnerWrap = document.getElementsByClassName("navBarInnerWrap")[0];
const navBarList = document.getElementsByClassName("navBarList")[0];
const nav = document.getElementsByTagName("nav")[0];
const burgerWrap = document.getElementsByClassName("burgerWrap")[0];
const burgerPatty = document.getElementsByClassName("burgerPatty")[0];
const backToTop = document.getElementsByClassName("backToTop");
const burger = document.getElementsByClassName("burger");
const outerMainWrap = document.getElementsByClassName("outerMainWrap")[0];

// BOOLEAN TO TRACK NAV OPEN STATE
var navOpen = false;

function blerHelper(blerTot, bler1) {
	bler1.style.webkitFilter = "blur(" + blerTot + "px)";
	bler1.style.filter = "blur(" + blerTot + "px)";
};


function openNav() {
	let width = window.innerWidth;
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
}


function closeNav() {
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
// OPEN AND CLOSE NAV
burgerWrap.addEventListener("click", () => {
	if (!navOpen) {
		openNav();
	} else if (navOpen) {				
		closeNav();
	}
});

//* ========================================= *//



/*===============================================
STICKY NAV
===============================================*/
function stickyNav() {
		
	// VARIABLES TO GET SCROLL DISTANCE FOR ALL BROWSERS
	let distance = document.getElementsByTagName("html")[0].scrollTop;
	let distance2 = document.body.scrollTop;
	
	// MAKE RESPONSIVE NAV STICK ON SCROLL
	if (distance > 1 || distance2 > 1) {
		backToTop[0].style.background = "rgb(30,145,255)";
		backToTop[1].style.background = "rgb(30,145,255)";
		
	} else {
		backToTop[0].style.background = "rgb(245,245,245)";
		backToTop[1].style.background = "rgb(245,245,245)";
	}
};

window.onscroll = function() {stickyNav();};
window.onload = function() {stickyNav();};
//* ========================================= *//




/*===========================================================================
REVEAL PORTFOLIO INFO SECTION FROM SECTION ITSELF - NAV REVEAL LOCATED BELOW
=============================================================================*/
const CheckItOutBtn = document.getElementsByClassName("CheckItOutBtn");
const closeInfo = document.getElementsByClassName("closeInfo");
const psTitleWrap = document.getElementsByClassName("psTitleWrap");
// portfolioSection AND psInfoReveal AND psInnerWrap VARIABLES DECLARED ABOVE

var infoToggle = false;

var idee;
var checkMark;

function openDetes(indy) {
	checkMark = indy;
	portfolioSection[indy].classList.toggle("absoluteReveal", true);
	psInfoWrap[indy].classList.toggle("showReveal", true);
	psInnerWrap[indy].classList.toggle("showReveal", true);
	psTitleWrap[indy].style.boxShadow = "0px 5px 5px rgba(50,50,50,0.5), 3px 3px 3px rgba(245,245,254,0.5) inset, -5px -5px 5px rgba(50,50,50,0.7) inset";					
	CheckItOutBtn[indy].innerHTML = "Close";
};

function closeDetes(indi) {
	portfolioSection[indi].classList.toggle("absoluteReveal", false);
	psInfoWrap[indi].classList.toggle("showReveal", false);
	psInnerWrap[indi].classList.toggle("showReveal", false);
	psTitleWrap[indi].style.boxShadow = "3px 3px 3px rgba(245,245,254,0.5) inset, -5px -5px 5px rgba(50,50,50,0.7) inset";
	CheckItOutBtn[indi].innerHTML = "CHECK IT OUT";
};

let titleWrapArr = [].slice.call(psTitleWrap);

titleWrapArr.forEach(function(vally, indy, arry) {
	vally.marker = indy;
	psTitleWrap[indy].marker = indy;
	vally.addEventListener("click", function(e) {
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
	});	
});


let closeButtonArr = [].slice.call(closeInfo);
closeButtonArr.forEach(function(vally, indy, arry) {
	vally.marker = indy;
	closeInfo[indy].marker = indy;
	vally.addEventListener("click", function() {
		closeDetes(this.marker);
		window.location.assign("#" + idee);
		infoToggle = false;
	});
});


/*===========================================================================
NAV REVEAL
=============================================================================*/
const siteMapLink = document.getElementsByClassName("siteMapLink");

function openFromNav(el) {
	el.addEventListener("click", function() {
		[].forEach.call(siteMapLink, function(vally, indy, arry) {
			closeDetes(indy);
		});
		openDetes(this.marker);
		closeNav();
		infoToggle = true;
	});
}

[].forEach.call(siteMapLink, function(vally, indy, arry) {
	siteMapLink[indy].marker = indy;
	openFromNav(siteMapLink[indy]);
});


// ADD FUCNTIONALITY TO NAV BAR CONTACT LINK
const navBarContactLink = document.getElementById("navBarContactLink");

navBarContactLink.addEventListener("click", () => {
	[].forEach.call(siteMapLink, (vally, indy, arry) => {
		closeDetes(indy);
	});
	openDetes(5);
	infoToggle = true;
});


// FUNCTION FOR ADDING VENDOR PREFIXES TO ANIMATION PROPERTY
function styleAnimation(element, value) {
	document.getElementById(element).style.webkitAnimation = value;
	document.getElementById(element).style.animation = value;
};


// SLIDE IN FLOWER
var codeSection = document.getElementById("codeSection");
codeSection.addEventListener("DOMMouseScroll", flower);
codeSection.addEventListener("mousewheel", flower);
codeSection.addEventListener("wheel", flower);
codeSection.addEventListener("touchstart", flower);
codeSection.addEventListener("mouseover", flower);


function flower() {	
	// ADD ANIMATIONS TO FLOWER FOR LARGER SCREENS
	let width = window.innerWidth;
	if (width > 999) {
		styleAnimation("flowerBox", "petalGlow 5s ease forwards");
		styleAnimation("petal_2", "petal_2 .5s ease forwards");
		styleAnimation("petal_3", "petal_3 1s ease forwards");
		styleAnimation("petal_4", "petal_4 1.5s ease forwards");
		styleAnimation("petal_5", "petal_5 2s ease forwards");
		styleAnimation("petal_6", "petal_6 2.5s ease forwards");
		styleAnimation("petal_7", "petal_7 3s ease forwards");
		styleAnimation("petal_8", "petal_8 3.5s ease forwards");
	}
}

})(window, document);

/*==============================================

===============================================*/

//* ========================================= *//


