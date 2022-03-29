(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_setalarm_setalarm_module_ts"],{

/***/ 30385:
/*!*****************************************************!*\
  !*** ./src/app/setalarm/setalarm-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetalarmPageRoutingModule": function() { return /* binding */ SetalarmPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _setalarm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setalarm.page */ 90483);




const routes = [
    {
        path: '',
        component: _setalarm_page__WEBPACK_IMPORTED_MODULE_0__.SetalarmPage
    }
];
let SetalarmPageRoutingModule = class SetalarmPageRoutingModule {
};
SetalarmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SetalarmPageRoutingModule);



/***/ }),

/***/ 98191:
/*!*********************************************!*\
  !*** ./src/app/setalarm/setalarm.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetalarmPageModule": function() { return /* binding */ SetalarmPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _setalarm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setalarm-routing.module */ 30385);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 44981);
/* harmony import */ var _setalarm_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setalarm.page */ 90483);








let SetalarmPageModule = class SetalarmPageModule {
};
SetalarmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _setalarm_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetalarmPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipeModule
        ],
        declarations: [_setalarm_page__WEBPACK_IMPORTED_MODULE_2__.SetalarmPage]
    })
], SetalarmPageModule);



/***/ }),

/***/ 90483:
/*!*******************************************!*\
  !*** ./src/app/setalarm/setalarm.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetalarmPage": function() { return /* binding */ SetalarmPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_setalarm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./setalarm.page.html */ 78770);
/* harmony import */ var _setalarm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setalarm.page.scss */ 95299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 55160);









