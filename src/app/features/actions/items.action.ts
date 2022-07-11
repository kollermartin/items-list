import { Item } from "src/app/models/item";

export class AddItem {
    static readonly type = '[Items] Add Item'

    constructor(public payload: Item){}
}