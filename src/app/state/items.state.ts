import { Injectable } from "@angular/core";
import { Item } from "../models/item";
import { Action, createSelector, Select, Selector, State, StateContext } from '@ngxs/store';
import { AddItem, EditItem } from "../features/actions/items.action";

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

    static getItem(id: string) {
       return createSelector([ItemsState], (state: ItemsStateModel) => {
        return state.items.find(item => item.id === id);
       })
    }

    @Action(AddItem)
    addItem(ctx: StateContext<ItemsStateModel>, {payload}: AddItem){
        const state = ctx.getState();

        ctx.patchState({
            items: [...state.items, payload]
        });
    }

    @Action(EditItem)
    editItem(ctx: StateContext<ItemsStateModel>, {payload}: EditItem) {
        const state = ctx.getState();
        const editedItem = state.items.find(item => item.id === payload.id);
        const indexOfEditedItem = state.items.indexOf(editedItem);
        const newItems = [...state.items];
        
        newItems[indexOfEditedItem] = {...payload};

        ctx.patchState({
            items: newItems
        })
    }


}