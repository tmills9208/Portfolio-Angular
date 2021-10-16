import { SearchTag, createSearchTag } from './../models/search-tag.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }

  test() : SearchTag[] {
    const tagList = [
      'daily_life',
      'design',
      'programming',
      'gaming',
    ];
    let result: SearchTag[] = [];
    for (const tag in tagList) {
      result.push(createSearchTag(tag))
    }
    return result;
  }
}
