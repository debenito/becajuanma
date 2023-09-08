import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RoleService implements CanActivateChild {

  constructor( private router: Router, private http: HttpClient ) { }
  
  canActivateChild(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
  //  const userRoles: string[] = this.authService.getRoles();  // <--------- get the current user's roles
   // const routeRoles: string[] = route.data['roles'];   // <------- Will get the roles arry you defined in your router config
      return this.isRoleAdmin();
  }

  isRoleAdmin():boolean{
      if(localStorage.getItem("role") == "ROLE_ADMIN")
      return true;
    return false;
  }
}


