import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCreamLibModule } from '../../projects/ngx-cream-lib/src/lib/ngx-cream-lib.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionPageComponent } from './pages/accordion-page/accordion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortalLayoutComponent } from './portal-layout/portal-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalLayoutComponent,
    AccordionPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    MainNavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxCreamLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
