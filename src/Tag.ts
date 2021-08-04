import { TagType } from "./TagType";

export interface Tag {
  name: string;
  count?: number;
  types: TagType[];
}
