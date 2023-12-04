import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeModule } from '../home/home.module';
import { Home } from '../home/home.page';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion.page';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  message = 'This modal example uses the modalController to present and dismiss modals.';
  scroll: boolean = false;
  tabs: boolean = false;
  roleAdmin:boolean = false;
  constructor(private modalCtrl: ModalController,private service : RoleService,) {
    }
  ngOnInit(): void {
    this.roleAdmin=this.service.isRoleAdmin();
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: InicioSesionPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
      
    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }


 facebook(){
  window.open("https://www.facebook.com/profile.php?id=61554207510605")
 }
 instagram(){
  window.open("https://instagram.com/gandulin2004?igshid=OGQ5ZDc2ODk2ZA==")
 }

 email(){
    window.open("mailto:gandulincaa@gmail.com");
 }

 call(){

 }


}
