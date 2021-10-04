import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Blog } from '..';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: ApiService) { }

  getAll() : Observable<Blog[]>{
    return this.http.get('/blog').pipe(
      map(data => data.blogs)
    );
  }

  getOne(id: number) : Observable<Blog> {
    return this.http.get(`/blog/${id}`).pipe(
      map(data => data.blog)
    );
  }
}
