export interface Deserializable {
  deserialize(input: any): this;
  // {
  //   Object.assign(this, input);
  //   return this;
  // }
}