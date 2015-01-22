##  Javascript Example #2

First class functions!!

```javascript
function englishHello(name) {
	console.log("Hello " + name);
}

function swedishHello(name) {
	console.log("Hej " + name);
}

var cse333 = swedishHello;

function helloCaller(name, helloFunction) {
	helloFunction(name);
}

helloCaller("Brendan Eich", englishHello);
helloCaller("Grace Hopper", swedishHello);
helloCaller("Abraham Lincoln", cse333);
```

<pre>
Hello Brendan Eich
Hej Grace Hopper
Hej Abraham Lincoln</pre>
