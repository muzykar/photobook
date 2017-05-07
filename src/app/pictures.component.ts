import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Picture } from './picture';
import { PictureService } from './picture.service';

@Component({
  selector: 'my-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: [ './pictures.component.css' ]
})

export class PicturesComponent implements OnInit {
  pictures: Picture[];
  selectedPicture: Picture;

  constructor(
    private router: Router,
    private pictureService: PictureService) { }

  getPictures(): void {
    this.pictureService.getPictures().then(pictures => this.pictures = pictures);
  }

  ngOnInit(): void {
    this.getPictures();
  }

  onSelect(picture: Picture): void {
    this.selectedPicture = picture;
  }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedPicture.id]);
  // }
}
