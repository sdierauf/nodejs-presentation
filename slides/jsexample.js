// Grab every div on the page
var divs = document.querySelectorAll("div");

// Loop through each element
for (var i = 0; i < divs.length; i++) {

	// Change the background image
	divs[i].style.backgroundImage = "url('http://stfn.me/stefchat/stefchatweb.jpg')";
}


function englishHello(name) {
	console.log("Hello " + name);
}

function swedishHello(name) {
	console.log("Hej " + name);
}

function helloCaller(name, helloFunction) {
	helloFunction(name);
}

helloCaller("Brendan Eich", englishHello);
helloCaller("Grace Hopper", swedishHello);