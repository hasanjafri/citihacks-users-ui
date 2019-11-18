import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { EventsListPopupComponent } from '../events-list-popup/events-list-popup.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  toolbarIcons = [
    {
      icon: 'event_available',
      click: () => this.openEventsOverlay()
    },
    {
      icon: 'question_answer',
      click: () => this.openQuestionOverlay()
    }
  ];

  @Output() sidenavToggled = new EventEmitter();

  constructor(private overlayService: OverlayService) {}

  toggleSidenav() {
    this.sidenavToggled.emit();
  }

  openEventsOverlay() {
    this.overlayService.open(EventsListPopupComponent);
  }

  openQuestionOverlay() {
    this.overlayService.open(AskQuestionComponent);
  }
}
