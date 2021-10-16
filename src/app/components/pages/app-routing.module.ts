import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { CommonComponentsModule } from './../common/common-components.module';
import { MatComponentsModule } from './../../mat-components.module';

import { 
  HomePageComponent,
  ProjectPageComponent,
  ProjectsPageComponent,
  BlogPageComponent,
  BlogsPageComponent 
} from '.';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'projects/:id', component: ProjectPageComponent },
  { path: 'blog', component: BlogsPageComponent },
  { path: 'blog/:id', component: BlogPageComponent },
];

const config: ExtraOptions = {
  // Hash routing because this is hosted off of github pages.
  // Github pages reserves '/' routing for repositories you are hosting
  useHash: true,
}

@NgModule({
  declarations: [
    HomePageComponent,
    ProjectsPageComponent,
    ProjectPageComponent,
    BlogPageComponent,
    BlogsPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes, config),
    MatComponentsModule, // remove later(?)
    CommonModule,
    CommonComponentsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
