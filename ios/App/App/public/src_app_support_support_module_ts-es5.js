(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_support_support_module_ts"], {
    /***/
    10185:
    /*!***************************************************!*\
      !*** ./src/app/support/support-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportPageRoutingModule": function SupportPageRoutingModule() {
          return (
            /* binding */
            _SupportPageRoutingModule
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


      var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./support.page */
      35028);

      var routes = [{
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
      }];

      var _SupportPageRoutingModule = function SupportPageRoutingModule() {
        _classCallCheck(this, SupportPageRoutingModule);
      };

      _SupportPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SupportPageRoutingModule);
      /***/
    },

    /***/
    96758:
    /*!*******************************************!*\
      !*** ./src/app/support/support.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportPageModule": function SupportPageModule() {
          return (
            /* binding */
            _SupportPageModule
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


      var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./support-routing.module */
      10185);
      /* harmony import */


      var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./support.page */
      35028);

      var _SupportPageModule = function SupportPageModule() {
        _classCallCheck(this, SupportPageModule);
      };

      _SupportPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage]
      })], _SupportPageModule);
      /***/
    },

    /***/
    35028:
    /*!*****************************************!*\
      !*** ./src/app/support/support.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupportPage": function SupportPage() {
          return (
            /* binding */
            _SupportPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./support.page.html */
      65455);
      /* harmony import */


      var _support_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./support.page.scss */
      95524);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/animations */
      55160);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

      var _SupportPage = /*#__PURE__*/function () {
        function SupportPage(http, router, route) {
          _classCallCheck(this, SupportPage);

          this.http = http;
          this.router = router;
          this.route = route;
          this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
          this.problemDescription = '';
        }

        _createClass(SupportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "backToPrivious",
          value: function backToPrivious() {
            this.router.navigate(['/homepage']);
          }
        }, {
          key: "searchPage",
          value: function searchPage() {
            this.router.navigate(['/searchpage']);
          }
        }, {
          key: "setalarm",
          value: function setalarm() {
            this.router.navigate(['/setalarm']);
          }
        }, {
          key: "notification",
          value: function notification() {
            this.router.navigate(['/notification']);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            var Data = {
              tbid: this.userdetails.id,
              description: this.problemDescription
            };
            this.http.post('/user_description', Data).subscribe(function (response) {
              if (response.success == "true") {
                _this.problemDescription = '';
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
                  title: 'Message Send Successfully'
                });
              } else {}
            }, function (error) {
              console.log(error);
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
            });
          }
        }, {
          key: "navigateToFaq",
          value: function navigateToFaq() {
            this.router.navigate(['/faq']);
          }
        }]);

        return SupportPage;
      }();

      _SupportPage.ctorParameters = function () {
        return [{
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _SupportPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-support',
        template: _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadein', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slidelefttitle', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0,
          transform: 'translateX(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('500ms 200ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translateX(0%)',
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideup', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0,
          transform: 'translateY(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('500ms 200ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translateY(0%)',
          opacity: 1
        }))])])],
        styles: [_support_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SupportPage);
      /***/
    },

    /***/
    95524:
    /*!*******************************************!*\
      !*** ./src/app/support/support.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".submit-btn {\n  border-radius: 5px !important;\n  text-align: center !important;\n  background: linear-gradient(to left, #535252 0%, #0D0D0D 100%);\n  border: 1px solid #fff;\n  margin: 5px;\n}\n\n.signin-div {\n  background: rgba(105, 95, 95, 0.18);\n}\n\nimg {\n  border-radius: 50%;\n  height: 85px;\n  width: 105px;\n  box-shadow: 1px 2px 17px 1px #312D3A !important;\n}\n\ntextarea:focus {\n  border: 2px solid #0D0D0D !important;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkJBQUE7RUFDRiw2QkFBQTtFQUNBLDhEQUFBO0VBR0Usc0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxtQ0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FBRko7O0FBSUE7RUFDSSxvQ0FBQTtBQURKOztBQUlBO0VBQ0ksaUNBQUE7RUFLQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUxKOztBQU1JO0VBQ0ksYUFBQTtBQUpSIiwiZmlsZSI6InN1cHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3VibWl0LWJ0bntcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNTM1MjUyXG4gIDAlLCAjMEQwRDBEXG4gIDEwMCUpO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBtYXJnaW46NXB4O1xufVxuXG4uc2lnbmluLWRpdntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgOTUsIDk1LCAwLjE4KTtcbn1cblxuaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6ODVweDtcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxN3B4IDFweCAjMzEyRDNBICFpbXBvcnRhbnQ7XG59XG50ZXh0YXJlYTpmb2N1c3tcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMEQwRDBEICFpbXBvcnRhbnRcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4Y2RiZTJcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9Il19 */";
      /***/
    },

    /***/
    65455:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/support.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!------------ Header  ---------------->\n<ion-toolbar color=\"light\" >\n  <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n        <svg  width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n          </svg>\n      </ion-menu-button>\n  </ion-buttons>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\n    </div>\n    <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\n        <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\" fill=\"black\"/>\n          <path d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\" fill=\"black\"/>\n          <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\"/>\n          </svg>\n          \n      <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n    </div>\n  </div>\n</ion-toolbar>\n\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n  <div class=\"container\">\n    <div style=\"margin-top: 5% !important\" class=\"signin-div  \">\n      <div  class=\"row\">\n        <div class=\"col-6 \">\n          <h4 style=\"margin:10px; color:#5C5C5C\"><b>Support</b></h4>\n        </div>\n        <div (click)=\"navigateToFaq()\" class=\"col-6\">\n          <h5 style=\"margin:10px; color:#EB154B;text-align: right;\"><b>FAQ</b></h5>\n        </div>\n\n      </div>\n\n      <div class=\"col-12 ion-text-center\">\n        <lottie-player src=\"https://assets4.lottiefiles.com/private_files/lf30_wc0lfj5g.json\" background=\"transparent\"\n        speed=\"1.5\" style=\"width:50%;margin:25%;margin-top: 5px !important;margin-bottom: 4px !important;\"  autoplay></lottie-player>\n        <!-- <img  src=\"assets/icon/s.png\" alt=\"\">     -->\n      </div>\n\n      <div  class=\"row mt-2\">\n        <div class=\"col-6\" >\n          <p class=\"name\" style=\"margin:0 12px;font-size: smaller;\">Email us at           :</p>\n        </div>\n        <div class=\"col-6\">\n          <p style=\"font-size: 12px;color:#5C5C5C;margin-left: -40px;\">support@24hours.com</p></div>\n  \n          <div class=\"col-6\">\n            <p  class=\"name\" style=\"margin:0 12px;font-size: smaller;\">Call us at              :</p>\n          </div>\n          <div class=\"col-6\">\n          <p style=\"font-size: 12px; color:#5C5C5C;margin-left: -40px;\">+91 9876543210</p>\n        </div>\n      </div>\n      <hr style=\"width: 75%;margin-left:10%;color:rgb(12, 12, 12)\">\n      <p  style=\"color: crimson; font-size: smaller;padding:0 20px;\"><b>Usually we respond in 60 minutes. </b></p>\n\n        <div class=\"form-group\" >\n          <label  style=\"margin-left: 5px;\" for=\"exampleFormControlTextarea1\">Problem Description  :</label>\n          <textarea [(ngModel)]=\"problemDescription\" style=\"background-color: transparent;border: 1px solid rgb(158, 150, 150);\" class=\"form-control\" id=\"exampleFormControlTextarea1\" maxlength=\"100\" rows=\"3\"></textarea>\n        </div>\n\n        <div  style=\"width:100%; text-align: center;\">\n          <button  type=\"button\" [disabled]=\"!problemDescription\"[disabled]=\"!problemDescription\" (click)=\"submit()\" class=\"btn btn-primary  submit-btn mt-2\"><b>Submit</b></button>\n         </div>\n    </div>\n    </div>\n   \n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_support_support_module_ts-es5.js.map