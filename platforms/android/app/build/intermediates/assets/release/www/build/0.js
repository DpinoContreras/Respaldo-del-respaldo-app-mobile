webpackJsonp([0],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesPageModule", function() { return UploadFilesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_files__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadFilesPageModule = /** @class */ (function () {
    function UploadFilesPageModule() {
    }
    UploadFilesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upload_files__["a" /* UploadFilesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upload_files__["a" /* UploadFilesPage */]),
            ],
        })
    ], UploadFilesPageModule);
    return UploadFilesPageModule;
}());

//# sourceMappingURL=upload-files.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFilesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
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





/**
 * Generated class for the UploadFilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadFilesPage = /** @class */ (function () {
    function UploadFilesPage(navCtrl, viewCtrl, formBuilder, types, course, doc) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.types = types;
        this.course = course;
        this.doc = doc;
        this.course.getCourse().subscribe(function (course) { _this.courses = course.data; });
        this.types.get().subscribe(function (types) { _this.tipos = types; });
        this.form = formBuilder.group({
            base64: [''],
            nombre_archivo: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            ruta: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            owner_fk: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            type_fk: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            course_fk: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            token: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    UploadFilesPage.prototype.getPicture = function () {
        this.fileInput.nativeElement.click();
    };
    UploadFilesPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            var base = imageData.split(",");
            _this.form.patchValue({ base64: base[1] });
        };
        this.form.patchValue({ 'ruta': event.target.files[0].name });
        this.form.patchValue({ 'owner_fk': parseInt(sessionStorage.getItem("pk")) });
        this.form.patchValue({ 'token': sessionStorage.getItem("token") });
        reader.readAsDataURL(event.target.files[0]);
        console.log(event.target.files[0]);
    };
    UploadFilesPage.prototype.done = function () {
        if (!this.form.valid) {
            return 0;
        }
        console.log(this.form.value);
        this.doc.addDocument(this.form.value).subscribe(function (res) { console.log(res); });
        // this.items.add(this.form.value);
        this.navCtrl.setRoot('ContentPage');
    };
    UploadFilesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadFilesPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], UploadFilesPage.prototype, "fileInput", void 0);
    UploadFilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload-files',template:/*ion-inline-start:"/home/diego/respaldo/src/pages/upload-files/upload-files.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Subir Archivos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n  <ion-list>\n    <ion-item>\n      <ion-label>Seleccionar Curso</ion-label>\n      <ion-select formControlName="course_fk">\n        <ion-option *ngFor="let course of courses" [value]="course.pk">{{course.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label >Nombre del Archivo</ion-label>\n      <ion-input type="Guia ultra dificil" formControlName="nombre_archivo" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo de Archivo</ion-label>\n      <ion-select formControlName="type_fk" >\n        <ion-option *ngFor="let tipo of tipos" [value]="tipo.pk">{{tipo.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <div class="profile-image-wrapper" (click)="getPicture()">\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.base64.value">\n        <ion-icon name="cloud-upload"></ion-icon>\n        <div>\n          CHOOSE FILE\n        </div>\n      </div>\n      <div class="profile-image-placeholder" *ngIf="this.form.controls.base64.value">\n        <ion-icon name="cloud-done"></ion-icon>\n        <div>\n          FILE UPLOADED\n        </div>\n      </div>\n    </div>\n  </form>\n  <ion-buttons>\n      <button ion-button (click)="done()" block><ion-icon name="cloud-upload"></ion-icon>\n        Enviar\n      </button>\n</ion-buttons>\n</ion-content>\n'/*ion-inline-end:"/home/diego/respaldo/src/pages/upload-files/upload-files.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* TypeService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* CourseService */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* DocumentService */]])
    ], UploadFilesPage);
    return UploadFilesPage;
}());

//# sourceMappingURL=upload-files.js.map

/***/ })

});
//# sourceMappingURL=0.js.map