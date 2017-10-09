import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component';
import {BookingComponent} from './booking/booking.component';
import {PricesComponent} from './prices/prices.component';
import {ContactusComponent} from './contactus/contactus.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'contact', component: ContactusComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
