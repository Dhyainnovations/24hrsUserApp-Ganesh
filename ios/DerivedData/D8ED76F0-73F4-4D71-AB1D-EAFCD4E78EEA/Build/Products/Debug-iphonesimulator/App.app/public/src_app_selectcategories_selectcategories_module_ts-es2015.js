(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_selectcategories_selectcategories_module_ts"],{

/***/ 98089:
/*!*********************************************************************!*\
  !*** ./src/app/selectcategories/selectcategories-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectcategoriesPageRoutingModule": function() { return /* binding */ SelectcategoriesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _selectcategories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectcategories.page */ 4912);




const routes = [
    {
        path: '',
        component: _selectcategories_page__WEBPACK_IMPORTED_MODULE_0__.SelectcategoriesPage
    }
];
let SelectcategoriesPageRoutingModule = class SelectcategoriesPageRoutingModule {
};
SelectcategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectcategoriesPageRoutingModule);



/***/ }),

/***/ 88853:
/*!*************************************************************!*\
  !*** ./src/app/selectcategories/selectcategories.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectcategoriesPageModule": function() { return /* binding */ SelectcategoriesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _selectcategories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectcategories-routing.module */ 98089);
/* harmony import */ var _selectcategories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectcategories.page */ 4912);







let SelectcategoriesPageModule = class SelectcategoriesPageModule {
};
SelectcategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _selectcategories_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectcategoriesPageRoutingModule
        ],
        declarations: [_selectcategories_page__WEBPACK_IMPORTED_MODULE_1__.SelectcategoriesPage]
    })
], SelectcategoriesPageModule);



/***/ }),

/***/ 4912:
/*!***********************************************************!*\
  !*** ./src/app/selectcategories/selectcategories.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectcategoriesPage": function() { return /* binding */ SelectcategoriesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_selectcategories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./selectcategories.page.html */ 22091);
/* harmony import */ var _selectcategories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectcategories.page.scss */ 81347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);








let SelectcategoriesPage = class SelectcategoriesPage {
    constructor(router, http, toastCtrl, route) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        this.getCategoryList = [];
        this.selectedCategoryList = [];
        this.alredySelectedCategoryList = [];
        this.buttonColor = '#000'; //Default Color
        this.filterCat = [];
        route.params.subscribe(val => {
            this.getCategory();
            this.selectedCategories();
            this.test();
            console.log(this.alredySelectedCategoryList);
        });
    }
    ngOnInit() {
    }
    addEvent() {
        this.buttonColor = '#345465'; //desired Color
        /*
        YOUR FUNCTION CODE
        */
    }
    toggleClass(item) {
        item.active = !item.active;
        this.selectedCategoryList.push(item.tbid);
        // console.log(item);
        console.log(this.selectedCategoryList);
    }
    verify() {
        const storeCategory = this.selectedCategoryList.toString();
        console.log(storeCategory);
        const Data = {
            tbid: this.userdetails.id,
            store_category: storeCategory
        };
        console.log(Data);
        this.http.post('/update_store_category', Data).subscribe((response) => {
        }, (error) => {
            console.log(error);
        });
        this.router.navigate(['/homepage']);
    }
    getCategory() {
        console.log(this.selectedCategoryList);
        this.http.get('/list_category').subscribe((response) => {
            this.getCategoryList = response.records;
        }, (error) => {
            console.log(error);
        });
    }
    selectedCategories() {
        this.http.get('/store_category').subscribe((response) => {
            console.log(response);
            this.alredySelectedCategoryList = response.records;
        }, (error) => {
            console.log(error);
        });
    }
    test() {
        console.log(this.getCategoryList.length);
        console.log(this.alredySelectedCategoryList.length);
        for (var i = 0; i = this.getCategoryList.length; i++) {
            console.log("test");
            if (this.getCategoryList.tbid == this.alredySelectedCategoryList.tbid) {
                this.filterCat.push(this.getCategoryList);
                console.log("hai");
            }
            console.log(this.filterCat);
        }
    }
};
SelectcategoriesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
SelectcategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-selectcategories',
        template: _raw_loader_selectcategories_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_selectcategories_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectcategoriesPage);



/***/ }),

