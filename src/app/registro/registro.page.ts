import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';
import { AlertController } from '@ionic/angular';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  read: boolean = true;
  users: User[] =  [];
  constructor(private userService: UserService,private  alertcontroller:AlertController, private roleService:RoleService) { }

  ngOnInit() {
    this.roleService.isRoleAdmin();
  this.read = false;
  this.listUser();
  }

  listUser(){
  this.userService.listUser().subscribe(
  data =>{ this.users = data
    this.users.push(new User());
  },
  
  error =>{
     this.alertError(error)
}
);
  }

  deleteUser(email:string) {

    this.userService.deleteUser(email).subscribe(
      data => {
        if (data.message.search("Error"))
          this.alertError(data);
        else
          this.alertCorrect(data);
        this.read = true;

      },
      
      error =>{
        if(error.status == 406)
        this.alertError406(error)
        else
         this.alertError(error)
    }
    )
    window.location.reload();

  }

  addUser(user : User) {

    this.userService.addUser(user).subscribe(
      data => {
        if (data.message.search("Error"))
          this.alertError(data);
        else
          this.alertCorrect(data);
        this.read = true;

      },
      error => {  
        if(error.status == 406)
        this.alertError406(error)
        else
        this.alertError(error)
    }
    )
    window.location.reload();

  }

  editUser(user:User) {
    this.userService.changeUser(user).subscribe(
      data => {
        if (data.message.search("Error") )
          this.alertError(data);
        else
          this.alertCorrect(data);
        this.read = true;

      },
      error => { 
        if(error.status == 406)
        this.alertError406(error)
        else
        this.alertError(error) }
    )
    window.location.reload()
  }

  async alertError(data:any) {
    const alert = await this.alertcontroller.create({
      header:data.error.message,
      subHeader:data.error.message,
      message:data.error.message,
      buttons:["Acepto"]
    });
    await alert.present(); 

  }

  async alertCorrect(data:Message) {
    const alert = await this.alertcontroller.create({
      header:data.message,
      subHeader:data.message,
      message:data.message,
      buttons:["Acepto"]
    });
    await alert.present(); 

  }

  async alertError406(data:any){
    const alert = await this.alertcontroller.create({
      header:"Errores en campos",
      subHeader:"Revise los siguientes campos",
      message:data.error[1],
      buttons:["Acepto"]
    });
    await alert.present(); 
  }

}
