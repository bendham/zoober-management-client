import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { defaultVideo } from 'src/shared/defaultdata';
import { VideoModel } from 'src/shared/video.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-make-single-video',
  templateUrl: './make-single-video.component.html',
  styleUrls: ['./make-single-video.component.css'],
})
export class MakeSingleVideoComponent implements OnInit {
  curVideo: VideoModel = new defaultVideo();
  button_str: string = '';

  @Input() newVideoTitle = 'Single Video';
  @Input() type: 'video' | 'thumbnail' = 'video';

  @Output() makeVideo = new EventEmitter();
  @Output() makeThumbnail = new EventEmitter();

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.button_str = 'video' === this.type ? 'Make Video' : 'Make Thumbnails';
  }

  videoEvent() {
    if (this.type === 'video') {
      this.makeVideoEvent();
    } else {
      this.makeThumbnailEvent();
    }
  }
  makeVideoEvent() {
    this.makeVideo.emit(this.curVideo);
  }

  makeThumbnailEvent() {
    this.makeThumbnail.emit(this.curVideo);
  }
}
