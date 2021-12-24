import { TagType } from "./TagType";

export interface Tag {
  name: string;
  count?: number;
  types: TagType[];
}

export interface NiceTag {
  name: string;
  count: number;
  types: TagType[];
}
