import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MyTakeModule } from './my-take/my-take.module';


platformBrowserDynamic().bootstrapModule(MyTakeModule)
  .catch(err => console.error(err));
