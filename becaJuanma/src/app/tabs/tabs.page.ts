import { Component } from '@angular/core';
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
export class TabsPage {
  message = 'This modal example uses the modalController to present and dismiss modals.';
  scroll: boolean = false;
  tabs: boolean = false;
  roleAdmin:boolean = false;
  constructor(private modalCtrl: ModalController,private service : RoleService,) {
    this.roleAdmin=service.isRoleAdmin();
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


}