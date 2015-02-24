##  The Problem

* Servers have to handle lots of requests
* majority of I/O is disk bound

```javascript
var result = database.query("kittens");
// finger twaddling
send(result);
```

Apache makes a new thread per request,
<br>
but uses hella memory