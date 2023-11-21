import { IonicModule } from '@ionic/angular';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home } from './home.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HomeRoutingModule } from './home-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomeRoutingModule,
    NgxFileDropModule,
    NgxPaginationModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [Home]
})
export class HomeModule {}
