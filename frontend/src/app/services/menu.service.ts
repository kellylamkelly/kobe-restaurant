import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from 'src/app/shared/models/Menu';
import { Observable } from 'rxjs';
import { MENU_APPS_URL, MENU_COMBOS_URL, MENU_ID_URL, MENU_NIGIRI_URL, MENU_SUSHIENTREES_URL, MENU_SUSHIROLLS_URL, MENU_TEPP_URL, MENU_URL } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(MENU_URL);
  }
  
  getItemByID(id: number): Observable<Menu> {
    return this.http.get<Menu>(MENU_ID_URL + id);
  }

  getApps(): Observable<Menu[]> {
    return this.http.get<Menu[]>(MENU_APPS_URL);
  }

  getTepp(): Observable<Menu[]> {
    return this.http.get<Menu[]>(MENU_TEPP_URL);
  }

  getCombos(): Observable<Menu[]> {
    return this.http.get<Menu[]>(MENU_COMBOS_URL);
  }

  getNigiri(): Observable<Menu[]> {
    return this.http.get<Menu[]>(MENU_NIGIRI_URL);
  }

  getRolls(): Observable<Menu[]> {
    return this.http.get<Menu[]>(MENU_SUSHIROLLS_URL);
  }

  getSushiEntrees(): Observable<Menu[]> {
    return this.http.get<Menu[]>(MENU_SUSHIENTREES_URL);
  }
}
