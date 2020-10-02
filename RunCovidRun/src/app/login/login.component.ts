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

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onCreate(): void{
    const user = new User(this.nameUser,0,null);
    alert(this.nameUser);
    this.userService.save(user).subscribe(
      data => {
        alert("Creado");
        this.router.navigate(['/']);
      },
      error => {
        alert("Error en la creacion del usuario");
        this.router.navigate(['/']);
      }
    )
  }
  onNavigate(){
    window.open("https://covidrun-9191a.web.app/", "_blank");
  }

}
