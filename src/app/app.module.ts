import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiFooterModule } from 'projects/ngx-ui-footer/src/public-api';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
