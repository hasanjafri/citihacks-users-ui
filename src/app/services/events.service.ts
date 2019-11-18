import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private cacheSubject: Map<string, Subject<any>> = new Map<string, Subject<any>>();
  private subject: Subject<any>;
  private urlPrefix = 'ws://citihacks123.azurewebsites.net//citihacks/';

  pullEvents(): Subject<any> {
    return this.connect(this.urlPrefix + 'endpoint/1?pull=Events');
  }

  private connect(url): Subject<any> {
    if (!this.cacheSubject.get(url)) {
      this.subject = this.create(url);
      this.cacheSubject.set(url, this.subject);
      console.log('Successfully connected to: ' + url);
    }
    return this.cacheSubject.get(url);
  }

  private create(url): Subject<any> {
    const ws = new WebSocket(url);

    const observable = Observable.create((obs: Observer<any>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });

    const observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
      complete: () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.close();
          console.log('Disconnected');
        }
      }
    };

    return Subject.create(observer, observable);
  }
}
