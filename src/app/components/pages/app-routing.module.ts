import { CommonModule } from '@angular/common';
import { MatComponentsModule } from './../../mat-components.module';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

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
  imports: [
    RouterModule.forRoot(routes, config),
    MatComponentsModule, // remove later
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [
    HomePageComponent,
    ProjectsPageComponent,
    ProjectPageComponent,
    BlogPageComponent,
    BlogsPageComponent
  ]
})
export class AppRoutingModule { }
