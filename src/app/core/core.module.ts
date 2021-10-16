import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  ApiService,
  BlogService,
  ProjectService,
  PersonalInfoService,
  JwtService,
  TagsService
} from './services'

@NgModule({
  declarations: [],
  providers: [
    ApiService,
    BlogService,
    ProjectService,
    PersonalInfoService,
    JwtService,
    TagsService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: []
})
export class CoreModule { }
