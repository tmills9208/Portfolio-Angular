export interface SearchTag {
  name: string
}

export const createSearchTag = (name: string): SearchTag => {
  return {
    name
  }
}