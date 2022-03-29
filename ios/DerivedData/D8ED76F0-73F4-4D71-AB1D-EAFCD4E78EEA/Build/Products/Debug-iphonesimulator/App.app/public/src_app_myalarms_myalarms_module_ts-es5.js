(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_myalarms_myalarms_module_ts"], {
    /***/
    5858:
    /*!*****************************************************!*\
      !*** ./src/app/myalarms/myalarms-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyalarmsPageRoutingModule": function MyalarmsPageRoutingModule() {
          return (
            /* binding */
            _MyalarmsPageRoutingModule
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


      var _myalarms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myalarms.page */
      53373);

      var routes = [{
        path: '',
        component: _myalarms_page__WEBPACK_IMPORTED_MODULE_0__.MyalarmsPage
      }];

      var _MyalarmsPageRoutingModule = function MyalarmsPageRoutingModule() {
        _classCallCheck(this, MyalarmsPageRoutingModule);
      };

      _MyalarmsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MyalarmsPageRoutingModule);
      /***/
    },

    /***/
    51881:
    /*!*********************************************!*\
      !*** ./src/app/myalarms/myalarms.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyalarmsPageModule": function MyalarmsPageModule() {
          return (
            /* binding */
            _MyalarmsPageModule
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


      var _myalarms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myalarms-routing.module */
      5858);
      /* harmony import */


      var _myalarms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myalarms.page */
      53373);

      var _MyalarmsPageModule = function MyalarmsPageModule() {
        _classCallCheck(this, MyalarmsPageModule);
      };

      _MyalarmsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _myalarms_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyalarmsPageRoutingModule],
        declarations: [_myalarms_page__WEBPACK_IMPORTED_MODULE_1__.MyalarmsPage]
      })], _MyalarmsPageModule);
      /***/
    },

    /***/
    53373:
    /*!*******************************************!*\
      !*** ./src/app/myalarms/myalarms.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyalarmsPage": function MyalarmsPage() {
          return (
            /* binding */
            _MyalarmsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_myalarms_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./myalarms.page.html */
      14286);
      /* harmony import */


      var _myalarms_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myalarms.page.scss */
      15349);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      55160);

      var _MyalarmsPage = /*#__PURE__*/function () {
        function MyalarmsPage(router, http, toastCtrl, route, alertController) {
          var _this = this;

          _classCallCheck(this, MyalarmsPage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.alertController = alertController;
          this.isVisible = false;
          this.storeAlarmList = [];
          this.productAlarmList = [];
          this.storeAlram = false;
          this.noDataFound = true;
          route.params.subscribe(function (val) {
            // this.getAlarmList()
            _this.getStoreAlarmList();

            _this.getproductAlarmList();
          });
        }

        _createClass(MyalarmsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //-------------- Navigate to searchpage ----------//

        }, {
          key: "searchPage",
          value: function searchPage() {
            this.router.navigate(['/searchpage']);
          } //-------------- Navigate to notificationpage  ----------//

        }, {
          key: "notification",
          value: function notification() {
            this.router.navigate(['/notification']);
          } //-------------- Navigate to setalarmpage  ----------//

        }, {
          key: "newAlarm",
          value: function newAlarm() {
            this.router.navigate(['/setalarm']);
          } //-------------- Get alarm List Api func  ----------//

        }, {
          key: "getAlarmList",
          value: function getAlarmList() {
            this.http.get('/list_all_alarm').subscribe(function (response) {}, function (error) {
              console.log(error);
            });
          } //---------- Delete storeAlarm ------------//

        }, {
          key: "deleteStoreAlarm",
          value: function deleteStoreAlarm(value) {
            this.storeAlram = true;
            this.tbid = value;
            this.presentAlertConfirm();
          } //---------- Delete productAlarm ------------//

        }, {
          key: "deleteProductAlarm",
          value: function deleteProductAlarm(value) {
            this.storeAlram = false;
            this.tbid = value;
            this.presentAlertConfirm();
          } //------------- Alart confirmation popup -----------//

        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'buttonCss ',
                        header: 'Are you sure want to delete?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'alert-danger',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: No');
                          }
                        }, {
                          text: 'Yes',
                          cssClass: 'buttonCss',
                          handler: function handler() {
                            console.log('Confirm Okay');
                            var obj = {
                              tbid: _this2.tbid
                            };
                            console.log(obj);

                            if (_this2.storeAlram == true) {
                              _this2.http.post('/delete_store_alarm', obj).subscribe(function (response) {
                                console.log(response);

                                if (response.success == "true") {
                                  var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 1000,
                                    timerProgressBar: true,
                                    didOpen: function didOpen(toast) {
                                      toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                                      toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                                    }
                                  });
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Alarm Deleted successfully'
                                  });
                                  _this2.storeAlarmList = [];

                                  _this2.getStoreAlarmList();
                                }
                              }, function (error) {
                                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                  toast: true,
                                  position: 'top-end',
                                  showConfirmButton: false,
                                  timer: 1000,
                                  timerProgressBar: true,
                                  didOpen: function didOpen(toast) {
                                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                                  }
                                });
                                Toast.fire({
                                  icon: 'error',
                                  title: 'Something Went Wrong'
                                });
                                console.log(error);
                              });
                            } else {
                              _this2.http.post('/delete_alarm_product', obj).subscribe(function (response) {
                                console.log(response);

                                if (response.success == "true") {
                                  var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 1000,
                                    timerProgressBar: true,
                                    didOpen: function didOpen(toast) {
                                      toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                                      toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                                    }
                                  });
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Alarm Deleted successfully'
                                  });
                                  _this2.productAlarmList = [];

                                  _this2.getproductAlarmList();
                                }
                              }, function (error) {
                                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                                  toast: true,
                                  position: 'top-end',
                                  showConfirmButton: false,
                                  timer: 1000,
                                  timerProgressBar: true,
                                  didOpen: function didOpen(toast) {
                                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                                  }
                                });
                                Toast.fire({
                                  icon: 'error',
                                  title: 'Something Went Wrong'
                                });
                                console.log(error);
                              });
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //------------- Get StoreAlarmList -----------//

        }, {
          key: "getStoreAlarmList",
          value: function getStoreAlarmList() {
            var _this3 = this;

            this.http.get('/store_read_alarm').subscribe(function (response) {
              _this3.storeAlarmList = response.records;
              _this3.noDataFound = false;
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          } //------------- Get ProductAlarmList -----------//

        }, {
          key: "getproductAlarmList",
          value: function getproductAlarmList() {
            var _this4 = this;

            this.http.get('/product_read_alarm').subscribe(function (response) {
              _this4.productAlarmList = response.records;
              console.log(response);
              _this4.noDataFound = false;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return MyalarmsPage;
      }();

      _MyalarmsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }];
      };

      _MyalarmsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-myalarms',
        template: _raw_loader_myalarms_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        //------------- Animations ----------//
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadein', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slidelefttitle', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0,
          transform: 'translateX(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          transform: 'translateX(0%)',
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideup', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0,
          transform: 'translateY(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          transform: 'translateY(0%)',
          opacity: 1
        }))])])],
        styles: [_myalarms_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyalarmsPage);
      /***/
    },

    /***/
    15349:
    /*!*********************************************!*\
      !*** ./src/app/myalarms/myalarms.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  height: 50px;\n}\n\n.dot {\n  margin: 2px;\n  height: 27px;\n  width: 30px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.btn-set-new-alarm {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  width: 80%;\n  margin: 15px;\n  margin-left: -20px;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15YWxhcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRTtFQUNFLDhEQUFBO0VBR0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLG9DQUFBO0VBS0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFPSTtFQUNJLGFBQUE7QUFMUiIsImZpbGUiOiJteWFsYXJtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmRvdCB7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gICAgMCUsICMyM2Q1YWJcbiAgICAxMDAlKTtcbiAgICBjb2xvcjojZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuYnRuLXNldC1uZXctYWxhcm17XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgICAwJSwgIzIzZDVhYlxuICAgIDEwMCUpO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46MTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIH1cblxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y0RjdGQSAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4Y2RiZTJcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gIFxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    14286:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myalarms/myalarms.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!------------ Header  ---------------->\n<ion-header style=\"margin-top: -7px;\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-8\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg (click)=\"searchPage()\" style=\"margin:10px;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M14.2998 12.5863H13.3974L13.0775 12.2779C14.3299 10.8187 14.9685 8.93097 14.8587 7.01111C14.749 5.09124 13.8996 3.28856 12.489 1.98152C11.0785 0.674474 9.21659 -0.0352438 7.29394 0.00134777C5.3713 0.0379394 3.53754 0.817948 2.17778 2.17771C0.818015 3.53748 0.0379393 5.37125 0.00134789 7.2939C-0.0352436 9.21655 0.674402 11.0786 1.98144 12.4891C3.28848 13.8996 5.09129 14.7489 7.01115 14.8586C8.93101 14.9683 10.8187 14.33 12.2779 13.0775L12.5864 13.3974V14.2998L18.298 20L20 18.298L14.2998 12.5863ZM7.44594 12.5863C6.42926 12.5863 5.43548 12.2849 4.59014 11.72C3.7448 11.1552 3.08585 10.3523 2.69678 9.41302C2.30772 8.47373 2.20589 7.44016 2.40423 6.44301C2.60258 5.44586 3.09231 4.52992 3.81121 3.81102C4.53011 3.09211 5.44592 2.60259 6.44306 2.40424C7.44021 2.20589 8.47391 2.30765 9.4132 2.69672C10.3525 3.08579 11.1553 3.74468 11.7201 4.59002C12.285 5.43536 12.5864 6.42921 12.5864 7.44589C12.5873 8.1212 12.4551 8.79006 12.197 9.41414C11.939 10.0382 11.5604 10.6052 11.0829 11.0827C10.6054 11.5602 10.0381 11.9389 9.41404 12.1969C8.78996 12.4549 8.12124 12.5872 7.44594 12.5863Z\"\n            fill=\"white\" />\n        </svg>\n        <svg (click)=\"notification()\" style=\"margin:10px;\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h3>My Alarms:</h3>\n      </div>\n      <div class=\"col-6 ion-text-right\">\n        <button (click)=\"newAlarm()\" class=\"btn btn-sm btn-set-new-alarm\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-circle\"\n            viewBox=\"0 0 16 16\">\n            <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\" />\n            <path\n              d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\" />\n          </svg>\n          New Alarm</button>\n      </div>\n    </div>\n\n    <!---------- No data Gif ------------>\n    <div *ngIf=\"isVisible\">\n      <lottie-player src=\"https://assets9.lottiefiles.com/private_files/lf30_bn5winlb.json\" background=\"transparent\"\n        speed=\"1.5\" style=\"width:100%;margin-left:0px;\" loop autoplay></lottie-player>\n    </div>\n\n    <!-- <h4 @slidelefttitle>Store Alarms:</h4> -->\n    <!--------- store alarms ---------->\n    <div *ngFor=\"let alarm of storeAlarmList\" class=\" card mt-4\">\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\"  src=\"{{alarm.store_logo}}\" alt=\"\">\n          <span>{{alarm.store_name}}</span>\n        </div>\n        <div class=\"col-2 mt-2\">\n          <span style=\"margin-left: -5px;\" class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">\n              <svg (click)=\"deleteStoreAlarm(alarm.tbid)\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\" />\n                <path fill-rule=\"evenodd\"\n                  d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\" />\n              </svg>\n            </span></span>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- <h4 @slidelefttitle>Product Alarms:</h4> -->\n    <!------------ product alarms ------------>\n\n    <div *ngFor=\"let alarm of productAlarmList\" class=\" card mt-4\">\n      <div class=\"row\">\n        <div class=\"col-10\">\n          <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\" src=\"{{alarm.store_logo}}\" alt=\"\">\n          <span style=\"font-size: 14px;\">{{alarm.store_name}}/</span> <span style=\"font-size: 12px;\">\n            {{alarm.product}}</span>\n        </div>\n        <div class=\"col-2 mt-2\">\n          <span style=\"margin-left: -5px;\" class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">\n              <svg (click)=\"deleteProductAlarm(alarm.tbid)\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\">\n                <path\n                  d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\" />\n                <path fill-rule=\"evenodd\"\n                  d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\" />\n              </svg>\n            </span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-------------  No data found Gif ------------------->\n  <div *ngIf=\"noDataFound\">\n    <lottie-player src=\"https://assets2.lottiefiles.com/packages/lf20_qlwqp9xi.json\" background=\"transparent\"\n      speed=\"1.5\" style=\"width:100%;margin:3%; margin-top: 15%;\" loop autoplay></lottie-player>\n  </div>\n  \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_myalarms_myalarms_module_ts-es5.js.map