import { Injectable } from '@angular/core';

import { Picture } from './picture';
import { PICTURES } from './mock-pictures';

@Injectable()
export class PictureService {

  //constructor(){}

  getPictures(): Picture[]  {
    return PICTURES;
  }

  // getPicturesImages()

  addPicture(picture: Picture) :void {
    PICTURES.push(picture);
  }

  deletePicture(id: number) :void {
    for (var i = 0; i < PICTURES.length; i++) {
      if (PICTURES[i].id == id) {
        PICTURES.splice(i,1);
      }
    }
  }

  getNewId(): number {
    var newId = PICTURES[0].id;
    for (let picture of PICTURES) {
      if (picture.id > newId) {
        newId = picture.id;
      }
    }
    return newId+1;
  }

  getPicture(id: number): Picture {
    for (let picture of PICTURES) {
      if (picture.id == id) {
        return picture;
      }
    }
    return PICTURES[0];
    // return this.picture = this.getPictures();
  }

  //stare
  // getPicture(id: number): Promise<Picture> {
  //   return this.getPictures().then(pictures => pictures.find(picture => picture.id === id));
  // }
}





  //// sciagawka
  // getPictures(): void {
  //   this.pictures = this.pictureService.getPictures();
  // }
