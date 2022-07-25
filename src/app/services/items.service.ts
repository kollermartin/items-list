import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireList, AngularFireObject} from '@angular/fire/compat/database';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {getDatabase, ref, set, get, child, remove, update} from 'firebase/database';
import {Observable} from 'rxjs';
import {Item} from '../models/item';

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
    return get(ref(getDatabase(), 'todos'));
  }

  public postItem(item: Item): Promise<void> {
    const db = getDatabase();
    return set(ref(db, this.dbPath + item.id), {...item});
  }

  public removeItem(id: string): Promise<void> {
    const db = getDatabase();
    return remove(ref(db, this.dbPath + id));
  }

  public updateItem(item: Item): Promise<void> {
    return update(ref(getDatabase(), this.dbPath + item.id), item);
  }
}
