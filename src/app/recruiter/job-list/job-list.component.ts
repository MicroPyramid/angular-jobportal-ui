import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  searchString: any;
  columnDefs = [];
  icons: any;
  private gridApi;
  private gridColumnApi;
  // private rowClassRules;

  rowData = [
    { title: "Toyota", location: "hyd", expiry: 100, type: "Internship", count: 1, status: 'good' },
    { title: "Innova", location: "vja", expiry: 200, type: "Fulltime", count: 2, status: 'good' },
    { title: "i20", location: "gnt", expiry: 300, type: "Walkin", count: 3, status: 'bad' },
    { title: "i10", location: "nlr", expiry: 400, type: "Walkin", count: 4, status: 'bad' },
    { title: "ford", location: "tpt", expiry: 600, type: "Fulltime", count: 5, status: 'bad' },
    { title: "suziki", location: "ogl", expiry: 700, type: "Fulltime", count: 6, status: 'pending' },
    { title: "xuv", location: "ctr", expiry: 800, type: "Walkin", count: 7, status: 35000 },
    { title: "suv", location: "krnt", expiry: 900, type: "Fulltime", count: 8, status: 35000 },
    { title: "tuv", location: "kdp", expiry: 1000, type: "Internship", count: 9, status: 35000 },
    { title: "i10", location: "nlr", expiry: 400, type: "Walkin", count: 4, status: 'bad' },
    { title: "ford", location: "tpt", expiry: 600, type: "Fulltime", count: 5, status: 'bad' },
    { title: "suziki", location: "ogl", expiry: 700, type: "Internship", count: 6, status: 'pending' },
    { title: "xuv", location: "ctr", expiry: 800, type: "Walkin", count: 7, status: 35000 },
    { title: "suv", location: "krnt", expiry: 900, type: "Internship", count: 8, status: 35000 },
    { title: "tuv", location: "kdp", expiry: 1000, type: "Walkin", count: 9, status: 35000 },
  ]; title = "fb"


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.columnDefs = [
      { headerName: 'Job Title', field: 'title', width: 500 },
      { headerName: 'Location', field: 'location', width: 200 },
      { headerName: 'Expiry', field: 'expiry', width: 150 },
      { headerName: 'Job Type', field: 'type', width: 150 },
      { headerName: 'Responses', field: 'count', width: 150 },
      {
        headerName: 'Social',
        cellStyle: {
          display: 'flex', 'justify-content': 'space-around', 'align-items': 'center',
          'font-size': '14px'
        },
        template:
          `<i title="fb" class="fa fa-facebook" style="color:#3b5998" action-type="fb"></i>
           <i title="twitter" class="fa fa-twitter" style="color:#0077b5" action-type="twitter"></i>
           <i title="linkedin" class="fa fa-linkedin" style="color:#55acee" action-type="linked"></i>
           <i title="google" class="fa fa-google" style="color:#dc4e41" action-type="google"></i>`
      },
      {
        headerName: 'Actions',
        cellStyle: {
          display: 'flex', 'justify-content': 'space-around', 'align-items': 'center',
          'font-size': '14px'
        },
        template:
          `<i title="Edit" class="fa fa-edit" style="color:#0060b9" action-type="edit"></i>
           <i title="Delete" class="fa fa-trash" style="color:#FE7062" action-type="delete"></i>`
      },
      { headerName: 'Status', field: 'status', },
    ];

  }


  // tslint:disable-next-line: typedef
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.rowData);

  }

  onsearchStringChanged(value) {
    console.log(value)
    this.gridApi.setQuickFilter(value);
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onCellClicked(params) {
    if (params.colDef.headerName === 'Job Title') {
      this.router.navigate(['recruiter/job-view']);
    } else if (params.colDef.headerName === 'Social') {
      // this.router.navigate(['']);
    } else if (params.colDef.headerName === 'Actions') {
      if (params.event.target !== undefined) {
        const actionType = params.event.target.getAttribute('action-type');
        switch (actionType) {
          case 'edit':
            return this.onActionEditClick(params);
          case 'delete':
            return this.onActionDeleteClick(params);
        }
      }
    }
  }

  onActionEditClick(params: any) {

  }

  onActionDeleteClick(params: any) {

  }

}
