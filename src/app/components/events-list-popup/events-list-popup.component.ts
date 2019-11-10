import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list-popup',
  templateUrl: './events-list-popup.component.html',
  styleUrls: ['./events-list-popup.component.scss']
})
export class EventsListPopupComponent {
  events = [
    {
      img: '../../../assets/avatar.png',
      name: 'Sample Event 1',
      description: 'Sample Description 1'
    },
    {
      img: '../../../assets/avatar.png',
      name: 'Sample Event 2',
      description: 'Sample Description 2'
    },
    {
      img: '../../../assets/avatar.png',
      name: 'Sample Event 3',
      description: 'Sample Description 3'
    }
  ];
}
