export class Picture {
  id: number;
  name: string;
  tags: string[];
  url: string;
  rating: number;

  // rating (): number {
  //   var sum = 0;
  //   for (var i =0; i< this.votes.length; i++) {
  //     sum += this.votes[i];
  //   }
  //   return sum/this.votes.length;
  // }

  constructor (
    id: number,
    name: string,
    tags: string[],
    url: string,
    rating: number
  ) {
    this.id = id;
    this.name = name;
    this.tags = tags;
    this.url = url;
    this.rating = rating;
  }
}
