##  what is a callback

Callbacks are functions that are passed as parameters to other functions, 
and then called within those functions

LinkedList implementation requires a function pointer to free a payload,
same idea

```
function helloCaller(helloFn, name) {
  helloFn(name);
}

function hello(name) { console.log("hello " + name); }
function swedishHello(name) { console.log("hej " + name); }

helloCaller(hello, "CSE 333");
helloCaller(swedishHello, "CSE 333");
```