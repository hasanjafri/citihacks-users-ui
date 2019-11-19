import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-grid',
  templateUrl: './questions-grid.component.html',
  styleUrls: ['./questions-grid.component.scss']
})
export class QuestionsGridComponent {
  columnDefs = [
    { headerName: 'Event Name', field: 'eventName', sortable: true, filter: true },
    { headerName: 'Question', field: 'question', sortable: true, filter: true },
    { headerName: 'Presenter', field: 'presenter', sortable: true, filter: true },
    { headerName: 'Event Date', field: 'eventDate', sortable: true, filter: true }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  modules = AllCommunityModules;

  onGridReady(event) {
    event.api.sizeColumnsToFit();
  }
}
