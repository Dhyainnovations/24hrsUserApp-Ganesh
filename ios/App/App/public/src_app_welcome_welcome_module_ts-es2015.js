(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_welcome_welcome_module_ts"],{

/***/ 60752:
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": function() { return /* binding */ WelcomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 93297);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 32526:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": function() { return /* binding */ WelcomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 60752);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 93297);







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 93297:
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": function() { return /* binding */ WelcomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./welcome.page.html */ 62553);
/* harmony import */ var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss */ 62447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _signin_signin_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signin/signin.page */ 61895);
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup/signup.page */ 80771);







let WelcomePage = class WelcomePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _signin_signin_page__WEBPACK_IMPORTED_MODULE_2__.SigninPage,
                animated: true,
                mode: 'ios',
                backdropDismiss: false,
                cssClass: 'login-modal',
            });
            return yield modal.present();
        });
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_3__.SignupPage,
                animated: true,
                mode: 'ios',
                backdropDismiss: false,
                cssClass: 'register-modal',
            });
            return yield modal.present();
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WelcomePage);



/***/ }),

/***/ 62447:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  width: 50%;\n  margin: 20% 0 20% 0;\n}\n\n.title {\n  margin-bottom: 5lotti0px;\n}\n\n.title p {\n  margin-top: 0 !important;\n}\n\n.welcomecard {\n  margin-top: 5%;\n  background: rgba(49, 38, 38, 0.18);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(8.2px);\n          backdrop-filter: blur(8.2px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\nion-content {\n  background: url('background.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFHQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUVBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBRUk7RUFDSSxhQUFBO0FBQVIiLCJmaWxlIjoid2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDIwJSAwIDIwJSAwO1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDVsb3R0aTBweDtcbn1cblxuLnRpdGxlIHAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWVjYXJke1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNDksIDM4LCAzOCwgMC4xOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOC4ycHgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tncm91bmQuanBnXCIpIDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcbiAgXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ 62553:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\" color=\"\">\n    <img src=\"assets/logo.jpeg\" class=\"logo\" />\n\n    \n  <div class=\"welcomecard\">\n    <div class=\"title\">\n      <h2>Welcome</h2>\n      <p>Enjoy the 24hrs  App</p>\n  </div>\n\n  <div class=\"ion-margin-top mb-4\">\n      <ion-button  class=\"ion-margin-top\"  fill=\"outline\" color=\"dark\">\n        <img height=\"25px\" width=\"25px\" src=\"assets/googlelogo.png\" alt=\"\">\n        \n        <span style=\"margin-top: 4px;\">LOGIN WITH GOOGLE</span></ion-button>\n      <ion-button  class=\"ion-margin-top\" (click)=\"login()\" color=\"dark\">\n        <svg style=\"margin:5px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"14\" fill=\"currentColor\" class=\"bi bi-tablet\" viewBox=\"0 0 16 16\">\n          <path d=\"M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z\"/>\n          <path d=\"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"/>\n        </svg>\n         LOGIN WITH MOBILE</ion-button>\n  </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_welcome_module_ts-es2015.js.map