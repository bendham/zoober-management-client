import { Component } from '@angular/core';
import { UsersService } from './users.service';
import * as defaults from '../shared/defaultdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-crud';
  data = defaults.defaultZoober;
  // defaultThumbnail = require('../assets/default.png');

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getAllData().subscribe((data) => {
      console.log(data);
      this.data = data[0];
    });
  }

  updateData() {
    this.userService.updateData(this.data).subscribe((response) => {
      console.log(response);
    });
  }

  makeSingleVideo(video: any) {
    console.log(video);
    this.userService.makeVideo(video).subscribe((resp) => {
      console.log(resp);
    });
  }

  makeThumbnails(video: any) {
    console.log(video);
    this.userService.makeThumbnail(video).subscribe((resp) => {
      console.log(resp);
    });
  }
}
