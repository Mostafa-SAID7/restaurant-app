import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuItem, MenuCategory } from '../models/menu-item.model';
import { MOCK_MENU } from '../data';


@Injectable({ providedIn: 'root' })
export class MenuService {
  private apiUrl = 'http://localhost:5124/api/Restaurant/items';
  private http = inject(HttpClient);

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl).pipe(
      catchError(() => of(MOCK_MENU))
    );
  }

  getMenuByCategory(category: MenuCategory): Observable<MenuItem[]> {
    const params = new HttpParams().set('category', category);
    return this.http.get<MenuItem[]>(this.apiUrl, { params }).pipe(
      catchError(() => of(MOCK_MENU.filter(i => i.category === category)))
    );
  }

  getFeaturedItems(): Observable<MenuItem[]> {
    return of(MOCK_MENU.filter(i => i.isFeatured));
  }

  searchMenu(query: string): Observable<MenuItem[]> {
    const q = query.toLowerCase();
    return of(MOCK_MENU.filter(i =>
      i.name.toLowerCase().includes(q) ||
      i.description.toLowerCase().includes(q) ||
      i.category.toLowerCase().includes(q)
    ));
  }
}
