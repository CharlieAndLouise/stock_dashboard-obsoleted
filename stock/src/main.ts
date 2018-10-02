
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export var testVar = "Abc";

platformBrowserDynamic().bootstrapModule(AppModule);

/*
if (navigator.serviceWorker) {
    navigator.serviceWorker.register("sw_cache.js").catch(()=>{ console.log("Cannot register service worker!");});
}
*/