##  what is a callback

Callbacks are functions that are passed as parameters to other functions, 
and then called within those functions

```
function helloCaller(helloFn, name) {
  helloFn(name);
}

function hello(name) { console.log("hello " + name); }
function swedishHello(name) { console.log("hej " + name); }

helloCaller(hello, "CSE 333");
helloCaller(swedishHello, "CSE 333");
```