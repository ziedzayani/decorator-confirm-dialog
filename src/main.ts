import { ENVIRONMENT_INITIALIZER, importProvidersFrom, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { DialogService } from './app/service/dialog.service';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/*bootstrapApplication(AppComponent, { providers : [
  importProvidersFrom(MatDialogModule),
  {
    provide: ENVIRONMENT_INITIALIZER,
    useFactory: initializeDialogService,
    deps: [MatDialog],
    multi: true
  }
]
})
  .catch(err => console.error(err));*/
