import { Item } from "src/app/models/item";

export class AddItem {
    static readonly type = '[Items] Add Item'

    constructor(public payload: Item){}
}

export class EditItem {
    static readonly type = '[Items] Edit Item'

    constructor(public payload: Item){}
}

export class GetItems {
    static readonly type = '[Items] Get Items'

    constructor() {}
}

export class RemoveItem {
    static readonly type = '[Items] Remove Item'

    constructor(public payload: Item){}
}