import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario: string = '';
  password: string = '';
  email : string = '';  
  read : boolean = true;
  constructor() { }

  ngOnInit() {

  }

  deleteUser() {
    
    this.read= true;

  }

  addUser() {
    this.read= true;

  
  }

  editUser() {
    this.read= false;
  
  }


}
