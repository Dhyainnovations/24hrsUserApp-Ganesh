(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_change-category_change-category_module_ts"], {
    /***/
    75907:
    /*!*******************************************************************!*\
      !*** ./src/app/change-category/change-category-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeCategoryPageRoutingModule": function ChangeCategoryPageRoutingModule() {
          return (
            /* binding */
            _ChangeCategoryPageRoutingModule
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


      var _change_category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-category.page */
      91902);

      var routes = [{
        path: '',
        component: _change_category_page__WEBPACK_IMPORTED_MODULE_0__.ChangeCategoryPage
      }];

      var _ChangeCategoryPageRoutingModule = function ChangeCategoryPageRoutingModule() {
        _classCallCheck(this, ChangeCategoryPageRoutingModule);
      };

      _ChangeCategoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChangeCategoryPageRoutingModule);
      /***/
    },

    /***/
    34424:
    /*!***********************************************************!*\
      !*** ./src/app/change-category/change-category.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeCategoryPageModule": function ChangeCategoryPageModule() {
          return (
            /* binding */
            _ChangeCategoryPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _change_category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-category-routing.module */
      75907);
      /* harmony import */


      var _change_category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-category.page */
      91902);

      var _ChangeCategoryPageModule = function ChangeCategoryPageModule() {
        _classCallCheck(this, ChangeCategoryPageModule);
      };

      _ChangeCategoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _change_category_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangeCategoryPageRoutingModule],
        declarations: [_change_category_page__WEBPACK_IMPORTED_MODULE_1__.ChangeCategoryPage]
      })], _ChangeCategoryPageModule);
      /***/
    },

    /***/
    91902:
    /*!*********************************************************!*\
      !*** ./src/app/change-category/change-category.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangeCategoryPage": function ChangeCategoryPage() {
          return (
            /* binding */
            _ChangeCategoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_change_category_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./change-category.page.html */
      45783);
      /* harmony import */


      var _change_category_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-category.page.scss */
      70141);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ChangeCategoryPage = /*#__PURE__*/function () {
        function ChangeCategoryPage(router, http, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, ChangeCategoryPage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
          this.getCategoryList = [];
          this.selectedCategoryList = [];
          this.alredySelectedCategoryList = [];
          this.buttonColor = '#000'; //Default Color

          route.params.subscribe(function (val) {
            _this.getCategory();

            _this.selectedCategories();

            console.log(_this.alredySelectedCategoryList);
          });
        }

        _createClass(ChangeCategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addEvent",
          value: function addEvent() {
            this.buttonColor = '#345465'; //desired Color

            /*
            YOUR FUNCTION CODE
            */
          }
        }, {
          key: "backToPrivious",
          value: function backToPrivious() {
            this.router.navigate(['/tabs/tab3']);
          }
        }, {
          key: "toggleClass",
          value: function toggleClass(item) {
            item.active = !item.active;
            this.selectedCategoryList.push(item.tbid); // console.log(item);

            console.log(this.selectedCategoryList);
          }
        }, {
          key: "verify",
          value: function verify() {
            var storeCategory = this.selectedCategoryList.toString();
            console.log(storeCategory);
            var Data = {
              tbid: this.userdetails.id,
              store_category: storeCategory
            };
            console.log(Data);
            this.http.post('/update_store_category', Data).subscribe(function (response) {}, function (error) {
              console.log(error);
            });
            this.router.navigate(['/tabs/tab3']);
          }
        }, {
          key: "getCategory",
          value: function getCategory() {
            var _this2 = this;

            console.log(this.selectedCategoryList);
            this.http.get('/list_category').subscribe(function (response) {
              _this2.getCategoryList = response.records;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "selectedCategories",
          value: function selectedCategories() {
            var _this3 = this;

            this.http.get('/store_category').subscribe(function (response) {
              console.log(response);
              _this3.alredySelectedCategoryList = response.records;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return ChangeCategoryPage;
      }();

      _ChangeCategoryPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _ChangeCategoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-change-category',
        template: _raw_loader_change_category_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_change_category_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ChangeCategoryPage);
      /***/
    },

    /***/
    28191:
    /*!****************************************!*\
      !*** ./src/app/shared/http.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpService": function HttpService() {
          return (
            /* binding */
            _HttpService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "get",
          value: function get(serviceName) {
            var userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders() // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails.token); //   let httpOptions = {
            //     headers: new HttpHeaders({
            //       "Access-Control-Allow-Origin": "*",
            //       "Access-Control-Allow-Methods": "*",
            //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            //       'Authorization':userdetails.token,
            //       "Content-Type": "application/json"
            //     })
            // };

            var options = {
              headers: header,
              withCredentials: true
            };
            return this.http.get(url, {
              headers: header
            });
          }
        }, {
          key: "post",
          value: function post(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;

            if (serviceName == '/user_get_otp' || serviceName == '/user_verify_otp' || serviceName == '/user_register' || serviceName == '/user_login') {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
              var options = {
                headers: headers,
                withCredentials: false
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: headers
              });
            } else {
              var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Token", token);

              var _options = {
                headers: _headers,
                withCredentials: true
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: _headers
              });
            }
          }
        }, {
          key: "postFormData",
          value: function postFormData(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = {
              'enctype': 'multipart/form-data;',
              'Content-Type': 'multipart/form-data;',
              'Accept': 'plain/text',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
              'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
              'Token': token
            }; // const headers = new HttpHeaders().set("Token", token );
            //  headers.set('Content-Type', 'multipart/form-data'); 

            var options = {
              headers: headers,
              withCredentials: true
            };
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }]);

        return HttpService;
      }();

      _HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _HttpService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _HttpService);
      /***/
    },

    /***/
    70141:
    /*!***********************************************************!*\
      !*** ./src/app/change-category/change-category.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\");\n.myproducts-btn {\n  margin: 15px;\n  border-radius: 5px !important;\n  text-align: center !important;\n  background: linear-gradient(to left, #535252 0%, #0D0D0D 100%);\n  border: 1px solid #fff;\n}\nion-list {\n  background-color: #ebf9f9 !important;\n}\nion-item {\n  background-color: #ebf9f9 !important;\n}\n.card {\n  background-color: #fff;\n  text-align: center;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n  margin: 5px;\n}\n.myproduct-div {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 25px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 0 0 3px #ccc;\n  border: 1px solid #fff;\n}\n#SelectedList {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-top-left-radius: 30px !important;\n  border-top-right-radius: 30px !important;\n  box-shadow: 4px 4px 4px 4px #fff;\n}\nion-chip {\n  box-shadow: 0px 5px 17px -7px black;\n  margin-bottom: 10px;\n}\nion-label {\n  font-size: 18px;\n}\nion-chip.active {\n  color: #fff !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEVBQUE7QUFDTjtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNGLDZCQUFBO0VBQ0EsOERBQUE7RUFHRSxzQkFBQTtBQURKO0FBR0U7RUFDRSxvQ0FBQTtBQUFKO0FBRUU7RUFDRSxvQ0FBQTtBQUNKO0FBQ0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUU7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUdBLHdCQUFBO0VBQ0Esc0JBQUE7QUFHSjtBQUFFO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0Esd0NBQUE7RUFHQSxnQ0FBQTtBQUdKO0FBQUU7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0FBR0o7QUFERTtFQUNJLGVBQUE7QUFJTjtBQUZFO0VBQ0Usc0JBQUE7RUFDQSwrREFBQTtBQUtKO0FBQ0U7RUFDRSxpQ0FBQTtFQUlBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREo7QUFFSTtFQUNJLGFBQUE7QUFBUiIsImZpbGUiOiJjaGFuZ2UtY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCcpO1xuICAubXlwcm9kdWN0cy1idG57XG4gICAgbWFyZ2luOjE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzUzNTI1MlxuICAwJSwgIzBEMEQwRFxuICAxMDAlKTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gIH1cbiAgaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjlmOSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pdGVte1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmY5ZjkgIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDRweCAjY2NjO1xuICAgIG1hcmdpbjo1cHg7XG4gIH1cbiAgLm15cHJvZHVjdC1kaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggI2NjYztcbiAgICB3aWR0aDo5NiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46NXB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgXG4gIH1cbiAgI1NlbGVjdGVkTGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggI2ZmZjtcbiAgIFxuICB9XG4gIGlvbi1jaGlwe1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtN3B4IHJnYmEoMCwgMCwgMCwgNS41KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIGlvbi1sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBpb24tY2hpcC5hY3RpdmV7IFxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTU1YzU5XG4gICAgMCUsICMxZDFmMWVcbiAgICAxMDAlKTtcbiAgfVxuXG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICJdfQ== */";
      /***/
    },

    /***/
    45783:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-category/change-category.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n  <div class=\" mt-5\">\n   <div class=\"container mx-3\">\n    <ion-icon style=\"font-size:20px\" color=\"danger\" (click)=\"backToPrivious()\" name=\"arrow-back-outline\"></ion-icon>\n   </div>\n    <p class=\"mt-3 mx-4\" style=\"color:#5C5C5C;font-size: 24px;margin:15px;\">Select preferred categories:</p>\n    <div class=\"container mt-4\">\n      \n      <ion-chip  (click)=\"toggleClass(item)\" [ngClass]=\"{'active': item.active}\" *ngFor=\"let item of getCategoryList\" style=\"color:#EB154B;background-color: #fffcfa;\">\n        <ion-label >{{ item.category }}</ion-label>\n        <!-- <ion-icon  style=\"color:#121212\" name=\"checkmark-circle-sharp\"></ion-icon> -->\n      </ion-chip>\n    </div>\n\n    <div class=\"col-12 mt-2\" style=\"text-align: right;\">\n      <button (click)=\"verify()\" class=\"btn btn-success btn-sm  myproducts-btn mt-1\">Submit</button>\n    </div>\n\n    <!-- <lottie-player (click)=\"getPicture()\" src=\"https://assets1.lottiefiles.com/packages/lf20_rsqhglyn.json\" background=\"transparent\"\n    speed=\"1.5\" style=\"width:100%;margin-left:0px;\" loop autoplay></lottie-player> -->\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_change-category_change-category_module_ts-es5.js.map