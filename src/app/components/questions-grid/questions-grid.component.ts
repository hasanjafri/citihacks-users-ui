import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions-grid',
  templateUrl: './questions-grid.component.html',
  styleUrls: ['./questions-grid.component.scss']
})
export class QuestionsGridComponent {
  @Input() rowData: any = [];

  columnDefs = [
    { headerName: 'Status', field: 'status', sortable: true, filter: true },
    { headerName: 'Event Name', field: 'eventName', sortable: true, filter: true },
    { headerName: 'Question', field: 'question', sortable: true, filter: true },
    { headerName: 'Presenter', field: 'presenter', sortable: true, filter: true },
    { headerName: 'Event Date', field: 'eventDate', sortable: true, filter: true }
  ];

  modules = AllCommunityModules;

  onGridReady(event) {
    event.api.sizeColumnsToFit();
  }
}
