##  Anonymous Callbacks

Don't need to explicitly name a function, instead just write the function as a parameter:

```javascript
// Anonymous inlined callback
helloCaller("Bob Bobberson", function(name) {
	// Finnish Hello
	console.log("Moi " + name);
});
```
<pre>
Moi Bob Bobberson</pre>

You see this **all the *time*** when dealing with nodejs and javascript in general