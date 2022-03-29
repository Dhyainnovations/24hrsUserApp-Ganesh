(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": function() { return /* binding */ Tab3PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": function() { return /* binding */ Tab3PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": function() { return /* binding */ Tab3Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 64255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 90943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 55160);











let Tab3Page = class Tab3Page {
    constructor(router, http, toastCtrl, route, alertController) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        this.city = ((localStorage.getItem("location")));
        this.mobileNumber = ((localStorage.getItem("mobilenumber")));
        this.locationsList = [];
        this.PopupModel = false;
        this.password = '';
        this.updateMobile = this.userdetails.mobile;
        this.getCategoryList = [];
        route.params.subscribe(val => {
            this.PopupModel = false;
            this.getSelectCategory();
            this.locationList();
        });
    }
    ngOnInit() {
    }
    //-------------- Navigate to supportPage ----------//
    support() {
        this.router.navigate(['/support']);
    }
    backToprivious() {
        this.PopupModel = false;
    }
    popupModelOpen() {
        this.PopupModel = true;
    }
    //-------------- Navigate to change-categoryPage ----------//
    changeCategory() {
        this.router.navigate(['change-category']);
    }
    //-------------- update profile Api call ----------//
    updateProfile() {
        const updateData = {
            tbid: this.userdetails.id,
            user_name: this.updateUsername,
            mobile_number: this.updateMobile,
            location: this.city
        };
        console.log(updateData);
        this.http.post('/user_update_profile', updateData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.updateUsername = response.user_name;
                this.PopupModel = false;
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    //-------------- Navigate to homepage ----------//
    back() {
        this.router.navigate(['/homepage']);
    }
    //-------------- Delete account func ----------//
    deleteAccount() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'buttonCss ',
                header: 'Delete Your Account!',
                message: 'Are You <strong>Sure</strong>!!!',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'alert-danger',
                        handler: (blah) => {
                            console.log('Confirm Cancel: No');
                        }
                    }, {
                        text: 'Yes',
                        cssClass: 'buttonCss',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.showPrompt();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showPrompt() {
        this.alertController.create({
            cssClass: 'buttonCss ',
            header: 'Enter The Password To Delete Your Account',
            inputs: [
                {
                    name: 'Place',
                    placeholder: 'Password',
                    type: 'text'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: (data) => {
                        console.log('Canceled', data);
                    }
                },
                {
                    text: 'Delete Account!',
                    handler: (data) => {
                        this.password = data;
                        const obj = {
                            tbid: this.userdetails.id,
                            password: this.password
                        };
                        console.log(obj);
                        this.http.post('/user_delete_account', obj).subscribe((response) => {
                            console.log(response);
                            if (response.success == "true") {
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
                                    title: 'Account Deleted Successfully.'
                                });
                            }
                        }, (error) => {
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
                                title: 'Something Went Wrong'
                            });
                            console.log(error);
                        });
                        console.log('Saved Information', data);
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    //----------- get store category List ---------//
    getSelectCategory() {
        this.http.get('/store_category').subscribe((response) => {
            this.getCategoryList = response.records;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    locationList() {
        this.http.get('/list_location').subscribe((response) => {
            console.log(response);
            this.locationsList = response.records;
            console.log(response.records.city);
        }, (error) => {
            console.log(error);
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        //------------- Animations ----------//
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadein', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slidelefttitle', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: 'translateX(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateX(0%)', opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideup', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: 'translateY(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(0%)', opacity: 1 }))
                ])
            ])
        ],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 90943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.top-container {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  height: 28%;\n  border-bottom-left-radius: 25%;\n  border-bottom-right-radius: 25%;\n}\n\n.name {\n  font-size: 16px;\n  color: #5C5C5C;\n  text-align: left;\n  font-style: bold;\n  font-weight: 550;\n  margin: 6px;\n}\n\n.edit-name {\n  font-size: 15px;\n  margin-top: 5px;\n}\n\n.profile {\n  width: 160px;\n  height: 125px;\n  position: relative;\n  margin-top: 15%;\n  border: 2px solid #ffffff;\n  border-radius: 30px;\n  z-index: 999;\n}\n\n.editprofile {\n  width: 155px;\n  height: 150px;\n  border-radius: 5%;\n  margin-bottom: 5px !important;\n}\n\n.card {\n  box-shadow: 2px 2px 2px 2px #ccc;\n  border-radius: 10px;\n  margin: 5px;\n  width: 80%;\n  text-align: left;\n}\n\n.col-6 {\n  margin-bottom: 7px !important;\n}\n\nspan {\n  margin: 15px !important;\n  font-size: 14px !important;\n}\n\nsvg {\n  margin-left: 5px !important;\n}\n\n.myproduct-div {\n  align-items: center !important;\n  justify-content: center !important;\n  text-align: center !important;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 8px;\n  margin-left: 2% !important;\n  margin-right: 5% !important;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 95% !important;\n  border-top-left-radius: 25%;\n  border-top-right-radius: 25%;\n}\n\nion-item {\n  --border-color: #fff;\n  text-align: left;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 13px;\n  margin-top: -12px;\n  margin-left: -25px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 2px solid #23d5ab !important;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n#card {\n  position: absolute;\n  height: 150%;\n  width: 1500px !important;\n  margin-left: -10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-top: -215px !important;\n  z-index: 999;\n}\n\n#modal {\n  position: fixed;\n  top: 20% !important;\n  margin: 5%;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  width: 94% !important;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\n.update-category-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  height: 30px;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  margin-top: 6px;\n  margin-right: 10%;\n}\n\n.delete-acc-btn {\n  text-align: center !important;\n  background: linear-gradient(to right, #ff80a0 0%, #eb154b 100%);\n  margin: 5px;\n  color: #fff;\n  width: 60% !important;\n}\n\n.buttonCss button.alert-button:nth-child(1) {\n  color: red;\n}\n\n.buttonCss button.alert-button:nth-child(2) {\n  color: green;\n}\n\nion-chip {\n  box-shadow: 0px 5px 17px -7px black;\n  margin-bottom: 10px;\n  color: #fff !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUFDRjs7QUFHQTtFQUNFLDhEQUFBO0VBUUEsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVBGOztBQVdBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFSSjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFHQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFURjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQVRGOztBQVdBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFVQTtFQUNFLDZCQUFBO0FBUEY7O0FBU0E7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0FBTkY7O0FBU0E7RUFDRSwyQkFBQTtBQU5GOztBQVFBO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBTEY7O0FBWUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVRGOztBQVdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQVRGOztBQVdBO0VBQ0Usd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBUkY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQVBGOztBQVVBO0VBQ0UsNkJBQUE7RUFDQSw4REFBQTtFQUdBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQVRGOztBQVdBO0VBQ0UsNkJBQUE7RUFDQSw4REFBQTtFQUdBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVkY7O0FBYUE7RUFDRSw2QkFBQTtFQUNBLCtEQUFBO0VBR0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVpGOztBQWlCRTtFQUNFLFVBQUE7QUFkSjs7QUFpQkU7RUFDRSxZQUFBO0FBZko7O0FBa0JBO0VBQ0UsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0UsK0RBQUE7QUFmSjs7QUFxQkE7RUFDRSxpQ0FBQTtFQUlBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBckJGOztBQXNCRTtFQUNJLGFBQUE7QUFwQk4iLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cblxuLnRvcC1jb250YWluZXJ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuICAvLyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjYsIDE4OCwgMTU2LCAxKSAwJSwgcmdiYSgxNDIsIDY4LCAxNzMsIDEpIDEwMCUpO1xuXHQvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjYsIDE4OCwgMTU2LCAxKSAwJSwgcmdiYSgxNDIsIDY4LCAxNzMsIDEpIDEwMCUpO1xuXHQvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI2LCAxODgsIDE1NiwgMSkgMCUsIHJnYmEoMTQyLCA2OCwgMTczLCAxKSAxMDAlKTtcblxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhYTQ2ZTAgMjMlLCAjNWM2M2Y3IDc2JSk7XG4gIGhlaWdodDoyOCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1JTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICAyNSU7XG5cbn1cbi5uYW1le1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNUM1QzVDO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXN0eWxlOiBib2xkO1xuICBmb250LXdlaWdodDogNTUwO1xuICBtYXJnaW46IDZweDtcbn1cblxuXG4uZWRpdC1uYW1le1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJvZmlsZXtcbiAgd2lkdGg6MTYwcHg7XG4gIGhlaWdodDoxMjVweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIC8vIHRvcDoyMCU7XG4gIC8vIGxlZnQ6NSU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czozMHB4O1xuICB6LWluZGV4OiA5OTk7XG5cbn1cbi5lZGl0cHJvZmlsZXtcbiAgd2lkdGg6MTU1cHg7XG4gIGhlaWdodDoxNTBweDtcbiAgYm9yZGVyLXJhZGl1czo1JTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbC02e1xuICBtYXJnaW4tYm90dG9tOiA3cHggIWltcG9ydGFudDtcbn1cbnNwYW57XG4gIG1hcmdpbjoxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG5zdmd7XG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbn1cbi5teXByb2R1Y3QtZGl2e1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6MXB4IHNvbGlkICNlYmU2ZTY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNSUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XG4gIHdpZHRoOjk1JSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNSU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgMjUlO1xuICBcbiAgfVxuXG4vLyBpb24tbGFiZWx7XG4vLyAgIG1hcmdpbi1ib3R0b206MjVweDtcbi8vIH1cbmlvbi1pdGVte1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOjVweDtcbn1cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIFxuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIzZDVhYjtcbn1cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6MnB4IHNvbGlkICMyM2Q1YWIhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMnB4ICNlOWYzZmY7XG59XG4jY2FyZHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGhlaWdodDoxNTAlO1xuICB3aWR0aDoxNTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG4gIGJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcbiAgbWFyZ2luLXRvcDogLTIxNXB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTtcbn1cbiNtb2RhbHtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIHRvcDoyMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6MXB4IHNvbGlkICNlYmU2ZTY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gIHdpZHRoOjk0JSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgIFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgXG59XG4udXBkYXRlLWJ0bntcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuICBjb2xvcjojZmZmO1xuICBoZWlnaHQ6MjVweDtcbiAgd2lkdGg6MjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOjE1cHggIWltcG9ydGFudDtcbn1cbi51cGRhdGUtY2F0ZWdvcnktYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgMCUsICMyM2Q1YWJcbiAgMTAwJSk7XG4gIGNvbG9yOiNmZmY7XG4gIGhlaWdodDozMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5kZWxldGUtYWNjLWJ0bntcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmODBhMFxuICAwJSwgI2ViMTU0YlxuICAxMDAlKTtcbiAgbWFyZ2luOjVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbkNzcyB7XG5cbiAgYnV0dG9uLmFsZXJ0LWJ1dHRvbjpudGgtY2hpbGQoMSl7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIGJ1dHRvbi5hbGVydC1idXR0b246bnRoLWNoaWxkKDIpe1xuICAgIGNvbG9yOiBncmVlbjtcbiAgfVxufVxuaW9uLWNoaXB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtN3B4IHJnYmEoMCwgMCwgMCwgNS41KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NTVjNTlcbiAgICAwJSwgIzFkMWYxZVxuICAgIDEwMCUpO1xufVxuXG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgLy8gMCUsICNkMWYyZTdcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogYXV0bztcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 64255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [ngStyle]=\"{'opacity':PopupModel ? '0.52' : '1' }\">\n  <div class=\"top-container\">\n    <div class=\"row\">\n\n      <div class=\"col-3 ion-text-center mt-4\">\n        <ion-buttons slot=\"end\">\n          <ion-menu-button style=\"color:#fff;margin:0px;\" autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n        <!-- <svg (click)=\"back()\" style=\"color:#fff;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"40\" fill=\"#fff\" class=\"bi bi-chevron-left\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z\"/>\n        </svg> -->\n      </div>\n      <div class=\"col-6 mt-4\">\n        <!-- <p style=\"color: #fff;font-size: 30px;\">My profile</p> -->\n      </div>\n\n      <!------------ Home icon ----------------->\n      <!-- <div class=\"col-3 ion-text-center mt-5\">\n        <ion-icon name=\"home\" (click)=\"back()\"\n          style=\"color:#fff;cursor:pointer;height:25px;width: 30px;margin-top: -10px;\"></ion-icon>\n      </div> -->\n    </div>\n\n    <!------------ Display Login UserDetails ----------------->\n    <div class=\"row\">\n      <div class=\"col-9 mt-1 mx-3\">\n        <p style=\"color: #fff;font-size: 30px;\">{{updateUsername}}</p>\n        <p style=\"color: #fff;font-size: 15px;margin-top: -15px;\">{{updateMobile}}\n          <svg (click)=\"popupModelOpen()\" style=\"margin: 5px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"18\"\n            fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n            <path\n              d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n            <path fill-rule=\"evenodd\"\n              d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n          </svg>\n        </p>\n\n      </div>\n      <!-- <div class=\"col-12 ion-text-center\">\n        <img class=\"profile\" src=\"assets/sparrow.JPG\" alt=\"\">\n      </div> -->\n    </div>\n\n  </div>\n\n  <!------------ Show category's List ----------------->\n  <div  class=\"container\">\n    <div class=\"row mt-5\">\n      <div class=\"col-6\">\n        <p class=\"name\">Categories :</p>\n      </div>\n      <div class=\"col-6\">\n\n        <button type=\"button\" (click)=\"changeCategory()\" class=\"btn btn-success btn-sm update-category-btn\">Change\n          Preference</button>\n\n      </div>\n      <div class=\"col-12\">\n        <div class=\"container mt-1\" id=\"SelectedList\">\n          <ion-chip *ngFor=\"let category of getCategoryList\">\n            <ion-label>{{category.category}}</ion-label>\n          </ion-chip>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!------------ Delete Account button ----------------->\n  <div class=\"ion-text-center\" style=\"margin-top: 20%;\">\n    <button (click)=\"deleteAccount()\" class=\"btn btn-sm delete-acc-btn \">Delete My Account</button>\n  </div>\n\n\n</ion-content>\n\n  <!------------ update profile PopUp ----------------->\n  <div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n    <div class=\"row\" id=\"modal\">\n      <div class=\"hidden\">\n        <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n          <svg (click)=\"backToprivious()\" style=\"margin-top:-8px;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n            <path fill-rule=\"evenodd\"\n              d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n          </svg>\n        </div>\n        <h5 style=\"margin:10px; color: #5C5C5C;\"> <b>Edit Here:</b></h5>\n        <div class=\"row ion-text-center mb-2\">\n          <div class=\"col-4\">\n            <lottie-player src=\"https://assets6.lottiefiles.com/packages/lf20_ultyaniw.json\" background=\"transparent\"\n              speed=\"1.5\" style=\"width:55%;margin-left: 15px;\" autoplay></lottie-player>\n          </div>\n          <div class=\"col-8\" >\n            <input style=\"width: 90%;\" type=\"text\" id=\"edit-field\" placeholder=\"Username\" [(ngModel)]=\"updateUsername\" maxlength=\"10\">\n          </div>\n        </div>\n    \n        <div class=\"row mb-2\">\n          <div class=\"col-4\">\n            <lottie-player src=\"https://assets6.lottiefiles.com/packages/lf20_uz8b4wzt.json\" background=\"transparent\"\n              speed=\"1.5\" style=\"width:75%;margin-left: 10px;\" autoplay></lottie-player>\n          </div>\n          <div class=\"col-8\" style=\"padding-left: 11%;\">\n            <input disabled type=\"text\" id=\"edit-field\" placeholder=\"Mobile number\" [(ngModel)]=\"mobileNumber\">\n    \n          </div>\n        </div>\n        <div class=\"row mb-2\">\n          <div class=\"col-4\">\n            <lottie-player src=\"https://assets6.lottiefiles.com/datafiles/uihIaQIvWBfYL9a/data.json\"\n              background=\"transparent\" speed=\"1.5\" style=\"width:100%;\" autoplay></lottie-player>\n          </div>\n          <div class=\"col-8\">\n            <ion-item>\n              <ion-label style=\"font-size:15px !important;color: #121212;margin-left: 0px;\">{{city}}</ion-label>\n              <ion-select style=\"font-size: 0px;\" [(ngModel)]=\"city\" interface=\"popover\">\n                <ion-select-option *ngFor=\"let location of locationsList\" [value]=\"location.city\">{{location.city}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </div>\n\n        <div style=\"width: 100%; text-align: center;\">\n          <button type=\"button\" (click)=\"updateProfile()\" class=\"btn btn-success btn-sm update-btn\">Update</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts-es2015.js.map