import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: ApiService) { }

  test() : Project[] {
    return [
      {
        content: '',
        coverImgUrl: '',
        date: '',
        links: [''],
        name: ''
      }
    ]
  }

  getAll() : Observable<Project[]> {
    return this.http.get('/project').pipe(
      map(data => data.projects)
    );
  }

  getOne(id: number) : Observable<Project> {
    return this.http.get(`/project/${id}`).pipe(
      map(data => data.project)
    );
  }
}
