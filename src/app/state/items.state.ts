import { Injectable } from "@angular/core";
import { Item } from "../models/item";
import { Action, Select, Selector, State, StateContext } from '@ngxs/store';
import { AddItem } from "../features/actions/items.action";

export interface ItemsStateModel {
    items: Item[];
}

@State<ItemsStateModel>({
    name: 'items',
    defaults: {
        items: []
    }
})

@Injectable()
export class ItemsState {

    @Selector()
    static getItems(state: ItemsStateModel) {
        return state.items;
    }

    @Action(AddItem)
    addItem(ctx: StateContext<ItemsStateModel>, {payload}: AddItem){
        const state = ctx.getState();

        ctx.patchState({
            items: [...state.items, payload]
        });
    }


}