import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
     declarations: [
    AppComponent,
    // other components
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    // ...other imports
  ],
  bootstrap: [AppComponent]
  // ...declarations, bootstrap
})
export class AppModule { }