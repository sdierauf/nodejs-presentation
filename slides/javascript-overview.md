##  javascript overview

* Aka ECMAscript
* Standardized scripting language for the web
* Designed in 10 days
* Intended to mutate DOM through browser APIs

```javascript
// Grab every div on the page
var divs = document.querySelectorAll("div");
// Loop through each element
for (var i = 0; i < divs.length; i++) {
  // Change the background image
  divs[i].style.backgroundImage = "url('http://nodejs-slides.stfn.me/files/kitten.jpg')";
}
```
