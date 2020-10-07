import {DecimalPipe} from '@angular/common';

export class User {

  id?: number;
  name: string;
  pass: string;
  score: number;
  dateCreation: string;

  constructor(name: string, pass: string, score: number, dateCreation: string) {
    this.name = name;
    this.pass = pass;
    this.score = score;
    this.dateCreation = dateCreation;
  }
}
