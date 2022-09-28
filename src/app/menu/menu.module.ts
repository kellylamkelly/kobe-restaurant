import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AppetizersComponent } from './appetizers/appetizers.component';
import { TeppanyakiComponent } from './teppanyaki/teppanyaki.component';
import { SushiComponent } from './sushi/sushi.component';
import { DessertComponent } from './dessert/dessert.component';
import { BeveragesComponent } from './beverages/beverages.component';

@NgModule({
  declarations: [
    AppetizersComponent,
    TeppanyakiComponent,
    SushiComponent,
    DessertComponent,
    BeveragesComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
