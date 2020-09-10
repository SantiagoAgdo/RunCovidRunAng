import { DecimalPipe } from '@angular/common';

export class User {

    id? : number;
    name: string;
    score: number;
    dateCreation: string;


    constructor(name: string, score: number, dateCreation: string) {
        this.name = name;
        this.score = score;
        this.dateCreation = dateCreation;
    }
}