let SetalarmPage = class SetalarmPage {
    constructor(router, activatedRoute, http, route) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.forProductbtnVisible = false;
        this.forStorebtnVisible = false;
        this.isVisible = false;
        this.isVisibleForProduct = false;
        this.isShown = true;
        this.selectStore = "";
        this.storeTbid = '';
        this.resultProductCardVisible = false;
        this.resultStoreCardVisible = false;
        this.forproduct = false;
        this.forstore = false;
        this.getStoreList = [];
        this.storeDetails = [];
        this.resultProductDetails = [];
        this.productNameList = [];
        this.getProductList = [];
        route.params.subscribe(val => {
            this.storeList();
        });
    }
    ngOnInit() {
    }
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
    notification() {
        this.router.navigate(['/notification']);
    }
    forProduct() {
        this.forproduct = true;
        this.forstore = false;
        this.forProductbtnVisible = true;
        this.forStorebtnVisible = false;
        this.resultStoreCardVisible = false;
    }
    forStore() {
        this.forstore = true;
        this.forproduct = false;
        this.forStorebtnVisible = true;
        this.forProductbtnVisible = false;
        this.resultProductCardVisible = false;
    }
    selectStoreForProductSetAlarm() {
        this.isVisible = true;
        this.storeIdUseOfProductSetAlarm = name;
        // var formData = new FormData();
        // formData.append('store_name', this.storeTbid);
        // console.log('formData: ', formData.getAll('store_name'));
        const obj = {
            store_name: this.storeTbid
        };
        this.http.post('/product_list', obj).subscribe((response) => {
            console.log(response);
            this.productNameList = response.records;
        }, (error) => {
            console.log(error);
        });
    }
    setAlarmForProduct() {
        const obj = {
            store_name: this.storeTbid,
            product: this.productTbid
        };
        console.log(obj);
        this.http.post('/product_alarm', obj).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.selectProductName = '';
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Alarm Set successfully'
                });
            }
            else {
            }
        }, (error) => {
            this.selectProductName = '';
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1200,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'error',
                title: 'Alarm Already Exist for this product.'
            });
            console.log(error);
        });
    }
    selectProductToSetAlarm(name) {
        this.selectProductName = name;
        console.log(name);
        const s = name;
        this.http.get('/product_search_user?s=' + s).subscribe((response) => {
            if (response.success == "true") {
                this.selectProductName = name;
                console.log(response);
                this.storeLogo = response.records.store_logo;
                this.storeName = response.records.store_name;
                this.productName = response.records.product_name;
                this.productImage = response.records.product_image;
                this.description = response.records.description;
                this.offerTime = response.records.offer_time;
                this.weight = response.records.weight;
                this.unit = response.records.unit;
                this.totalCost = response.records.total_cost;
                this.offerPrice = response.records.offer_price;
                this.productTbid = response.records.tbid;
                this.isVisibleForProduct = false;
                this.resultProductCardVisible = true;
            }
        }, (error) => {
            console.log(error);
        });
    }
    storeList() {
        console.log(this.getStoreList);
        this.http.get('/list_store').subscribe((response) => {
            console.log(response);
            this.getStoreList = response.records;
            console.log(response.records);
            console.log(this.getStoreList);
        }, (error) => {
            console.log(error);
        });
    }
    searchStore() {
        this.isVisible = true;
    }
    selectStoreForGetStoreDetails(tbid, name) {
        this.isVisible = false;
        this.selectStore = name;
        this.storeID = tbid;
        const obj = {
            store_name: name
        };
        console.log(obj);
        this.http.post('/store_details_user', obj).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.resultStoreCardVisible = true;
                this.storeLogForStore = response.records.store_logo;
                this.storeNameForSrore = response.records.store_name;
            }
        }, (error) => {
            console.log(error);
        });
    }
    setAlarmForStore() {
        console.log(this.storeId);
        const obj = {
            store_name: this.storeID
        };
        console.log(obj);
        this.http.post('/store_alarm', obj).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.selectStore = '';
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Alarm Set successfully'
                });
            }
        }, (error) => {
            console.log(error);
            this.selectStore = '';
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'error',
                title: 'Alarm Already Exist for this store.'
            });
        });
    }
    searchProduct() {
        this.isVisible = true;
        this.isShown = false;
        this.isVisibleForProduct = false;
        const obj = {
            store_name: this.selectProductName
        };
        this.http.post('/product_list', obj).subscribe((response) => {
            console.log(response);
            this.getProductList = response.records;
            console.log(response.records);
            console.log(this.getStoreList);
        }, (error) => {
            console.log(error);
        });
    }
    productSearchBasedOnStore() {
        this.isVisibleForProduct = true;
        this.isVisible = false;
    }
    backToHome() {
        this.router.navigate(['/homepage']);
    }
};
SetalarmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
SetalarmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-setalarm',
        template: _raw_loader_setalarm_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadein', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slidelefttitle', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, transform: 'translateX(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translateX(0%)', opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideup', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, transform: 'translateY(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translateY(0%)', opacity: 1 }))
                ])
            ])
        ],
        styles: [_setalarm_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SetalarmPage);



/***/ }),

