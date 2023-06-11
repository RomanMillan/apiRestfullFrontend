import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user :User = new User();
  
  constructor(private userService: UserService){}

  // metodo que llama al metodo del servicio para agregar un tema
  addUser(){
    this.userService.postUser(this.user).subscribe();
  }

}
