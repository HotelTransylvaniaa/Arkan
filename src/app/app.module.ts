import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitysSectionComponent } from './citys-section/citys-section.component';
import { CitycardComponent } from './citycard/citycard.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CitysSectionComponent,
    WhatsappComponent,
    CitycardComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
