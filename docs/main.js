"use strict";
(self["webpackChunkitem_list"] = self["webpackChunkitem_list"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _features_list_items_list_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/list-items/list-items.component */ 4125);
/* harmony import */ var _features_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/add-item/add-item.component */ 4171);



class AppComponent {
    constructor() {
        this.title = 'item-list';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-add-item")(2, "app-list-items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_features_list_items_list_items_component__WEBPACK_IMPORTED_MODULE_0__.ListItemsComponent, _features_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_1__.AddItemComponent], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  background-color: #EEEEEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _features_list_items_list_items_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/list-items/list-items.component */ 4125);
/* harmony import */ var _features_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/add-item/add-item.component */ 4171);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _state_items_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/items.state */ 556);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _features_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/item-detail/item-detail.component */ 7339);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _features_list_items_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/list-items/list-item/list-item.component */ 6030);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/snack-bar/snack-bar.component */ 5989);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _ngxs_store__WEBPACK_IMPORTED_MODULE_3__.NgxsModule.forRoot([_state_items_state__WEBPACK_IMPORTED_MODULE_4__.ItemsState]),
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _features_list_items_list_items_component__WEBPACK_IMPORTED_MODULE_1__.ListItemsComponent,
        _features_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_2__.AddItemComponent,
        _features_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_5__.ItemDetailComponent,
        _features_list_items_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_6__.ListItemComponent,
        _shared_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__.SnackBarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵj"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule] }); })();


/***/ }),

/***/ 5273:
/*!**************************************************!*\
  !*** ./src/app/features/actions/items.action.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItem": () => (/* binding */ AddItem),
/* harmony export */   "EditItem": () => (/* binding */ EditItem),
/* harmony export */   "GetItems": () => (/* binding */ GetItems),
/* harmony export */   "RemoveItem": () => (/* binding */ RemoveItem)
/* harmony export */ });
class AddItem {
    constructor(payload) {
        this.payload = payload;
    }
}
AddItem.type = '[Items] Add Item';
class EditItem {
    constructor(payload) {
        this.payload = payload;
    }
}
EditItem.type = '[Items] Edit Item';
class GetItems {
    constructor() { }
}
GetItems.type = '[Items] Get Items';
class RemoveItem {
    constructor(payload) {
        this.payload = payload;
    }
}
RemoveItem.type = '[Items] Remove Item';


/***/ }),

/***/ 4171:
/*!*********************************************************!*\
  !*** ./src/app/features/add-item/add-item.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItemComponent": () => (/* binding */ AddItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_tools_generate_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tools/generate-id */ 5576);
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/items.action */ 5273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);










function AddItemComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Item name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class AddItemComponent {
    constructor(formBuilder, store, formDirective) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.formDirective = formDirective;
        this.formGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.store.dispatch(new _actions_items_action__WEBPACK_IMPORTED_MODULE_1__.AddItem({ name: this.formGroup.get('name').value, id: src_app_tools_generate_id__WEBPACK_IMPORTED_MODULE_0__.GenerateId.generate() }));
        this.formGroup.reset();
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective)); };
AddItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["app-add-item"]], decls: 8, vars: 4, consts: [[3, "formGroup"], ["appearance", "fill"], ["type", "text", "matInput", "", 3, "formControl"], [4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddItemComponent_mat_error_5_Template, 4, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.formGroup.controls["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["name"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 2rem;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 1.34375em;\n  margin-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUFDUiIsImZpbGUiOiJhZGQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjM0Mzc1ZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7339:
/*!***************************************************************!*\
  !*** ./src/app/features/item-detail/item-detail.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailComponent": () => (/* binding */ ItemDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_state_items_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/items.state */ 556);
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/items.action */ 5273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/dialog */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);













function ItemDetailComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Item name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class ItemDetailComponent {
    constructor(data, store, fb, dialogRef) {
        this.data = data;
        this.store = store;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.itemFormGroup = this.fb.group({
            id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    ngOnInit() {
        this.getItem();
        this.itemFormGroup.controls['id'].disable();
    }
    submit() {
        this.store.dispatch(new _actions_items_action__WEBPACK_IMPORTED_MODULE_1__.EditItem({ name: this.itemFormGroup.controls['name'].value, id: this.itemFormGroup.controls['id'].value }));
        this.dialogRef.close();
    }
    close() {
        this.dialogRef.close();
    }
    getItem() {
        this.store.select(src_app_state_items_state__WEBPACK_IMPORTED_MODULE_0__.ItemsState.getItem(this.data)).subscribe((item) => {
            this.itemFormGroup.patchValue({
                id: item.id,
                name: item.name,
            });
        });
    }
}
ItemDetailComponent.ɵfac = function ItemDetailComponent_Factory(t) { return new (t || ItemDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogRef)); };
ItemDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ItemDetailComponent, selectors: [["app-item-detail"]], decls: 18, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["appearance", "fill"], ["type", "text", "matInput", "", 3, "formControl"], [4, "ngIf"], ["mat-dialog-actions", "", 1, "actions"], ["mat-stroked-button", "", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "disabled", "click"]], template: function ItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "form", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 3)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ItemDetailComponent_mat_error_12_Template, 4, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ItemDetailComponent_Template_button_click_14_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ItemDetailComponent_Template_button_click_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.itemFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.itemFormGroup.controls["id"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.itemFormGroup.controls["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.itemFormGroup.controls["name"].hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.itemFormGroup.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput], styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6030:
/*!**********************************************************************!*\
  !*** ./src/app/features/list-items/list-item/list-item.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemComponent": () => (/* binding */ ListItemComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/snack-bar/snack-bar.component */ 5989);
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/items.action */ 5273);
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../item-detail/item-detail.component */ 7339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);









