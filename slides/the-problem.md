##  The Problem

Servers have to handle lots of requests.

What happens when the server has to do something like this?

```javascript
var result = database.query("kittens");
// finger twaddling
send(result);
```

*The database query is blocking the thread from continuing!*