(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs/tabs.module */
          15564)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'splash',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_splashscreen_splashscreen_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./splashscreen/splashscreen.module */
          85481)).then(function (m) {
            return m.SplashscreenPageModule;
          });
        }
      }, {
        path: 'signinpage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs"), __webpack_require__.e("default-src_app_signin_signin_page_ts"), __webpack_require__.e("src_app_shared_http_service_ts-src_app_signin_signin_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./signin/signin.module */
          87445)).then(function (m) {
            return m.SigninPageModule;
          });
        }
      }, {
        path: 'signuppage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("default-src_app_signup_signup_page_ts"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./signup/signup.module */
          77648)).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'welcome',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs"), __webpack_require__.e("default-src_app_signup_signup_page_ts"), __webpack_require__.e("default-src_app_signin_signin_page_ts"), __webpack_require__.e("src_app_welcome_welcome_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./welcome/welcome.module */
          32526)).then(function (m) {
            return m.WelcomePageModule;
          });
        }
      }, {
        path: 'selectcategories',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_selectcategories_selectcategories_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./selectcategories/selectcategories.module */
          88853)).then(function (m) {
            return m.SelectcategoriesPageModule;
          });
        }
      }, {
        path: 'support',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs"), __webpack_require__.e("src_app_support_support_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./support/support.module */
          96758)).then(function (m) {
            return m.SupportPageModule;
          });
        }
      }, {
        path: 'setalarm',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_setalarm_setalarm_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./setalarm/setalarm.module */
          98191)).then(function (m) {
            return m.SetalarmPageModule;
          });
        }
      }, {
        path: 'searchpage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_searchpage_searchpage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./searchpage/searchpage.module */
          31895)).then(function (m) {
            return m.SearchpagePageModule;
          });
        }
      }, {
        path: 'notification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./notification/notification.module */
          22154)).then(function (m) {
            return m.NotificationPageModule;
          });
        }
      }, {
        path: 'myalarms',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("default-node_modules_angular_animations_fesm2020_animations_mjs"), __webpack_require__.e("src_app_myalarms_myalarms_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./myalarms/myalarms.module */
          51881)).then(function (m) {
            return m.MyalarmsPageModule;
          });
        }
      }, {
        path: 'change-category',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_change-category_change-category_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./change-category/change-category.module */
          34424)).then(function (m) {
            return m.ChangeCategoryPageModule;
          });
        }
      }, {
        path: 'faq',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faq/faq.module */
          5083)).then(function (m) {
            return m.FaqPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895); // import { LocalNotifications, LocalNotificationSchema } from '@capacitor/local-notifications';


      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, route) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.route = route;
          this.notificationsDelayInSeconds = "2";
          this.appPages = [{
            title: 'Home',
            url: '/tabs/tab1',
            icon: 'assets/icon/home.PNG'
          }, {
            title: 'Set Alarm',
            url: '/setalarm',
            icon: 'assets/icon/setalarm.png'
          }, {
            title: 'My Alarms',
            url: '/myalarms',
            icon: 'assets/icon/myalarms.png'
          }, {
            title: 'My Profile',
            url: '/tabs/tab3',
            icon: 'assets/icon/myprofile.png'
          }, {
            title: 'Support',
            url: '/support',
            icon: 'assets/icon/support.png'
          } // { title: 'Log out', url: '/signinpage', icon:'assets/icon/logout.png' },
          ];
          this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
          route.params.subscribe(function (val) {});
        }

        _createClass(AppComponent, [{
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigate(['/signinpage']);
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot({
          swipeBackEnabled: false
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        baseUrl: 'https://dhya.in/24Hrs/api' // firebaseConfig : {
        //   apiKey: "AIzaSyAod1HC8Uhiw-1A-tIqK-QP4sUwBwDF0BM",
        //   authDomain: "429707768959-dtsdjegmqfpgt0fhfosoq8at5ielt33a.apps.googleusercontent.com",
        //   databaseURL: "***********************",
        //   projectId: "hrs-b4daa",
        //   storageBucket: "hrs-b4daa.appspot.com",
        //   messagingSenderId: "**********",
        //   appId: "1:429707768959:android:ccddb9e48302aaeea7bb4a"
        //   }

      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --background: linear-gradient(135deg, #71b7e6, #9b59b6) !important;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #11f1bd;\n  border-bottom: 1px solid var(--ion-color-step-150, #11f1bd);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: #11f1bd !important;\n  color: var(--ion-color-medium-shade);\n}\n\nion-list {\n  background: #fff !important;\n  height: 100vh !important;\n  width: 100vw !important;\n}\n\nion-item.selected ion-label {\n  color: #EB154B !important;\n  font-size: 18px;\n  font-weight: 900;\n}\n\nion-item.selected .icon {\n  background-color: #fff !important;\n  border-radius: 70% !important;\n}\n\nion-menu-button {\n  color: #fff !important;\n}\n\nion-item {\n  --background: transparent !important;\n  margin: 10px !important;\n}\n\nion-label {\n  margin: 8px !important;\n  color: #37373a !important;\n}\n\nion-icon {\n  color: #ffff !important;\n}\n\nion-item {\n  --border-color: #fff;\n}\n\n.icon {\n  background-color: transparent;\n  border: none !important;\n  box-shadow: none !important;\n  height: 100vh;\n  width: 100vw;\n}\n\n.dot {\n  text-align: center;\n  margin-top: 0 !important;\n  margin-left: 20% !important;\n  background-color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n  box-shadow: 3px -2px 11px 3px #ccc;\n}\n\nion-content {\n  background: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJFQUFBO0VBQ0Esa0VBQUE7QUFDSjs7QUFFRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFOztFQUVFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQ0FBQTtFQUFBLDJEQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNRTtFQUNFLHNEQUFBO0FBSEo7O0FBTUU7RUFDRSwrQkFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtBQUhKOztBQU1FO0VBQ0UsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLHNCQUFBO0FBSEo7O0FBTUU7RUFDRSxtQkFBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1FO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSwrQkFBQTtBQUhKOztBQU1FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0FBSEo7O0FBTUU7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7QUFISjs7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFISjs7QUFLRTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUZKOztBQU9JO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKTjs7QUFPSTtFQUNDLGlDQUFBO0VBQ0EsNkJBQUE7QUFMTDs7QUFRRTtFQUNFLHNCQUFBO0FBTEo7O0FBT0U7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0FBSko7O0FBTUU7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FBSEo7O0FBTUU7RUFDRSx1QkFBQTtBQUhKOztBQUtFO0VBQ0Usb0JBQUE7QUFGSjs7QUFTRTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQU5KOztBQVNFO0VBQ0UsMkJBQUE7RUFJQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVRKOztBQVVJO0VBQ0ksYUFBQTtBQVJSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzFiN2U2LCAjOWI1OWI2KSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgIzExZjFiZCk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgXG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIFxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIFxuICAgIGNvbG9yOiAjNzU3NTc1O1xuICBcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICAgIGNvbG9yOiAjNjE2ZTdlO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjNzM4NDlhO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICBpb24tbm90ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjojMTFmMWJkICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICB9XG4gIGlvbi1saXN0e1xuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6MTAwdmggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYWJjZjcsICMxMWYxYmQpICFpbXBvcnRhbnQ7XG4gICAgaW9uLWxhYmVse1xuICAgICAgY29sb3I6ICNFQjE1NEIgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgIFxuICAgIH1cbiAgICAuaWNvbntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICBib3JkZXItcmFkaXVzOiA3MCUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgaW9uLW1lbnUtYnV0dG9ue1xuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgfVxuICBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWxhYmVse1xuICAgIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IzM3MzczYSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpb24taWNvbntcbiAgICBjb2xvcjogI2ZmZmYgIWltcG9ydGFudDtcbiAgfVxuICBpb24taXRlbXtcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gaW9uLXNwbGl0LXBhbmUge1xuICAvLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3MWI3ZTYsICM5YjU5YjYpICFpbXBvcnRhbnQ7XG4gIC8vIH1cbiAgXG4gIC5pY29ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuICBcbiAgLmRvdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMjAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaGFkb3c6IDNweCAtMnB4IDExcHggM3B4I2NjYztcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu swipeGesture=\"false\"  contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n        \n          <div class=\"row\">\n            <div class=\"col-12 mt-3\">\n              <ion-menu-toggle auto-hide=\"false\">              <svg  style=\"margin-left: 5%;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"20\" fill=\"#121212\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\">\n                <path fill-rule=\"evenodd\" d=\"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z\"/>\n                <path fill-rule=\"evenodd\" d=\"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z\"/>\n              </svg>\n            </ion-menu-toggle>\n\n            </div>\n            <div class=\"col-12  mb-4 \">\n              <span   class=\"dot ion-text-center\">\n                <img  height=\"100px\" style=\"margin: 5px;\" width=\"105\" src=\"assets/logo.jpeg\" alt=\"\">\n              </span>  \n            </div>\n          </div>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item  routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <img  class=\"mb-3\" style=\"height:45px;width:50px;color:#fff;margin:5px\" [src]=\"p.icon\" alt=\"\">\n              <ion-label class=\"mb-2\">{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle auto-hide=\"false\" >\n            <ion-item (click)=\"logout()\" >\n              <img  style=\"height:45px;width:50px;color:#fff;margin:5px\" src=\"assets/icon/logout.png\" alt=\"\">\n              <ion-label>Logout</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n      \n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map