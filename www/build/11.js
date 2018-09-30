webpackJsonp([11],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailPageModule", function() { return CourseDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_detail__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CourseDetailPageModule = /** @class */ (function () {
    function CourseDetailPageModule() {
    }
    CourseDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__course_detail__["a" /* CourseDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__course_detail__["a" /* CourseDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__course_detail__["a" /* CourseDetailPage */]
            ]
        })
    ], CourseDetailPageModule);
    return CourseDetailPageModule;
}());

//# sourceMappingURL=course-detail.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_base64_to_gallery__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseDetailPage = /** @class */ (function () {
    function CourseDetailPage(navCtrl, base64ToGallery, navParams, document) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.base64ToGallery = base64ToGallery;
        this.document = document;
        this.course = navParams.get('course');
        this.document.getByCourse(this.course.pk).subscribe(function (res) {
            if (res.data.length == 0) {
                _this.error = "Aun no hay Documentos en este curso";
            }
            else {
                _this.Documentos = res.data;
                console.log(res.data);
            }
        });
        // || courses.defaultItem;
    }
    CourseDetailPage.prototype.openItem = function (code) {
        this.document.getByCode(code).subscribe(function (res) {
            var linkSource = 'data:application/pdf;base64,' + res.document;
            window.open(linkSource, '_system', 'location=yes');
        });
    };
    CourseDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-course-detail',template:/*ion-inline-start:"/home/diego/respaldo/src/pages/course-detail/course-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ course.name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="course-detail" padding>\n\n   <p *ngIf="error">{{error}}</p>\n    <button ion-item *ngFor="let item of Documentos" (click)="openItem(item.code)">\n      {{item.path}}\n      <div class="item-note">\n        {{item.name}}\n      </div>\n      <div class="item-note">\n        {{item.created}}\n      </div>\n      <div class="item-note">\n        {{item.owner_fk}}\n      </div>\n      <div class="item-note" item-end>\n        <ion-icon name="download"></ion-icon>\n      </div>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/diego/respaldo/src/pages/course-detail/course-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* DocumentService */]])
    ], CourseDetailPage);
    return CourseDetailPage;
}());

//# sourceMappingURL=course-detail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map