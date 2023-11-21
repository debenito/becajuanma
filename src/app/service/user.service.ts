import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private http: HttpClient ) {
   }


   listUser():Observable<User[]>{
    let token = 'Bearer ' +localStorage.getItem("token") || "" ;

    return this.http.get<User[]>('/api/registro', {
      headers: {'Authorization': token}
    });
  }
  addUser(usuario:User):Observable<Message>{
    let token = 'Bearer ' +localStorage.getItem("token") || "" ;

    return this.http.post<Message>('/api/registro',usuario, {
      headers: {'Authorization': token}
    });
  }

  deleteUser(username:string):Observable<Message>{
    let url = '/api/registro/'+username;

    let token = 'Bearer ' + localStorage.getItem("token") || "" ;
    return this.http.delete<Message>(url, {
      headers: {'Authorization': token},
    });

  }

  changeUser(usuario:User):Observable<Message>{
    let token = 'Bearer ' + localStorage.getItem("token") || "" ;
    return this.http.put<Message>('/api/registro',usuario,{
      headers: {'Authorization': token}
    
    });
  }

}
