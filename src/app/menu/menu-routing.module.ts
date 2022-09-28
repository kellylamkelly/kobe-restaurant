import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { AppetizersComponent } from './appetizers/appetizers.component';
import { TeppanyakiComponent } from './teppanyaki/teppanyaki.component';
import { SushiComponent } from './sushi/sushi.component';
import { DessertComponent } from './dessert/dessert.component';
import { BeveragesComponent } from './beverages/beverages.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent, children: [
      { path: 'appetizers', component: AppetizersComponent },
      { path: 'teppanyaki', component: TeppanyakiComponent },
      { path: 'sushi', component: SushiComponent },
      { path: 'dessert', component: DessertComponent },
      { path: 'beverages', component: BeveragesComponent },
      { path: '', redirectTo: 'appetizers', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
