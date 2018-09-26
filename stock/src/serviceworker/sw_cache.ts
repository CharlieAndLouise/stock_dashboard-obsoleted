self.addEventListener("install", (event)=>{
    console.log("SW Installed at ", new Date().toLocaleTimeString());
});

self.addEventListener("activate", (event)=>{
    console.log("SW Activated at ", new Date().toLocaleTimeString());
});