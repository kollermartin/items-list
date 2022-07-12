import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ItemsState } from 'src/app/state/items.state';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailComponent } from '../item-detail/item-detail.component';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  public items: Observable<Item[]> = this.store.select(ItemsState.getItems);

  constructor(private store: Store, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openModal(id: string): void {
    this.dialog.open(ItemDetailComponent, {
      data: id,
      width: '25vw'
    });
  }
}
