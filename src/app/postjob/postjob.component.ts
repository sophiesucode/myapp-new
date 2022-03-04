import {  Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {
  constructor(private _http: HttpService) { }

  jobForm: FormGroup = new FormGroup({});
  
  
  onSubmit(){
    
    
this._http.postJob(this.jobForm.value).subscribe((response:any)=>{
 console.log(response);
  console.log(this.jobForm)
})
    
  }

  reset() {
    this.jobForm.reset();
}
ngOnInit(): void {
  this.jobForm=  new FormGroup({
"title": new FormControl(""),
"experience_level": new FormControl(""),
"salary": new FormControl(""),
"job_description": new FormControl(""),
"company": new FormControl(""),
"url": new FormControl(""),
"img_url": new FormControl(""),
"location": new FormControl("")

  })
  }

}

