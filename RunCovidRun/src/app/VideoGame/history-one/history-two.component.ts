import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-two',
  templateUrl: './history-two.component.html',
  styleUrls: ['./history-two.component.css']
})
export class HistoryTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animationtext();
  }

  // @ts-ignore
  // @ts-ignore
  animationtext(): void {
    // Texto1
    setTimeout(function() {
      let texto1 = document.getElementById("texto1");
      texto1.style.display = "none";
      let texto2 = document.getElementById("texto2");
      texto2.style.display = "block";
    }, 4000);

    //Texto2
    setTimeout(function() {
      let texto2 = document.getElementById("texto2");
      texto2.style.display = "none";
      let texto3 = document.getElementById("texto3");
      texto3.style.display = "block";
    }, 14000);

    //Texto3
    setTimeout(function() {
      let texto3 = document.getElementById("texto3");
      texto3.style.display = "none";
      let elemento = document.getElementById("corre");
      elemento.classList.remove("hidden");
    }, 24000);

    //Ejecuta el Juego
    setTimeout(function() {
      window.open("https://covidrun-9191a.web.app/");
    }, 28000);
  }

}
