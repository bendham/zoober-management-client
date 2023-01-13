import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail-displayer',
  templateUrl: './thumbnail-displayer.component.html',
  styleUrls: ['./thumbnail-displayer.component.css'],
})
export class ThumbnailDisplayerComponent implements OnInit {
  @Input() thumbnails: Array<string> = Array(3).fill('../assets/default.png');

  constructor() {}

  ngOnInit(): void {}
}
