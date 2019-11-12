import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListPopupComponent } from './components/events-list-popup/events-list-popup.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './views/home/home.component';
import { EventDetailComponent } from './views/event-detail/event-detail.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ToolbarComponent, SidenavListComponent, EventsListPopupComponent, EventDetailComponent],
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
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EventsListPopupComponent]
})
export class AppModule {}