class ListItemComponent {
    constructor(dialog, store, snackBar) {
        this.dialog = dialog;
        this.store = store;
        this.snackBar = snackBar;
    }
    ngOnInit() {
    }
    openModal(id) {
        this.dialog.open(_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_2__.ItemDetailComponent, {
            data: id,
            width: '25vw'
        });
    }
    removeItem() {
        this.store.dispatch(new _actions_items_action__WEBPACK_IMPORTED_MODULE_1__.RemoveItem(this.item)).subscribe(() => this.snackBar.openFromComponent(src_app_shared_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_0__.SnackBarComponent, { data: 'Item removed!' }));
    }
}
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar)); };
ListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["app-list-item"]], inputs: { item: "item" }, decls: 10, vars: 1, consts: [[1, "item"], [1, "item__name"], [1, "item__action"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListItemComponent_Template_button_click_4_listener() { return ctx.openModal(ctx.item.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListItemComponent_Template_button_click_7_listener() { return ctx.removeItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.item.name);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], styles: [".item[_ngcontent-%COMP%] {\n  width: 20vw;\n  display: flex;\n  justify-content: space-between;\n  line-break: anywhere;\n  margin: 0.3rem 0;\n  padding: 1rem;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: #fff;\n}\n.item__name[_ngcontent-%COMP%] {\n  flex: 70%;\n  margin-right: 2rem;\n  place-self: center;\n}\n.item__action[_ngcontent-%COMP%] {\n  flex: 30%;\n  place-self: center;\n}\n.item__action[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUVJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUdJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFHUTtFQUNJLG9CQUFBO0FBRFoiLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pdGVtIHtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGxpbmUtYnJlYWs6IGFueXdoZXJlO1xyXG4gICAgbWFyZ2luOiAuM3JlbSAwO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgICZfX25hbWUge1xyXG4gICAgICAgIGZsZXg6IDcwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2FjdGlvbiB7XHJcbiAgICAgICAgZmxleDogMzAlO1xyXG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 4125:
/*!*************************************************************!*\
  !*** ./src/app/features/list-items/list-items.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemsComponent": () => (/* binding */ ListItemsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var src_app_state_items_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/items.state */ 556);
/* harmony import */ var _actions_items_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/items.action */ 5273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/items.service */ 4878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item/list-item.component */ 6030);










function ListItemsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("item", item_r1);
  }
}

class ListItemsComponent {
  constructor(store, itemsService) {
    this.store = store;
    this.itemsService = itemsService;
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.store.dispatch(new _actions_items_action__WEBPACK_IMPORTED_MODULE_2__.GetItems()).subscribe(() => console.log('items loaded'), () => console.log('failed to load items'));
  }

}

