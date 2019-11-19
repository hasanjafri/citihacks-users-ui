import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../components/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notificationDuration = 7;

  constructor(private snackBar: MatSnackBar) {}

  showNotification(message: string) {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: this.notificationDuration * 1000,
      data: { message },
      panelClass: 'notification-container',
      verticalPosition: 'top'
    });
  }
}
