import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';
import { EventsListPopupComponent } from '../events-list-popup/events-list-popup.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {
  @Output() sidenavClosed = new EventEmitter();

  sidenavListItems = [
    {
      name: 'Events',
      icon: 'event_available',
      click: () => this.openEventsOverlay()
    },
    {
      name: 'Ask a Question',
      icon: 'question_answer'
    }
  ];

  constructor(private overlayService: OverlayService) {}

  closeSidenav() {
    this.sidenavClosed.emit();
  }

  openEventsOverlay() {
    this.overlayService.open(EventsListPopupComponent);
  }
}
