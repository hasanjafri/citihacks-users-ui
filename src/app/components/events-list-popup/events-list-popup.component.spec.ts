import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListPopupComponent } from './events-list-popup.component';

describe('EventsListPopupComponent', () => {
  let component: EventsListPopupComponent;
  let fixture: ComponentFixture<EventsListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
