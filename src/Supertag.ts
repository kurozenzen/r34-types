import { TagModifier } from "./TagModifier";

export interface Supertag {
  name: string;
  description: string;
  tags: Record<string, TagModifier>;
}
