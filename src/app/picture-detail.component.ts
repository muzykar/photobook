import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

import { Picture } from './picture';
import { PictureService } from './picture.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'picture-detail',
  templateUrl: './picture-detail.component.html',
})

export class PictureDetailComponent implements OnInit {
  picture: Picture;
  detailForm: FormGroup;

  pictureName: AbstractControl;
  pictureTag: AbstractControl;
  pictureRating: AbstractControl;
  pictureUrl: AbstractControl;
  tags: string[] = ['people', 'animal', 'nature', 'city', 'future', 'daily'];
  ratings: number[] = [1, 2, 3, 4, 5];

  constructor(
    private pictureService: PictureService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.detailForm = fb.group({
      'pictureName': [Validators.compose([Validators.required, Validators.minLength(3)])],
      'pictureTag': [Validators.required],
      'pictureRating': [Validators.required],
      'pictureUrl': [Validators.required],
    });
    this.pictureName = this.detailForm.controls['pictureName'];
    this.pictureTag = this.detailForm.controls['pictureTag'];
    this.pictureRating = this.detailForm.controls['pictureRating'];
    this.pictureUrl = this.detailForm.controls['pictureUrl'];
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => Promise.resolve(this.pictureService.getPicture(+params['id'])))
      .subscribe(picture => {
          this.picture = picture
          this.pictureName.setValue(this.picture.name)
          this.pictureTag.setValue(this.picture.tags)
          this.pictureRating.setValue(this.picture.rating)
          this.pictureUrl.setValue(this.picture.url)
        }
      );
  }

  // myDelete(value: any): void {
  //   this.pictureService.deletePicture(+value.id);
  // }

  myDelete(): void {
    console.log('kasuje' + this.picture.id);
    this.pictureService.deletePicture(+this.picture.id);
    this.goBack();
  }

  myEdit(value: any): void {
    console.log("edycja"+ value.pictureName);
    this.picture.name = value.pictureName;
    this.picture.rating = Number(value.pictureRating);
    this.picture.tags = value.pictureTag;
    console.log(this.picture);
  }

  goBack(): void {
    console.log("back");
    this.location.back();
  }
}
