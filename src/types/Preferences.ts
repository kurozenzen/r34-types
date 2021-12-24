import { PostsSort } from "./PostsSort";
import { ResultsLayout } from "./ResultsLayout";
import { Theme } from "./Theme";

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
  themeId: Theme;
  autoPlay: boolean;
  hideSeen: boolean;
  showPostDetails: boolean;
  backends: string[];
}
