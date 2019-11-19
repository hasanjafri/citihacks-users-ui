import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Subject } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';
import { OverlayService } from 'src/app/services/overlay.service';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { slider } from './carousel-slide.animation';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, OnDestroy {
  tempData: any[];
  testImages = [
    '../../../assets/images/citi1.jpg',
    '../../../assets/images/citi2.jpg',
    '../../../assets/images/citi3.jpg',
    '../../../assets/images/citi4.jpg'
  ];
  carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 5, all: 0 },
    speed: 1111,
    point: {
      visible: true
    },
    touch: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };
  events = [];
  private eventsSubject: Subject<any>;

  constructor(private eventsService: EventsService, private cdr: ChangeDetectorRef, private overlayService: OverlayService) {}

  ngOnInit() {
    this.tempData = [];
    this.eventsSubject = this.eventsService.pullEvents();
    this.eventsSubject.subscribe((eventData) => {
      const eventsData = JSON.parse(eventData.data);
      if (!eventsData.hasOwnProperty('msgId')) {
        eventsData.forEach((event) => {
          event['eventImage'] = this.testImages[Math.floor(Math.random() * this.testImages.length)];
          console.log('Event received: ', event);
          this.events.push(event);
          this.cdr.detectChanges();
        });
      }
    });
    setTimeout(() => {
      this.eventsSubject.next('pullEvent');
    }, 2000);
    // this.carouselTileItems = interval(500).pipe(
    //   startWith(-1),
    //   take(30),
    //   map(() => {
    //     const data = (this.tempData = [...this.tempData, this.testImages[Math.floor(Math.random() * this.testImages.length)]]);
    //     return data;
    //   })
    // );
  }

  ngOnDestroy() {
    if (this.eventsSubject) {
      this.eventsSubject.unsubscribe();
    }
  }

  openQuestionOverlay(eventId) {
    this.overlayService.open(AskQuestionComponent, { eventId: eventId });
  }
}
