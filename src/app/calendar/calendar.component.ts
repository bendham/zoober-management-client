import { Component, Input, OnInit } from '@angular/core';
import { VideoModel } from '../../shared/video.model';
import * as defaults from '../../shared/defaultdata';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input() videoData: Array<VideoModel> = Array(7).fill(defaults.defaultVideo);
  daysOfWeek = ['Mon', 'Tu', 'Wed', 'Th', 'Fri', 'Sat', 'Sun'];
  // daysOfWeek = ['Mon', 'Tu', 'Wed'];

  constructor() {}

  ngOnInit(): void {}
}
