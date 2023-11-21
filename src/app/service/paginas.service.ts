import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HomeModel } from '../model/home-model.model';

@Injectable({
  providedIn: 'root'
})
export class PaginasService {

  constructor(private router: Router, private http: HttpClient ) { }

  listPaginas():Observable<HomeModel[]>{

    return this.http.get<HomeModel[]>('/api/home/paginas');
  }

  crearPaginas(home:HomeModel):Observable<HomeModel>{
    let token = 'Bearer ' +localStorage.getItem("token") || "" ;
    return this.http.post<HomeModel>('/api/home',home,{
      headers: {'Authorization': token}
    });
  }

  eliminarPagina(numeroPagina:number){
    let token = 'Bearer ' +localStorage.getItem("token") || "" ;
   
    return this.http.delete<HomeModel>('/api/home/'+numeroPagina,{
      headers: {'Authorization': token}
    });
  }
}


