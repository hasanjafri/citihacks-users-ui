import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { OVERLAY_DATA } from 'src/app/config/overlay.config';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {
  departmentControl = new FormControl('', [Validators.required]);
  locationControl = new FormControl('', [Validators.required]);
  eventControl = new FormControl('', [Validators.required]);

  departments = ['Engineering', 'Management', 'Business', 'Admin', 'Security'];
  locations = ['Canada', 'USA', 'Singapore', 'London', 'India', 'Dubai', 'Japan', 'China'];
  events = [];

  enteredUserId: string;
  verifiedUserId: string;
  verifyUserSubject: Subject<any>;
  askedQuestion: string;

  constructor(private eventsService: EventsService, @Inject(OVERLAY_DATA) public overlayProps) {}

  ngOnInit() {}

  searchUser(evt, userId) {
    evt.preventDefault();
    console.log(userId);
    if (userId) {
      this.verifyUserSubject = this.eventsService.pullUserInfoByUserId(userId);
      this.verifyUserSubject.subscribe((resp) => {
        const user = JSON.parse(resp.data);
        console.log(user);
      });
      setTimeout(() => {
        this.verifyUserSubject.next('pullEvent');
      }, 2000);
    }
  }

  askQuestion(askQuestionForm) {
    console.log(askQuestionForm);
  }
}
