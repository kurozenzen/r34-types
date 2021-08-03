import { TagModifier } from "./TagModifier";

export type SupertagData = {
  description: string;
  tags: Record<string, TagModifier>;
};