/***/ 95299:
/*!*********************************************!*\
  !*** ./src/app/setalarm/setalarm.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.signin-div {\n  border-radius: 4px;\n  background-color: #fff !important;\n}\nselect {\n  background-color: #fff !important;\n  border: none !important;\n  margin-left: -15px;\n}\n#kg {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  margin-left: -15px !important;\n  border-radius: 3px !important;\n  font-size: 10px !important;\n  margin-top: 4px;\n}\ninput[type=text] {\n  width: 100%;\n  border: 2px solid #F4F7FA;\n  background-color: transparent;\n  border-radius: 5px;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n}\ninput[type=text]:focus {\n  border-color: #23d5ab;\n  box-shadow: 0 0 8px 0 #23d5ab;\n}\n.inputWithIcon input[type=text] {\n  padding-left: 40px;\n}\n.inputWithIcon {\n  position: relative;\n}\n.inputWithIcon i {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  padding: 9px 8px;\n  color: #aaa;\n  transition: 0.3s;\n  cursor: pointer;\n}\n.inputWithIcon i :hover {\n  color: #23d5ab;\n}\n.inputWithIcon input[type=text]:focus + i {\n  color: #23d5ab;\n}\n.inputWithIcon.inputIconBg i {\n  background-color: #aaa;\n  color: #fff;\n  padding: 9px 4px;\n  border-radius: 4px 0 0 4px;\n}\n.inputWithIcon.inputIconBg input[type=text]:focus + i {\n  color: #fff;\n  background-color: #23d5ab;\n}\n#seller-dropdwon {\n  width: 100%;\n  height: 35px;\n  position: relative;\n  display: flex;\n  border-radius: 0.25em;\n  overflow: hidden;\n}\n.select::after {\n  content: \"▼\";\n  position: absolute;\n  top: -8px;\n  right: 5px;\n  padding: 1em;\n  background-color: #fff;\n  color: #23d5ab;\n  transition: 0.5s all ease;\n  pointer-events: none;\n  border-radius: 2px;\n}\n.setalarm-btn {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n  width: 75% !important;\n}\n.search-btn {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  height: 42px;\n  width: 50px;\n  margin-left: -20px;\n  border-radius: 6px;\n}\nion-segment {\n  --height:50px;\n  --background: #fff !important;\n}\n/* Custom Icon Segment MD */\n.md .custom-icon {\n  --indicator-color: lightgray !important;\n}\n.md .segment-facebook {\n  --background-hover: rgba(59, 89, 153, 0.04);\n  --color-activated: #23d5ab;\n  --color-checked: #23d5ab;\n}\n.md .segment-instagram {\n  --background-hover: rgba(228, 64, 95, 0.04);\n  --color-activated: #23d5ab;\n  --color-checked: #23d5ab;\n}\n.md .segment-slack {\n  --background-hover: rgba(58, 175, 133, 0.04);\n  --color-activated: #3aaf85;\n  --color-checked: #3aaf85;\n}\n/* Custom Icon Segment iOS */\n.ios .segment-facebook {\n  --background-hover: rgba(59, 89, 153, 0.04);\n  --color-activated: #23d5ab;\n  --color-checked: #23d5ab;\n}\n.ios .segment-instagram {\n  --background-hover: rgba(228, 64, 95, 0.04);\n  --color-activated: #23d5ab;\n  --color-checked: #23d5ab;\n}\n.ios .segment-slack {\n  --color: #3aaf85;\n}\n.custom-icon ion-icon {\n  font-size: 44px;\n}\n.custom-icon {\n  border-radius: 50px !important;\n  height: 40px !important;\n}\n#productCard {\n  width: 95% !important;\n}\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldGFsYXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0FBQ0o7QUFDRTtFQUNFLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0U7RUFDRSw4REFBQTtFQUdBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBQUo7QUFLRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSEo7QUFLRTtFQUNFLGNBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtBQUZKO0FBS0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBRko7QUFLRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUZKO0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLQTtFQUNFLDhEQUFBO0VBR0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSkY7QUFNQTtFQUNFLDhEQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxGO0FBU0U7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUFOTjtBQVFDLDJCQUFBO0FBQ0Q7RUFDSSx1Q0FBQTtBQUxKO0FBUUU7RUFDRSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFMSjtBQVFFO0VBQ0UsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FBTEo7QUFRRTtFQUNFLDRDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQUxKO0FBUUUsNEJBQUE7QUFLQTtFQUNFLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQVRKO0FBY0U7RUFDRSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUFYSjtBQWlCRTtFQUNFLGdCQUFBO0FBZEo7QUFxQkU7RUFDRSxlQUFBO0FBbEJKO0FBcUJFO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtBQWxCSjtBQXFCQTtFQUNFLHFCQUFBO0FBbEJGO0FBc0JBO0VBQ0ksb0NBQUE7RUFLQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXZCSjtBQXdCSTtFQUNJLGFBQUE7QUF0QlIiLCJmaWxlIjoic2V0YWxhcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2lnbmluLWRpdntcbiAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgc2VsZWN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgfVxuICBcbiAgI2tne1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gICAgMCUsICMyM2Q1YWJcbiAgICAxMDAlKTtcbiAgICBjb2xvcjojZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6NHB4O1xuICAgXG4gIFxuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGNEY3RkE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vIG1hcmdpbjogOHB4IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjNkNWFiO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCAjMjNkNWFiO1xuICB9XG4gIFxuICAuaW5wdXRXaXRoSWNvbiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB9XG4gIFxuICAuaW5wdXRXaXRoSWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuaW5wdXRXaXRoSWNvbiBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDJweDtcbiAgICBwYWRkaW5nOiA5cHggOHB4O1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5pbnB1dFdpdGhJY29uIGkgOmhvdmVye1xuICAgIGNvbG9yOiAjMjNkNWFiO1xuICB9XG4gIFxuICAuaW5wdXRXaXRoSWNvbiBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyArIGkge1xuICAgIGNvbG9yOiAjMjNkNWFiO1xuICB9XG4gIFxuICAuaW5wdXRXaXRoSWNvbi5pbnB1dEljb25CZyBpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDlweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gIH1cbiAgXG4gIC5pbnB1dFdpdGhJY29uLmlucHV0SWNvbkJnIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzICsgaSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDVhYjtcbiAgfVxuICBcbiNzZWxsZXItZHJvcGR3b257XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDozNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLyBtYXJnaW4tbGVmdDogLTE1JTtcbn1cbi5zZWxlY3Q6OmFmdGVyIHtcbiAgY29udGVudDogJ1xcMjVCQyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogNXB4O1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiMyM2Q1YWJcbiAgO1xuICB0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uc2V0YWxhcm0tYnRue1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAwJSwgIzIzZDVhYlxuICAxMDAlKTtcbiAgY29sb3I6I2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6NzUlICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLWJ0bntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgMCUsICMyM2Q1YWJcbiAgMTAwJSk7XG4gIGNvbG9yOiNmZmY7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG59XG5cbiAgaW9uLXNlZ21lbnR7XG4gICAgICAtLWhlaWdodDo1MHB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAvKiBDdXN0b20gSWNvbiBTZWdtZW50IE1EICovXG4ubWQgLmN1c3RvbS1pY29uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5tZCAuc2VnbWVudC1mYWNlYm9vayB7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDU5LCA4OSwgMTUzLCAwLjA0KTtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzIzZDVhYjtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyM2Q1YWI7XG4gIH1cbiAgXG4gIC5tZCAuc2VnbWVudC1pbnN0YWdyYW0ge1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgyMjgsIDY0LCA5NSwgMC4wNCk7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyM2Q1YWI7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMjNkNWFiO1xuICB9XG4gIFxuICAubWQgLnNlZ21lbnQtc2xhY2sge1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSg1OCwgMTc1LCAxMzMsIDAuMDQpO1xuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjM2FhZjg1O1xuICAgIC0tY29sb3ItY2hlY2tlZDogIzNhYWY4NTtcbiAgfVxuICBcbiAgLyogQ3VzdG9tIEljb24gU2VnbWVudCBpT1MgKi9cbi8vICAgLmlvcyAuY3VzdG9tLWljb24gaW9uLXNlZ21lbnQtYnV0dG9uIHtcbi8vICAgICAtLWJvcmRlci13aWR0aDogMDtcbi8vICAgfVxuICBcbiAgLmlvcyAuc2VnbWVudC1mYWNlYm9vayB7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDU5LCA4OSwgMTUzLCAwLjA0KTtcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzIzZDVhYjtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyM2Q1YWI7XG4gICAgLy8gLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0ZGNjAwMDtcbiAgICAvLyAtLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGNjAwMDtcbiAgfVxuICBcbiAgLmlvcyAuc2VnbWVudC1pbnN0YWdyYW0ge1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgyMjgsIDY0LCA5NSwgMC4wNCk7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMyM2Q1YWI7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjMjNkNWFiO1xuICAgIC8vIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgyMjgsIDY0LCA5NSwgMC4xKTtcbiAgICAvLyAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRkY2MDAwO1xuICAgIC8vIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRkY2MDAwO1xuICB9XG4gIFxuICAuaW9zIC5zZWdtZW50LXNsYWNrIHtcbiAgICAtLWNvbG9yOiAjM2FhZjg1O1xuICAgIC8vIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAvLyAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoNTgsIDE3NSwgMTMzLCAwLjEpO1xuICAgIC8vIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoNTgsIDE3NSwgMTMzLCAwLjE2KTtcbiAgICAvLyAtLWJhY2tncm91bmQtY2hlY2tlZDogIzNhYWY4NTtcbiAgfVxuICBcbiAgLmN1c3RvbS1pY29uIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gIH1cblxuICAuY3VzdG9tLWljb257XG4gICAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDo0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4jcHJvZHVjdENhcmR7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbn1cblxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjRGN0ZBICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhjZGJlMlxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ 78770:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setalarm/setalarm.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"margin-top: -7px;\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <h5 style=\"color:#fff;margin-top:30px\"><b>24HRS</b></h5>\n      </div>\n      <div class=\"col-8\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg (click)=\"searchPage()\" style=\"margin:10px;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M14.2998 12.5863H13.3974L13.0775 12.2779C14.3299 10.8187 14.9685 8.93097 14.8587 7.01111C14.749 5.09124 13.8996 3.28856 12.489 1.98152C11.0785 0.674474 9.21659 -0.0352438 7.29394 0.00134777C5.3713 0.0379394 3.53754 0.817948 2.17778 2.17771C0.818015 3.53748 0.0379393 5.37125 0.00134789 7.2939C-0.0352436 9.21655 0.674402 11.0786 1.98144 12.4891C3.28848 13.8996 5.09129 14.7489 7.01115 14.8586C8.93101 14.9683 10.8187 14.33 12.2779 13.0775L12.5864 13.3974V14.2998L18.298 20L20 18.298L14.2998 12.5863ZM7.44594 12.5863C6.42926 12.5863 5.43548 12.2849 4.59014 11.72C3.7448 11.1552 3.08585 10.3523 2.69678 9.41302C2.30772 8.47373 2.20589 7.44016 2.40423 6.44301C2.60258 5.44586 3.09231 4.52992 3.81121 3.81102C4.53011 3.09211 5.44592 2.60259 6.44306 2.40424C7.44021 2.20589 8.47391 2.30765 9.4132 2.69672C10.3525 3.08579 11.1553 3.74468 11.7201 4.59002C12.285 5.43536 12.5864 6.42921 12.5864 7.44589C12.5873 8.1212 12.4551 8.79006 12.197 9.41414C11.939 10.0382 11.5604 10.6052 11.0829 11.0827C10.6054 11.5602 10.0381 11.9389 9.41404 12.1969C8.78996 12.4549 8.12124 12.5872 7.44594 12.5863Z\"\n            fill=\"white\" />\n        </svg>\n        <svg (click)=\"notification()\" style=\"margin:10px;\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class=\"container\">\n    <h5 class=\"mt-4 mx-2\" style=\"color: #5C5C5C;\">Offer alarm:</h5>\n    <div class=\"mt-3 signin-div  \">\n      <ion-segment class=\"custom-iconion-text-center mt-2\" style=\"width: 100%;\" value=\"instagram\">\n        <ion-segment-button (click)=\"forProduct()\" class=\"segment-facebook\" value=\"facebook\" layout=\"icon-bottom\">\n          <ion-label>For Product</ion-label>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"forStore()\" class=\"segment-instagram\" value=\"instagram\" layout=\"icon-bottom\">\n          <ion-label>For Store</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <div  style=\"padding: 0;margin:0;\" class=\" container row mb-3\">\n        <div *ngIf=\"forstore\" class=\"col-12 mt-4\">\n          <p>\n            <svg style=\"margin: 2px;\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"\n              xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n              <rect width=\"16\" height=\"16\" fill=\"url(#pattern0)\" />\n              <defs>\n                <pattern id=\"pattern0\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n                  <use xlink:href=\"#image0_388_17\" transform=\"scale(0.00195312)\" />\n                </pattern>\n                <image id=\"image0_388_17\" width=\"512\" height=\"512\"\n                  xlink:href=\"data:image/png;base64,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\" />\n              </defs>\n            </svg>\n            Store name:\n          </p>\n        </div>\n        <div *ngIf=\"forstore\" class=\" col-12 \">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <div class=\"inputWithIcon\">\n                    <ion-searchbar (keypress)=\"searchStore()\" [(ngModel)]=\"selectStore\" type=\"text\"\n                      placeholder=\"Search....\"></ion-searchbar>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n\n\n\n            <!-- search suggesion list for store -->\n\n            <div *ngIf=\"isVisible\">\n              <ion-list *ngFor=\"let store of getStoreList |filter:selectStore\">\n                <div class=\"row\">\n                  <div class=\"col-10\">\n                    <ion-item (click)=\"selectStoreForGetStoreDetails(store.tbid,store.store_name)\" class=\"mx-3\">\n                      {{store.store_name}}</ion-item>\n                  </div>\n                  <div class=\"col-2\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                      class=\"bi bi-arrow-up-left\" viewBox=\"0 0 16 16\">\n                      <path fill-rule=\"evenodd\"\n                        d=\"M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z\" />\n                    </svg>\n                  </div>\n                </div>\n\n              </ion-list>\n            </div>\n\n          </div>\n        </div>\n\n        <!---------- select Store For Product SetAlarm  ----------------->\n\n        <div *ngIf=\"forproduct\" class=\"col-12 mt-3\">\n          <p>Store name:</p>\n        </div>\n        <div class=\"col-12 \">\n          <div *ngIf=\"forproduct\" class=\"inputWithIcon\">\n            <div class=\"select \" id=\"seller-dropdwon\">\n              <select (change)=\"selectStoreForProductSetAlarm()\" [(ngModel)]=\"storeTbid\">\n                <option value=\"\" disabled selected>Select </option>\n                <option *ngFor=\"let store of getStoreList\" [value]=\"store.tbid\">{{store.store_name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"forproduct\" class=\"col-12 mt-3\">\n          <p>Product name:</p>\n        </div>\n        <div *ngIf=\"forproduct\" class=\"col-12 \">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <div class=\"inputWithIcon\">\n                    <ion-searchbar (keypress)=\"productSearchBasedOnStore()\" [(ngModel)]=\"selectProductName\" type=\"text\"\n                      placeholder=\"Search....\"></ion-searchbar>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- search suggesion list for product -->\n\n    <div *ngIf=\"isVisibleForProduct\">\n      <ion-list *ngFor=\"let search of productNameList |filter:selectProductName\">\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <ion-item (click)=\"selectProductToSetAlarm( search.product)\" class=\"mx-3\">{{search.product}}</ion-item>\n          </div>\n          <div class=\"col-2\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n              class=\"bi bi-arrow-up-left\" viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z\" />\n            </svg>\n          </div>\n        </div>\n\n      </ion-list>\n    </div>\n\n    <h5 class=\"mx-2\" style=\"color: #5C5C5C;\">results:</h5>\n\n    <!-- set alarm product result -->\n\n    <div class=\"container\">\n      <div class=\"row mb-2\">\n        <div *ngIf=\"resultProductCardVisible\" id=\"productCard\" class=\"col-12 ion-text-center\">\n          <div class=\"row mt-2\">\n            <div class=\"col-4\">\n              <img src=\"{{storeLogo}}\" style=\"margin:1px;\" height=\"19px\" width=\"19px\" alt=\"\">\n            </div>\n            <div class=\"col-8 ion-text-left\">\n              <span style=\"font-size: 10px;color:#404040;margin-left: -17px;\"><b>{{storeName}} </b></span>\n\n            </div>\n            <div (click)=\"singleCard()\" class=\"col-9 ion-text-left mt-2\">\n              <img id=\"product_img\" src=\"{{productImage}}\" alt=\"\">\n            </div>\n\n            <div class=\"col-3 mt-2\">\n              <!-- <div>\n                <ion-icon  id=\"heart\" style=\"margin-left:3px\" (click)=\"selectedItem(product.tbid)\"\n                [ngClass]=\"{'green' : toggle, 'red': !toggle}\" name=\"heart-sharp\"></ion-icon>\n              </div> -->\n              <div>\n                <ion-badge color=\"success\" style=\"margin-left: -5px;\" id=\"kg\">{{weight}}{{unit}}</ion-badge>\n              </div>\n            </div>\n\n            <div class=\"col-12 ion-text-left mt-1\">\n              <p style=\"padding: 0; margin:0;color: #121212;font-size: 12px;\"><b>{{productName}}</b></p>\n            </div>\n            <div class=\"col-12 ion-text-left \">\n\n              <p><span style=\"font-size:10px;color: #404040;text-decoration: line-through\">\n                  <i style=\"color:#23d5ab\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                  Rs.{{totalCost}}.00</span> <span style=\"margin: 3px;padding:0;font-size:13px;\">\n                  <b>{{offerPrice}}.00</b></span></p>\n            </div>\n            <div class=\"col-12 ion-text-left\">\n              <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                <i style=\"color:#23d5ab\" class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n                {{description}}\n              </p>\n            </div>\n            <div class=\"col-8 ion-text-left \">\n              <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                <i style=\"color:#23d5ab\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                {{offerTime}}\n              </p>\n            </div>\n            <div style=\"margin-top: -18px;\" class=\"col-4 ion-text-left \">\n              <div class=\"dot\">\n                <svg style=\"margin:8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"#fff\"\n                  class=\"bi bi-share\" viewBox=\"0 0 16 16\">\n                  <path\n                    d=\"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z\" />\n                </svg>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- set alarm store result -->\n\n    <div *ngIf=\"resultStoreCardVisible\" class=\"col-12 ion-text-center\">\n      <div style=\"height: 75px;\" class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-4 mt-1 mb-3\">\n            <img src=\"{{storeLogForStore}}\" style=\"margin: 5px;\" height=\"65px\" width=\"75px\" alt=\"\">\n          </div>\n          <div class=\"col-8 mt-4 mb-2\">\n            <span style=\"font-size: 18px;color:#404040\"><b>{{storeNameForSrore}}</b></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- set alarm button for product -->\n    <div *ngIf=\"forProductbtnVisible\" class=\"col-12 ion-text-center mb-2\">\n      <button (click)=\"setAlarmForProduct()\" class=\"btn  setalarm-btn\">\n        <svg style=\"margin-top: -5px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"30\" fill=\"currentColor\"\n          class=\"bi bi-alarm-fill\" viewBox=\"0 0 16 16\">\n          <path\n            d=\"M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z\" />\n        </svg>\n        Set alarm </button>\n    </div>\n\n    <!-- set alarm button for store -->\n    <div *ngIf=\"forStorebtnVisible\" class=\"col-12 ion-text-center mb-2\">\n      <button (click)=\"setAlarmForStore()\" class=\"btn  setalarm-btn\">\n        <svg style=\"margin-top: -5px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"30\" fill=\"currentColor\"\n          class=\"bi bi-alarm-fill\" viewBox=\"0 0 16 16\">\n          <path\n            d=\"M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z\" />\n        </svg>\n        Set alarm </button>\n    </div>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_setalarm_setalarm_module_ts-es2015.js.map