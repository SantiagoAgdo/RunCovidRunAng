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
    setInterval(this.createSquare,150);
  }

  colors: string[] = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
  ];

  createSquare() {
    const section = document.querySelector('section');
    const square = document.createElement('img');
    let size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.position =  'absolute';
    // square.style.backgroundColor = 'white';
    square.setAttribute('src','../../assets/img/virusbackrepet.png');

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';


    square.style.background = 'tffeb3b';
    if (!(square == null)){
    section.appendChild(square);
    }

    setTimeout(() => {
      square.remove();
    }, 5000);
  }

}
