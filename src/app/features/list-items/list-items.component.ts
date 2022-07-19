import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ItemsState } from 'src/app/state/items.state';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemsService } from 'src/app/services/items.service';
import {map} from 'rxjs/operators'
import { GetItems } from '../actions/items.action';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Select(ItemsState.getItems) items: Observable<Item[]>;

  constructor(private store: Store, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.loadItems();
    this.itemsService.itemss();
  }

  private loadItems() {
    this.store.dispatch(new GetItems()).subscribe(()=> console.log('items loaded'), () => console.log('failed to load items'));
  }
}
