import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() {}

  ngOnInit() {}

  searchUser(evt) {
    evt.preventDefault();
  }
}
