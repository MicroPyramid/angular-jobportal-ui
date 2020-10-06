import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {

  titleFlag = false;
  keywordsFlag = false;
  sampleFlag = false;

  closeResult: string;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  showModal (modal) {
    switch (modal) {
      case 'titleFlag':{
        this.titleFlag = true;
        break;
      }
      case 'keywordsFlag':{
        this.keywordsFlag = true;
        break;
      }
      case 'sampleFlag':{
        this.sampleFlag = true;
        break;
      }
    }
  }

  closeModal () {
    this.titleFlag = false;
    this.keywordsFlag = false;
    this.sampleFlag = false;
  }

}
