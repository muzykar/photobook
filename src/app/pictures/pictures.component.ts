import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

import { Picture } from './../picture';
import { PictureService } from './../picture.service';

@Component({
  selector: 'my-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: [ './pictures.component.css' ]
})

export class PicturesComponent implements OnInit {
  pictures: Picture[];
  selectedPicture: Picture;

  myForm: FormGroup;
  pictureId: AbstractControl;
  pictureName: AbstractControl;
  pictureUrl: AbstractControl;
  pictureTag: AbstractControl;
  pictureRating: AbstractControl;
  tags: string[] = ['people', 'animal', 'nature', 'city', 'future', 'daily'];
  ratings: number[] = [1, 2, 3, 4, 5];

  constructor(
    private router: Router,
    private pictureService: PictureService,
    private fb: FormBuilder) {

      this.myForm = fb.group({
        'pictureId': [Validators.required],
        'pictureName': ['Default name', Validators.compose([Validators.required, Validators.minLength(3)])],
        'pictureUrl': ['Image address', Validators.required],
        'pictureTag': [Validators.required],
        'pictureRating': [Validators.required]
      });

      this.pictureId= this.myForm.controls['pictureId'];
      this.pictureName = this.myForm.controls['pictureName'];
      this.pictureUrl = this.myForm.controls['pictureUrl'];
      this.pictureTag = this.myForm.controls['pictureTag'];
      this.pictureRating = this.myForm.controls['pictureRating'];

      // this.pictureName.valueChanges.subscribe(pictureName => console.log('Picture name set to ' + pictureName));
    }

  getPictures(): void {
    this.pictures = this.pictureService.getPictures();
  }


  ngOnInit(): void {
    this.getPictures();
  }

  onSelect(picture: Picture): void {
    this.selectedPicture = picture;
  }

  mySubmit(value: any) {
    console.log(value);
    // this.pictureService.addPicture(new Picture(this.pictureService.getNewId(), value.pictureName, value.pictureTag, value.pictureUrl, [Number(value.pictureVote)]));
    this.pictureService.addPicture(new Picture(this.pictureService.getNewId(), value.pictureName, value.pictureTag, value.pictureUrl, Number(value.pictureRating)));
    console.log(this.pictures);
  }

  gotoDetail(): void {
    console.log(this.selectedPicture.id);
    this.router.navigate(['/detail', this.selectedPicture.id]);
  }
}
