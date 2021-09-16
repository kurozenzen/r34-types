import { PostsSort } from "./PostsSort";
import { ResultsLayout } from "./ResultsLayout";
import { ThemeId } from "./ThemeId";

export interface Preferences {
  rated: boolean;
  ratedThreshold: number;
  originals: boolean;
  cookies: boolean;
  preloadVideos: boolean;
  tagSuggestionsCount: number;
  resultsLayout: ResultsLayout;
  pageSize: number;
  showMetadata: boolean;
  showComments: boolean;
  sort: PostsSort;
  themeId: ThemeId;
  autoPlay: boolean;
  hideSeen: boolean;
}
