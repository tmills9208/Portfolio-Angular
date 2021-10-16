import { ProjectService } from './../../../core/services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[]

  constructor(private service: ProjectService) {
    this.projects = this.service.test();
  }

  ngOnInit(): void {
    
  }

}
