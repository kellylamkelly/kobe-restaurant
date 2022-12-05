import { Injectable } from '@angular/core';
import { Menu } from 'src/app/shared/models/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  getItemByID(id: number): Menu {
    return this.getAll().find(menu => menu.id == id)!;
  }

  getAll(): Menu[] {
    return [
      {
        id: 114,
        name: "House Soup",
        price: 1.95,
        desc: "Clear chicken broth with mushrooms & scallions",
        image: "114.png"
      },
      {
        id: 115,
        name: "Miso Soup",
        price: 1.95,
        desc: "Bean paste soup with mushrooms & scallions",
        image: "115.jpeg"
      },
      {
        id: 100,
        name: "Edamame",
        price: 4.25,
        desc: "Lightly boiled and salted soybeans",
        image: "100.png"
      }
    ]
  }
}
