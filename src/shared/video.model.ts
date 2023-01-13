export interface VideoModel {
  isMakingVideo: boolean;
  dayOfWeek: number;
  iscomment?: boolean;
  subreddit?: string;
  numberOfClips?: number;
  videoNumber?: number;
  title?: string;
  descrption?: string;
  commentSubreddits?: Array<string>;
  clipsPerSub?: number;
  thumbnails?: Array<string>;
}
