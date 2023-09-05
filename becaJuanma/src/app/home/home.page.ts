import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { IonAccordion, IonHeader } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { TabsPageModule } from '../tabs/tabs.module';
import { TabsPage } from '../tabs/tabs.page';
import {HomeModel} from '../model/home-model.model';
import {RoleService} from '../service/role.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Home {
   public files: NgxFileDropEntry[] = [];
   home : HomeModel = new HomeModel();
   isAdmin = false;
   fechaHora = new Date();
   minutos =this.fechaHora.getMinutes();
   readonly: boolean = true;

  constructor(
    private tab: TabsPage, private role: RoleService
   ) {
   // this.header= this.header.getAttributeNode('el');
   this.home.titulo = "1º Entrega de la beca";
   this.home.contenido = "Este contenido es donde aparecera todo lo que queramos de la beca";
   this.home.titulo2 = "Bienvenida";
   this.home.img= "../../assets/becaJunama.jpg";
   this.home.numeroPagina = 1;
    this.isAdmin = role.isRoleAdmin();
   }

  // in my case i'm using ionViewWillEnter


  handleScrollStart() {
     this.tab.scroll = true;
    this.tab.tabs=true;
  }


  handleScrollEnd(){
   let fechaFin = new Date();
    let minutosFinales = fechaFin.getTime() - this.fechaHora.getTime();
    console.log("Minutos:", minutosFinales)
    if(minutosFinales > 5000){
      this.fechaHora= fechaFin;
      this.tab.scroll = false;
      this.tab.tabs=false;
    }
  }

   editarPagina(){
      this.readonly = false;
    }

    crearPagina(){
      this.readonly = false;
    }

    guardarPagina(homeNew: HomeModel ){
      this.readonly = true;
    }


     public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event : any){
    console.log(event);
  }
}

