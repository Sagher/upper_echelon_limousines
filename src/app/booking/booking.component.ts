import {Component, OnInit, Input} from '@angular/core';
import {Booking} from '../model/booking';
import 'rxjs/add/operator/switchMap';
import {Http} from '@angular/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  @Input() booking: Booking;

  ngOnInit(): void {
    this.booking = new Booking;
  }

  constructor(public http: Http) {
  }

  submitBooking(): void {
    console.log(this.booking);
    if (this.booking.name != null && this.booking.pickUpLoc && this.booking.pickUpDate) {

      this.http.get('http://uelimo.com/scripts/addBooking.php', {params: this.booking})
        .subscribe(function (response) {
          console.log(response);
          if (response.status === 200) {
            this.booking = new Booking();
            alert('Your Request has been received, Our operator will contact you shortly.');
          } else {
            alert('Booking processing failed. Please try later, or feel free to call us at: +1.647.739.5533');
          }
        });
    } else {
      alert('Submission failed, Please make sure that you have mentioned the name, pick Up Date and Location.');
    }
  }


}
