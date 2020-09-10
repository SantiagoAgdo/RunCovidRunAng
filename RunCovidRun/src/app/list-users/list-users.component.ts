import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[] = [] ;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.cargarUsuarios();
    console.log(this.cargarUsuarios());
  }

  cargarUsuarios(): void{
    this.userService.List().subscribe(
      data => {
        this.users =data;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
