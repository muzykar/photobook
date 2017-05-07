export class Picture {
  name: string;
  tags: string[];
  url: string;
  votes: number[];

  // rating (): number {
  //   var sum = 0;
  //   for (var i =0; i< this.votes.length; i++) {
  //     sum += this.votes[i];
  //   }
  //   return sum/this.votes.length;
  // }

  // constructor (
  //   name: string,
  //   tags: string[],
  //   url: string,
  //   votes: number[]
  // ) {
  //   this.name = name;
  //   this.tags = tags;
  //   this.url = url;
  //   this.votes = votes;
  // }
}
