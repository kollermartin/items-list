import { Injectable } from "@angular/core";
import { Item } from "../models/item";
import { Action, createSelector, Select, Selector, State, StateContext, Store } from '@ngxs/store';
import { AddItem, EditItem, GetItems, RemoveItem } from "../features/actions/items.action";
import { ItemsService } from "../services/items.service";
import {map, tap} from 'rxjs/operators'

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

    constructor(private itemsService: ItemsService) {}

    @Selector()
    static getItems(state: ItemsStateModel) {
        return state.items;
    }

    static getItem(id: string) {
       return createSelector([ItemsState], (state: ItemsStateModel) => {
        return state.items.find(item => item.id === id);
       })
    }

    @Action(GetItems)
    getItems(ctx: StateContext<ItemsStateModel>) {
        return this.itemsService.getItems().pipe(map(item => {
            return (Object.values(item));
         }), tap(items => ctx.patchState({items: items})))
    }

    @Action(AddItem)
    addItem(ctx: StateContext<ItemsStateModel>, {payload}: AddItem){
        const state = ctx.getState();
        
        this.itemsService.postItem(payload);

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

    @Action (RemoveItem)
    removeItem(ctx: StateContext<ItemsStateModel>, {payload}: RemoveItem) {
        ctx.patchState({
            items: ctx.getState().items.filter(item => item.id !== payload.id)
        })
    }


}