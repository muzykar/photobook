import { Component, OnInit } from '@angular/core';

import { Picture } from './picture';
import { PictureService } from './picture.service';
import { PICTURES } from './mock-pictures';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  pictures: Picture[] = [];

  constructor(private pictureService: PictureService) { }

  bestPictures(): any {
    var best = [];
    for (let picture of PICTURES) {
      if (picture.rating > 3) {
        best.push(picture);
      }
    }
    return best;
  }

  // getPicture(id: number): Picture {
  //   for (let picture of PICTURES) {
  //     if (picture.id == id) {
  //       return picture;
  //     }
  //   }

  ngOnInit(): void {
    this.pictures = this.bestPictures();
  }
}
