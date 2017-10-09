import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {BookingComponent} from './booking/booking.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {PricesComponent} from './prices/prices.component';
import {FleetComponent} from './fleet/fleet.component';
import {ContactusComponent} from './contactus/contactus.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BookingComponent,
    NavbarComponent,
    AboutusComponent,
    PricesComponent,
    FleetComponent,
    ContactusComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
