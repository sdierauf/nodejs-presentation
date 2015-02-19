## The Solution

Nodejs uses callbacks to defer dealing with I/O until it's ready

```
database.query("kittens", function (data) {
  // database is done and has the data ready
  send(data);
});

// do other servery things
```
*we'll explore callbacks and javascript language features later*
