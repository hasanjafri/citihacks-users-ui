import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { slider } from './carousel-slide.animation';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  tempData: any[];
  carouselTileItems: Observable<number[]>;
  testImages = ['1', '2', '3', '4', '5'];
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

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.tempData = [];
    this.carouselTileItems = interval(500).pipe(
      startWith(-1),
      take(30),
      map(() => {
        const data = (this.tempData = [...this.tempData, this.testImages[Math.floor(Math.random() * this.testImages.length)]]);
        return data;
      })
    );
  }
}
