const version = "1.0.0.0";

self.addEventListener("install", (event: any)=>{
    console.log("SW Installed at ", new Date().toLocaleTimeString());
    event.waitUntil(
        caches.open(version).then((cache: Cache)=> {
            return cache.addAll([
                "/index.html",
                "/app.css",
                "/favicon.ico",
                "/angular.js",
                "/app.js",
                "/rxjs.js",
                "/zone.min.js"
            ])
        })
    );
});

self.addEventListener("activate", (event)=>{
    console.log("SW Activated at ", new Date().toLocaleTimeString());
});

self.addEventListener("fetch", (event: any)=>{
    event.respondWith(caches.match(event.request).then((resource)=> {  
        if (resource) {
            console.log("Read from cache - " + event.request.url);
            return resource;
        }
        else {
            console.log("Read from internet - " + event.request.url);
            return fetch(event.request);
        }
    }));
});