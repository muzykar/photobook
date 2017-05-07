import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Picture } from './picture';
import { PictureService } from './picture.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'picture-detail',
  templateUrl: './picture-detail.component.html',
})

export class PictureDetailComponent implements OnInit {
  picture: Picture;

  constructor(
    private pictureService: PictureService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.pictureService.getPicture(+params['id']))
    //   .subscribe(picture => this.picture = picture);
  }

  goBack(): void {
    this.location.back();
  }
}
