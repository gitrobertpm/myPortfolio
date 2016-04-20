/*===============================================
SCRIPTS.JS
===============================================*/
"use strict";

var width = window.innerWidth;
var height = window.innerHeight;


var portfolioSection = document.getElementsByClassName("portfolioSection");
var psInnerWrap = document.getElementsByClassName("psInnerWrap");
var psInfoReveal = document.getElementsByClassName("psInfoReveal");
var psInfoWrap = document.getElementsByClassName("psInfoWrap");
var myProjOuterWrap = document.getElementsByClassName("myProjOuterWrap");
var awLeft = document.getElementsByClassName("awLeft")[0];
var awRight = document.getElementsByClassName("awRight")[0];
var flowerBox = document.getElementById("flowerBox");

// NON-BLOCKING JAVASCRIPT SPECIFIC STYLES TO MAKE PAGE LOOK AND FUNCTION BETTER IF jAVASCRIPT IS ENABLED
for (var jss = 0; jss < portfolioSection.length; jss++) {
	psInfoWrap[jss].classList.toggle("jsPsInfoReveal", true);
	psInnerWrap[jss].classList.toggle("jsPsInnerWrap", true);
     portfolioSection[jss].classList.toggle("jsPortfolioSection", true);
}

var projcounter;
var projLength = myProjOuterWrap.length;

for (var jtt = 0; jtt < myProjOuterWrap.length; jtt++) {
	
	myProjOuterWrap.marker = jtt;
	
	if (jtt > 0) {
		myProjOuterWrap[jtt].style.display = "none";
	}
	
	var projcounter = 0;
}

awLeft.onclick = function() {
	if (projcounter === 0) {
		myProjOuterWrap[0].style.display = "none";
		myProjOuterWrap[projLength- 1].style.display = "block";
		projcounter = projLength - 1;
	} else {
		myProjOuterWrap[projcounter].style.display = "none";
		myProjOuterWrap[projcounter - 1].style.display = "block";
		projcounter = projcounter - 1;
	}
};

awRight.onclick = function() {
	if (projcounter === projLength- 1) {
		myProjOuterWrap[projLength- 1].style.display = "none";
		myProjOuterWrap[0].style.display = "block";
		projcounter = 0;
	} else {
		myProjOuterWrap[projcounter].style.display = "none";
		myProjOuterWrap[projcounter + 1].style.display = "block";
		projcounter = projcounter + 1;
	}
};


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
	psInfoWrap[indy].classList.toggle("showReveal", true);
	//psInfoReveal[indy].classList.toggle("hideReveal", false);
	psInnerWrap[indy].classList.toggle("showReveal", true);
	//psInnerWrap[indy].classList.toggle("hideReveal", false);
	psTitleWrap[indy].style.boxShadow = "0px 5px 5px rgba(50,50,50,0.5), 3px 3px 3px rgba(245,245,254,0.5) inset, -5px -5px 5px rgba(50,50,50,0.7) inset";					
	CheckItOutBtn[indy].innerHTML = "Close"
};

var closeDetes = function(indi) {
	portfolioSection[indi].classList.toggle("absoluteReveal", false);
	psInfoWrap[indi].classList.toggle("showReveal", false);
	//psInfoReveal[indi].classList.toggle("hideReveal", true);
	psInnerWrap[indi].classList.toggle("showReveal", false);
	//psInnerWrap[indi].classList.toggle("hideReveal", true);
	psTitleWrap[indi].style.boxShadow = "3px 3px 3px rgba(245,245,254,0.5) inset, -5px -5px 5px rgba(50,50,50,0.7) inset";
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
		infoToggle = true;
	};
}



// ADD FUCNTIONALITY TO NAV BAR CONTACT LINK
var navBarContactLink = document.getElementById("navBarContactLink");

navBarContactLink.onclick = function() {
	for (var navInd2 = 0; navInd2 < siteMapLink.length; navInd2++) {
		closeDetes(navInd2);
	}
	openDetes(5);
	infoToggle = true;
};



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



/*==============================================

===============================================*/

//* ========================================= *//



/*==============================================

===============================================*/

//* ========================================= *//