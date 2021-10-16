import { SearchTag, createSearchTag } from './../models/search-tag.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Blog } from '..';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: ApiService) { }

  test() : Blog[] {
    return [
      {
        date: new Date(),
        tags: [createSearchTag('')],
        title: 'Blog '
      }
    ]
  }

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
