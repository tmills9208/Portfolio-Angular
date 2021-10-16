import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CoreModule } from './../../core/core.module';
import { MatComponentsModule } from './../../mat-components.module';

import { BlogService } from './../../core/services/blog.service';
import { ProjectService } from './../../core/services/project.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BlogListComponent,
    ProjectListComponent,
    SkillsComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatComponentsModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [
    ProjectService,
    BlogService
  ],
  exports: [
    NavbarComponent,
    BlogListComponent,
    ProjectListComponent,
    SkillsComponent,
    DashboardComponent,
    FooterComponent
  ]
})
export class CommonComponentsModule { }
