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
        this.itemsService.getItems().then((snapshot) => {
            if (snapshot.exists()) {
                ctx.patchState({items: Object.values(snapshot.val())});
            } else {
              console.log("No data available");
            }
          });
        
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

        this.itemsService.updateItem(payload); //TODO predelat patchstate do then();
    }

    @Action (RemoveItem)
    removeItem(ctx: StateContext<ItemsStateModel>, {payload}: RemoveItem) {
        this.itemsService.removeItem(payload.id);

        ctx.patchState({
            items: ctx.getState().items.filter(item => item.id !== payload.id)
        })
    }


}