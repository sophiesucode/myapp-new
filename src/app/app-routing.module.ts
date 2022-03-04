import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import {JobBoardComponent} from './job-board/job-board.component';
import { PostjobComponent } from './postjob/postjob.component';
import { EventsComponent } from './events/events.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'job-board', component:JobBoardComponent},
  {path:'postjob',component: PostjobComponent},
  {path:'events', component: EventsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
