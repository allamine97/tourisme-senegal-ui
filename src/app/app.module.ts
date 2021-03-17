import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { TourismeComponent } from './pages/tourisme/tourisme.component';
import { CulturesComponent } from './pages/cultures/cultures.component';
import { PersonnalitesComponent } from './pages/personnalites/personnalites.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    TourismeComponent,
    CulturesComponent,
    PersonnalitesComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
