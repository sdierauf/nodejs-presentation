## The Solution

Nodejs uses callbacks to defer dealing with I/O until it's ready

```javascript
database.query("kittens", function (data) {
  // database is done and has the data ready
  send(data);
});

// do other servery things
skynet.spawn({"model": "T-1000"});
```
*we'll explore callbacks and javascript language features later*