/***/ 28191:
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": function() { return /* binding */ HttpService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(serviceName) {
        const userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails.token);
        //   let httpOptions = {
        //     headers: new HttpHeaders({
        //       "Access-Control-Allow-Origin": "*",
        //       "Access-Control-Allow-Methods": "*",
        //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        //       'Authorization':userdetails.token,
        //       "Content-Type": "application/json"
        //     })
        // };
        const options = { headers: header, withCredentials: true };
        return this.http.get(url, { headers: header });
    }
    post(serviceName, data) {
        const token = ((localStorage.getItem("token")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        if (serviceName == '/user_get_otp' || serviceName == '/user_verify_otp' || serviceName == '/user_register' || serviceName == '/user_login') {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
            const options = { headers: headers, withCredentials: false };
            return this.http.post(url, JSON.stringify(data), { headers: headers });
        }
        else {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Token", token);
            const options = { headers: headers, withCredentials: true };
            return this.http.post(url, JSON.stringify(data), { headers: headers });
        }
    }
    postFormData(serviceName, data) {
        const token = ((localStorage.getItem("token")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const headers = {
            'enctype': 'multipart/form-data;',
            'Content-Type': 'multipart/form-data;',
            'Accept': 'plain/text',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
            'Token': token
        };
        // const headers = new HttpHeaders().set("Token", token );
        //  headers.set('Content-Type', 'multipart/form-data'); 
        const options = { headers: headers, withCredentials: true };
        return this.http.post(url, data, { headers: headers });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 81347:
/*!*************************************************************!*\
  !*** ./src/app/selectcategories/selectcategories.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\");\n.myproducts-btn {\n  margin: 15px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  border: 1px solid #fff;\n  border-radius: 5px;\n}\nion-list {\n  background-color: #ebf9f9 !important;\n}\nion-item {\n  background-color: #ebf9f9 !important;\n}\n.card {\n  background-color: #fff;\n  text-align: center;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n  margin: 5px;\n}\n.myproduct-div {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 25px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 0 0 3px #ccc;\n  border: 1px solid #fff;\n}\n#SelectedList {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-top-left-radius: 30px !important;\n  border-top-right-radius: 30px !important;\n  box-shadow: 4px 4px 4px 4px #fff;\n}\nion-chip {\n  box-shadow: 0px 5px 17px -7px black;\n  margin-bottom: 10px;\n}\nion-label {\n  font-size: 18px;\n}\nion-chip.active {\n  color: #fff !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBQ047RUFDRSxZQUFBO0VBQ0EsOERBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHRTtFQUNFLG9DQUFBO0FBQUo7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7QUFDRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBRUo7QUFBRTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBR0Esd0JBQUE7RUFDQSxzQkFBQTtBQUdKO0FBQUU7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUdBLGdDQUFBO0FBR0o7QUFBRTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQURFO0VBQ0ksZUFBQTtBQUlOO0FBRkU7RUFDRSxzQkFBQTtFQUNBLCtEQUFBO0FBS0o7QUFBRTtFQUNFLGlDQUFBO0VBSUEsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUNJO0VBQ0ksYUFBQTtBQUNSIiwiZmlsZSI6InNlbGVjdGNhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCcpO1xuICAubXlwcm9kdWN0cy1idG57XG4gICAgbWFyZ2luOjE1cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgICAwJSwgIzIzZDVhYlxuICAgIDEwMCUpO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjlmOSAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1pdGVte1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmY5ZjkgIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDRweCAjY2NjO1xuICAgIG1hcmdpbjo1cHg7XG4gIH1cbiAgLm15cHJvZHVjdC1kaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggI2NjYztcbiAgICB3aWR0aDo5NiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46NXB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjY2NjO1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgXG4gIH1cbiAgI1NlbGVjdGVkTGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggI2ZmZjtcbiAgIFxuICB9XG4gIGlvbi1jaGlwe1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtN3B4IHJnYmEoMCwgMCwgMCwgNS41KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIGlvbi1sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBpb24tY2hpcC5hY3RpdmV7IFxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTU1YzU5XG4gICAgMCUsICMxZDFmMWVcbiAgICAxMDAlKTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAiXX0= */");

/***/ }),

/***/ 22091:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectcategories/selectcategories.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n  <div class=\" mt-5\">\n    <p class=\"mt-3 mx-4\" style=\"color:#5C5C5C;font-size: 24px;margin:15px;\">Select preferred categories:</p>\n    <div class=\"container mt-4\">\n      <ion-chip  (click)=\"toggleClass(item)\" [ngClass]=\"{'active': item.active}\" *ngFor=\"let item of getCategoryList\" style=\"color:#23d5ab;background-color: #fffcfa;\">\n        <ion-label  >{{ item.category }}</ion-label>\n        <!-- <ion-icon  style=\"color:#121212\" name=\"checkmark-circle-sharp\"></ion-icon> -->\n      </ion-chip>\n    </div>\n\n    <div class=\"col-12 mt-2\" style=\"text-align: right;\">\n      <button (click)=\"verify()\" class=\"btn btn-success btn-sm  myproducts-btn mt-1\">Submit</button>\n    </div>\n\n    <!-- <lottie-player (click)=\"getPicture()\" src=\"https://assets1.lottiefiles.com/packages/lf20_rsqhglyn.json\" background=\"transparent\"\n    speed=\"1.5\" style=\"width:100%;margin-left:0px;\" loop autoplay></lottie-player> -->\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_selectcategories_selectcategories_module_ts-es2015.js.map