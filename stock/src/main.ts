
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export var testVar = "Abc";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));