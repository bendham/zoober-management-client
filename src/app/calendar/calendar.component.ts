import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoModel } from '../../shared/video.model';
import * as defaults from '../../shared/defaultdata';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input() videoData: Array<VideoModel> = Array(7).fill(defaults.defaultVideo);
  daysOfWeek = ['Mon', 'Tu', 'Wed', 'Th', 'Fri', 'Sat', 'Sun'];
  // daysOfWeek = ['Mon', 'Tu', 'Wed'];
  @Output() updateData = new EventEmitter();

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  updateDataEvent() {
    this.updateData.emit();
  }
}
