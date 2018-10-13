/* jQuery is great */
// I am not going to put all of this in a self-invoking function
// Also I switched from Notepad++ to Dreamweaver

// Show message
var showing = 0;
function showMessage(msg, duration){
	function showIndicator(){
		$("#message").animate({padding: "12px"}, duration, function(){
			hideMsg();
		});
		console.log(duration);
	}
	function hideMsg(){
		$("#message").slideUp(400, "easeInOutQuad", function(){
			$("#message").css("padding", "10px");
			showing = 0;
		});
	}
	if (showing === 0){
		showing = 1;
		$("#message").slideUp(0);
		$("#message-text").text(msg);
		$("#message").slideDown(400, "easeOutBounce", function(){
			showIndicator();
		});
	}
}

// Random Link
function redirectLink(){
	var randLink = Math.ceil(Math.random()*7)
	switch (randLink) {
		case 1:
			window.open("http://www.geocities.ws/nnabnews/EOY2017.mp3");
			break;
		case 2:
			window.open("http://www.geocities.ws/nnabnews/MemeityRemastered.mp3");
			break;
		case 3:
			window.open("http://www.geocities.ws/nnabnews/HelloInternet.mp3");
			break;
		case 4:
			window.open("http://geocities.ws/nnabnews/Smash%20McDonald%20-%20All%20McMusic.mp3");
			break;
		case 5:
			window.open("http://www.geocities.ws/nnabnews/fidgetspinner");
			break;
		case 6:
			window.open("http://www.geocities.ws/nnabnews/RememberTheNet.mp3");
			break;
		default:
			window.open("http://www.geocities.ws/nnabnews/mathtest");
	}
}

// Initialization
$(document).ready(function(){
	// Messages
	if (Cookies.get("introMessage") != "true") {
		Cookies.set("introMessage", "true");
		Cookies.set("timesVisited", 1);
		showMessage("Hi! Happy Spooktober!", 2000);
		setTimeout(
			function(){
				showMessage("This website is still under construction!", 2000);
			}, 3000);
		setTimeout(
			function(){
				showMessage("Also, I'm using Dreamweaver rather than Notepad++ now...", 2000);
			}, 6000);
		setTimeout(
			function(){
				showMessage("Thanks, and have fun!", 2000);
			}, 9000);
		/*Cookies.set("introMsg", "true");
		console.log(Cookies.get("introMsg")); (This was scrapped)*/
	} else {

		// Increment times visited
		Cookies.set("timesVisited", Number.valueOf()(Cookies.get("timesVisited")) + 1);

		if (Number.valueOf()(Cookies.get("timesVisited")) <= 5) {
			showMessage("Welcome back!", 2000);
		} else if (Number.valueOf()(Cookies.get("timesVisited")) < 100) {
			showMessage("Welcome back! You have visited this page " + Cookies.get("timesVisited") + " times.", 2000);
		} else if (Number.valueOf()(Cookies.get("timesVisited")) < 200) {
			showMessage("What do you think you're doing?!", 2000);
		} else if (Number.valueOf()(Cookies.get("timesVisited")) == 201) {
			showMessage("It's time to stop!", 2000);
		}
	}
	// Resize easter egg
	$(window).resize(function(){
		if (window.innerWidth <= 500) {
			showMessage("Ouch!", 2000);
			$(this).off("resize");
		}
	});
	// Display posts
	displayResult();
	// Log message to console
	console.log("%cLooking around?", "color: white; font-size:30px; font-family: \"Source Sans Pro\", sans-serif; font-weight: 500;-webkit-text-stroke: 1px black;", "Try: showMessage(\"[Insert Message]\", [Duration in milliseconds])");
	// Fullscreen function

	// Add fullscreen button
	var fullScreenBtn = "<img class='full-screen' src='https://png.icons8.com/full-screen-filled/ios7/100' width=35rem />";
	// Full Screen Filled icon by Icons8
	$(".post").prepend(fullScreenBtn);
	$(".full-screen").click(function(){
		if (this.scaled != true){
			if (document.querySelectorAll(".scaled").length != 0){
			document.querySelector(".scaled").scaled = false;
			}
			$(".scaled").parent().animate({"width":"33.01%","height":"20rem","minWidth":"20rem"},500,"easeInOutExpo");
			$(".scaled").animate({"width":"35px"},500,"easeInOutExpo");
			$(".scaled").removeClass("scaled");
			this.scaled = true;
			$(this).addClass("scaled");
			$(this).parent().animate({"width":"66.3%","height":"40.2rem","minWidth":"40rem"},500,"easeInOutExpo");
			$(this).animate({"width":"45px"},500,"easeInOutExpo");
		} else {
			this.scaled = false;
			$(this).removeClass("scaled");
			$(this).parent().animate({"width":"33.01%","height":"20rem","minWidth":"20rem"},500,"easeInOutExpo");
			$(this).animate({"width":"35px"},500,"easeInOutExpo");
		}
	})
	// Bottom bar buttons
	var currentPage = "Blogs";
	function changePage(){
		switch (currentPage){
		case "Blogs":
			$("#blogs-button").children().css("background-color","#baffff");
			break;
		case "About":
			$("#about-button").children().css("background-color","#baffff");
			break;
		}
	}
	changePage();
	$(".bottom-bar-button").mouseenter(function(){
		if ($(this).children().children().text() == currentPage){
		} else {
			$(this).children().css("background-color","#baffff");
		}
	});
	$(".bottom-bar-button").mouseleave(function(){
		if ($(this).children().children().text() == currentPage){
		} else {
			$(this).children().css("background-color","white");
		}
	});
	$(".bottom-bar-button").click(function(){
		if ($(this).children().children().text() == "About" && $(this).children().children().text() != currentPage){
			$(".post , .app, .full-screen").slideToggle(500, "easeInSine", function(){
			$(".about-section").slideDown(300, "easeOutSine");
			});
			currentPage = "About";
			$("#blogs-button").children().css("background-color","white");
		} else if ($(this).children().children().text() == "Blogs" && $(this).children().children().text() != currentPage){
			$(".about-section").slideUp(300, "easeInSine", function(){
			$(".post , .app, .full-screen").slideToggle(500, "easeOutSine");
			});
			currentPage = "Blogs";
			$("#about-button").children().css("background-color","white");
		}
		changePage();
	});
	// About page text
	$("#about-text").text(aboutText);
	// Numberphile easter egg
	$(document).keydown(function(event){
		if (event.which == 69){
			showMessage("We're gonna talk about e! The big, famous constant, e!", 2718);
		}
		// Thanks James Grime
	});
});

// Got the following code from W3Schools :P

function displayResult(){
	var parseXML = new DOMParser();
	var xml = parseXML.parseFromString(blogXML,"text/xml");
	var xsl = parseXML.parseFromString(blogXSL,"text/xml");
	// code for IE
	if (window.ActiveXObject)
	{
		var ex = xml.transformNode(xsl);
		document.getElementById("postsXML").innerHTML = ex;
	}
	// code for Chrome, Firefox, Opera, etc.
	else if (document.implementation && document.implementation.createDocument)
	{
		var	xsltProcessor = new XSLTProcessor();
		xsltProcessor.importStylesheet(xsl);
		resultDocument = xsltProcessor.transformToFragment(xml, document);
		document.getElementById("postsXML").appendChild(resultDocument);
	}
}
