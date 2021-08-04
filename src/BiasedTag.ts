import { Tag } from "./Tag";
import { TagModifier } from "./TagModifier";

export interface BiasedTag extends Tag {
  modifier: TagModifier;
}
