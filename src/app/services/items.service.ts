import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly dbPath = 'https://items-list-8957c-default-rtdb.europe-west1.firebasedatabase.app/items.json';

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.dbPath);
  }

  public postItem(item: Item) {
    this.http.post(this.dbPath, item).subscribe(res => console.log(res));
  }
}
