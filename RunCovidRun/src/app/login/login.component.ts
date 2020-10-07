import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nameUser: string;
  passUser: string;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }


  checkUser(): void{

    if(this.nameUser  == null || this.nameUser.length < 4){
      return alert("Nombre de usuario no valido");
    }
    if (this.passUser == null || this.passUser.length < 4){
      return alert("Contrasena no valida");
    }

    const user = new User(this.nameUser, this.passUser, 0,null);

    alert(this.nameUser);// NO se me ovide borrar
    this.userService.checkUser(user).subscribe(
      data => {
        alert("Usuario Verificado Correctamente");
        this.router.navigate(['/']);
      },
      error => {
        alert("Usuario y/o contrasena invalida");
        this.router.navigate(['/']);
      }
    )
  }

  // onNavigate(){
  //   window.open("https://covidrun-9191a.web.app/", "_blank");
  // }

}
