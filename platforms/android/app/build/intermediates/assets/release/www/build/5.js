webpackJsonp([5],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilesPageModule", function() { return MyFilesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_files__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyFilesPageModule = /** @class */ (function () {
    function MyFilesPageModule() {
    }
    MyFilesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_files__["a" /* MyFilesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_files__["a" /* MyFilesPage */]),
            ],
        })
    ], MyFilesPageModule);
    return MyFilesPageModule;
}());

//# sourceMappingURL=my-files.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
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




/**
 * Generated class for the MyFilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyFilesPage = /** @class */ (function () {
    function MyFilesPage(navCtrl, navParams, documento, iab, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documento = documento;
        this.iab = iab;
        this.user = user;
        this.documento.getByOwner(parseInt(sessionStorage.getItem("pk"))).subscribe(function (res) {
            _this.MyDocuments = res.data;
            console.log(res);
        });
    }
    MyFilesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyFilesPage');
    };
    MyFilesPage.prototype.openItem = function (code) {
        var _this = this;
        this.documento.getByCode(code).subscribe(function (res) {
            var linkSource = 'data:application/pdf;base64,' + res.document;
            _this.iab.create(linkSource);
            //console.log(linkSource);
            //window.open(linkSource, '_system', 'location=no');
        });
    };
    MyFilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-files',template:/*ion-inline-start:"/home/diego/respaldo/src/pages/my-files/my-files.html"*/'<!--\n  Generated template for the MyFilesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Archivos</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="this.navCtrl.setRoot(\'SearchPage\')">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of MyDocuments" (click)="openItem(item.code)">\n      {{item.path}}\n      <div class="item-note">\n        {{item.name}}\n      </div>\n      <div class="item-note">\n        {{item.created}}\n      </div>\n      <div class="item-note">\n        {{item.owner_fk}}\n      </div>\n      <div class="item-note" item-end>\n        <ion-icon name="download"></ion-icon>\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/diego/respaldo/src/pages/my-files/my-files.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* DocumentService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["f" /* User */]])
    ], MyFilesPage);
    return MyFilesPage;
}());

//# sourceMappingURL=my-files.js.map

/***/ })

});
//# sourceMappingURL=5.js.map