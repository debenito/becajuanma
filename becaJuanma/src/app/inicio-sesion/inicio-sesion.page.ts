import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  name: string ='';
  password:string = '';
  constructor(private modalCtrl: ModalController,  private router: Router) {
   }

  ngOnInit() {
  }


  cancel() {
    
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.router.navigateByUrl("/admin/registro");
    localStorage.setItem("role","Admin")
    return this.modalCtrl.dismiss(this.name+this.password, 'confirm');
  }

 
}
