import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './models/job.model';
import { JobBoardComponent } from './job-board/job-board.component';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getJobs(){
    return this.http.get('http://localhost:9092/api/jobs/');
   
  }

  postJob(job : Job){
     return this.http.post('http://localhost:9092/api/jobs/', job)
  }
 
 
}

// this._http.postJob().subscribe((response:any)=>{
//   this.jobForm=response;
//   console.log(this.jobForm)
// })