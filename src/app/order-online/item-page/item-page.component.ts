import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from 'src/app/shared/models/Menu';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  menu!: Menu;

  constructor(activatedRoute: ActivatedRoute, menuService: MenuService) { 
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
      this.menu = menuService.getItemByID(Number(params['id']));
    })
  }

  ngOnInit(): void {
  }

}
