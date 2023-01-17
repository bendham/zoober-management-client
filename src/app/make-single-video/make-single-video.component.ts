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
  newVideoTitle: string = 'Single Video';

  @Output() makeVideo = new EventEmitter();

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  makeVideoEvent() {
    this.makeVideo.emit(this.curVideo);
  }
}
