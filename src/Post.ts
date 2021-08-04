import { Comment } from "./Comment";
import { PostRating } from "./PostRating";
import { PostStatus } from "./PostStatus";
import { PostType } from "./PostType";

export interface Post {
  change: number;
  comments_url: string;
  created_at: string;
  creator_id: number;
  file_url: string;
  has_children: boolean;
  has_comments: boolean;
  has_notes: boolean;
  height: number;
  id: number;
  md5: string;
  owner_url: string;
  parent_id: number | null;
  preview_height: number;
  preview_url: string;
  preview_width: number;
  rating: PostRating;
  sample_height: number;
  sample_url: string;
  sample_width: number;
  score: number;
  source: string;
  status: PostStatus;
  tags: string[];
  type: PostType;
  width: number;
  comments?: Comment[];
}
