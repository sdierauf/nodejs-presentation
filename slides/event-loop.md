##  Event Loop

* Async calls enqueued on event loop with a callback
* Node single-thread will dequeue and run callback
* When there's nothing left to do, node will sleep
* Everything should be async as possible!