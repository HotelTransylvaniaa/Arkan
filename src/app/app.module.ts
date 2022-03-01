import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitysSectionComponent } from './citys-section/citys-section.component';
import { CityscardComponent } from './cityscard/cityscard.component';

@NgModule({
  declarations: [
    AppComponent,
    CitysSectionComponent,
    CityscardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
