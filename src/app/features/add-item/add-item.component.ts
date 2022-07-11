import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { GenerateId } from 'src/app/tools/generate-id';
import { AddItem } from '../actions/items.action';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  public formGroup = this.formBuilder.group({
    name: ['', Validators.required]
  })

  constructor(private formBuilder: UntypedFormBuilder, private store: Store) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.store.dispatch(new AddItem(new Item(this.formGroup.get('name').value, GenerateId.generate())));
  }
}
