import {Component, OnInit} from '@angular/core';
import {Price} from '../model/price';
import {
  torontoPrices,
  ajaxPrices,
  bramptonPrices,
  burlingtonPrices,
  markhamPrices,
  oakvillePrices,
  oshawaPrices,
  richmondHillPrices
} from './prices';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  torontoPrices: Price[] = torontoPrices;
  ajaxPrices: Price[] = ajaxPrices;
  bramptonPrices: Price[] = bramptonPrices;
  burlingtonPrices: Price[] = burlingtonPrices;
  markhamPrices: Price[] = markhamPrices;
  oakvillePrices: Price[] = oakvillePrices;
  oshawaPrices: Price[] = oshawaPrices;
  richmondHillPrices: Price[] = richmondHillPrices;

  ngOnInit() {
  }
}
