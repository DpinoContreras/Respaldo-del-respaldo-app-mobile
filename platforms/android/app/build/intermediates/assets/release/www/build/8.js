webpackJsonp([8],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCreatePageModule", function() { return ItemCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_create__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemCreatePageModule = /** @class */ (function () {
    function ItemCreatePageModule() {
    }
    ItemCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_create__["a" /* ItemCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_create__["a" /* ItemCreatePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__item_create__["a" /* ItemCreatePage */]
            ]
        })
    ], ItemCreatePageModule);
    return ItemCreatePageModule;
}());

//# sourceMappingURL=item-create.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Camera } from '@ionic-native/camera';

//import { Items } from '../../providers';
var ItemCreatePage = /** @class */ (function () {
    function ItemCreatePage(navCtrl, viewCtrl, formBuilder, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
        this.form = formBuilder.group({
            archivo: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            base64: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            first_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            token: ['']
        });
        this.menuCtrl.enable(false, 'guest');
        this.menuCtrl.enable(false, 'authenticated');
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ItemCreatePage.prototype.ionViewDidLoad = function () {
    };
    ItemCreatePage.prototype.getPicture = function () {
        this.fileInput.nativeElement.click();
    };
    ItemCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            var base64 = imageData.split(",");
            var data = base64[0].split(":");
            var base = data[1].split(";");
            var mime = base[0];
            _this.form.patchValue({ 'tipo': mime });
            _this.form.patchValue({ 'base64': base64[1] });
            _this.form.patchValue({ 'token': sessionStorage.getItem("token") });
        };
        this.form.patchValue({ 'archivo': event.target.files[0].name });
        reader.readAsDataURL(event.target.files[0]);
        console.log(event.target.files[0]);
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return 0;
        }
        console.log(this.form.value);
        // this.items.add(this.form.value);
        this.navCtrl.setRoot('ContentPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ItemCreatePage.prototype, "fileInput", void 0);
    ItemCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-create',template:/*ion-inline-start:"/home/diego/respaldo/src/pages/item-create/item-create.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Subir Archivos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n    <ion-item>\n      <ion-label>Seleccionar Curso</ion-label>\n      <ion-select >\n        <ion-option value="nes">Curso1</ion-option>\n        <ion-option value="n64">Curso2</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label >Nombre del Archivo</ion-label>\n      <ion-input type="Guia ultra dificil" formControlName="first_name" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo de Archivo</ion-label>\n      <ion-select >\n        <ion-option value="Tipo1">Tipo1</ion-option>\n        <ion-option value="Tipo2">Tipo2</ion-option>\n      </ion-select>\n    </ion-item>\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <div class="profile-image-wrapper" (click)="getPicture()">\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.archivo.value">\n        <ion-icon name="cloud-upload"></ion-icon>\n        <div>\n          CHOOSE FILE\n        </div>\n      </div>\n      <div class="profile-image-placeholder" *ngIf="this.form.controls.archivo.value">\n        <ion-icon name="cloud-done"></ion-icon>\n        <div>\n          FILE UPLOADED\n        </div>\n      </div>\n    </div>\n  </form>\n  <ion-item><button ion-button (click)="done()">Enviar</button></ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/diego/respaldo/src/pages/item-create/item-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */]])
    ], ItemCreatePage);
    return ItemCreatePage;
}());

//# sourceMappingURL=item-create.js.map

/***/ })

});
//# sourceMappingURL=8.js.map