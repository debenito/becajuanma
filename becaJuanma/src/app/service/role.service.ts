import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService implements CanActivateChild {

  constructor( private router: Router ) { }
  
  canActivateChild(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
   
  //  const userRoles: string[] = this.authService.getRoles();  // <--------- get the current user's roles
   // const routeRoles: string[] = route.data['roles'];   // <------- Will get the roles arry you defined in your router config
      if(localStorage.getItem("role") == "Admin")
      return true;
      else
      return true;
  }

  isRoleAdmin():boolean{
      if(localStorage.getItem("role") == "Admin")
      return true;
    return false;
  }
}


