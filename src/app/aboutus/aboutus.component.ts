import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  whoWeAre = 'Upper Echelon Limousine offers an exceptional airport limo services to customers who are visiting Canada with ' +
    'chauffeur limo hire.  Our limousines chauffeurs have been driving limousines professionally for many years.';

  whatWeDo = 'At Upper Echeolon Limousines your peace of mind is our highest priority. We know that you reputation is in our hands. ' +
    'We believe that limousine driving is more than just transportation; it\'s an experience one which we make sure is ' +
    'very relaxing and enjoyable.';

  whyUs = 'Our chauffeurs are trained professionals and have the experience to provide a range of transportation services ' +
    'including airport limo hire, business meetings or night outs.';

  constructor() {
  }

  ngOnInit() {
  }
}
