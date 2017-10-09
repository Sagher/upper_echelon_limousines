import {Component, OnInit, Input} from '@angular/core';
import {Feedback} from '../model/feedback';
import {Http} from '@angular/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  @Input() feedback: Feedback;

  location = 'Toronto, Ontario';
  phone = '+1 647.739.5533';
  email = 'info@uelimo.com';

  constructor(protected http: Http) {
  }

  ngOnInit() {
    this.feedback = new Feedback;
  }

  submitFeedback(): void {
    console.log(this.feedback);
    if (this.feedback.name != null && this.feedback.email && this.feedback.message) {

      this.http.get('http://uelimo.com/scripts/submitFeedback.php', {params: this.feedback})
        .subscribe(function (response) {
          console.log(response);
          if (response.status === 200) {
            this.feedback = new Feedback();
            alert('Feedback submitted successfully');
          } else {
            alert('Failed. Try Later');
          }
        });
    } else {
      alert('Please fill all fields');
    }
  }

}
