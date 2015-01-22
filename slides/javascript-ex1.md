##  Javascript example #1

Some simple DOM manipulation

```javascript
// Grab every div on the page
var divs = document.querySelectorAll("div");

// Loop through each element
for (var i = 0; i < divs.length; i++) {
	// Change the background image
	divs[i].style.backgroundImage = 
		"url('http://stfn.me/stefchat/stefchatweb.jpg')";
}
```