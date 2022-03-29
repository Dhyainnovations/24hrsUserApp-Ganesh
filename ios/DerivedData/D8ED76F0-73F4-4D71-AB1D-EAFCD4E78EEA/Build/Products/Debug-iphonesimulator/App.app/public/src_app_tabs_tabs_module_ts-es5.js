(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tabs_tabs_module_ts"], {
    /***/
    80530:
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageRoutingModule": function TabsPageRoutingModule() {
          return (
            /* binding */
            _TabsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs.page */
      7942);

      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab1/tab1.module */
            2168)).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab2/tab2.module */
            14608)).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab3/tab3.module */
            53746)).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }];

      var _TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      _TabsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
      })], _TabsPageRoutingModule);
      /***/
    },

    /***/
    15564:
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageModule": function TabsPageModule() {
          return (
            /* binding */
            _TabsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs-routing.module */
      80530);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page */
      7942);

      var _TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      _TabsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
      })], _TabsPageModule);
      /***/
    },

    /***/
    7942:
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPage": function TabsPage() {
          return (
            /* binding */
            _TabsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabs.page.html */
      97665);
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page.scss */
      24427);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      _TabsPage.ctorParameters = function () {
        return [];
      };

      _TabsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TabsPage);
      /***/
    },

    /***/
    24427:
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  font-size: 9px !important;\n}\n\nion-tab-bar {\n  --color-selected: #eb154b\n  !important;\n}\n\nion-label {\n  --color-selected: #eb154b !important;\n}\n\nion-tabs {\n  --border-radius: 50%;\n  background: #ffffff;\n}\n\nion-tab-bar {\n  --background: #0c0c0c;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);\n  bottom: 15px;\n  position: relative;\n  border-radius: 18px;\n  width: 92%;\n  border-top: none;\n  margin: 0 auto;\n  height: 55px;\n}\n\nion-tab-button {\n  --color: #d4d4d4;\n  --color-selected: #eb154b;\n  --padding-bottom: 8px;\n  --padding-top: 8px;\n}\n\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\n\nion-tab-button.tab-selected::before {\n  background-color: #eb154b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJO1lBQUE7QUFHSjs7QUFDQTtFQUNJLG9DQUFBO0FBRUo7O0FBQ0E7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBSTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFFTjs7QUFDSTtFQUNFLHlCQUFBO0FBQ04iLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcbn1cbmlvbi10YWItYmFye1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICNlYjE1NGJcblxuICAgICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWx7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogI2ViMTU0YiAhaW1wb3J0YW50O1xufVxuXG5pb24tdGFic3tcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG5pb24tdGFiLWJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMGMwYzBjO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogNTVweDtcbiAgfVxuICBcbiAgaW9uLXRhYi1idXR0b24ge1xuICAgIC0tY29sb3I6ICNkNGQ0ZDQ7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogI2ViMTU0YjtcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgfVxuICBcbiAgICAmLnRhYi1zZWxlY3RlZDo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjE1NGI7XG4gICAgfVxuICB9XG4gIFxuXG4gICJdfQ== */";
      /***/
    },

    /***/
    97665:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-tabs >\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M21.5438 10.8234L12.1673 0.900617L11.5388 0.235159C11.3956 0.0845357 11.2019 0 11 0C10.7982 0 10.6045 0.0845357 10.4613 0.235159L0.456308 10.8234C0.309572 10.9781 0.193604 11.1625 0.11525 11.3655C0.036895 11.5685 -0.0022583 11.786 0.000100583 12.0053C0.00980713 12.9097 0.720812 13.6317 1.57499 13.6317H2.60631V22H19.3938V13.6317H20.4469C20.8619 13.6317 21.2526 13.4595 21.5462 13.1486C21.6908 12.9961 21.8053 12.8146 21.8832 12.6148C21.9611 12.415 22.0008 12.2009 22 11.9847C22 11.5479 21.8374 11.1343 21.5438 10.8234V10.8234ZM12.359 20.1501H9.64113V14.9086H12.359V20.1501ZM17.6466 11.7818V20.1501H13.912V14.292C13.912 13.7242 13.4776 13.2643 12.9414 13.2643H9.05873C8.52245 13.2643 8.08808 13.7242 8.08808 14.292V20.1501H4.35349V11.7818H2.02392L11.0025 2.28292L11.563 2.87644L19.9786 11.7818H17.6466Z\" fill=\"#E0DADA\"/>\n        </svg>\n               \n      <ion-label  >Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <svg width=\"25\" height=\"23\" viewBox=\"0 0 25 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23.0058 6.00409C22.8742 6.00485 22.7437 5.97963 22.6219 5.92986C22.5001 5.8801 22.3892 5.80677 22.2958 5.71409L18.2958 1.71409C18.1075 1.52579 18.0017 1.27039 18.0017 1.00409C18.0017 0.73779 18.1075 0.482395 18.2958 0.294092C18.4841 0.105788 18.7395 0 19.0058 0C19.2721 0 19.5275 0.105788 19.7158 0.294092L23.7158 4.29409C23.8095 4.38705 23.8839 4.49766 23.9347 4.61951C23.9855 4.74137 24.0116 4.87208 24.0116 5.00409C24.0116 5.1361 23.9855 5.26681 23.9347 5.38867C23.8839 5.51053 23.8095 5.62113 23.7158 5.71409C23.6224 5.80677 23.5115 5.8801 23.3897 5.92986C23.2679 5.97963 23.1374 6.00485 23.0058 6.00409ZM1.7158 5.71409L5.7158 1.71409C5.9041 1.52579 6.00989 1.27039 6.00989 1.00409C6.00989 0.73779 5.9041 0.482395 5.7158 0.294092C5.52749 0.105788 5.2721 0 5.0058 0C4.7395 0 4.4841 0.105788 4.2958 0.294092L0.295798 4.29409C0.20207 4.38705 0.127676 4.49766 0.0769072 4.61951C0.0261385 4.74137 0 4.87208 0 5.00409C0 5.1361 0.0261385 5.26681 0.0769072 5.38867C0.127676 5.51053 0.20207 5.62113 0.295798 5.71409C0.388761 5.80782 0.499362 5.88221 0.621222 5.93298C0.743081 5.98375 0.873786 6.00989 1.0058 6.00989C1.13781 6.00989 1.26852 5.98375 1.39038 5.93298C1.51223 5.88221 1.62284 5.80782 1.7158 5.71409ZM12.0058 13.0041C11.808 13.0041 11.6147 13.0627 11.4502 13.1726C11.2858 13.2825 11.1576 13.4387 11.0819 13.6214C11.0062 13.8041 10.9864 14.0052 11.025 14.1992C11.0636 14.3932 11.1588 14.5713 11.2987 14.7112C11.4385 14.8511 11.6167 14.9463 11.8107 14.9849C12.0047 15.0235 12.2058 15.0037 12.3885 14.928C12.5712 14.8523 12.7274 14.7241 12.8373 14.5597C12.9472 14.3952 13.0058 14.2019 13.0058 14.0041C13.0058 13.7389 12.9004 13.4845 12.7129 13.297C12.5254 13.1094 12.271 13.0041 12.0058 13.0041ZM22.0058 12.0041C22.0058 13.9819 21.4193 15.9153 20.3205 17.5598C19.2217 19.2043 17.6599 20.486 15.8326 21.2429C14.0054 21.9998 11.9947 22.1978 10.0549 21.8119C8.11509 21.4261 6.33326 20.4737 4.93473 19.0752C3.53621 17.6766 2.5838 15.8948 2.19795 13.955C1.81209 12.0152 2.01013 10.0045 2.767 8.17726C3.52388 6.35 4.8056 4.78821 6.4501 3.6894C8.09459 2.59058 10.028 2.00409 12.0058 2.00409C14.658 2.00409 17.2015 3.05766 19.0769 4.93302C20.9522 6.80839 22.0058 9.35193 22.0058 12.0041ZM15.0058 14.0041C15.0041 13.3851 14.8109 12.7819 14.4529 12.277C14.0948 11.7722 13.5893 11.3904 13.0058 11.1841V7.00409C13.0058 6.73888 12.9004 6.48452 12.7129 6.29699C12.5254 6.10945 12.271 6.00409 12.0058 6.00409C11.7406 6.00409 11.4862 6.10945 11.2987 6.29699C11.1112 6.48452 11.0058 6.73888 11.0058 7.00409V11.1841C10.4869 11.3675 10.0285 11.6902 9.68072 12.1167C9.33294 12.5433 9.10919 13.0573 9.03397 13.6025C8.95874 14.1476 9.03494 14.703 9.25421 15.2078C9.47349 15.7126 9.8274 16.1473 10.2772 16.4644C10.727 16.7816 11.2554 16.9688 11.8045 17.0058C12.3536 17.0427 12.9023 16.9279 13.3905 16.6738C13.8787 16.4198 14.2877 16.0364 14.5726 15.5655C14.8575 15.0946 15.0073 14.5544 15.0058 14.0041Z\" fill=\"#E0DADA\"/>\n        </svg>\n      <ion-label>Set alarm</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8V8ZM13 8C13 8.53043 12.7893 9.03914 12.4142 9.41421C12.0391 9.78929 11.5304 10 11 10C10.4696 10 9.96086 9.78929 9.58579 9.41421C9.21071 9.03914 9 8.53043 9 8C9 7.46957 9.21071 6.96086 9.58579 6.58579C9.96086 6.21071 10.4696 6 11 6C11.5304 6 12.0391 6.21071 12.4142 6.58579C12.7893 6.96086 13 7.46957 13 8V8Z\" fill=\"#E0DADA\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM2 11C2 13.09 2.713 15.014 3.908 16.542C4.74723 15.4399 5.8299 14.5467 7.07143 13.9323C8.31297 13.3179 9.67974 12.9988 11.065 13C12.4323 12.9987 13.7819 13.3095 15.0109 13.9088C16.2399 14.508 17.316 15.3799 18.157 16.458C19.0234 15.3216 19.6068 13.9952 19.8589 12.5886C20.111 11.182 20.0244 9.73553 19.6065 8.36898C19.1886 7.00243 18.4512 5.75505 17.4555 4.73004C16.4598 3.70503 15.2343 2.93186 13.8804 2.47451C12.5265 2.01716 11.0832 1.88877 9.66986 2.09997C8.25652 2.31117 6.91379 2.85589 5.75277 3.68905C4.59175 4.52222 3.64581 5.61987 2.99323 6.8912C2.34065 8.16252 2.00018 9.57097 2 11V11ZM11 20C8.93395 20.0031 6.93027 19.2923 5.328 17.988C5.97293 17.0647 6.83134 16.3109 7.83019 15.7907C8.82905 15.2705 9.93879 14.9992 11.065 15C12.1772 14.9991 13.2735 15.2636 14.2629 15.7714C15.2524 16.2793 16.1064 17.0159 16.754 17.92C15.1393 19.2667 13.1026 20.0029 11 20V20Z\" fill=\"#E0DADA\"/>\n        </svg>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n    \n  </ion-tab-bar>\n</ion-tabs>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es5.js.map