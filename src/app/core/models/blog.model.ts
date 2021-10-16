import { SearchTag } from './search-tag.model';

export interface Blog {
  title: string,
  date: Date,
  tags: SearchTag[] // id's to find tags with
}