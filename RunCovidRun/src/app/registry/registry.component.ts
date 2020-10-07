import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  nameUser: string;
  passUser: string;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onCreate(): void{
    const user = new User(this.nameUser, this.passUser, 0,null);
    alert(this.nameUser);// NO se me ovide borrar
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

}
