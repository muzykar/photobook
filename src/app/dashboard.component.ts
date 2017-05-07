import { Component, OnInit } from '@angular/core';

import { Picture } from './picture';
import { PictureService } from './picture.service';

@Component({
  selector: 'my-dashboard',
  template: '<h3>My Dashboard</h3>',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  pictures: Picture[] = [];

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
    this.pictureService.getPictures().then(pictures => this.pictures = pictures.slice(0, 9));
  }
}
