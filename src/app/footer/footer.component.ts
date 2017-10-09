import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebookHref = 'https://www.facebookHref.com/Upper-Echelon-Limousine-Services-362029554223965/';
  twitterHref = 'javascript:void(0)';
  googleHref = 'javascript:void(0)';
  instaHref = 'javascript:void(0)';
  linkedInHref = 'javascript:void(0)';

  poweredByHref = 'https://sagher.github.io';
  poweredbyTitle = 'sagher.github.io';

  constructor() {
  }

  ngOnInit() {
  }

}
