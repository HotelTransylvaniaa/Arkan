import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArkanServicesComponent } from './Home/arkan-services/arkan-services.component';
import { ArkanServicesListComponent } from './Home/arkan-services-list/arkan-services-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArkanServicesComponent,
    ArkanServicesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
