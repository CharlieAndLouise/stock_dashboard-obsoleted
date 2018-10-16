
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

let google: any = window["google"];

//google.charts.load("current", {packages: ["corecharts"]});
google.charts.setOnLoadCallback(()=>{
    platformBrowserDynamic().bootstrapModule(AppModule);
});



/*
if (navigator.serviceWorker) {
    navigator.serviceWorker.register("sw_cache.js").catch(()=>{ console.log("Cannot register service worker!");});
}
*/