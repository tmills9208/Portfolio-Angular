import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { JwtService } from '.';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: ApiService, private jwt: JwtService) { }

  getAll(year: Date) : Observable<Project[]> {
    return this.http.get('/projects',)
  }

  getOne(id: number) : Observable<Project> {
    return this.http.get('/projects',)
  }
}
