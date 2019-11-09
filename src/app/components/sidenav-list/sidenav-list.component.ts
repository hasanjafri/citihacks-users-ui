import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {
  @Output() sidenavClosed = new EventEmitter();

  sidenavListItems = [
    {
      name: 'Home',
      icon: 'home'
    },
    {
      name: 'Events',
      icon: 'event_available'
    },
    {
      name: 'Ask a Question',
      icon: 'question_answer'
    }
  ];

  closeSidenav() {
    this.sidenavClosed.emit();
  }
}
