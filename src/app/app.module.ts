import { CommonModule } from '@angular/common';
import { ENVIRONMENT_INITIALIZER, inject, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DialogService } from './service/dialog.service';

export function initializeDialogService() {
  return () => {
    inject(DialogService)
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    CommonModule,MatTableModule,MatToolbarModule,MatIconModule,MatButtonModule
  ],
  providers: [{
    provide: ENVIRONMENT_INITIALIZER,
    useFactory: initializeDialogService,
    deps: [MatDialog],
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
