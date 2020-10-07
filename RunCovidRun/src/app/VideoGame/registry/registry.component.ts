import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../service/user.service';
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
    let isValid: boolean = true;
    if(this.nameUser  == null || this.nameUser.length < 4){
      isValid = false;
      alert("El nombre debe contener al menos 4 digitos");
    }
    if (this.passUser == null || this.passUser.length < 4){
      isValid = false;
      alert("La contrasena de be ser de almenos 4 digitos");
    }
    if (isValid){
      this.userService.save(user).subscribe(
        data => {
          alert("Creado");
          this.router.navigate(['/login']);
        },
        error => {
          alert("Error en la creacion del usuario");
          this.router.navigate(['/registry']);
        }
      );
    }

  }

}
