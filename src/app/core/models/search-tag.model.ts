

// export class SearchTag {
//   name: string;
//   constructor(name?: string) {
//     this.name = name || '';
//   }
// }

export interface SearchTag {
  name: string
}

export const createSearchTag = (name: string): SearchTag => {
  return {
    name
  }
}