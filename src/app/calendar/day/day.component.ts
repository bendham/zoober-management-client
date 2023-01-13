import { Component, Input, OnInit } from '@angular/core';
import * as defaults from '../../../shared/defaultdata';
import { VideoModel } from '../../../shared/video.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  @Input() dayTitle: string = '';
  @Input() videoContent: VideoModel = new defaults.defaultVideo();

  addingText = '';

  constructor() {}

  ngOnInit(): void {}

  getCommentString() {
    return this.videoContent.commentSubreddits
      ?.toString()
      .replaceAll(',', ', ');
  }

  onAdd() {
    this.videoContent.commentSubreddits =
      this.videoContent.commentSubreddits?.concat(this.addingText.split(','));

    this.videoContent.commentSubreddits?.forEach((elm, idx, arr) => {
      arr[idx] = elm.trim();
    });
    this.addingText = '';
  }

  onPop() {
    this.videoContent.commentSubreddits?.pop();
  }

  onReset() {
    this.videoContent.commentSubreddits = [];
  }
}
