import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { GenerateId } from 'src/app/tools/generate-id';
import { AddItem } from '../actions/items.action';

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
    this.store.dispatch(new AddItem({name: this.formGroup.get('name').value, id: GenerateId.generate()}));
  }
}
