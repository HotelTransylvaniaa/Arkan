import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArkanServicesComponent } from './Home/arkan-services/arkan-services.component';
import { ArkanServicesListComponent } from './Home/arkan-services-list/arkan-services-list.component';
import { HeaderComponent } from './Home/header/header.component';
import { CitysSectionComponent } from './Home/citys-section/citys-section.component';
import { CityCardComponent } from './Home/city-card/city-card.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CitysSectionComponent } from './citys-section/citys-section.component';
import { CitycardComponent } from './citycard/citycard.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    AppComponent,
    ArkanServicesComponent,
    ArkanServicesListComponent,
    HeaderComponent,
    CitysSectionComponent,
    CityCardComponent,
    WhatsappComponent,
    FooterComponent,
    NavbarComponent,
    CitysSectionComponent,
    WhatsappComponent,
    CitycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
