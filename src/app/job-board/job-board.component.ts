import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Job} from '../models/job.model'


  
@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss'],

})
export class JobBoardComponent implements OnInit {

  jobs: Job[]= [];
 



  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getJobs().subscribe((response:any) =>{
      this.jobs= response;
      console.log(this.jobs);
    });
  }

}

