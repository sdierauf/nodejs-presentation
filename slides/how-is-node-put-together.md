##  How is node put together?

* Google v8 engine that compiles/optimizes Javascript
* High performance parts written in C (http, etc)
* Bridge between high performance parts to v8 (via v8 apis)
* Libuv as an abstraction layer for network and file system
