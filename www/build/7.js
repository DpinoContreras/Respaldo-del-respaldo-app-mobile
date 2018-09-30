webpackJsonp([7],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_master__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_master__["a" /* ListMasterPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, iab, modalCtrl, document) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.document = document;
        // Let's populate this page with some filler content for funzies
        this.icons = ['download'];
        this.document.get().subscribe(function (res) {
            if (res.data.length == 0) {
                _this.error = "Aun no has descagados Documentos";
            }
            else {
                _this.Documentos = res.data;
            }
        });
    }
    //this.prueba = this.currentItems.subscribe((data: Cu) => this.prueba = JSON.stringify(data));
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        /*let addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(item => {
          if (item) {
            this.items.add(item);
            console.log(item);
    
          }
        })
        addModal.present();
      */ 
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function () {
        //this.items.delete(item);
    };
    /**
      * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (code) {
        this.document.getByCode(code).subscribe(function (res) {
            var linkSource = 'data:application/pdf;base64,' + res.document;
            //  this.iab.create(linkSource);
            //console.log(linkSource);
            window.open(linkSource, '_system', 'location=yes');
        });
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"/home/diego/respaldo/src/pages/list-master/list-master.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Archivos Recientes</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<p *ngIf="error">{{error}}</p>\n    <ion-list>\n        <button ion-item *ngFor="let item of Documentos" (click)="openItem(item.code)">\n          {{item.path}}\n          <div class="item-note">\n            {{item.name}}\n          </div>\n          <div class="item-note">\n            {{item.created}}\n          </div>\n          <div class="item-note" item-end>\n            <ion-icon name="download"></ion-icon>\n          </div>\n        </button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/diego/respaldo/src/pages/list-master/list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* DocumentService */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=7.js.map