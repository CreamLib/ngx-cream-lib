import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NgxCreamLibModule } from '../../projects/ngx-cream-lib/src/lib/ngx-cream-lib.module';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule, NgxCreamLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
