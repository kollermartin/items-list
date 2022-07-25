import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Store } from '@ngxs/store';
import { Item } from 'src/app/models/item';
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { RemoveItem } from '../../actions/items.action';
import { ItemDetailComponent } from '../../item-detail/item-detail.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private dialog: MatDialog, private store: Store, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public openModal(id: string): void {
    this.dialog.open(ItemDetailComponent, {
      data: id
    });
  }

  public removeItem(): void {
    this.store.dispatch(new RemoveItem(this.item));
  }
}
