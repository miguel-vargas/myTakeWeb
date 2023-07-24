import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CoreModule } from './my-take/core/core.module';

platformBrowserDynamic()
  .bootstrapModule(CoreModule)
  .catch((err) => console.error(err));
