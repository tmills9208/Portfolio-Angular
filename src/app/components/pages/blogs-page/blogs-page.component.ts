import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent implements OnInit {

  blogs: any[] = [12, 23, 34, 45, 56];

  constructor() { }

  ngOnInit(): void {
    const initBlogs = this.blogs
    for (let i = 0; i < 3; i++)
    this.blogs = this.blogs.concat(initBlogs);
  }

}
