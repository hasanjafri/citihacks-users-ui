import { AgGridModule } from '@ag-grid-community/angular';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NguCarouselModule } from '@ngu/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EventsListPopupComponent } from './components/events-list-popup/events-list-popup.component';
import { NotificationComponent } from './components/notification/notification.component';
import { QuestionsGridComponent } from './components/questions-grid/questions-grid.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { OVERLAY_DATA } from './config/overlay.config';
import { OverlayService } from './services/overlay.service';
import { EventDetailComponent } from './views/event-detail/event-detail.component';
import { HomeComponent } from './views/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    SidenavListComponent,
    EventsListPopupComponent,
    EventDetailComponent,
    CarouselComponent,
    AskQuestionComponent,
    QuestionsGridComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    OverlayModule,
    NguCarouselModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: OVERLAY_DATA,
      useClass: OverlayService
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [EventsListPopupComponent, AskQuestionComponent, NotificationComponent]
})
export class AppModule {}