ListItemsComponent.ɵfac = function ListItemsComponent_Factory(t) {
  return new (t || ListItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_items_service__WEBPACK_IMPORTED_MODULE_3__.ItemsService));
};

ListItemsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ListItemsComponent,
  selectors: [["app-list-items"]],
  decls: 3,
  vars: 3,
  consts: [[1, "items-container"], [4, "ngFor", "ngForOf"], [3, "item"]],
  template: function ListItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListItemsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx.items));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: [".items-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoibGlzdC1pdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(src_app_state_items_state__WEBPACK_IMPORTED_MODULE_1__.ItemsState.getItems)], ListItemsComponent.prototype, "items", void 0);

/***/ }),

/***/ 4878:
/*!*******************************************!*\
  !*** ./src/app/services/items.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsService": () => (/* binding */ ItemsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ItemsService {
    constructor(http) {
        this.http = http;
        this.dbPath = 'https://items-list-8957c-default-rtdb.europe-west1.firebasedatabase.app/items.json';
    }
    getItems() {
        return this.http.get(this.dbPath);
    }
    postItem(item) {
        this.http.post(this.dbPath, item).subscribe(res => console.log(res));
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ItemsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5989:
/*!*********************************************************!*\
  !*** ./src/app/shared/snack-bar/snack-bar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackBarComponent": () => (/* binding */ SnackBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class SnackBarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA)); };
SnackBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackBarComponent, selectors: [["app-snack-bar"]], decls: 2, vars: 1, template: function SnackBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
    } }, styles: ["p[_ngcontent-%COMP%] {\n  color: rgb(18, 140, 18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYWNrLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0oiLCJmaWxlIjoic25hY2stYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBjb2xvcjogcmdiKDE4LCAxNDAsIDE4KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 556:
/*!**************************************!*\
  !*** ./src/app/state/items.state.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsState": () => (/* binding */ ItemsState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _features_actions_items_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/actions/items.action */ 5273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/items.service */ 4878);
var ItemsState_1;






let ItemsState = ItemsState_1 = class ItemsState {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    static getItems(state) {
        return state.items;
    }
    static getItem(id) {
        return (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([ItemsState_1], (state) => {
            return state.items.find(item => item.id === id);
        });
    }
    getItems(ctx) {
        return this.itemsService.getItems().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(item => {
            return (Object.values(item));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(items => ctx.patchState({ items: items })));
    }
    addItem(ctx, { payload }) {
        const state = ctx.getState();
        this.itemsService.postItem(payload);
        ctx.patchState({
            items: [...state.items, payload]
        });
    }
    editItem(ctx, { payload }) {
        const state = ctx.getState();
        const editedItem = state.items.find(item => item.id === payload.id);
        const indexOfEditedItem = state.items.indexOf(editedItem);
        const newItems = [...state.items];
        newItems[indexOfEditedItem] = { ...payload };
        ctx.patchState({
            items: newItems
        });
    }
    removeItem(ctx, { payload }) {
        ctx.patchState({
            items: ctx.getState().items.filter(item => item.id !== payload.id)
        });
    }
};
ItemsState.ɵfac = function ItemsState_Factory(t) { return new (t || ItemsState)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_items_service__WEBPACK_IMPORTED_MODULE_2__.ItemsService)); };
ItemsState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ItemsState, factory: ItemsState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_features_actions_items_action__WEBPACK_IMPORTED_MODULE_1__.GetItems)
], ItemsState.prototype, "getItems", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_features_actions_items_action__WEBPACK_IMPORTED_MODULE_1__.AddItem)
], ItemsState.prototype, "addItem", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_features_actions_items_action__WEBPACK_IMPORTED_MODULE_1__.EditItem)
], ItemsState.prototype, "editItem", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_features_actions_items_action__WEBPACK_IMPORTED_MODULE_1__.RemoveItem)
], ItemsState.prototype, "removeItem", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], ItemsState, "getItems", null);
ItemsState = ItemsState_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'items',
        defaults: {
            items: []
        }
    })
], ItemsState);



/***/ }),

/***/ 5576:
/*!**************************************!*\
  !*** ./src/app/tools/generate-id.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateId": () => (/* binding */ GenerateId)
/* harmony export */ });
class GenerateId {
    static generate() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map