import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDatabase, ref, set, get, child, remove, update } from "firebase/database";
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly dbPath = 'todos/';
  private todosRef: AngularFireList<Item>;
  private todoRef: AngularFireObject<Item>;
  items: Observable<any>;

  constructor(private http: HttpClient, private db: AngularFirestore) {
   }

  public getItems(): Promise<any> {
    let data: Item[];

    return get(ref(getDatabase(), 'todos'));
  }

  public itemss() {
    get(ref(getDatabase(), 'todos')).then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  public postItem(item: Item) {
    const db = getDatabase();
    set(ref(db, this.dbPath + item.id), {
      name: item.name,
      id: item.id
    });
  }

  public removeItem(id: string) {
    const db = getDatabase();
    remove(ref(db, this.dbPath + id))
  }

  public updateItem(item: Item) {
    update(ref(getDatabase(), this.dbPath + item.id),item)
  }
}
