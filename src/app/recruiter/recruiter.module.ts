import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import { JobListComponent } from './job-list/job-list.component';
import { JobPostComponent } from './job-post/job-post.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { MessagesComponent } from './messages/messages.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResumePoolComponent } from './resume-pool/resume-pool.component';
import { ResumeUploadComponent } from './resume-upload/resume-upload.component';
import { CompanyProfileEditComponent } from './company-profile-edit/company-profile-edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { JobViewComponent } from './job-view/job-view.component';


const routes: Routes = [
  { path: '', redirectTo: 'job-list', pathMatch: 'full' },
  { path: 'recruiter/job-list', component: JobListComponent },
  { path: 'recruiter/job-post', component: JobPostComponent },
  { path: 'recruiter/job-view', component: JobViewComponent },
  { path: 'recruiter/company-profile', component: CompanyProfileComponent },
  { path: 'recruiter/resume-pool', component: ResumePoolComponent },
  { path: 'recruiter/resume-upload', component: ResumeUploadComponent },
  { path: 'recruiter/messages', component: MessagesComponent },
  { path: 'recruiter/support', component: SupportComponent },
  { path: 'recruiter/change-password', component: ChangePasswordComponent },
  { path: 'recruiter/profile', component: ProfileComponent },
  { path: 'recruiter/profile-edit', component: ProfileEditComponent },
  { path: 'company-profile/edit', component: CompanyProfileEditComponent },
  { path: 'raise-ticket', component: RaiseTicketComponent },
];


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([]),
  ],
  declarations: [
    JobListComponent,
    JobPostComponent,
    CompanyProfileComponent,
    MessagesComponent,
    SupportComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ResumePoolComponent,
    ResumeUploadComponent,
    CompanyProfileEditComponent,
    ProfileEditComponent,
    RaiseTicketComponent,
    JobViewComponent],
})
export class RecruiterModule { }