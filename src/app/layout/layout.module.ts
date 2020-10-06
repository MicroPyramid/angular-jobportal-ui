import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LoginComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    LoginComponent
  ],
})
export class LayoutModule { }
