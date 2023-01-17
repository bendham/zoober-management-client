export class defaultVideo {
  isMakingVideo = true;
  dayOfWeek = 0;
  iscomment = false;
  subreddit = 'contagiouslaughter';
  numberOfClips = 50;
  videoNumber = 10;
  title = 'Contagious Laughter Compilation';
  descrption = 'Fun Video';
  commentSubreddits = ['rafasf', 'sdfsdg', 'sdgjjfgj'];
  clipsPerSub = 10;
}

export const defaultZoober = {
  zooberType: 'main',
  currentDay: 0,
  videos: [
    new defaultVideo(),
    new defaultVideo(),
    new defaultVideo(),
    new defaultVideo(),
    new defaultVideo(),
    new defaultVideo(),
    new defaultVideo(),
  ],
  thumbnails: Array(3).fill('../assets/default.png'),
};
