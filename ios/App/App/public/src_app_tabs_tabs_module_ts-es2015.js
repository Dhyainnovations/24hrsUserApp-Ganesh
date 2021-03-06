(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs-src_app_shared_http_service_ts"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 14608)).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs-src_app_shared_http_service_ts"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 53746)).then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-size: 11px !important;\n}\n\nion-tab-bar {\n  --color-selected: #eb154b\n  !important;\n}\n\nion-label {\n  --color-selected: #eb154b !important;\n}\n\nion-tabs {\n  --border-radius: 50%;\n  background: #ffffff;\n}\n\nion-tab-bar {\n  --background: #0c0c0c;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);\n  bottom: 15px;\n  position: relative;\n  border-radius: 18px;\n  width: 92%;\n  border-top: none;\n  margin: 0 auto;\n  height: 55px;\n}\n\nion-tab-button {\n  --color: #d4d4d4;\n  --color-selected: #eb154b;\n  --padding-bottom: 8px;\n  --padding-top: 8px;\n}\n\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\n\nion-tab-button.tab-selected::before {\n  background-color: #eb154b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUNJO1lBQUE7QUFHSjs7QUFDQTtFQUNJLG9DQUFBO0FBRUo7O0FBQ0E7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBSTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFFTjs7QUFDSTtFQUNFLHlCQUFBO0FBQ04iLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tdGFiLWJhcntcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiAjZWIxNTRiXG5cbiAgICAhaW1wb3J0YW50O1xufVxuaW9uLWxhYmVse1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICNlYjE1NGIgIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYnN7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuaW9uLXRhYi1iYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzBjMGMwYztcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIHdpZHRoOiA5MiU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDU1cHg7XG4gIH1cbiAgXG4gIGlvbi10YWItYnV0dG9uIHtcbiAgICAtLWNvbG9yOiAjZDRkNGQ0O1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICNlYjE1NGI7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDhweDtcbiAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgIH1cbiAgXG4gICAgJi50YWItc2VsZWN0ZWQ6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWIxNTRiO1xuICAgIH1cbiAgfVxuICBcblxuICAiXX0= */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-tabs >\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      \n      <svg width=\"27\" height=\"24\" viewBox=\"0 0 29 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M28.9911 12.4756C28.9911 13.3545 28.2359 14.043 27.38 14.043H25.7688L25.804 21.8604C25.804 21.9971 25.794 22.124 25.7788 22.2559V23.0469C25.7788 24.126 24.8776 25 23.7649 25H22.9593C22.9039 25 22.8485 24.9561 22.7931 24.9951C22.7226 24.9561 22.6522 25 22.5817 25H19.7369C18.6242 25 17.723 24.126 17.723 23.0469V18.75C17.723 17.8857 17.003 17.1875 16.1118 17.1875H12.8894C11.9982 17.1875 11.2782 17.8857 11.2782 18.75V23.0469C11.2782 24.126 10.377 25 9.26427 25H6.44975C6.37422 25 6.2987 24.9951 6.22318 24.9902C6.16276 24.9951 6.10234 25 6.04192 25H5.23633C4.12411 25 3.22236 24.126 3.22236 23.0469V17.5781C3.22236 17.5342 3.22387 17.4854 3.22689 17.4414V14.043H1.6137C0.705897 14.043 0 13.3545 0 12.4756C0 12.0361 0.151249 11.6455 0.503997 11.3037L13.4131 0.391406C13.7655 0.0489258 14.1683 0 14.5207 0C14.8732 0 15.276 0.0978515 15.5831 0.34248L28.4373 11.3037C28.8401 11.6455 29.0465 12.0361 28.9911 12.4756Z\" fill=\"white\"/>\n        </svg>\n                 \n      <ion-label  >Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <svg width=\"26\" height=\"30\" viewBox=\"0 0 26 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M16 0C17.1063 0 18 0.839648 18 1.875C18 2.91035 17.1063 3.75 16 3.75H15V5.76855C17.3438 6.10547 19.4813 7.03125 21.2313 8.37891L22.5875 7.11328C23.3687 6.38086 24.6313 6.38086 25.4125 7.11328C26.1938 7.8457 26.1938 9.0293 25.4125 9.76172L23.9062 11.1797C25.2313 13.084 26 15.3633 26 17.8125C26 24.5449 20.1813 30 13 30C5.81875 30 0 24.5449 0 17.8125C0 11.7188 4.77 6.66797 11 5.76855V3.75H10C8.89375 3.75 8 2.91035 8 1.875C8 0.839648 8.89375 0 10 0H16ZM14.5 11.25C14.5 10.4707 13.8313 9.84375 13 9.84375C12.1687 9.84375 11.5 10.4707 11.5 11.25V18.75C11.5 19.5293 12.1687 20.1562 13 20.1562C13.8313 20.1562 14.5 19.5293 14.5 18.75V11.25Z\" fill=\"white\"/>\n        <rect x=\"4\" y=\"16\" width=\"18\" height=\"4\" rx=\"2\" fill=\"#0D0D0D\"/>\n        <path d=\"M11 11C11 9.89543 11.8954 9 13 9V9C14.1046 9 15 9.89543 15 11V24C15 25.1046 14.1046 26 13 26V26C11.8954 26 11 25.1046 11 24V11Z\" fill=\"#0D0D0D\"/>\n        </svg>\n        \n      <ion-label>Set alarm</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <svg width=\"25\" height=\"25\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M12.5 12.5007C16.4453 12.5007 19.6429 9.70223 19.6429 6.25037C19.6429 2.7985 16.4453 0 12.5 0C8.55469 0 5.35714 2.7985 5.35714 6.25037C5.35714 9.70223 8.55469 12.5007 12.5 12.5007ZM15.3292 14.8446H9.67076C4.33092 14.8446 0 18.6339 0 23.307C0 24.2417 0.866071 25 1.93415 25H23.067C24.135 25.0015 25 24.2446 25 23.307C25 18.6339 20.6696 14.8446 15.3292 14.8446Z\" fill=\"white\"/>\n        </svg>\n        \n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n    \n  </ion-tab-bar>\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map