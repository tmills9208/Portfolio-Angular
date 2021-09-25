import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService,
  BlogService,
  ProjectService,
  PersonalInfoService,
  JwtService
} from './services'

@NgModule({
  declarations: [],
  providers: [
    ApiService,
    BlogService,
    ProjectService,
    PersonalInfoService,
    JwtService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
