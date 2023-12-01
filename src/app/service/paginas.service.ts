import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HomeModel } from '../model/home-model.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaginasService {

  constructor(private router: Router, private http: HttpClient ) { }

  listPaginas():Observable<HomeModel[]>{

    return this.http.get<HomeModel[]>(environment.API_URL+'/api/home/paginas');
  }

  crearPaginas(home:HomeModel):Observable<HomeModel>{
    let token = 'Bearer ' +localStorage.getItem("token") || "" ;
    return this.http.post<HomeModel>(environment.API_URL+'/api/home',home,{
      headers: {'Authorization': token}
    });
  }

  eliminarPagina(numeroPagina:number){
    let token = 'Bearer ' +localStorage.getItem("token") || "" ;
   
    return this.http.delete<HomeModel>(environment.API_URL+'/api/home/'+numeroPagina,{
      headers: {'Authorization': token}
    });
  }
}


