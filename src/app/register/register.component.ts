import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user: User = {
  	userName: "",
  	email:"",
  	password: ""
  };

  onSubmit(): void{
  	alert( "Name: " + this.user.userName + " " + "Password: "+this.user.password );

  }

}
