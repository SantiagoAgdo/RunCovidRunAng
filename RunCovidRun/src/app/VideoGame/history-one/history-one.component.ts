import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-one',
  templateUrl: './history-one.component.html',
  styleUrls: ['./history-one.component.css']
})
export class HistoryOneComponent implements OnInit {

  nameUser: string = "Santi";

  constructor() { }

  ngOnInit() {
  }

}
