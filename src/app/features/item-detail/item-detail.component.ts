import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Item } from 'src/app/models/item';
import { ItemsState } from 'src/app/state/items.state';
import { EditItem } from '../actions/items.action';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  public itemFormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private store: Store,
    private fb: FormBuilder,
    private dialogRef: DialogRef
  ) {}

  ngOnInit(): void {
    this.getItem();
    this.itemFormGroup.controls['id'].disable();
  }

  public submit(): void {
    this.store.dispatch(new EditItem(new Item(this.itemFormGroup.controls['name'].value, this.itemFormGroup.controls['id'].value)))
    this.dialogRef.close();
  }

  public close(): void {
    this.dialogRef.close();
  }

  private getItem(): void {
    this.store.select(ItemsState.getItem(this.data)).subscribe((item: Item) => {
      this.itemFormGroup.patchValue({
        id: item.id,
        name: item.name,
      });
    });
  }
}
