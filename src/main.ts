import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MyTakeModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(MyTakeModule)
  .catch(err => console.error(err));
