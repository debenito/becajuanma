import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AlertController, IonAccordion, IonHeader } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { TabsPageModule } from '../tabs/tabs.module';
import { TabsPage } from '../tabs/tabs.page';
import {HomeModel} from '../model/home-model.model';
import {RoleService} from '../service/role.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { PaginasService } from '../service/paginas.service';
import { Observable, ReplaySubject } from 'rxjs';
import { read } from 'fs';
import { PaginationConfig } from '../model/pagination-config.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Home implements OnInit {
   public files: NgxFileDropEntry[] = [];
   homeList : HomeModel[] = [];
   home : HomeModel = new HomeModel();
   isAdmin:boolean = false;
   readonly: boolean = true;
   count : number = this.homeList.length;
   currentPage:number  = 1;
   itemsPerPage: number = 1;
   totalItems: number = 2;
   pagingConfig: PaginationConfig = {} as PaginationConfig;

  
  constructor(
    private tab: TabsPage, private role: RoleService , private homeService: PaginasService,
    private  alertcontroller:AlertController

   ) {
   
   }
  ngOnInit(): void {
    this.listPaginas();
    this.isAdmin = this.role.isRoleAdmin();
     this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

   public onChange(event:any): void {
    console.dir(event);
    console.dir(this.totalItems);
    console.dir(this.itemsPerPage);

    this.currentPage = event;
    this.seleccionarPagina(this.currentPage);
  }
  
  // in my case i'm using ionViewWillEnter

   listPaginas(){
    this.homeService.listPaginas().subscribe(
      data =>{ 
        this.homeList = data
        this.home= this.homeList[0];
        this.currentPage = 1;
        this.totalItems = this.homeList.length;
          this.itemsPerPage=this.currentPage ;

      },
      
      error =>{
         this.alertError(error)
    }
    );
   }
  handleScrollStart() {
     this.tab.scroll = true;
    this.tab.tabs=true;
  }


  handleScrollEnd(){
    this.tab.scroll = false;
      this.tab.tabs=false;
  }

  seleccionarPagina(pagina:number){
    this.home = this.homeList[pagina-1];
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

  eliminarPagina(numeroPagina: number){
    this.homeService.eliminarPagina(numeroPagina).subscribe(
      data =>{ 
       data
       window.location.reload();
      },
      
      error =>{
         this.alertError(error)
    }
    );
  }

   editarPagina(homeNew: HomeModel){
      this.readonly = false;
      this.homeService.crearPaginas(homeNew).subscribe(
        data =>{ 
         data
         window.location.reload();
        },
        
        error =>{
           this.alertError(error)
      }
      );

    }

    crearPagina(){
      this.readonly = false;
      this.home = new HomeModel();
    }

    guardarPagina(homeNew: HomeModel ){
      this.readonly = true;
      homeNew.numeroPagina = this.homeList.length +1;
      this.homeService.crearPaginas(homeNew).subscribe(
        data =>{ 
         data
         window.location.reload();
        },
        
        error =>{
           this.alertError(error)
      }
      );
     
    }


     public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {



        this.convertFile(file);

          
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  convertFile(file : File)  {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsDataURL(file);
      reader.onload = () => {
        this.home.imagen=(reader.result as string)
        ;
    };

    
  }

  

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event : any){
    console.log(event);
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
}

