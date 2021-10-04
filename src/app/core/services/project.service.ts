import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: ApiService) { }

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
