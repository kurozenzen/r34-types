import { QueryTag } from "./QueryTag";
import { AliasTag } from "./AliasTag";
import { Artist } from "./Artist";
import { Post } from "./Post";
import { PostsSort } from "./PostsSort";
import { ScoreFilter } from "./ScoreFilter";
import { Supertag } from "./Supertag";
import { Tag } from "./Tag";
import { TagsError } from "./TagsError";
import { TagsSort } from "./TagsSort";
import { Comment } from "./Comment";

export namespace api {
  /**
   * Utility namespace for looking up API response types
   */
  export namespace responses {
    export type Tags = TagsError | Array<Supertag | Tag>;
    export type Posts = { count: number; posts: Post[] };
    export type Aliases = AliasTag[];
    export type Comments = Comment[];
    export type Artists = Artist;
  }

  /**
   * Utility namespace for looking up API parameter types
   */
  export namespace params {
    export type Tags = {
      name?: string;
      limit?: number;
      sort?: TagsSort;
      supertags?: boolean;
    };
    export type Posts = {
      tags?: Record<string, QueryTag | Supertag>;
      limit?: number;
      page?: number;
      score?: ScoreFilter;
      sort?: PostsSort;
    };
    export type PostsLegacy = {
      // TODO: Remove later
      tags?: string;
      limit?: number;
      pid?: number;
    };
    export type Aliases = {
      name: string;
    };
    export type Comments = {
      commentsUrl: string;
    };
    export type Artist = {
      id: number;
    };
  }
}
