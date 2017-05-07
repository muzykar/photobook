import { Injectable } from '@angular/core';

import { Picture } from './picture';
import { PICTURES } from './mock-pictures';

@Injectable()
export class PictureService {
  getPictures(): Promise<Picture[]> {
    return Promise.resolve(PICTURES);
  }

  getPicturesSlowly(): Promise<Picture[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getPictures()), 2000);
    });
  }

  // getPicture(id: number): Promise<Picture> {
  //   return this.getPictures().then(pictures => pictures.find(picture => picture.id === id));
  // }
}
