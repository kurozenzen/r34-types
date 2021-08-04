import { TagModifier } from "./TagModifier";
import { TagType } from "./TagType";

export type FlexibleTag = {
  name: string;
  count?: number;
  types?: TagType[];
  modifier?: TagModifier;
};
