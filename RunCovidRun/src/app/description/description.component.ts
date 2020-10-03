import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.createSquare();
  }

  colors: string[] = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
  ];

  createSquare() {
    const section = document.querySelector('section');
    const square = document.createElement('span');
    let size = Math.random() * 50;

    square.style.width = 20 + size + 'px';

    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = this.colors[Math.floor(Math.random() * this.colors.length)];
    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
      square.remove();
    }, 5000);
  }
}
