import { SearchTag } from './search-tag.model';

export class Blog {
  title: string;
  content: string;
  date: Date;
  tags: SearchTag[]; // id's to find tags with

  constructor(blog?: Blog) {
    this.title = blog?.title || '';
    this.content = blog?.content || '';
    this.date = blog?.date || new Date();
    this.tags = blog?.tags || [];
  }
}