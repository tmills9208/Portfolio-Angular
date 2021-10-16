import { BlogService } from './../../../core/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/core';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[]

  constructor(private service: BlogService) {
    this.blogs = this.service.test();
  }

  ngOnInit(): void {
    // this.service.getAll().subscribe(blogs => this.blogs = blogs)
  }

}
