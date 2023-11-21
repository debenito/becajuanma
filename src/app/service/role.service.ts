import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Message } from '../model/message.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RoleService implements CanActivateChild {
  constructor( private router: Router, private http: HttpClient ) {
  
   }
  
  canActivateChild(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
  //  const userRoles: string[] = this.authService.getRoles();  // <--------- get the current user's roles
   // const routeRoles: string[] = route.data['roles'];   // <------- Will get the roles arry you defined in your router config
     this.checked();
      return this.isRoleAdmin();
  }

  isRoleAdmin():boolean{
    if(localStorage.getItem("role") == "ROLE_ADMIN")
        return true;
    else if(localStorage.getItem("role") == ""){
      localStorage.clear();
      this.router.navigateByUrl("/home").then(() => { window.location.reload() });
      }
        return false;
     
  }

   checked(){
    this.check().subscribe (
      data => {
        if(data.message == "Invalid"){
          localStorage.clear();
          this.router.navigateByUrl("/home").then(() => { window.location.reload() });

        }
        
      },
      error=>{
        localStorage.clear();
        this.router.navigateByUrl("/home").then(() => { window.location.reload() });

      }
  
      );
  }

  check():Observable<Message>{
    let token = localStorage.getItem("token");
    if( token == null)
      token = "Invalid";
    let params = new HttpParams().set('username', token +"");

    return this.http.get<Message>(environment.API_URL+'/api/check',  { params: params });
  }

}


