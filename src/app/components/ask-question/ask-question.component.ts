import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { OVERLAY_DATA } from "src/app/config/overlay.config";
import { EventsService } from "src/app/services/events.service";

@Component({
  selector: "app-ask-question",
  templateUrl: "./ask-question.component.html",
  styleUrls: ["./ask-question.component.scss"]
})
export class AskQuestionComponent implements OnInit {
  departmentControl = new FormControl("", [Validators.required]);
  locationControl = new FormControl("", [Validators.required]);
  eventControl = new FormControl("", [Validators.required]);

  departments = ["Engineering", "Management", "Business", "Admin", "Security"];
  locations = [
    "Canada",
    "USA",
    "Singapore",
    "London",
    "India",
    "Dubai",
    "Japan",
    "China"
  ];
  events = [];
  tempData = [];
  private eventsSubject: Subject<any>;

  enteredUserId: string;
  verifiedUserId: string;
  verifiedUserName: string;
  verifiedDepartment: string;
  verifiedLocation: string;
  verifyUserSubject: Subject<any>;
  askedQuestion: string;
  selectedEvent: number;
  registered: boolean = true;

  constructor(
    private eventsService: EventsService,
    @Inject(OVERLAY_DATA) public overlayProps
  ) {}

  ngOnInit() {
    console.log(this.overlayProps);
    this.eventsSubject = this.eventsService.pullEvents();
    this.eventsSubject.subscribe(eventData => {
      const eventsData = JSON.parse(eventData.data);
      if (!eventsData.hasOwnProperty("msgId")) {
        eventsData.forEach(event => {
          if (this.checkNonDuplicateEvent(event)) {
            this.events.push(event);
          }
        });
        if (this.overlayProps.eventId) {
          this.selectedEvent = this.events.findIndex(
            event => event.eventId === this.overlayProps.eventId
          );
        }
      }
    });
    setTimeout(() => {
      this.eventsSubject.next("pullEvent");
    }, 2000);
  }

  checkNonDuplicateEvent(event) {
    this.events.forEach(existingEvent => {
      if (existingEvent.eventId === event.eventId) {
        return false;
      }
    });
    return true;
  }

  searchUser(evt, userId) {
    evt.preventDefault();
    console.log(userId);
    if (userId) {
      this.verifyUserSubject = this.eventsService.pullUserInfoByUserId(userId);
      this.verifyUserSubject.subscribe(resp => {
        const user = JSON.parse(resp.data);
        console.log(user);
        if (user.id !== null) {
          this.verifiedUserId = user.id;
          this.verifiedUserName = user.name;
          this.verifiedDepartment = user.department;
          this.verifiedLocation = user.siteLocation;
        } else {
          this.registered = false;
        }
      });
      setTimeout(() => {
        this.verifyUserSubject.next("pullEvent");
      }, 2000);
    }
  }

  askQuestion(askQuestionForm) {
    console.log(askQuestionForm);
  }

  registerUser(registerForm) {
    console.log(registerForm);
  }
}
