import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleService } from '../service/role.service';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'admin',
    component: TabsPage,
    canActivateChild: [RoleService],         // <-- This guard will run before the router directs you to the route
    data: { roles : ['Admin'] },      // <-- Current Login in user must have role admin
    children: [
      {
        path: 'registro',
        loadChildren: () => import('../registro/registro.module').then(m => m.RegistroPageModule)   // <-- Redirects to dashboard route below
      }
      
      // <-- The rest of your admin routes
    ]
  }
,
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
