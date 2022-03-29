(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 86640:
/*!****************************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgSelectComponent": function() { return /* binding */ NgSelectComponent; },
/* harmony export */   "NgSelectConfig": function() { return /* binding */ NgSelectConfig; },
/* harmony export */   "NgSelectModule": function() { return /* binding */ NgSelectModule; },
/* harmony export */   "SELECTION_MODEL_FACTORY": function() { return /* binding */ SELECTION_MODEL_FACTORY; },
/* harmony export */   "ɵb": function() { return /* binding */ DefaultSelectionModelFactory; },
/* harmony export */   "ɵc": function() { return /* binding */ DefaultSelectionModel; },
/* harmony export */   "ɵd": function() { return /* binding */ NgDropdownPanelService; },
/* harmony export */   "ɵe": function() { return /* binding */ NgItemLabelDirective; },
/* harmony export */   "ɵf": function() { return /* binding */ NgOptionTemplateDirective; },
/* harmony export */   "ɵg": function() { return /* binding */ NgOptgroupTemplateDirective; },
/* harmony export */   "ɵh": function() { return /* binding */ NgLabelTemplateDirective; },
/* harmony export */   "ɵi": function() { return /* binding */ NgMultiLabelTemplateDirective; },
/* harmony export */   "ɵj": function() { return /* binding */ NgHeaderTemplateDirective; },
/* harmony export */   "ɵk": function() { return /* binding */ NgFooterTemplateDirective; },
/* harmony export */   "ɵl": function() { return /* binding */ NgNotFoundTemplateDirective; },
/* harmony export */   "ɵm": function() { return /* binding */ NgTypeToSearchTemplateDirective; },
/* harmony export */   "ɵn": function() { return /* binding */ NgLoadingTextTemplateDirective; },
/* harmony export */   "ɵo": function() { return /* binding */ NgTagTemplateDirective; },
/* harmony export */   "ɵp": function() { return /* binding */ NgLoadingSpinnerTemplateDirective; },
/* harmony export */   "ɵq": function() { return /* binding */ NgDropdownPanelComponent; },
/* harmony export */   "ɵr": function() { return /* binding */ NgOptionComponent; },
/* harmony export */   "ɵs": function() { return /* binding */ ConsoleService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45697);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 54857);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 58571);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);










const _c0 = ["content"];
const _c1 = ["scroll"];
const _c2 = ["padding"];
const _c3 = function (a0) { return { searchTerm: a0 }; };
function NgDropdownPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
} }
function NgDropdownPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
} }
const _c4 = ["*"];
const _c5 = ["searchInput"];
function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.unselect(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
} }
function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) { }
const _c6 = function (a0, a1, a2) { return { item: a0, clear: a1, label: a2 }; };
function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
} }
function NgSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
} }
function NgSelectComponent_5_ng_template_0_Template(rf, ctx) { }
const _c7 = function (a0, a1) { return { items: a0, clear: a1 }; };
function NgSelectComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
} }
function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
} }
function NgSelectComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) { }
const _c8 = function (a0, a1, a2, a3) { return { item: a0, item$: a1, index: a2, searchTerm: a3 }; };
function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r24 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.toggleItem(item_r24); })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r24 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.onItemHover(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.itemsList.unmarkItem(); })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.selectTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.viewPortItems = $event; })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.scroll.emit($event); })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.scrollToEnd.emit($event); })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
} }
const unescapedHTMLExp = /[&<>"']/g;
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;'
};
function escapeHTML(string) {
    return (string && hasUnescapedHTMLExp.test(string)) ?
        string.replace(unescapedHTMLExp, chr => htmlEscapes[chr]) :
        string;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
function isPromise(value) {
    return value instanceof Promise;
}
function isFunction(value) {
    return value instanceof Function;
}

class NgItemLabelDirective {
    constructor(element) {
        this.element = element;
        this.escape = true;
    }
    ngOnChanges(changes) {
        this.element.nativeElement.innerHTML = this.escape ?
            escapeHTML(this.ngItemLabel) :
            this.ngItemLabel;
    }
}
NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) { return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
NgItemLabelDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgItemLabelDirective, selectors: [["", "ngItemLabel", ""]], inputs: { escape: "escape", ngItemLabel: "ngItemLabel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
NgItemLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
NgItemLabelDirective.propDecorators = {
    ngItemLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ngItemLabel]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ngItemLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
class NgOptionTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) { return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgOptionTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgOptionTemplateDirective, selectors: [["", "ng-option-tmp", ""]] });
NgOptionTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-option-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgOptgroupTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) { return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgOptgroupTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgOptgroupTemplateDirective, selectors: [["", "ng-optgroup-tmp", ""]] });
NgOptgroupTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-optgroup-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgLabelTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) { return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgLabelTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLabelTemplateDirective, selectors: [["", "ng-label-tmp", ""]] });
NgLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgMultiLabelTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) { return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgMultiLabelTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgMultiLabelTemplateDirective, selectors: [["", "ng-multi-label-tmp", ""]] });
NgMultiLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-multi-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgHeaderTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) { return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgHeaderTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgHeaderTemplateDirective, selectors: [["", "ng-header-tmp", ""]] });
NgHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-header-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgFooterTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) { return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgFooterTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgFooterTemplateDirective, selectors: [["", "ng-footer-tmp", ""]] });
NgFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-footer-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgNotFoundTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) { return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgNotFoundTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgNotFoundTemplateDirective, selectors: [["", "ng-notfound-tmp", ""]] });
NgNotFoundTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-notfound-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgTypeToSearchTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) { return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgTypeToSearchTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTypeToSearchTemplateDirective, selectors: [["", "ng-typetosearch-tmp", ""]] });
NgTypeToSearchTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-typetosearch-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgLoadingTextTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) { return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgLoadingTextTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLoadingTextTemplateDirective, selectors: [["", "ng-loadingtext-tmp", ""]] });
NgLoadingTextTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-loadingtext-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgTagTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) { return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgTagTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTagTemplateDirective, selectors: [["", "ng-tag-tmp", ""]] });
NgTagTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-tag-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
class NgLoadingSpinnerTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) { return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgLoadingSpinnerTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLoadingSpinnerTemplateDirective, selectors: [["", "ng-loadingspinner-tmp", ""]] });
NgLoadingSpinnerTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-loadingspinner-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();

class ConsoleService {
    warn(message) {
        console.warn(message);
    }
}
ConsoleService.ɵfac = function ConsoleService_Factory(t) { return new (t || ConsoleService)(); };
ConsoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
        // tslint:disable-next-line:no-bitwise
        const val = Math.random() * 16 | 0;
        return val.toString(16);
    });
}

const diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
function stripSpecialChars(text) {
    const match = (a) => {
        return diacritics[a] || a;
    };
    return text.replace(/[^\u0000-\u007E]/g, match);
}

class ItemsList {
    constructor(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    get items() {
        return this._items;
    }
    get filteredItems() {
        return this._filteredItems;
    }
    get markedIndex() {
        return this._markedIndex;
    }
    get selectedItems() {
        return this._selectionModel.value;
    }
    get markedItem() {
        return this._filteredItems[this._markedIndex];
    }
    get noItemsToSelect() {
        return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
    }
    get maxItemsSelected() {
        return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
    }
    get lastSelectedItem() {
        let i = this.selectedItems.length - 1;
        for (; i >= 0; i--) {
            let item = this.selectedItems[i];
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
    setItems(items) {
        this._items = items.map((item, index) => this.mapItem(item, index));
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = [...this._items];
    }
    select(item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        const multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    }
    unselect(item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    }
    findItem(value) {
        let findBy;
        if (this._ngSelect.compareWith) {
            findBy = item => this._ngSelect.compareWith(item.value, value);
        }
        else if (this._ngSelect.bindValue) {
            findBy = item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
        }
        else {
            findBy = item => item.value === value ||
                !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
        }
        return this._items.find(item => findBy(item));
    }
    addItem(item) {
        const option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    }
    clearSelected(keepDisabled = false) {
        this._selectionModel.clear(keepDisabled);
        this._items.forEach(item => {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        });
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    }
    findByLabel(term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find(item => {
            const label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        });
    }
    filter(term) {
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        const match = this._ngSelect.searchFn || this._defaultSearchFn;
        const hideSelected = this._ngSelect.hideSelected;
        for (const key of Array.from(this._groups.keys())) {
            const matchedItems = [];
            for (const item of this._groups.get(key)) {
                if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                    continue;
                }
                const searchItem = this._ngSelect.searchFn ? item.value : item;
                if (match(term, searchItem)) {
                    matchedItems.push(item);
                }
            }
            if (matchedItems.length > 0) {
                const [last] = matchedItems.slice(-1);
                if (last.parent) {
                    const head = this._items.find(x => x === last.parent);
                    this._filteredItems.push(head);
                }
                this._filteredItems.push(...matchedItems);
            }
        }
    }
    resetFilteredItems() {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter(x => !x.selected);
        }
        else {
            this._filteredItems = this._items;
        }
    }
    unmarkItem() {
        this._markedIndex = -1;
    }
    markNextItem() {
        this._stepToItem(+1);
    }
    markPreviousItem() {
        this._stepToItem(-1);
    }
    markItem(item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    }
    markSelectedOrDefault(markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        const lastMarkedIndex = this._getLastMarkedIndex();
        if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
        }
        else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex(x => !x.disabled) : -1;
        }
    }
    resolveNested(option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            let keys = key.split('.');
            let value = option;
            for (let i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    }
    mapItem(item, index) {
        const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: `${this._ngSelect.dropdownId}-${index}`,
        };
    }
    mapSelectedItems() {
        const multiple = this._ngSelect.multiple;
        for (const selected of this.selectedItems) {
            const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
            const item = isDefined(value) ? this.findItem(value) : null;
            this._selectionModel.unselect(selected, multiple);
            this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(x => this.selectedItems.indexOf(x) === -1);
        }
    }
    _showSelected(item) {
        this._filteredItems.push(item);
        if (item.parent) {
            const parent = item.parent;
            const parentExists = this._filteredItems.find(x => x === parent);
            if (!parentExists) {
                this._filteredItems.push(parent);
            }
        }
        else if (item.children) {
            for (const child of item.children) {
                child.selected = false;
                this._filteredItems.push(child);
            }
        }
        this._filteredItems = [...this._filteredItems.sort((a, b) => (a.index - b.index))];
    }
    _hideSelected(item) {
        this._filteredItems = this._filteredItems.filter(x => x !== item);
        if (item.parent) {
            const children = item.parent.children;
            if (children.every(x => x.selected)) {
                this._filteredItems = this._filteredItems.filter(x => x !== item.parent);
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter(x => x.parent !== item);
        }
    }
    _defaultSearchFn(search, opt) {
        const label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    }
    _getNextItemIndex(steps) {
        if (steps > 0) {
            return (this._markedIndex >= this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    }
    _stepToItem(steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every(x => x.disabled)) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    }
    _getLastMarkedIndex() {
        if (this._ngSelect.hideSelected) {
            return -1;
        }
        if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
        }
        const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
        }
        return Math.max(this.markedIndex, selectedIndex);
    }
    _groupBy(items, prop) {
        const groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[prop])) {
            for (const item of items) {
                const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
                groups.set(item, children);
            }
            return groups;
        }
        const isFnKey = isFunction(this._ngSelect.groupBy);
        const keyFn = (item) => {
            let key = isFnKey ? prop(item.value) : item.value[prop];
            return isDefined(key) ? key : undefined;
        };
        // Group items by key.
        for (const item of items) {
            let key = keyFn(item);
            const group = groups.get(key);
            if (group) {
                group.push(item);
            }
            else {
                groups.set(key, [item]);
            }
        }
        return groups;
    }
    _flatten(groups) {
        const isGroupByFn = isFunction(this._ngSelect.groupBy);
        const items = [];
        for (const key of Array.from(groups.keys())) {
            let i = items.length;
            if (key === undefined) {
                const withoutGroup = groups.get(undefined) || [];
                items.push(...withoutGroup.map(x => {
                    x.index = i++;
                    return x;
                }));
                continue;
            }
            const isObjectKey = isObject(key);
            const parent = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this._ngSelect.selectableGroup,
                htmlId: newId(),
            };
            const groupKey = isGroupByFn ? this._ngSelect.bindLabel : this._ngSelect.groupBy;
            const groupValue = this._ngSelect.groupValue || (() => {
                if (isObjectKey) {
                    return key.value;
                }
                return { [groupKey]: key };
            });
            const children = groups.get(key).map(x => {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
            });
            parent.children = children;
            parent.value = groupValue(key, children.map(x => x.value));
            items.push(parent);
            items.push(...children);
        }
        return items;
    }
}

var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Esc"] = 27] = "Esc";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
    KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));

class NgDropdownPanelService {
    constructor() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    get dimensions() {
        return this._dimensions;
    }
    calculateItems(scrollPos, itemsLength, buffer) {
        const d = this._dimensions;
        const scrollHeight = d.itemHeight * itemsLength;
        const scrollTop = Math.max(0, scrollPos);
        const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        const maxStartEnd = end;
        const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        let start = Math.min(maxStart, Math.floor(indexByScrollTop));
        let topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding,
            scrollHeight,
            start,
            end
        };
    }
    setDimensions(itemHeight, panelHeight) {
        const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight,
            panelHeight,
            itemsPerViewport
        };
    }
    getScrollTo(itemTop, itemHeight, lastScroll) {
        const { panelHeight } = this.dimensions;
        const itemBottom = itemTop + itemHeight;
        const top = lastScroll;
        const bottom = top + panelHeight;
        if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
        }
        if (itemBottom > bottom) {
            return top + itemBottom - bottom;
        }
        else if (itemTop <= top) {
            return itemTop;
        }
        return null;
    }
}
NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) { return new (t || NgDropdownPanelService)(); };
NgDropdownPanelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgDropdownPanelService, factory: NgDropdownPanelService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return []; }, null); })();

const TOP_CSS_CLASS = 'ng-select-top';
const BOTTOM_CSS_CLASS = 'ng-select-bottom';
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_2__.asapScheduler;
class NgDropdownPanelComponent {
    constructor(_renderer, _zone, _panelService, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
    }
    get currentPosition() {
        return this._currentPosition;
    }
    get itemsLength() {
        return this._itemsLength;
    }
    set itemsLength(value) {
        if (value !== this._itemsLength) {
            this._itemsLength = value;
            this._onItemsLengthChanged();
        }
    }
    get _startOffset() {
        if (this.markedItem) {
            const { itemHeight, panelHeight } = this._panelService.dimensions;
            const offset = this.markedItem.index * itemHeight;
            return panelHeight > offset ? 0 : offset;
        }
        return 0;
    }
    ngOnInit() {
        this._select = this._dropdown.parentElement;
        this._virtualPadding = this.paddingElementRef.nativeElement;
        this._scrollablePanel = this.scrollElementRef.nativeElement;
        this._contentPanel = this.contentElementRef.nativeElement;
        this._handleScroll();
        this._handleOutsideClick();
        this._appendDropdown();
        this._setupMousedownListener();
    }
    ngOnChanges(changes) {
        if (changes.items) {
            const change = changes.items;
            this._onItemsChange(change.currentValue, change.firstChange);
        }
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    }
    scrollTo(option, startFromOption = false) {
        if (!option) {
            return;
        }
        const index = this.items.indexOf(option);
        if (index < 0 || index >= this.itemsLength) {
            return;
        }
        let scrollTo;
        if (this.virtualScroll) {
            const itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
        }
        else {
            const item = this._dropdown.querySelector(`#${option.htmlId}`);
            const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
        }
        if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
        }
    }
    scrollToTag() {
        const panel = this._scrollablePanel;
        panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    }
    adjustPosition() {
        this._updateYPosition();
    }
    _handleDropdownPosition() {
        this._currentPosition = this._calculateCurrentPosition(this._dropdown);
        if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.addClass(this._select, TOP_CSS_CLASS);
            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updateYPosition();
        }
        this._dropdown.style.opacity = '1';
    }
    _handleScroll() {
        this._zone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.scrollElementRef.nativeElement, 'scroll')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER))
                .subscribe((e) => {
                const path = e.path || (e.composedPath && e.composedPath());
                const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
                this._onContentScrolled(scrollTop);
            });
        });
    }
    _handleOutsideClick() {
        if (!this._document) {
            return;
        }
        this._zone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'touchstart', { capture: true }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'mousedown', { capture: true })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$))
                .subscribe($event => this._checkToClose($event));
        });
    }
    _checkToClose($event) {
        if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
        }
        const path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this._zone.run(() => this.outsideClick.emit());
    }
    _onItemsChange(items, firstChange) {
        this.items = items || [];
        this._scrollToEndFired = false;
        this.itemsLength = items.length;
        if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
        }
        else {
            this._setVirtualHeight();
            this._updateItems(firstChange);
        }
    }
    _updateItems(firstChange) {
        this.update.emit(this.items);
        if (firstChange === false) {
            return;
        }
        this._zone.runOutsideAngular(() => {
            Promise.resolve().then(() => {
                const panelHeight = this._scrollablePanel.clientHeight;
                this._panelService.setDimensions(0, panelHeight);
                this._handleDropdownPosition();
                this.scrollTo(this.markedItem, firstChange);
            });
        });
    }
    _updateItemsRange(firstChange) {
        this._zone.runOutsideAngular(() => {
            this._measureDimensions().then(() => {
                if (firstChange) {
                    this._renderItemsRange(this._startOffset);
                    this._handleDropdownPosition();
                }
                else {
                    this._renderItemsRange();
                }
            });
        });
    }
    _onContentScrolled(scrollTop) {
        if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
        }
        this._lastScrollPosition = scrollTop;
        this._fireScrollToEnd(scrollTop);
    }
    _updateVirtualHeight(height) {
        if (this._updateScrollHeight) {
            this._virtualPadding.style.height = `${height}px`;
            this._updateScrollHeight = false;
        }
    }
    _setVirtualHeight() {
        if (!this._virtualPadding) {
            return;
        }
        this._virtualPadding.style.height = `0px`;
    }
    _onItemsLengthChanged() {
        this._updateScrollHeight = true;
    }
    _renderItemsRange(scrollTop = null) {
        if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
        }
        scrollTop = scrollTop || this._scrollablePanel.scrollTop;
        const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
        this._updateVirtualHeight(range.scrollHeight);
        this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
        this._zone.run(() => {
            this.update.emit(this.items.slice(range.start, range.end));
            this.scroll.emit({ start: range.start, end: range.end });
        });
        if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
        }
    }
    _measureDimensions() {
        if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
        }
        const [first] = this.items;
        this.update.emit([first]);
        return Promise.resolve().then(() => {
            const option = this._dropdown.querySelector(`#${first.htmlId}`);
            const optionHeight = option.clientHeight;
            this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
            const panelHeight = this._scrollablePanel.clientHeight;
            this._panelService.setDimensions(optionHeight, panelHeight);
            return this._panelService.dimensions;
        });
    }
    _fireScrollToEnd(scrollTop) {
        if (this._scrollToEndFired || scrollTop === 0) {
            return;
        }
        const padding = this.virtualScroll ?
            this._virtualPadding :
            this._contentPanel;
        if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
            this._zone.run(() => this.scrollToEnd.emit());
            this._scrollToEndFired = true;
        }
    }
    _calculateCurrentPosition(dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        const selectRect = this._select.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const offsetTop = selectRect.top + window.pageYOffset;
        const height = selectRect.height;
        const dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    }
    _appendDropdown() {
        if (!this.appendTo) {
            return;
        }
        this._parent = document.querySelector(this.appendTo);
        if (!this._parent) {
            throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
        }
        this._updateXPosition();
        this._parent.appendChild(this._dropdown);
    }
    _updateXPosition() {
        const select = this._select.getBoundingClientRect();
        const parent = this._parent.getBoundingClientRect();
        const offsetLeft = select.left - parent.left;
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = select.width + 'px';
        this._dropdown.style.minWidth = select.width + 'px';
    }
    _updateYPosition() {
        const select = this._select.getBoundingClientRect();
        const parent = this._parent.getBoundingClientRect();
        const delta = select.height;
        if (this._currentPosition === 'top') {
            const offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
        }
        else if (this._currentPosition === 'bottom') {
            const offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
        }
    }
    _setupMousedownListener() {
        this._zone.runOutsideAngular(() => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._dropdown, 'mousedown')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$))
                .subscribe((event) => {
                const target = event.target;
                if (target.tagName === 'INPUT') {
                    return;
                }
                event.preventDefault();
            });
        });
    }
}
NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) { return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8)); };
NgDropdownPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgDropdownPanelComponent, selectors: [["ng-dropdown-panel"]], viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
    } }, inputs: { items: "items", position: "position", virtualScroll: "virtualScroll", filterValue: "filterValue", markedItem: "markedItem", appendTo: "appendTo", bufferAmount: "bufferAmount", headerTemplate: "headerTemplate", footerTemplate: "footerTemplate" }, outputs: { update: "update", scroll: "scroll", scrollToEnd: "scrollToEnd", outsideClick: "outsideClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 9, vars: 6, consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]], template: function NgDropdownPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NgDropdownPanelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: NgDropdownPanelService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT,] }] }
];
NgDropdownPanelComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    markedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    filterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true },] }],
    scrollElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true },] }],
    paddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                selector: 'ng-dropdown-panel',
                template: `
        <div *ngIf="headerTemplate" class="ng-dropdown-header">
            <ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
        <div #scroll class="ng-dropdown-panel-items scroll-host">
            <div #padding [class.total-padding]="virtualScroll"></div>
            <div #content [class.scrollable-content]="virtualScroll && items.length">
                <ng-content></ng-content>
            </div>
        </div>
        <div *ngIf="footerTemplate" class="ng-dropdown-footer">
            <ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
    `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: NgDropdownPanelService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
            }] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], filterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], markedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true }]
        }], scrollElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true }]
        }], paddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true }]
        }] }); })();

class NgOptionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._disabled = false;
    }
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = this._isDisabled(value); }
    get label() {
        return (this.elementRef.nativeElement.textContent || '').trim();
    }
    ngOnChanges(changes) {
        if (changes.disabled) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    }
    ngAfterViewChecked() {
        if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML
            });
        }
    }
    ngOnDestroy() {
        this.stateChange$.complete();
    }
    _isDisabled(value) {
        return value != null && `${value}` !== 'false';
    }
}
NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) { return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
NgOptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOptionComponent, selectors: [["ng-option"]], inputs: { disabled: "disabled", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 1, vars: 0, template: function NgOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NgOptionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
NgOptionComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ng-option',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `<ng-content></ng-content>`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class NgSelectConfig {
    constructor() {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
    }
}
NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) { return new (t || NgSelectConfig)(); };
NgSelectConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

const SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ng-select-selection-model');
class NgSelectComponent {
    constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        this.classes = classes;
        this.autoFocus = autoFocus;
        this.config = config;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;
        this.keyDownFn = (_) => true;
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this.useDefaultClass = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this.clearItem = (item) => {
            const option = this.selectedItems.find(x => x.value === item);
            this.unselect(option);
        };
        this.trackByOption = (_, item) => {
            if (this.trackByFn) {
                return this.trackByFn(item.value);
            }
            return item;
        };
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    get items() { return this._items; }
    ;
    set items(value) {
        if (value === null) {
            value = [];
        }
        this._itemsAreUsed = true;
        this._items = value;
    }
    ;
    get compareWith() { return this._compareWith; }
    set compareWith(fn) {
        if (fn !== undefined && fn !== null && !isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
        }
        this._compareWith = fn;
    }
    get clearSearchOnAdd() {
        if (isDefined(this._clearSearchOnAdd)) {
            return this._clearSearchOnAdd;
        }
        else if (isDefined(this.config.clearSearchOnAdd)) {
            return this.config.clearSearchOnAdd;
        }
        return this.closeOnSelect;
    }
    ;
    set clearSearchOnAdd(value) {
        this._clearSearchOnAdd = value;
    }
    ;
    get disabled() { return this.readonly || this._disabled; }
    ;
    get filtered() { return (!!this.searchTerm && this.searchable || this._isComposing); }
    ;
    get _editableSearchTerm() {
        return this.editableSearchTerm && !this.multiple;
    }
    get selectedItems() {
        return this.itemsList.selectedItems;
    }
    get selectedValues() {
        return this.selectedItems.map(x => x.value);
    }
    get hasValue() {
        return this.selectedItems.length > 0;
    }
    get currentPanelPosition() {
        if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
        }
        return undefined;
    }
    ngOnInit() {
        this._handleKeyPresses();
        this._setInputAttributes();
    }
    ngOnChanges(changes) {
        if (changes.multiple) {
            this.itemsList.clearSelected();
        }
        if (changes.items) {
            this._setItems(changes.items.currentValue || []);
        }
        if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
        }
    }
    ngAfterViewInit() {
        if (!this._itemsAreUsed) {
            this.escapeHTML = false;
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    handleKeyDown($event) {
        const keyCode = KeyCode[$event.which];
        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            this.handleKeyCode($event);
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }
    handleKeyCode($event) {
        switch ($event.which) {
            case KeyCode.ArrowDown:
                this._handleArrowDown($event);
                break;
            case KeyCode.ArrowUp:
                this._handleArrowUp($event);
                break;
            case KeyCode.Space:
                this._handleSpace($event);
                break;
            case KeyCode.Enter:
                this._handleEnter($event);
                break;
            case KeyCode.Tab:
                this._handleTab($event);
                break;
            case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;
            case KeyCode.Backspace:
                this._handleBackspace();
                break;
        }
    }
    handleMousedown($event) {
        const target = $event.target;
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    }
    handleArrowClick() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    handleClearClick() {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        this.clearEvent.emit();
        this._onSelectionChanged();
    }
    clearModel() {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    }
    writeValue(value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(state) {
        this._disabled = state;
        this._cd.markForCheck();
    }
    toggle() {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    }
    open() {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.searchTerm) {
            this.focus();
        }
        this.detectChanges();
    }
    close() {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        this._isComposing = false;
        if (!this._editableSearchTerm) {
            this._clearSearch();
        }
        else {
            this.itemsList.resetFilteredItems();
        }
        this.itemsList.unmarkItem();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    }
    toggleItem(item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this._onSelectionChanged();
    }
    select(item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
            }
            this._updateNgModel();
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    }
    focus() {
        this.searchInput.nativeElement.focus();
    }
    blur() {
        this.searchInput.nativeElement.blur();
    }
    unselect(item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    }
    selectTag() {
        let tag;
        if (isFunction(this.addTag)) {
            tag = this.addTag(this.searchTerm);
        }
        else {
            tag = this._primitive ? this.searchTerm : { [this.bindLabel]: this.searchTerm };
        }
        const handleTag = (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
        if (isPromise(tag)) {
            tag.then(item => this.select(handleTag(item))).catch(() => { });
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    }
    showClear() {
        return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
    }
    get showAddTag() {
        if (!this._validTerm) {
            return false;
        }
        const term = this.searchTerm.toLowerCase().trim();
        return this.addTag &&
            (!this.itemsList.filteredItems.some(x => x.label.toLowerCase() === term) &&
                (!this.hideSelected && this.isOpen || !this.selectedItems.some(x => x.label.toLowerCase() === term))) &&
            !this.loading;
    }
    showNoItemsFound() {
        const empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this._validTerm && !this.loading)) &&
            !this.showAddTag;
    }
    showTypeToSearch() {
        const empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this._validTerm && !this.loading;
    }
    onCompositionStart() {
        this._isComposing = true;
    }
    onCompositionEnd(term) {
        this._isComposing = false;
        if (this.searchWhileComposing) {
            return;
        }
        this.filter(term);
    }
    filter(term) {
        if (this._isComposing && !this.searchWhileComposing) {
            return;
        }
        this.searchTerm = term;
        if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
        }
        if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term, items: this.itemsList.filteredItems.map(x => x.value) });
        this.open();
    }
    onInputFocus($event) {
        if (this.focused) {
            return;
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    }
    onInputBlur($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.focused = false;
    }
    onItemHover(item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    }
    detectChanges() {
        if (!this._cd.destroyed) {
            this._cd.detectChanges();
        }
    }
    _setSearchTermFromItems() {
        const selected = this.selectedItems && this.selectedItems[0];
        this.searchTerm = (selected && selected.label) || null;
    }
    _setItems(items) {
        const firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    }
    _setItemsFromNgOptions() {
        const mapNgOptions = (options) => {
            this.items = options.map(option => ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }));
            this.itemsList.setItems(this.items);
            if (this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            this.detectChanges();
        };
        const handleOptionChange = () => {
            const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.ngOptions.changes, this._destroy$);
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.ngOptions.map(option => option.stateChange$))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(changedOrDestroyed))
                .subscribe(option => {
                const item = this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                item.label = option.label || item.label;
                this._cd.detectChanges();
            });
        };
        this.ngOptions.changes
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.ngOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$))
            .subscribe(options => {
            this.bindLabel = this._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
        });
    }
    _isValidWriteValue(value) {
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        const validateBinding = (item) => {
            if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
                this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
                return false;
            }
            return true;
        };
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every(item => validateBinding(item));
        }
        else {
            return validateBinding(value);
        }
    }
    _handleWriteValue(ngModel) {
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        const select = (val) => {
            let item = this.itemsList.findItem(val);
            if (item) {
                this.itemsList.select(item);
            }
            else {
                const isValObject = isObject(val);
                const isPrimitive = !isValObject && !this.bindValue;
                if ((isValObject || isPrimitive)) {
                    this.itemsList.select(this.itemsList.mapItem(val, null));
                }
                else if (this.bindValue) {
                    item = {
                        [this.bindLabel]: null,
                        [this.bindValue]: val
                    };
                    this.itemsList.select(this.itemsList.mapItem(item, null));
                }
            }
        };
        if (this.multiple) {
            ngModel.forEach(item => select(item));
        }
        else {
            select(ngModel);
        }
    }
    _handleKeyPresses() {
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(letter => this._pressedKeys.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(() => this._pressedKeys.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(() => this._pressedKeys.join('')))
            .subscribe(term => {
            const item = this.itemsList.findByLabel(term);
            if (item) {
                if (this.isOpen) {
                    this.itemsList.markItem(item);
                    this._scrollToMarked();
                    this._cd.markForCheck();
                }
                else {
                    this.select(item);
                }
            }
            this._pressedKeys = [];
        });
    }
    _setInputAttributes() {
        const input = this.searchInput.nativeElement;
        const attributes = Object.assign({ type: 'text', autocorrect: 'off', autocapitalize: 'off', autocomplete: this.labelForId ? 'off' : this.dropdownId }, this.inputAttrs);
        for (const key of Object.keys(attributes)) {
            input.setAttribute(key, attributes[key]);
        }
    }
    _updateNgModel() {
        const model = [];
        for (const item of this.selectedItems) {
            if (this.bindValue) {
                let value = null;
                if (item.children) {
                    const groupKey = this.groupValue ? this.bindValue : this.groupBy;
                    value = item.value[groupKey || this.groupBy];
                }
                else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                }
                model.push(value);
            }
            else {
                model.push(item.value);
            }
        }
        const selected = this.selectedItems.map(x => x.value);
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    }
    _clearSearch() {
        if (!this.searchTerm) {
            return;
        }
        this._changeSearch(null);
        this.itemsList.resetFilteredItems();
    }
    _changeSearch(searchTerm) {
        this.searchTerm = searchTerm;
        if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
        }
    }
    _scrollToMarked() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    }
    _scrollToTag() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollToTag();
    }
    _onSelectionChanged() {
        if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();
            this.dropdownPanel.adjustPosition();
        }
    }
    _handleTab($event) {
        if (this.isOpen === false && !this.addTag) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    }
    _handleEnter($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
    }
    _handleSpace($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    }
    _handleArrowDown($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    }
    _handleArrowUp($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    }
    _nextItemIsTag(nextStep) {
        const nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.searchTerm
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    }
    _handleBackspace() {
        if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    }
    get _isTypeahead() {
        return this.typeahead && this.typeahead.observers.length > 0;
    }
    get _validTerm() {
        const term = this.searchTerm && this.searchTerm.trim();
        return term && term.length >= this.minTermLength;
    }
    _mergeGlobalConfig(config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
        this.appendTo = this.appendTo || config.appendTo;
        this.bindValue = this.bindValue || config.bindValue;
        this.bindLabel = this.bindLabel || config.bindLabel;
        this.appearance = this.appearance || config.appearance;
    }
}
NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) { return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService)); };
NgSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgSelectComponent, selectors: [["ng-select"]], contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
    } }, viewQuery: function NgSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, hostVars: 20, hostBindings: function NgSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
    } }, inputs: { markFirst: "markFirst", dropdownPosition: "dropdownPosition", loading: "loading", closeOnSelect: "closeOnSelect", hideSelected: "hideSelected", selectOnTab: "selectOnTab", bufferAmount: "bufferAmount", selectableGroup: "selectableGroup", selectableGroupAsModel: "selectableGroupAsModel", searchFn: "searchFn", trackByFn: "trackByFn", clearOnBackspace: "clearOnBackspace", labelForId: "labelForId", inputAttrs: "inputAttrs", readonly: "readonly", searchWhileComposing: "searchWhileComposing", minTermLength: "minTermLength", editableSearchTerm: "editableSearchTerm", keyDownFn: "keyDownFn", multiple: "multiple", addTag: "addTag", searchable: "searchable", clearable: "clearable", isOpen: "isOpen", items: "items", compareWith: "compareWith", clearSearchOnAdd: "clearSearchOnAdd", bindLabel: "bindLabel", placeholder: "placeholder", notFoundText: "notFoundText", typeToSearchText: "typeToSearchText", addTagText: "addTagText", loadingText: "loadingText", clearAllText: "clearAllText", virtualScroll: "virtualScroll", openOnEnter: "openOnEnter", appendTo: "appendTo", bindValue: "bindValue", appearance: "appearance", maxSelectedItems: "maxSelectedItems", groupBy: "groupBy", groupValue: "groupValue", tabIndex: "tabIndex", typeahead: "typeahead" }, outputs: { blurEvent: "blur", focusEvent: "focus", changeEvent: "change", openEvent: "open", closeEvent: "close", searchEvent: "search", clearEvent: "clear", addEvent: "add", removeEvent: "remove", scroll: "scroll", scrollToEnd: "scrollToEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
                multi: true
            }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 19, consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"], ["aria-autocomplete", "list", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", "role", "listbox", "aria-label", "Options list", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]], template: function NgSelectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) { return ctx.handleMousedown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.filter(_r2.value); })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() { return ctx.onCompositionStart(); })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onCompositionEnd(_r2.value); })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) { return ctx.onInputFocus($event); })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) { return ctx.onInputBlur($event); })("change", function NgSelectComponent_Template_input_change_7_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass], styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:load8 .8s infinite linear;animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:bold;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"], encapsulation: 2, changeDetection: 0 });
NgSelectComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['class',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['autofocus',] }] },
    { type: NgSelectConfig },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [SELECTION_MODEL_FACTORY,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: ConsoleService }
];
NgSelectComponent.propDecorators = {
    bindLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bindValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    markFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    typeToSearchText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    addTagText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clearAllText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dropdownPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    closeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hideSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    openOnEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectableGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectableGroupAsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    searchFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    trackByFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clearOnBackspace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelForId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    inputAttrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    searchWhileComposing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minTermLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    editableSearchTerm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    keyDownFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-typeahead',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-multiple',] }],
    addTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-taggable',] }],
    searchable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-searchable',] }],
    clearable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-clearable',] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-opened',] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clearSearchOnAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['blur',] }],
    focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['focus',] }],
    changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['change',] }],
    openEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['open',] }],
    closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['close',] }],
    searchEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['search',] }],
    clearEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['clear',] }],
    addEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['add',] }],
    removeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['remove',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['scroll',] }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['scrollToEnd',] }],
    optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    optgroupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    labelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    multiLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    typeToSearchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    loadingTextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    tagTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    loadingSpinnerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }],
    dropdownPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgDropdownPanelComponent),] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['searchInput', { static: true },] }],
    ngOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-disabled',] }],
    filtered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-filtered',] }],
    handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ng-select',
                template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"(!multiLabelTemplate  || !multiple ) && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiple && multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\"\n            role=\"combobox\" \n            [attr.aria-expanded]=\"isOpen\" \n            [attr.aria-owns]=\"isOpen ? dropdownId : null\" \n            aria-haspopup=\"listbox\">\n\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n                   aria-autocomplete=\"list\"\n                   [attr.aria-controls]=\"isOpen ? dropdownId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\"\n                   role=\"listbox\"\n                   aria-label=\"Options list\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
                        multi: true
                    }, NgDropdownPanelService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ng-select]': 'useDefaultClass',
                    '[class.ng-select-single]': '!multiple'
                },
                styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:load8 .8s infinite linear;animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:bold;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['class']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['autofocus']
            }] }, { type: NgSelectConfig }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [SELECTION_MODEL_FACTORY]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: ConsoleService }]; }, { markFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dropdownPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], closeOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hideSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectOnTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectableGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectableGroupAsModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], searchFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], trackByFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], clearOnBackspace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], labelForId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], inputAttrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], searchWhileComposing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minTermLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], editableSearchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], keyDownFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-multiple']
        }], addTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-taggable']
        }], searchable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-searchable']
        }], clearable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-clearable']
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-opened']
        }], blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['blur']
        }], focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['focus']
        }], changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['change']
        }], openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['open']
        }], closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['close']
        }], searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['search']
        }], clearEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['clear']
        }], addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['add']
        }], removeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['remove']
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['scroll']
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['scrollToEnd']
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], clearSearchOnAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-disabled']
        }], filtered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-filtered']
        }], handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
        }], bindLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], typeToSearchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], addTagText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], clearAllText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], openOnEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bindValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxSelectedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], typeahead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-typeahead']
        }], optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], optgroupTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], labelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], multiLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], typeToSearchTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], loadingTextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], tagTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], loadingSpinnerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }], dropdownPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgDropdownPanelComponent)]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['searchInput', { static: true }]
        }], ngOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NgOptionComponent, { descendants: true }]
        }] }); })();

function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
class DefaultSelectionModel {
    constructor() {
        this._selected = [];
    }
    get value() {
        return this._selected;
    }
    select(item, multiple, groupAsModel) {
        item.selected = true;
        if (!item.children || (!multiple && groupAsModel)) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                const childrenCount = item.parent.children.length;
                const selectedCount = item.parent.children.filter(x => x.selected).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (groupAsModel && this._activeChildren(item)) {
                    this._selected = [...this._selected.filter(x => x.parent !== item), item];
                }
                else {
                    this._selected = [...this._selected, ...item.children.filter(x => !x.disabled)];
                }
            }
        }
    }
    unselect(item, multiple) {
        this._selected = this._selected.filter(x => x !== item);
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                const children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                this._selected.push(...children.filter(x => x !== item && !x.disabled));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    }
    clear(keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter(x => x.disabled) : [];
    }
    _setChildrenSelectedState(children, selected) {
        for (const child of children) {
            if (child.disabled) {
                continue;
            }
            child.selected = selected;
        }
    }
    _removeChildren(parent) {
        this._selected = [
            ...this._selected.filter(x => x.parent !== parent),
            ...parent.children.filter(x => x.parent === parent && x.disabled && x.selected)
        ];
    }
    _removeParent(parent) {
        this._selected = this._selected.filter(x => x !== parent);
    }
    _activeChildren(item) {
        return item.children.every(x => !x.disabled || x.selected);
    }
}

const ɵ0 = DefaultSelectionModelFactory;
class NgSelectModule {
}
NgSelectModule.ɵfac = function NgSelectModule_Factory(t) { return new (t || NgSelectModule)(); };
NgSelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgSelectModule });
NgSelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    NgDropdownPanelComponent,
                    NgOptionComponent,
                    NgSelectComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective,
                    NgItemLabelDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule
                ],
                exports: [
                    NgSelectComponent,
                    NgOptionComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective
                ],
                providers: [
                    { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSelectModule, { declarations: function () { return [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]; }, exports: function () { return [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective]; } }); })();

/*
 * Public API Surface of ng-select
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-select-ng-select.js.map

/***/ }),

/***/ 2217:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": function() { return /* binding */ Scheduler; }
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 46797:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": function() { return /* binding */ timer; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 69165);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 33637);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 26561);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 54869);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 49732:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audit": function() { return /* binding */ audit; }
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 85345);

function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
class AuditOperator {
    constructor(durationSelector) {
        this.durationSelector = durationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    }
}
class AuditSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination, durationSelector) {
        super(destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    _next(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            let duration;
            try {
                const { durationSelector } = this;
                duration = durationSelector(value);
            }
            catch (err) {
                return this.destination.error(err);
            }
            const innerSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(this));
            if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
            }
            else {
                this.add(this.throttled = innerSubscription);
            }
        }
    }
    clearThrottle() {
        const { value, hasValue, throttled } = this;
        if (throttled) {
            this.remove(throttled);
            this.throttled = undefined;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = undefined;
            this.hasValue = false;
            this.destination.next(value);
        }
    }
    notifyNext() {
        this.clearThrottle();
    }
    notifyComplete() {
        this.clearThrottle();
    }
}
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ 45697:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auditTime": function() { return /* binding */ auditTime; }
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 33637);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 49732);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 46797);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}
//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ 54395:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": function() { return /* binding */ debounceTime; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 77393);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 33637);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 46782:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": function() { return /* binding */ takeUntil; }
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 85345);

function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext() {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 22901:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; }
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 10826);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 27589:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameAction": function() { return /* binding */ AnimationFrameAction; }
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 401);

class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(() => scheduler.flush(null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ 28644:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameScheduler": function() { return /* binding */ AnimationFrameScheduler; }
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);

class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ 57339:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapAction": function() { return /* binding */ AsapAction; }
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ 66239);
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 401);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ 75899:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapScheduler": function() { return /* binding */ AsapScheduler; }
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ 401:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": function() { return /* binding */ AsyncAction; }
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 22901);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 4548:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": function() { return /* binding */ AsyncScheduler; }
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 2217);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 54857:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationFrameScheduler": function() { return /* binding */ animationFrameScheduler; },
/* harmony export */   "animationFrame": function() { return /* binding */ animationFrame; }
/* harmony export */ });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameAction */ 27589);
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameScheduler */ 28644);


const animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);
const animationFrame = animationFrameScheduler;
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ 58571:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asapScheduler": function() { return /* binding */ asapScheduler; },
/* harmony export */   "asap": function() { return /* binding */ asap; }
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 57339);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 75899);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ 33637:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": function() { return /* binding */ asyncScheduler; },
/* harmony export */   "async": function() { return /* binding */ async; }
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 401);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 66239:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immediate": function() { return /* binding */ Immediate; },
/* harmony export */   "TestTools": function() { return /* binding */ TestTools; }
/* harmony export */ });
let nextHandle = 1;
const RESOLVED = (() => Promise.resolve())();
const activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
const Immediate = {
    setImmediate(cb) {
        const handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(() => findAndClearHandle(handle) && cb());
        return handle;
    },
    clearImmediate(handle) {
        findAndClearHandle(handle);
    },
};
const TestTools = {
    pending() {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ 26561:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": function() { return /* binding */ isNumeric; }
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 59796);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": function() { return /* binding */ Tab1PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": function() { return /* binding */ Tab1PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": function() { return /* binding */ Tab1Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 99474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);









let Tab1Page = class Tab1Page {
    constructor(router, activatedRoute, http, route, popoverController) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.popoverController = popoverController;
        this.intervalId = 0;
        this.Counter = '';
        this.seconds = 11;
        this.hour = 1;
        this.city = "coimbatore";
        // userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        this.slideName = 'Home';
        this.isvisible = false;
        this.popUpisvisible = false;
        this.productDetails = true;
        this.storedetailsVisible = false;
        this.noDataFound = false;
        this.ExpirynoDataFound = true;
        this.offerListVisible = true;
        this.getCategoryList = [];
        this.offerlist = [];
        this.offerView = [];
        this.storedetails = [];
        this.locationChangeVisible = false;
        //--------------- Ion slide option ----------//
        this.slideOpts = {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        };
        this.expiryofferlist = [];
        this.locationsList = [];
        route.params.subscribe(val => {
            this.offerList();
            this.locationList();
            // this.expiryOfferList()
        });
    }
    ngOnInit() {
        this.getSelectCategory();
        this.offerList();
        this.start();
    }
    ngOnDestroy() { this.clearTimer(); }
    clearTimer() { clearInterval(this.intervalId); }
    start() { this.countDown(); }
    stop() {
        this.clearTimer();
        this.Counter = `$ ${this.hour} {this.seconds} `;
    }
    countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.Counter = 'Offers Ends..!';
            }
            else {
                if (this.seconds < 0) {
                    this.seconds = 60;
                } // reset
                this.Counter = `${this.hour}. ${this.seconds} Hrs`;
            }
        }, 1000);
    }
    hidepopup() {
        this.popUpisvisible = false;
    }
    showPopup() {
        this.popUpisvisible = true;
    }
    // ----------- spam report -----------//
    spam(val) {
        console.log(this.spamMsg);
        if (this.spamMsg == true) {
            this.spam_msg = "spam Msg";
        }
        else {
            this.spam_msg = "";
        }
    }
    // ----------- storeNA report -----------//
    storeNA(val) {
        if (this.store == true) {
            this.store = "store NA";
        }
        else {
            this.store = "";
        }
    }
    // ----------- OfferDenaid report -----------//
    OfferDenaid(val) {
        if (this.store == true) {
            this.offer_denied = "offer Denaid";
        }
        else {
            this.offer_denied = "";
        }
    }
    // ----------- Seller report Api call -----------//
    reportSeller() {
        const obj = {
            store_name: this.storeID,
            spam_msg: this.spam_msg,
            store: this.store,
            offer_denied: this.offer_denied,
            others: this.others
        };
        this.http.post('/seller_report', obj).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.others = '';
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Report Successfully'
                });
                this.popUpisvisible = false;
            }
        }, (error) => {
            console.log(error);
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'error',
                title: 'Something Went Wrong'
            });
        });
    }
    //------------- Read one Offer(card) Api call ------------//
    singleCard(tbid) {
        this.deliveryAvilability = '';
        const o = tbid;
        this.isvisible = true;
        this.storedetailsVisible = false;
        this.productDetails = true;
        this.http.get('/readone_offer_user?o=' + o).subscribe((response) => {
            if (response.success == "true") {
                this.storeTbid = response.records.tbid;
                this.storeLogo = response.records.store_logo;
                this.storeName = response.records.store_name;
                this.productName = response.records.product;
                this.productImage = response.records.product_image;
                this.description = response.records.description;
                this.offer = response.records.offer;
                this.totalPrice = response.records.total_cost;
                this.offerPrice = response.records.offer_price;
                this.offerTime = response.records.offer_time,
                    this.unit = response.records.product_unit;
            }
        }, (error) => {
            console.log(error);
        });
    }
    //---------------Get Store Details  Api call -------------//
    storeDetails(storename) {
        this.storedetailsVisible = true;
        this.productDetails = false;
        const obj = {
            store_name: storename
        };
        this.http.post('/store_details_user', obj).subscribe((response) => {
            this.storedetails = response.records;
            console.log(this.storedetails);
            this.storeAddress = response.records.store_address;
            this.websiteLink = response.records.website;
            this.whatsApp = response.records.whatsapp;
            this.contact = response.records.contact_number;
            this.instagram = response.records.instagram;
            this.storeID = response.records.tbid;
            this.deliveryAvilability = response.records.delivery_availability;
            if (this.deliveryAvilability == 1 && this.deliveryAvilability == false && this.deliveryAvilability == "Available") {
                this.deliveryAvilability = false;
            }
            else {
                this.deliveryAvilability = true;
            }
        }, (error) => {
            console.log(error);
        });
    }
    //-------------- Navigate to dashboard ----------//
    navigateHome() {
        this.storedetailsVisible = false;
        this.isvisible = false;
        this.productDetails = true;
    }
    //-------------- Navigate to searchPage ----------//
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
    //-------------- Navigate to setalarmPage ----------//
    setalarm() {
        this.router.navigate(['/setalarm']);
    }
    //-------------- Navigate to notificationPage ----------//
    notification() {
        this.router.navigate(['/notification']);
    }
    //--------- Get User Selected store Category's------------//
    getSelectCategory() {
        this.http.get('/store_category').subscribe((response) => {
            this.getCategoryList = response.records;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    //------------- get offer list -----------//
    offerList() {
        const data = {
            city: this.city
        };
        this.http.post('/list_all_offer', data).subscribe((response) => {
            this.offerlist = response.records;
            console.log(this.offerlist);
            if (response.message == "No offers found.") {
                this.noDataFound = true;
            }
            else {
                this.noDataFound = false;
            }
        }, (error) => {
            console.log(error);
            this.noDataFound = true;
        });
    }
    //------------- get offer list -----------//
    expiryOfferList() {
        this.http.get('/list_all_offer').subscribe((response) => {
            this.expiryofferlist = response.records;
            console.log(this.offerlist);
            // if(response.message == "No offers found."){
            //   this.noDataFound = true;
            // }else{
            //   this.noDataFound = false;
            // }
        }, (error) => {
            console.log(error);
            // this.noDataFound = true;
        });
    }
    //------------- click home slider ----------//
    clickSlideHome() {
        this.offerlist = [];
        this.slideName = "Home";
        this.offerListVisible = true;
        this.noDataFound = false;
        this.isvisible = false;
        this.offerList();
    }
    //------------- click  slider to fetch data based on category ----------//
    clickSlide(item) {
        console.log(item);
        this.isvisible = false;
        this.slideName = item;
        if (this.slideName == "Home") {
            this.offerListVisible = true;
            this.noDataFound = false;
            this.offerList();
        }
        const obj = {
            store_category: item,
            city: this.city
        };
        this.http.post('/list_offer_category', obj).subscribe((response) => {
            if (response.success == "true") {
                this.offerlist = response.records;
                console.log(response);
                this.offerListVisible = true;
                this.noDataFound = false;
            }
            else {
            }
        }, (error) => {
            console.log(error);
            this.offerListVisible = false;
            this.noDataFound = true;
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
    changeLocation() {
        console.log(this.city);
        if (this.city == "All") {
            this.http.get('/list_all_offer').subscribe((response) => {
                this.offerlist = response.records;
                console.log(this.offerlist);
                if (response.message == "No offers found.") {
                    this.noDataFound = true;
                }
                else {
                    this.noDataFound = false;
                }
            }, (error) => {
                console.log(error);
                this.noDataFound = true;
            });
        }
    }
    locationChange() {
        this.locationChangeVisible = !this.locationChangeVisible;
    }
    testSlide() {
        this.router.navigate(['/slide-test']);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 99474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border: 1px solid #FFFFFF;\n  border-radius: 3px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n  margin-bottom: 20px;\n  margin-right: 4px;\n  cursor: pointer;\n}\n\n#social-media-icon-div {\n  border: 1px solid #FFFFFF;\n  border-radius: 8px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n}\n\np {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n#offer {\n  padding: 2px !important;\n  margin: 5px !important;\n}\n\n.report-seller-btn {\n  background: linear-gradient(to right, #ff80a0 0%, #eb154b 100%);\n  color: #fff;\n  margin-left: 10%;\n}\n\n#product_img {\n  border: 1px solid #FFFFFF;\n  border-radius: 15%;\n  box-shadow: 3px 3px 16px 4px #ccc;\n  width: 85px;\n  height: 75px;\n}\n\n#share {\n  color: #fff !important;\n}\n\n.dot {\n  height: 30px;\n  width: 30px;\n  margin-left: 5%;\n  background: #eb154b;\n  color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n  box-shadow: 3px 3px 16px 4px #ccc;\n}\n\n#heart {\n  margin-left: -10px !important;\n  border-radius: 50% !important;\n  height: 20px;\n  width: 20px;\n}\n\n.green {\n  color: #404040 !important;\n}\n\n.red {\n  color: red !important;\n  border-radius: 55%;\n  padding: 2px;\n}\n\n.btn-default {\n  color: white;\n  background-color: blue;\n}\n\n.btn-change {\n  color: Red;\n  background-color: white;\n}\n\nion-chip.active {\n  color: red !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\n\nion-slides {\n  height: 50px !important;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 15px;\n  background-color: #fff !important;\n}\n\n.featured-slide {\n  width: 50% !important;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.featured-slide .info {\n  margin: 50px !important;\n  margin-left: 0 !important;\n  margin-right: 0px !important;\n  font-size: 17px !important;\n  color: #6E7989;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.div-slides {\n  bottom: 0;\n  width: 100%;\n  display: block;\n  background-color: #e6e6e6;\n}\n\n.div-slides img {\n  margin: 10px;\n  margin-right: 2px !important;\n  border-radius: 75px;\n}\n\n.tam-title {\n  margin-top: -0.5%;\n  font-size: 80%;\n  font-weight: bold;\n  color: #6E7989;\n}\n\nion-slide {\n  margin-left: -20px !important;\n  margin-right: 23px !important;\n  border-radius: 50%;\n}\n\nion-badge {\n  z-index: 999 !important;\n}\n\n#slideItem.active {\n  color: #121212;\n  font-weight: 700;\n}\n\n.tam-title.active {\n  color: blue !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\n\n.pop-up-card {\n  box-shadow: 2px 2px 3px rgba(128, 128, 128, 0.664);\n  position: absolute;\n  top: 35%;\n  z-index: 1;\n  left: 2%;\n  border-radius: 10px;\n  width: 95%;\n}\n\nion-label {\n  font-size: 10px !important;\n}\n\nion-checkbox {\n  margin: 10px;\n}\n\ninput {\n  border-radius: 3px;\n  width: 90%;\n}\n\n.submit-btn {\n  text-align: center;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  margin: 5px;\n  color: #fff;\n}\n\nion-item {\n  --background:#fffff;\n  height: 35px;\n  width: 100%;\n  margin-left: 35%;\n  --box-shadow: rgba(172, 22, 22, 0.04) 0px 3px 5px !important;\n}\n\nion-content {\n  --background:#F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtBQUdGOztBQUFBO0VBQ0UsK0RBQUE7RUFHQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDQyxzQkFBQTtBQUNEOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBTUE7RUFDQyw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIRDs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBS0E7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZEOztBQUtBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBTUE7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsK0RBQUE7QUFIRjs7QUFRQTtFQUVFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFORjs7QUFVQTtFQUNFLHFCQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVJGOztBQVVFO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFSSjs7QUFnQkE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtBQWRGOztBQWVFO0VBSUksWUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFoQk47O0FBbUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBaEJGOztBQW1CQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSx1QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0Usc0JBQUE7RUFDQSwrREFBQTtBQWhCRjs7QUFzQkE7RUFDRSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBbkJGOztBQXVCQTtFQUNFLDBCQUFBO0FBcEJGOztBQXNCQTtFQUNFLFlBQUE7QUFuQkY7O0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBdkJGOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsOERBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtBQTFCRjs7QUE2QkE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0REFBQTtBQTNCQTs7QUErQkE7RUFDRSwrQkFBQTtFQUtBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBaENGOztBQWlDRTtFQUNJLGFBQUE7QUEvQk4iLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgYm9yZGVyOjFweCBzb2xpZCAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDRweCAjY2NjO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6NHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzb2NpYWwtbWVkaWEtaWNvbi1kaXZ7XG4gIGJvcmRlcjoxcHggc29saWQgI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggI2NjYztcbn1cbnB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4jb2ZmZXJ7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xufVxuXG4ucmVwb3J0LXNlbGxlci1idG57XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmODBhMFxuICAwJSwgI2ViMTU0YlxuICAxMDAlKTtcbiAgY29sb3I6I2ZmZjtcbiAgbWFyZ2luLWxlZnQ6MTAlO1xuICBcbn1cblxuI3Byb2R1Y3RfaW1ne1xuICBib3JkZXI6MXB4IHNvbGlkICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgYm94LXNoYWRvdzozcHggM3B4IDE2cHggNHB4ICNjY2M7XG4gIHdpZHRoOiA4NXB4O1xuICBoZWlnaHQ6NzVweDtcbn1cbiNzaGFyZXtcbiBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5kb3Qge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJhY2tncm91bmQ6cmdiKDIzNSwgMjEsIDc1KTtcbiAgY29sb3I6I2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6M3B4IDNweCAxNnB4IDRweCAjY2NjO1xuICBcbn1cblxuXG5cblxuI2hlYXJ0e1xuIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xuIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuIGhlaWdodDoyMHB4O1xuIHdpZHRoOiAyMHB4O1xufVxuLmdyZWVuIHtcbiAgY29sb3I6ICM0MDQwNDAgIWltcG9ydGFudDtcbn1cblxuLnJlZCB7XG4gY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuIGJvcmRlci1yYWRpdXM6IDU1JTtcbiBwYWRkaW5nOiAycHg7XG59XG5cbi5idG4tZGVmYXVsdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcblxufVxuXG4uYnRuLWNoYW5nZSB7XG4gIGNvbG9yOiBSZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2hpcC5hY3RpdmV7IFxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU1NWM1OVxuICAwJSwgIzFkMWYxZVxuICAxMDAlKTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIFxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIFxufVxuXG4uZmVhdHVyZWQtc2xpZGUge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIC8vIGJveC1zaGFkb3c6IDNweCAtMnB4IDExcHggM3B4I2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgLmluZm8ge1xuICAgIG1hcmdpbjogNTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudCA7XG4gICAgY29sb3I6ICM2RTc5ODk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59XG5cblxuLy8gaW9uLXNsaWRlc3tcbi8vICAgaGVpZ2h0OjE1MHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG4uZGl2LXNsaWRlc3sgICAgXG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7ICAgIFxuICAvLyBoZWlnaHQ6IDE2MHB4O1xuICBkaXNwbGF5OiBibG9jazsgICAgICAgIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBpbWd7XG4gICAgICAvLyB3aWR0aDogNTVweDtcbiAgICAgIC8vIGhlaWdodDogNTBweDtcbiAgICAgIC8vIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICBtYXJnaW46MTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA3NXB4IDtcbiAgfVxufVxuLnRhbS10aXRsZXtcbiAgbWFyZ2luLXRvcDogLTAuNSU7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2RTc5ODk7XG4gIC8vIG1hcmdpbi1sZWZ0OiAtNzVweCAhaW1wb3J0YW50O1xufVxuaW9uLXNsaWRle1xuICBtYXJnaW4tbGVmdDotMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6MjNweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59ICBcblxuaW9uLWJhZGdle1xuICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbn1cblxuI3NsaWRlSXRlbS5hY3RpdmV7XG4gIGNvbG9yOiAjMTIxMjEyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udGFtLXRpdGxlLmFjdGl2ZXsgXG4gIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU1NWM1OVxuICAwJSwgIzFkMWYxZVxuICAxMDAlKTtcbn1cblxuLy9Qb3AtVXAtQ2FyZFxuLnBvcC11cC1jYXJkIHtcbiAgYm94LXNoYWRvdyAgIDogMnB4IDJweCAzcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjY2NCk7XG4gIHBvc2l0aW9uICAgICA6IGFic29sdXRlO1xuICB0b3AgICAgICAgICAgOiAzNSU7XG4gIHotaW5kZXggICAgICA6IDE7XG4gIGxlZnQgICAgICAgIDogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG59XG5cblxuaW9uLWxhYmVse1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jaGVja2JveHtcbiAgbWFyZ2luOjEwcHg7XG59XG4vLyAuY2FyZHtcbi8vICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuLy8gICBoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O1xuLy8gICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ZmZjtcbi8vIH1cbmlucHV0e1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cblxuLnN1Ym1pdC1idG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbjAlLCAjMjNkNWFiXG4xMDAlKTtcbiAgbWFyZ2luOjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1pdGVte1xuLS1iYWNrZ3JvdW5kOiNmZmZmZjtcbmhlaWdodDozNXB4O1xud2lkdGg6IDEwMCU7XG5tYXJnaW4tbGVmdDogMzUlO1xuLy8gYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG4tLWJveC1zaGFkb3c6IHJnYmEoMTcyLCAyMiwgMjIsIDAuMDQpIDBweCAzcHggNXB4ICFpbXBvcnRhbnQ7XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6I0Y0RjdGQSAhaW1wb3J0YW50O1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOGNkYmUyXG4gIC8vIDAlLCAjZDFmMmU3XG4gIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogYXV0bztcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!------------ Header  ---------------->\n  <ion-toolbar color=\"light\" >\n    <ion-buttons slot=\"start\">\n        <ion-menu-button style=\"margin-top:15px;color:#121212\" autoHide=\"false\">\n          <svg  width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M5 7H19\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M5 12H15\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M5 17H11\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            </svg>\n        </ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <h5 style=\"color:#121212;margin-top:10px\"><b></b></h5>\n      </div>\n      <div class=\"col-8 mt-2 mx-2\" style=\"text-align: right;width: 90%;\">\n          <svg (click)=\"notification()\" style=\"margin:3px;\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.7942 3.29494C13.2296 3.10345 12.6258 3 12 3C9.1535 3 6.7622 5.14032 6.44786 7.96942L6.19605 10.2356L6.1896 10.2933C6.06065 11.417 5.69489 12.5005 5.11646 13.4725L5.08667 13.5222L4.50863 14.4856C3.98408 15.3599 3.7218 15.797 3.77842 16.1559C3.8161 16.3946 3.93899 16.6117 4.12435 16.7668C4.40292 17 4.9127 17 5.93224 17H18.0678C19.0873 17 19.5971 17 19.8757 16.7668C20.061 16.6117 20.1839 16.3946 20.2216 16.1559C20.2782 15.797 20.0159 15.3599 19.4914 14.4856L18.9134 13.5222L18.8836 13.4725C18.4273 12.7059 18.1034 11.8698 17.9236 10.9994C15.1974 10.9586 13 8.73592 13 6C13 5.00331 13.2916 4.07473 13.7942 3.29494ZM16.2741 4.98883C16.0999 5.28551 16 5.63109 16 6C16 6.94979 16.6621 7.74494 17.5499 7.94914C17.4205 6.82135 16.9608 5.80382 16.2741 4.98883Z\" fill=\"black\"/>\n            <path d=\"M9 17C9 17.394 9.0776 17.7841 9.22836 18.1481C9.37913 18.512 9.6001 18.8427 9.87868 19.1213C10.1573 19.3999 10.488 19.6209 10.8519 19.7716C11.2159 19.9224 11.606 20 12 20C12.394 20 12.7841 19.9224 13.1481 19.7716C13.512 19.6209 13.8427 19.3999 14.1213 19.1213C14.3999 18.8427 14.6209 18.512 14.7716 18.1481C14.9224 17.7841 15 17.394 15 17L12 17H9Z\" fill=\"black\"/>\n            <circle cx=\"18\" cy=\"6\" r=\"2.5\" fill=\"#eb154b\" stroke=\"#eb154b\"/>\n            </svg>\n            \n        <!-- <ion-badge style=\"border-radius: 50%;margin-left: -14px ;color:#eb154b ;font-size: 12px;\" color=\"light\">10</ion-badge> -->\n\n      </div>\n    </div>\n  </ion-toolbar>\n\n\n\n\n<ion-content color=\"light\" [ngStyle]=\"{'opacity':popUpisvisible ? '0.52' : '1' }\">\n\n  <div style=\"margin-top: -5%;\" class=\"row\">\n    <div class=\"col-12\">\n     \n      <div class=\"row\">\n        <div class=\"col-9\">\n          <h2 class=\"mx-3\"><b>Hai Sparrow</b></h2>\n        </div>\n        <div style=\"margin-top: 5%;\" class=\"col-3 \">\n          <svg (click)=\"searchPage()\" style=\"margin-left: 5%;margin-top:10% !important;margin-right:25%\" width=\"25\" height=\"25\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"11\" cy=\"11\" r=\"7\" stroke=\"#121212\" stroke-width=\"2\"/>\n            <path d=\"M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11\" stroke=\"#CCD2E3\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            <path d=\"M20 20L17 17\" stroke=\"#121212\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            </svg>\n            \n         \n        </div>\n        <p style=\"margin-left:7% !important;\">Welcome to 24hrs</p>\n      </div>\n\n      \n    </div>\n  </div>\n  <!------------ Ion slides  ---------------->\n  <div class=\"div-slides ion-text-left\">\n    <ion-slides slidesPerView=\"3\" spaceBetween=\"1\" [options]=\"slideOpts\">\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'Home' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'Home' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Home</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'v' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Hello</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'One' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Test</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'One' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Health</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'One' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">One</p>\n      </ion-slide><ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'One' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'One' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Two</p>\n      </ion-slide>\n      <ion-slide text-start>\n        <p [style.border-bottom]=\"slideName == 'v' ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == 'Mobile' ? '#eb154b' : '#262525' \" (click)=\"clickSlideHome('Home')\"\n          class=\"tam-title ion-text-left\">Mobile</p>\n      </ion-slide>\n    \n      <ion-slide slidesPerView=\"3\" *ngFor=\"let category of getCategoryList\" (mouseup)=\"clickSlide(category.tbid)\"\n        text-start>\n        <p [style.border-bottom]=\"slideName == category.tbid ? '2px solid red' : '#23d5ab' \"\n          [style.color]=\"slideName == category.tbid ? '#eb154b' : '#262525' \" class=\"tam-title ion-text-left\">\n          {{category.category}} </p>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <div style=\"margin-top: -7%;\" class=\"row\">\n    <div class=\"col-4 mt-2\">\n      <h6 style=\"color: #272A3F;margin-left:15%;\"> Live Offers</h6>\n    </div>\n\n    <!-----------   Location Dropdown    ---------------->\n    <div class=\"col-8 mt-2\">\n      <ion-item>\n        <svg style=\"margin: 5px;\" (click)=\"locationChange()\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n          fill=\"#eb154b\" class=\"bi bi-geo-alt-fill\" viewBox=\"0 0 16 16\">\n          <path d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\" />\n        </svg>\n        <ion-label style=\"font-size:13px !important;color: #121212;\">{{city}}</ion-label>\n        <ion-select (ionChange)=\"changeLocation()\" style=\"font-size: 10px;color:#F4F7FA\" [(ngModel)]=\"city\"\n          interface=\"popover\">\n          <ion-select-option *ngFor=\"let location of locationsList\" [value]=\"location.city\">{{location.city}}\n          </ion-select-option>\n          <ion-select-option [value]=\"All\">All</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </div>\n\n\n\n\n  <div class=\"container\">\n    <div class=\"row ion-text-center\">\n      <div class=\"container\">\n        <div *ngIf=\"isvisible\" class=\"col-12 card\">\n          <div class=\"row\">\n            <div class=\"col-10 ion-text-left\">\n              <div class=\"row\">\n                <!-- <div class=\"col-2\">\n                  <img style=\"margin: 5px;\" src=\"{{storeLogo}}\" height=\"20px\" width=\"25px\" alt=\"\">\n                </div> -->\n                <div class=\"col-9 mx-3 mb-3 mt-1\">\n                  <p (click)=\"storeDetails(storeName)\" style=\"font-size: 18px;color: #404040;\"><b>{{storeName}}</b>\n\n                  </p>\n                </div>\n                <!-- <div *ngIf=\"deliveryAvilability\" class=\"col-3 mt-1 \">\n                  <div>\n                    <img style=\"height:40px;width:65px;margin-left: 5px;\"\n                      src=\"https://static.thenounproject.com/png/100245-200.png\" alt=\"\">\n                  </div>\n                </div> -->\n              </div>\n            </div>\n            <div class=\"col-2 ion-text-right\">\n              <ion-icon (click)=\"navigateHome()\" *ngIf=\"storedetailsVisible\"\n                style=\"margin:10px;cursor:pointer;color:#eb154b\" name=\"close\"></ion-icon>\n            </div>\n\n\n            <!------------- Product details --------------->\n            <div *ngIf=\"productDetails\" class=\"row\">\n              <div class=\"col-8\"></div>\n              <div style=\"margin-top: -14%;\" class=\"col-4 ion-text-right\">\n                <img style=\"height:35px;width:35px; color: #23d5ab;\" src=\"assets/icon/delivery.png\" alt=\"\">\n              </div>\n              <div class=\"col-6\">\n                <img id=\"product_img\" height=\"75px\" width=\"95px\" style=\"margin-left:5px;border-radius: 5px;\"\n                  src=\"{{productImage}}\" alt=\"\">\n                <div class=\"row\">\n                  <div class=\"col-12 ion-text-center mt-3\">\n                    <p style=\"color: #404040;\">{{productName}}</p>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-6\">\n                <div>\n                  <ion-badge class=\"badge ion-text-left\" id=\"kg\" slot=\"start\">{{offer}}{{unit}}\n                  </ion-badge>\n                </div>\n                <p><span id=\"offer\" style=\"font-size: smaller;color: #5F5F5F;text-decoration: line-through\">\n                    <i style=\"color:#23d5ab\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                    {{totalPrice}}</span> <span style=\"margin: 0;padding:0;font-size:15px;\">{{offerPrice}}</span></p>\n                <p style=\"font-size: smaller;\">\n                  <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M8.49963 12.492L8.49859 12.5105C8.42789 13.7644 9.12154 14.9391 10.2662 15.5023L10.278 15.5081C10.6815 15.7035 11.0123 16.0258 11.221 16.4265L11.2257 16.4352C11.8025 17.5473 12.9954 18.2214 14.2672 18.1538L14.2865 18.1527C14.7477 18.1266 15.2055 18.247 15.5958 18.4974C16.6726 19.1795 18.0396 19.1795 19.1164 18.4974C19.5067 18.247 19.9645 18.1266 20.4257 18.1527L20.445 18.1538C21.7147 18.2219 22.9092 17.5473 23.4873 16.4334L23.4902 16.4273C23.6996 16.0255 24.0312 15.7027 24.4361 15.507L24.4455 15.5023C25.5902 14.9388 26.2841 13.7644 26.2131 12.5102L26.2121 12.4928C26.1886 12.0511 26.3096 11.614 26.5569 11.2492C27.2688 10.1979 27.2688 8.81162 26.5572 7.76004C26.3101 7.39552 26.1886 6.95861 26.2121 6.51696L26.2131 6.49847C26.2841 5.24429 25.5902 4.06988 24.4444 3.50618L24.434 3.5009C24.0312 3.30596 23.7012 2.98528 23.4922 2.58562L23.4862 2.57374C22.9092 1.46167 21.7147 0.787825 20.445 0.855183L20.4255 0.85624C19.9645 0.88239 19.5067 0.761938 19.1167 0.511525H19.1162C18.0393 -0.170508 16.6724 -0.170508 15.5955 0.511525C15.2052 0.761674 14.7474 0.882126 14.2862 0.855975L14.2669 0.854919C12.997 0.786768 11.8027 1.46141 11.226 2.57321L11.2215 2.5814C11.0126 2.9829 10.6815 3.30543 10.2774 3.50117L10.2665 3.50645C9.1218 4.06961 8.42789 5.24429 8.49885 6.49847L8.49989 6.5159C8.52337 6.95756 8.40233 7.39472 8.15503 7.75925C7.44312 8.81083 7.44312 10.1973 8.15503 11.2487C8.40207 11.6132 8.52337 12.0504 8.49963 12.492ZM9.03441 8.37366C9.41606 7.81102 9.60311 7.13639 9.56658 6.45488L9.56554 6.43639C9.52798 5.60538 9.98867 4.83353 10.7324 4.48037L10.7415 4.47588C11.3517 4.18003 11.8513 3.69294 12.1664 3.08698L12.1716 3.07694C12.5548 2.33785 13.3575 1.88986 14.21 1.93582L14.2288 1.93661C14.911 1.97544 15.5879 1.7974 16.165 1.42707C16.8936 0.965597 17.8181 0.965597 18.5467 1.42707C19.1238 1.79687 19.8007 1.97518 20.4826 1.93687L20.5014 1.93582C21.3581 1.89038 22.1569 2.33785 22.539 3.07483L22.5461 3.0883C22.8612 3.69347 23.3603 4.17976 23.9696 4.47535L23.9785 4.47984C24.734 4.85176 25.1926 5.61964 25.1464 6.43666L25.1454 6.45594C25.1089 7.13744 25.2962 7.81182 25.6778 8.37445C26.139 9.05569 26.1388 9.9538 25.6773 10.6348C25.2959 11.1977 25.1089 11.8723 25.1454 12.5538L25.1464 12.572C25.1926 13.3891 24.734 14.1572 23.9782 14.5294L23.9704 14.5331C23.3597 14.8295 22.8596 15.3171 22.5443 15.9241L22.5403 15.932C22.1569 16.6711 21.3555 17.1194 20.5017 17.0732L20.4831 17.0721C19.801 17.0335 19.1238 17.2118 18.5464 17.5819C17.8181 18.0431 16.8936 18.0431 16.1652 17.5819C15.6404 17.2451 15.0315 17.0665 14.4101 17.0671C14.3499 17.0671 14.2893 17.0687 14.2288 17.0721L14.21 17.0729C13.3687 17.127 12.5728 16.6812 12.1708 15.9307L12.1654 15.9204C11.8507 15.3155 11.352 14.8295 10.7428 14.5339L10.7329 14.5289C9.97719 14.1569 9.51858 13.3888 9.56502 12.572L9.56606 12.5528C9.60232 11.8713 9.41502 11.1966 9.03363 10.6342C8.57268 9.95301 8.57294 9.0549 9.03441 8.37419V8.37366Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M13.9082 15.097C14.1584 15.2553 14.4879 15.1779 14.6441 14.9245L20.9731 4.65812C21.0764 4.49408 21.085 4.28646 20.9952 4.1145C20.9055 3.94228 20.7312 3.83239 20.5392 3.82631C20.3472 3.82024 20.1667 3.91903 20.0665 4.08518L13.7379 14.3516C13.5816 14.6052 13.6578 14.9388 13.9082 15.097Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M14.4755 9.53113C15.7765 9.53113 16.8351 8.30891 16.8351 6.80669C16.8351 5.30447 15.7765 4.08252 14.4755 4.08252C13.1746 4.08252 12.1162 5.30447 12.1162 6.80669C12.1162 8.30891 13.1746 9.53113 14.4755 9.53113ZM14.4755 5.16448C15.1874 5.16448 15.7665 5.90119 15.7665 6.80669C15.7665 7.7122 15.1874 8.44917 14.4755 8.44917C13.7639 8.44917 13.1847 7.71193 13.1847 6.80669C13.1847 5.90145 13.7639 5.16448 14.4755 5.16448Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M17.8765 12.2027C17.8765 13.7049 18.9348 14.9269 20.2358 14.9269C21.5367 14.9269 22.5953 13.7046 22.5953 12.2027C22.5953 10.701 21.537 9.47852 20.236 9.47852C18.9348 9.47852 17.8765 10.7002 17.8765 12.2027ZM21.5268 12.2027C21.5268 13.1082 20.9477 13.8449 20.2358 13.8449C19.5241 13.8449 18.945 13.1082 18.945 12.2027C18.945 11.2972 19.5241 10.5605 20.2358 10.5605C20.9477 10.5605 21.5268 11.2967 21.5268 12.2027Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M28.6263 21.186C27.9188 19.9146 26.35 19.4304 25.0626 20.0861L20.8775 22.0883C20.2997 21.0003 19.1912 20.3077 17.9714 20.2728L14.108 20.165C13.4962 20.1473 12.896 19.9902 12.352 19.706L11.9589 19.4997C9.94606 18.4372 7.54686 18.4399 5.53609 19.5065L5.56061 18.6047C5.5687 18.306 5.33626 18.0571 5.04122 18.0489L0.804722 17.9309C0.50968 17.9227 0.264203 18.158 0.256116 18.4568L0.000204782 27.8708C-0.00788216 28.1696 0.224551 28.4184 0.519593 28.4266L4.75609 28.5447H4.77096C5.06026 28.5444 5.29687 28.3111 5.30496 28.0185L5.31696 27.5681L6.41756 26.9714C6.84956 26.736 7.35486 26.68 7.82677 26.8153L14.3988 28.6831C14.4103 28.6865 14.4218 28.6891 14.4335 28.6918C14.9086 28.7924 15.3927 28.8429 15.8782 28.8426C16.906 28.8431 17.9218 28.6189 18.856 28.1846C18.879 28.174 18.9011 28.1619 18.9223 28.1482L28.4513 21.9066C28.6889 21.7513 28.7656 21.4351 28.6263 21.186ZM1.08307 27.3597L1.3095 19.0276L4.47801 19.1158L4.25131 27.4482L1.08307 27.3597ZM18.3744 27.2178C17.2138 27.7482 15.9176 27.8946 14.6701 27.6362L8.11555 25.7737C7.37808 25.5624 6.58817 25.6501 5.9133 26.0175L5.35087 26.3224L5.50165 20.7824C7.28364 19.5821 9.56937 19.4587 11.4674 20.4601L11.8606 20.6664C12.5477 21.0256 13.3058 21.224 14.0787 21.2465L17.9422 21.3542C19.0274 21.3857 19.949 22.1681 20.1692 23.2448L14.4145 23.0844C14.1194 23.0762 13.874 23.3116 13.8659 23.6103C13.8578 23.9091 14.0902 24.1579 14.3853 24.1661L20.7361 24.3431H20.7512C21.0403 24.3428 21.2769 24.1096 21.285 23.8169C21.2915 23.5818 21.274 23.3465 21.2333 23.1151L25.5251 21.0613L25.5376 21.0552C26.1465 20.743 26.8829 20.8473 27.3835 21.3167L18.3744 27.2178Z\"\n                      fill=\"#23d5ab\" />\n                  </svg>\n                  {{offer}}%\n                </p>\n\n                <p id=\"offer\" style=\"font-size: smaller;margin-left: 8%;\">\n                  <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M18.9116 3.42642V1.81135H20.5929V0.22644H15.5488V1.81135H17.2302V3.42642C14.4736 3.62501 12.0001 4.79208 10.1921 6.56606H3.66697V8.15044H8.86504C8.52445 8.65143 8.22897 9.18153 7.98298 9.73587H1.98559V11.3202H7.43614C7.30667 11.8354 7.21773 12.3647 7.1739 12.9057H0.304199V14.4906H7.17384C7.21773 15.0316 7.30662 15.5609 7.43608 16.0755H1.98559V17.6604H7.98298C8.22891 18.2147 8.52445 18.7448 8.86504 19.2453H3.66697V20.8302H10.1921C12.1821 22.7828 14.9784 24 18.0709 24C24.0971 24 28.9999 19.3786 28.9999 13.6981C28.9999 8.28426 24.5466 3.83242 18.9116 3.42642ZM27.2799 14.4906C26.8787 18.666 23.3412 22.0006 18.9116 22.3787V20.8302H17.2302V22.3787C12.8005 22.0006 9.26297 18.666 8.86184 14.4906H10.5046V12.9057H8.86184C9.26297 8.73025 12.8005 5.39566 17.2302 5.01756V6.56606H18.9116V5.01756C23.3412 5.39566 26.8787 8.73025 27.2799 12.9057H25.6371V14.4906H27.2799Z\"\n                      fill=\"#23d5ab\" />\n                    <path\n                      d=\"M15.5488 13.6981C15.5488 15.009 16.6802 16.0755 18.0709 16.0755C19.0607 16.0755 19.9634 15.5259 20.3705 14.6754L23.1146 8.94385L17.0341 11.5305C16.1318 11.9144 15.5488 12.7652 15.5488 13.6981ZM17.7258 12.9751L19.7527 12.1128L18.838 14.0235C18.7021 14.3072 18.401 14.4906 18.0709 14.4906C17.6074 14.4906 17.2302 14.1351 17.2302 13.6981C17.2302 13.387 17.4248 13.1032 17.7258 12.9751Z\"\n                      fill=\"#23d5ab\" />\n                  </svg>\n                  {{Counter}}\n                </p>\n              </div>\n            </div>\n          </div>\n\n\n          <!--------------- Store Details -------------------->\n          <div class=\"row\">\n\n            <div *ngIf=\"storedetailsVisible\">\n              <div class=\"col-12 ion-text-center\">\n                <img id=\"product_img\" style=\"margin: 5px;\" src=\"{{storeLogo}}\" height=\"75px\" width=\"75px\" alt=\"\">\n              </div>\n              <div class=\"container\">\n                <p>We have served quality products and reliable service @ fair prices</p>\n                <p style=\"font-size: 12px;\">\n                  <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M17.3802 13.4026H12.1973C11.5029 14.5013 10.7411 15.5558 9.91615 16.5602C9.09125 15.5558 8.32941 14.5013 7.63503 13.4026H2.45214L0 19.8316H19.8323L17.3802 13.4026Z\"\n                      fill=\"#DFEEF4\" />\n                    <path\n                      d=\"M9.91611 0C8.51624 4.55814e-05 7.17371 0.556163 6.18385 1.54602C5.19399 2.53588 4.63788 3.87841 4.63783 5.27828C4.60689 10.3142 9.91611 16.5602 9.91611 16.5602C9.91611 16.5602 15.2253 10.3142 15.1944 5.27828C15.1943 3.87841 14.6382 2.53588 13.6484 1.54602C12.6585 0.556163 11.316 4.55814e-05 9.91611 0ZM9.91611 7.51781C9.47317 7.51781 9.04018 7.38647 8.67189 7.14038C8.3036 6.8943 8.01656 6.54453 7.84705 6.13531C7.67755 5.72609 7.6332 5.2758 7.71961 4.84137C7.80602 4.40694 8.01932 4.0079 8.33252 3.69469C8.64573 3.38149 9.04477 3.16819 9.4792 3.08178C9.91363 2.99537 10.3639 3.03972 10.7731 3.20922C11.1824 3.37873 11.5321 3.66578 11.7782 4.03406C12.0243 4.40235 12.1556 4.83534 12.1556 5.27828C12.1558 5.57241 12.0979 5.86368 11.9854 6.13545C11.8729 6.40721 11.7079 6.65414 11.4999 6.86212C11.292 7.0701 11.045 7.23506 10.7733 7.34757C10.5015 7.46008 10.2102 7.51793 9.91611 7.51781Z\"\n                      fill=\"#F45858\" />\n                    <path\n                      d=\"M17.9497 14.893L8.05316 18.413L4.19629 13.4028H7.63551C8.32972 14.5014 9.09144 15.5559 9.91629 16.5601C10.7411 15.5559 11.5029 14.5014 12.1971 13.4028H17.3808L17.9497 14.893Z\"\n                      fill=\"#F2DA30\" />\n                    <path d=\"M4.06543 19.8316L13.8616 16.347L16.5436 19.8316H4.06543Z\" fill=\"#3EA2E5\" />\n                  </svg>\n                  15, Ganapathy, Sivasakthi Colony, Ganapathy, Coimbatore, Tamil Nadu 641006\n                </p>\n              </div>\n\n            </div>\n            <div class=\"col-12 ion-text-left mt-2 mb-2\">\n              <p *ngIf=\"productDetails\" style=\"font-size:10px;margin-left:5% !important;\">\n                Ginger adds flavor to foods and can relieve nausea and irritation and reduce ...</p>\n\n            </div>\n\n            <div class=\"col-6 mt-2 mb-2\">\n              <button (click)=\"showPopup()\" *ngIf=\"storedetailsVisible\" class=\"btn btn-sm report-seller-btn\"><svg\n                  width=\"20\" height=\"18\" viewBox=\"0 0 20 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path\n                    d=\"M19.6812 14.4165L12.0367 1.17586C11.6116 0.439608 10.8502 0 9.99998 0C9.14979 0 8.38838 0.439608 7.96331 1.17586L0.318837 14.4165C-0.106279 15.1528 -0.106279 16.0319 0.318837 16.7682C0.743953 17.5045 1.50528 17.9441 2.35551 17.9441H17.6445C18.4946 17.9441 19.256 17.5045 19.6812 16.7683C20.1063 16.0319 20.1063 15.1528 19.6812 14.4165ZM18.6664 16.1824C18.4531 16.5519 18.0711 16.7724 17.6445 16.7724H2.35551C1.92887 16.7724 1.54684 16.5519 1.33356 16.1824C1.12028 15.813 1.12028 15.3719 1.33356 15.0024L8.97811 1.76175C9.19139 1.3923 9.57342 1.17175 10 1.17175C10.4266 1.17175 10.8087 1.3923 11.0219 1.76175L18.6664 15.0024C18.8797 15.3719 18.8797 15.813 18.6664 16.1824Z\"\n                    fill=\"white\" />\n                  <path d=\"M10.5858 5.84747H9.41406V11.7061H10.5858V5.84747Z\" fill=\"white\" />\n                  <path\n                    d=\"M9.99992 12.8779C9.56918 12.8779 9.21875 13.2283 9.21875 13.6591C9.21875 14.0898 9.56918 14.4402 9.99992 14.4402C10.4306 14.4402 10.7811 14.0898 10.7811 13.6591C10.7811 13.2283 10.4307 12.8779 9.99992 12.8779Z\"\n                    fill=\"white\" />\n                </svg>\n                Report Seller</button>\n            </div>\n            <div *ngIf=\"storedetailsVisible\" class=\"col-6 mt-1\">\n              <img style=\"height:35px;width:35px; color: #23d5ab;\" src=\"assets/icon/delivery.png\" alt=\"\">\n            </div>\n\n          </div>\n\n          <!------------- Social icons ------------------>\n          <div id=\"social-media-icon-div\">\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <a href=\"{{websiteLink}}\">\n                  <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 36 36\" fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M36 18C36 18.1847 35.9969 18.3663 35.9906 18.5478C35.9124 21.3393 35.1801 24.0735 33.8525 26.5304C33.6522 26.903 33.4393 27.2692 33.2108 27.6261C31.0424 31.0502 27.7837 33.644 23.9603 34.9889C22.2187 35.6002 20.3929 35.9382 18.5478 35.9906C18.3663 35.9969 18.1847 36 18 36C17.8153 36 17.6337 35.9969 17.4522 35.9906C15.6071 35.9382 13.7813 35.6002 12.0397 34.9889C8.21632 33.644 4.95758 31.0502 2.78922 27.6261C2.5607 27.2692 2.34783 26.903 2.14748 26.5304C0.819938 24.0735 0.0876035 21.3393 0.00939137 18.5478C0.0031305 18.3663 0 18.1847 0 18C0 17.8153 0.0031305 17.6337 0.00939137 17.4522C0.0876035 14.6607 0.819938 11.9265 2.14748 9.46957C2.34783 9.09704 2.5607 8.73078 2.78922 8.37391C4.95758 4.94977 8.21632 2.35601 12.0397 1.01113C13.7813 0.399761 15.6071 0.0618426 17.4522 0.00939137C17.6337 0.0031305 17.8153 0 18 0C18.1847 0 18.3663 0.0031305 18.5478 0.00939137C20.3929 0.0618426 22.2187 0.399761 23.9603 1.01113C27.7837 2.35601 31.0424 4.94977 33.2108 8.37391C33.4393 8.73078 33.6522 9.09704 33.8525 9.46957C35.1801 11.9265 35.9124 14.6607 35.9906 17.4522C35.9969 17.6337 36 17.8153 36 18Z\"\n                      fill=\"#85C646\" />\n                    <path\n                      d=\"M35.9906 18.5478C35.9969 18.3663 36 18.1847 36 18C36 17.8153 35.9969 17.6337 35.9906 17.4522H28.4431C28.4198 14.7653 28.106 12.0889 27.5071 9.46957H33.8525C33.6522 9.09704 33.4393 8.73078 33.2108 8.37391H27.2317C26.5732 5.74963 25.4665 3.25876 23.9603 1.01113C23.3681 0.802708 22.7652 0.626108 22.1541 0.482087C23.8226 2.37913 25.1781 5.09948 26.0953 8.37391H18.5478V0.00939137C18.3663 0.0031305 18.1847 0 18 0C17.8153 0 17.6337 0.0031305 17.4522 0.00939137V8.37391H9.9047C10.8219 5.09948 12.1774 2.37913 13.8459 0.482087C13.2348 0.626108 12.6319 0.802708 12.0397 1.01113C10.5335 3.25876 9.42678 5.74963 8.76835 8.37391H2.78922C2.5607 8.73078 2.34783 9.09704 2.14748 9.46957H8.49287C7.894 12.0889 7.58017 14.7653 7.55687 17.4522H0.00939137C0.0031305 17.6337 0 17.8153 0 18C0 18.1847 0.0031305 18.3663 0.00939137 18.5478H7.55687C7.58017 21.2347 7.894 23.9111 8.49287 26.5304H2.14748C2.34783 26.903 2.5607 27.2692 2.78922 27.6261H8.76835C9.42554 30.2508 10.5323 32.7419 12.0397 34.9889C12.6319 35.1973 13.2348 35.3739 13.8459 35.5179C12.1774 33.6209 10.8219 30.9005 9.9047 27.6261H17.4522V35.9906C17.6337 35.9969 17.8153 36 18 36C18.1847 36 18.3663 35.9969 18.5478 35.9906V27.6261H26.0953C25.1781 30.9005 23.8226 33.6209 22.1541 35.5179C22.7652 35.3739 23.3681 35.1973 23.9603 34.9889C25.4689 32.7426 26.5758 30.2513 27.2317 27.6261H33.2108C33.4393 27.2692 33.6522 26.903 33.8525 26.5304H27.5071C28.106 23.9111 28.4198 21.2347 28.4431 18.5478H35.9906ZM17.4522 26.5304H9.62296C9.00202 23.9142 8.67651 21.2366 8.65252 18.5478H17.4522V26.5304ZM17.4522 17.4522H8.65252C8.6767 14.7634 9.00221 12.0858 9.62296 9.46957H17.4522V17.4522ZM26.377 26.5304H18.5478V18.5478H27.3475C27.3233 21.2366 26.9978 23.9142 26.377 26.5304ZM18.5478 17.4522V9.46957H26.377C26.998 12.0858 27.3235 14.7634 27.3475 17.4522H18.5478Z\"\n                      fill=\"#6A9E38\" />\n                    <path d=\"M3.52197 13.1478H32.4785V22.8522H3.52197V13.1478Z\" fill=\"#E4E4E4\" />\n                    <path\n                      d=\"M7.29199 15.6913H8.21265L9.20062 18.998L10.2963 15.6913H11.2104L12.2991 18.998L13.2871 15.6913H14.2077L12.7493 20.3087H11.9094L10.7533 16.8812L9.59067 20.3087H8.75735L7.29199 15.6913Z\"\n                      fill=\"#6A9E38\" />\n                    <path\n                      d=\"M14.542 15.6913H15.4642L16.4522 18.998L17.5478 15.6913H18.4619L19.5507 18.998L20.5355 15.6913H21.4562L19.9977 20.3087H19.1581L18.0033 16.8812L16.8416 20.3087H16.007L14.542 15.6913Z\"\n                      fill=\"#6A9E38\" />\n                    <path\n                      d=\"M21.7925 15.6913H22.7131L23.7011 18.998L24.7968 15.6913H25.7108L26.7996 18.998L27.7876 15.6913H28.7082L27.2498 20.3087H26.4096L25.2535 16.8812L24.0912 20.3087H23.2575L21.7925 15.6913Z\"\n                      fill=\"#6A9E38\" />\n                  </svg>\n                </a>\n\n              </div>\n              <div class=\"col-3\">\n                <a href=\"{{whatsApp}}\">\n                  <svg style=\"margin: 10px;\" width=\"40\" height=\"35\" viewBox=\"0 0 40 41\" fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M0.854827 40.8334C0.629238 40.8334 0.409779 40.7446 0.247024 40.5807C0.0324696 40.3646 -0.0502871 40.0509 0.0303241 39.7576L2.64207 30.2618C1.01605 27.3342 0.15875 24.0225 0.159976 20.6606C0.164574 9.72772 9.10046 0.833374 20.0801 0.833374C25.4057 0.83551 30.4097 2.90094 34.1709 6.6485C37.9314 10.3964 40.0015 15.3784 40 20.6765C39.9951 31.6097 31.0592 40.5047 20.0801 40.5047C20.0801 40.5047 20.0719 40.5047 20.0716 40.5047C16.8646 40.5035 13.6852 39.7253 10.8543 38.2513L1.07153 40.8056C0.999804 40.8242 0.926856 40.8334 0.854827 40.8334Z\"\n                      fill=\"#E5E5E5\" />\n                    <path\n                      d=\"M0.85498 39.9823L3.55959 30.1486C1.89128 27.2705 1.01375 24.0057 1.01498 20.661C1.01927 10.1974 9.57141 1.68457 20.0803 1.68457C25.18 1.68671 29.9667 3.66303 33.5663 7.25006C37.1656 10.8371 39.1471 15.6052 39.1453 20.6763C39.1407 31.1395 30.5873 39.6536 20.0803 39.6536C20.0797 39.6536 20.0806 39.6536 20.0803 39.6536H20.072C16.8813 39.6524 13.7463 38.8556 10.9617 37.3434L0.85498 39.9823ZM11.4298 33.9081L12.0088 34.2496C14.4412 35.687 17.2301 36.4471 20.0742 36.4487H20.0803C28.8139 36.4487 35.9224 29.3723 35.9261 20.6751C35.9276 16.4603 34.281 12.4969 31.2892 9.51569C28.2971 6.53442 24.319 4.89166 20.0861 4.88983C11.3455 4.88983 4.23728 11.9653 4.23391 20.6622C4.23268 23.6426 5.07006 26.5448 6.65654 29.0564L7.03354 29.6533L5.43235 35.4736L11.4298 33.9081Z\"\n                      fill=\"white\" />\n                    <path\n                      d=\"M1.51758 39.3197L4.12871 29.826C2.51771 27.0477 1.67083 23.8955 1.67175 20.6671C1.67574 10.5657 9.9321 2.34766 20.0765 2.34766C25.0003 2.34979 29.6215 4.25775 33.0957 7.72058C36.5709 11.1834 38.4835 15.7864 38.4817 20.6814C38.4774 30.783 30.2207 39.002 20.0775 39.002C20.0765 39.002 20.0778 39.002 20.0775 39.002H20.0692C16.9891 39.0008 13.9624 38.2311 11.2743 36.7724L1.51758 39.3197Z\"\n                      fill=\"#64B161\" />\n                    <path\n                      d=\"M0.85498 39.9823L3.55959 30.1486C1.89128 27.2705 1.01375 24.0057 1.01498 20.661C1.01927 10.1974 9.57141 1.68457 20.0803 1.68457C25.18 1.68671 29.9667 3.66303 33.5663 7.25006C37.1656 10.8371 39.1471 15.6052 39.1453 20.6763C39.1407 31.1395 30.5873 39.6536 20.0803 39.6536C20.0797 39.6536 20.0806 39.6536 20.0803 39.6536H20.072C16.8813 39.6524 13.7463 38.8556 10.9617 37.3434L0.85498 39.9823ZM11.4298 33.9081L12.0088 34.2496C14.4412 35.687 17.2301 36.4471 20.0742 36.4487H20.0803C28.8139 36.4487 35.9224 29.3723 35.9261 20.6751C35.9276 16.4603 34.281 12.4969 31.2892 9.51569C28.2971 6.53442 24.319 4.89166 20.0861 4.88983C11.3455 4.88983 4.23728 11.9653 4.23391 20.6622C4.23268 23.6426 5.07006 26.5448 6.65654 29.0564L7.03354 29.6533L5.43235 35.4736L11.4298 33.9081Z\"\n                      fill=\"white\" />\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                      d=\"M15.3154 12.7277C14.9586 11.9379 14.5828 11.922 14.2432 11.9083C13.9655 11.8964 13.6477 11.897 13.3304 11.897C13.0129 11.897 12.4967 12.016 12.0603 12.4905C11.6235 12.9651 10.3926 14.1126 10.3926 16.4462C10.3926 18.7802 12.0998 21.0352 12.338 21.3519C12.5761 21.6684 15.6335 26.6104 20.4754 28.5117C24.4995 30.0919 25.3182 29.7775 26.1918 29.6985C27.0653 29.6195 29.0101 28.551 29.407 27.4435C29.8042 26.3361 29.8042 25.387 29.685 25.1883C29.5658 24.9909 29.2482 24.8721 28.7719 24.635C28.2956 24.3979 25.9536 23.2501 25.5168 23.092C25.0801 22.9337 24.7625 22.8549 24.445 23.3298C24.1271 23.804 23.215 24.8721 22.937 25.1883C22.659 25.5054 22.381 25.545 21.9047 25.3076C21.4283 25.0699 19.894 24.5694 18.0739 22.9535C16.6579 21.6965 15.7016 20.1437 15.4236 19.6689C15.1459 19.1946 15.419 18.9603 15.6329 18.7012C16.0182 18.2346 16.6646 17.3956 16.8234 17.0795C16.9822 16.7627 16.9028 16.4859 16.7839 16.2485C16.6646 16.0114 15.7387 13.6658 15.3154 12.7277Z\"\n                      fill=\"white\" />\n                  </svg>\n                </a>\n\n              </div>\n              <div class=\"col-3\">\n                <a href=\"contact\">\n                  <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 36 36\" fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\">\n                    <path\n                      d=\"M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z\"\n                      fill=\"#007CFF\" />\n                    <path\n                      d=\"M27 21.7215C25.0583 21.7215 23.2065 21.2985 21.4988 20.4638C21.231 20.3355 20.9205 20.3152 20.637 20.412C20.3535 20.511 20.1218 20.718 19.9913 20.9857L19.1812 22.662C16.7512 21.267 14.7352 19.2487 13.338 16.8187L15.0165 16.0087C15.2865 15.8782 15.4912 15.6465 15.5903 15.363C15.687 15.0795 15.669 14.769 15.5385 14.5013C14.7015 12.7958 14.2785 10.944 14.2785 9C14.2785 8.379 13.7745 7.875 13.1535 7.875H9C8.379 7.875 7.875 8.379 7.875 9C7.875 19.5457 16.4543 28.125 27 28.125C27.621 28.125 28.125 27.621 28.125 27V22.8465C28.125 22.2255 27.621 21.7215 27 21.7215Z\"\n                      fill=\"white\" />\n                  </svg>\n                </a>\n\n              </div>\n              <div class=\"col-3\">\n                <a href=\"instagram\">\n                  <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 38 37\" fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\">\n                    <g clip-path=\"url(#clip0_1172:10)\">\n                      <path\n                        d=\"M12.6672 18.5C12.6672 17.2803 13.0386 16.0881 13.7346 15.074C14.4305 14.0599 15.4197 13.2695 16.577 12.8027C17.7343 12.336 19.0078 12.2139 20.2364 12.4518C21.465 12.6898 22.5935 13.2771 23.4793 14.1395C24.365 15.0019 24.9682 16.1007 25.2126 17.2969C25.457 18.4932 25.3316 19.7331 24.8522 20.8599C24.3728 21.9867 23.561 22.9498 22.5195 23.6274C21.4779 24.305 20.2534 24.6667 19.0007 24.6667C17.321 24.6667 15.71 24.017 14.5222 22.8605C13.3344 21.704 12.6672 20.1355 12.6672 18.5ZM9.24293 18.5C9.24293 20.3788 9.81512 22.2154 10.8872 23.7776C11.9592 25.3397 13.4829 26.5573 15.2656 27.2764C17.0484 27.9954 19.0101 28.1836 20.9027 27.8171C22.7952 27.4507 24.5337 26.546 25.8983 25.2176C27.2628 23.8892 28.1921 22.1966 28.5687 20.3539C28.9453 18.5113 28.7522 16.6013 28.014 14.8654C27.2757 13.1296 26.0253 11.6459 24.421 10.6019C22.8166 9.55797 20.9304 9.00065 19.0007 9.00043C17.7195 9.00038 16.4507 9.24607 15.267 9.72345C14.0832 10.2008 13.0076 10.9006 12.1016 11.7827C11.1956 12.6648 10.4769 13.7121 9.98663 14.8646C9.49633 16.0172 9.244 17.2525 9.24405 18.5H9.24293ZM26.8618 8.6239C26.8617 9.06298 26.9953 9.49223 27.2457 9.85739C27.4961 10.2225 27.8521 10.5072 28.2687 10.6754C28.6853 10.8435 29.1437 10.8876 29.586 10.8021C30.0283 10.7166 30.4347 10.5053 30.7537 10.1949C31.0726 9.88455 31.2899 9.48905 31.3781 9.05844C31.4662 8.62783 31.4212 8.18145 31.2487 7.77574C31.0763 7.37003 30.7842 7.02322 30.4093 6.77917C30.0344 6.53511 29.5936 6.40477 29.1427 6.40463C28.5382 6.40492 27.9585 6.6388 27.531 7.05491C27.1035 7.47102 26.8631 8.03534 26.8626 8.6239H26.8618ZM11.3259 33.5586C10.121 33.5452 8.92736 33.33 7.79738 32.9224C6.97211 32.6254 6.22543 32.1526 5.61193 31.5385C4.98031 30.9425 4.49453 30.2157 4.1906 29.4121C3.77124 28.312 3.54967 27.1499 3.53563 25.9765C3.44361 24.0264 3.42386 23.4406 3.42386 18.5004C3.42386 13.5601 3.44361 12.9758 3.53563 11.0242C3.55077 9.85111 3.77177 8.68918 4.18911 7.58863C4.49415 6.7851 4.97976 6.0581 5.61044 5.46076C6.22287 4.84545 6.96986 4.37243 7.79589 4.07689C8.92627 3.66879 10.1204 3.45344 11.3259 3.44027C13.3288 3.35068 13.9305 3.33145 19.0007 3.33145C24.071 3.33145 24.6749 3.35068 26.6793 3.44027C27.8841 3.45501 29.0775 3.67019 30.2078 4.07653C31.0334 4.37299 31.7802 4.84587 32.3933 5.4604C33.0245 6.05734 33.5101 6.78446 33.8146 7.58826C34.2335 8.68842 34.4545 9.8506 34.4681 11.0238C34.5601 12.9754 34.5799 13.5598 34.5799 18.5C34.5799 23.4402 34.5616 24.0246 34.4681 25.9762C34.4535 27.1493 34.2325 28.3113 33.8146 29.4117C33.4984 30.2096 33.0141 30.9341 32.3929 31.5387C31.7717 32.1432 31.0274 32.6145 30.2078 32.922C29.0779 33.3298 27.8843 33.5451 26.6793 33.5583C24.6764 33.6479 24.0747 33.6671 19.0007 33.6671C13.9268 33.6671 13.3266 33.6493 11.3259 33.5583V33.5586ZM11.1672 0.112088C9.59104 0.142448 8.03158 0.433021 6.55526 0.971431C5.28728 1.43599 4.13856 2.16412 3.18914 3.1051C2.2217 4.02863 1.47359 5.14715 0.997353 6.38214C0.444504 7.8197 0.146193 9.33818 0.115122 10.8729C0.0216087 12.8455 0 13.476 0 18.5C0 23.524 0.0216087 24.1545 0.115122 26.1271C0.14634 27.6617 0.444777 29.1801 0.997725 30.6175C1.47395 31.8525 2.22191 32.9711 3.18914 33.8949C4.13888 34.8354 5.28733 35.5636 6.55488 36.0289C8.03127 36.5671 9.59069 36.8577 11.1668 36.8883C13.194 36.9779 13.8404 37.0004 19.0004 37.0004C24.1604 37.0004 24.8079 36.9793 26.8339 36.8883C28.4101 36.8579 29.9695 36.5673 31.4459 36.0289C32.7084 35.5537 33.8549 34.8268 34.812 33.895C35.7691 32.9631 36.5157 31.8467 37.0038 30.6175C37.5574 29.1803 37.8559 27.6618 37.8864 26.1271C37.9784 24.153 37.9981 23.524 37.9981 18.5C37.9981 13.476 37.9765 12.8455 37.8864 10.8729C37.8552 9.33827 37.5568 7.8199 37.0038 6.3825C36.5259 5.14828 35.7782 4.02998 34.8123 3.1051C33.864 2.16366 32.7158 1.43533 31.4481 0.971069C29.9717 0.432382 28.4121 0.14192 26.8358 0.112088C24.8101 0.0224902 24.1622 0 19.0007 0C13.8392 0 13.1925 0.0210392 11.1657 0.112088\"\n                        fill=\"url(#paint0_radial_1172:10)\" />\n                      <path\n                        d=\"M12.6672 18.5C12.6672 17.2803 13.0386 16.0881 13.7346 15.074C14.4305 14.0599 15.4197 13.2695 16.577 12.8027C17.7343 12.336 19.0078 12.2139 20.2364 12.4518C21.465 12.6898 22.5935 13.2771 23.4793 14.1395C24.365 15.0019 24.9682 16.1007 25.2126 17.2969C25.457 18.4932 25.3316 19.7331 24.8522 20.8599C24.3728 21.9867 23.561 22.9498 22.5195 23.6274C21.4779 24.305 20.2534 24.6667 19.0007 24.6667C17.321 24.6667 15.71 24.017 14.5222 22.8605C13.3344 21.704 12.6672 20.1355 12.6672 18.5ZM9.24293 18.5C9.24293 20.3788 9.81512 22.2154 10.8872 23.7776C11.9592 25.3397 13.4829 26.5573 15.2656 27.2764C17.0484 27.9954 19.0101 28.1836 20.9027 27.8171C22.7952 27.4507 24.5337 26.546 25.8983 25.2176C27.2628 23.8892 28.1921 22.1966 28.5687 20.3539C28.9453 18.5113 28.7522 16.6013 28.014 14.8654C27.2757 13.1296 26.0253 11.6459 24.421 10.6019C22.8166 9.55797 20.9304 9.00065 19.0007 9.00043C17.7195 9.00038 16.4507 9.24607 15.267 9.72345C14.0832 10.2008 13.0076 10.9006 12.1016 11.7827C11.1956 12.6648 10.4769 13.7121 9.98663 14.8646C9.49633 16.0172 9.244 17.2525 9.24405 18.5H9.24293ZM26.8618 8.6239C26.8617 9.06298 26.9953 9.49223 27.2457 9.85739C27.4961 10.2225 27.8521 10.5072 28.2687 10.6754C28.6853 10.8435 29.1437 10.8876 29.586 10.8021C30.0283 10.7166 30.4347 10.5053 30.7537 10.1949C31.0726 9.88455 31.2899 9.48905 31.3781 9.05844C31.4662 8.62783 31.4212 8.18145 31.2487 7.77574C31.0763 7.37003 30.7842 7.02322 30.4093 6.77917C30.0344 6.53511 29.5936 6.40477 29.1427 6.40463C28.5382 6.40492 27.9585 6.6388 27.531 7.05491C27.1035 7.47102 26.8631 8.03534 26.8626 8.6239H26.8618ZM11.3259 33.5586C10.121 33.5452 8.92736 33.33 7.79738 32.9224C6.97211 32.6254 6.22543 32.1526 5.61193 31.5385C4.98031 30.9425 4.49453 30.2157 4.1906 29.4121C3.77124 28.312 3.54967 27.1499 3.53563 25.9765C3.44361 24.0264 3.42386 23.4406 3.42386 18.5004C3.42386 13.5601 3.44361 12.9758 3.53563 11.0242C3.55077 9.85111 3.77177 8.68918 4.18911 7.58863C4.49415 6.7851 4.97976 6.0581 5.61044 5.46076C6.22287 4.84545 6.96986 4.37243 7.79589 4.07689C8.92627 3.66879 10.1204 3.45344 11.3259 3.44027C13.3288 3.35068 13.9305 3.33145 19.0007 3.33145C24.071 3.33145 24.6749 3.35068 26.6793 3.44027C27.8841 3.45501 29.0775 3.67019 30.2078 4.07653C31.0334 4.37299 31.7802 4.84587 32.3933 5.4604C33.0245 6.05734 33.5101 6.78446 33.8146 7.58826C34.2335 8.68842 34.4545 9.8506 34.4681 11.0238C34.5601 12.9754 34.5799 13.5598 34.5799 18.5C34.5799 23.4402 34.5616 24.0246 34.4681 25.9762C34.4535 27.1493 34.2325 28.3113 33.8146 29.4117C33.4984 30.2096 33.0141 30.9341 32.3929 31.5387C31.7717 32.1432 31.0274 32.6145 30.2078 32.922C29.0779 33.3298 27.8843 33.5451 26.6793 33.5583C24.6764 33.6479 24.0747 33.6671 19.0007 33.6671C13.9268 33.6671 13.3266 33.6493 11.3259 33.5583V33.5586ZM11.1672 0.112088C9.59104 0.142448 8.03158 0.433021 6.55526 0.971431C5.28728 1.43599 4.13856 2.16412 3.18914 3.1051C2.2217 4.02863 1.47359 5.14715 0.997353 6.38214C0.444504 7.8197 0.146193 9.33818 0.115122 10.8729C0.0216087 12.8455 0 13.476 0 18.5C0 23.524 0.0216087 24.1545 0.115122 26.1271C0.14634 27.6617 0.444777 29.1801 0.997725 30.6175C1.47395 31.8525 2.22191 32.9711 3.18914 33.8949C4.13888 34.8354 5.28733 35.5636 6.55488 36.0289C8.03127 36.5671 9.59069 36.8577 11.1668 36.8883C13.194 36.9779 13.8404 37.0004 19.0004 37.0004C24.1604 37.0004 24.8079 36.9793 26.8339 36.8883C28.4101 36.8579 29.9695 36.5673 31.4459 36.0289C32.7084 35.5537 33.8549 34.8268 34.812 33.895C35.7691 32.9631 36.5157 31.8467 37.0038 30.6175C37.5574 29.1803 37.8559 27.6618 37.8864 26.1271C37.9784 24.153 37.9981 23.524 37.9981 18.5C37.9981 13.476 37.9765 12.8455 37.8864 10.8729C37.8552 9.33827 37.5568 7.8199 37.0038 6.3825C36.5259 5.14828 35.7782 4.02998 34.8123 3.1051C33.864 2.16366 32.7158 1.43533 31.4481 0.971069C29.9717 0.432382 28.4121 0.14192 26.8358 0.112088C24.8101 0.0224902 24.1622 0 19.0007 0C13.8392 0 13.1925 0.0210392 11.1657 0.112088\"\n                        fill=\"url(#paint1_radial_1172:10)\" />\n                    </g>\n                    <defs>\n                      <radialGradient id=\"paint0_radial_1172:10\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n                        gradientTransform=\"translate(5.04861 37.1748) scale(49.6057 48.2984)\">\n                        <stop offset=\"0.09\" stop-color=\"#FA8F21\" />\n                        <stop offset=\"0.78\" stop-color=\"#D82D7E\" />\n                      </radialGradient>\n                      <radialGradient id=\"paint1_radial_1172:10\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n                        gradientTransform=\"translate(23.0464 38.8322) scale(39.0961 38.0657)\">\n                        <stop offset=\"0.64\" stop-color=\"#8C3AAA\" stop-opacity=\"0\" />\n                        <stop offset=\"1\" stop-color=\"#8C3AAA\" />\n                      </radialGradient>\n                      <clipPath id=\"clip0_1172:10\">\n                        <rect width=\"38\" height=\"37\" fill=\"white\" />\n                      </clipPath>\n                    </defs>\n                  </svg>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n      <!--------------- Live offer card ------------------>\n      <div class=\"container\">\n        <div *ngIf=\"offerListVisible\" class=\"row mb-2\">\n          <div  *ngFor=\"let offer of offerlist\" id=\"productCard\" class=\"col-6 ion-text-center\">\n            <div class=\"row mt-2\">\n              <!-- <div class=\"col-4\">\n                <img src=\"{{offer.store_logo}}\" style=\"margin:1px;\" height=\"19px\" width=\"19px\" alt=\"\">\n              </div> -->\n              <div class=\"col-12 ion-text-left\">\n                <span style=\"font-size: 14px;color:#404040;\"><b>{{offer.store_name}} </b></span>\n\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-9 ion-text-left mt-2\">\n                <img id=\"product_img\" src=\"{{offer.product_image}}\" alt=\"\">\n              </div>\n\n              <div class=\"col-3 mt-2\">\n                <!-- <div>\n                  <ion-icon  id=\"heart\" style=\"margin-left:3px\" (click)=\"selectedItem(product.tbid)\"\n                  [ngClass]=\"{'green' : toggle, 'red': !toggle}\" name=\"heart-sharp\"></ion-icon>\n                </div> -->\n                <div>\n                  <ion-badge style=\"margin-left: -5px;\" id=\"kg\">{{offer.offer}}{{offer.product_unit}}</ion-badge>\n                </div>\n              </div>\n\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left mt-1\">\n                <p style=\"padding: 0; margin:0;color: #121212;font-size: 12px;\"><b>{{offer.product}}</b></p>\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n\n                <p><span style=\"font-size:10px;color: #404040;text-decoration: line-through\">\n                    <i style=\"color:#23d5ab\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                    Rs.{{offer.total_cost}}.00</span> <span style=\"margin: 3px;padding:0;font-size:13px;\">\n                    <b>{{offer.offer_price}}.00</b></span></p>\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left\">\n                <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                  <i style=\"color:#23d5ab\" class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n                  {{offer.other_offer}}\n                </p>\n              </div>\n              <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n                <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                  <i style=\"color:#23d5ab\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                  {{offer.offer_time}}\n                </p>\n              </div>\n              <!-- <div style=\"margin-top: -18px;\" class=\"col-4 ion-text-left \">\n                <div class=\"dot\">\n                  <svg style=\"margin:8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"#fff\"\n                    class=\"bi bi-share\" viewBox=\"0 0 16 16\">\n                    <path\n                      d=\"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z\" />\n                  </svg>\n                </div>\n              </div> -->\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n  <!------------- live offers No data found Gif ------------------->\n  <div *ngIf=\"noDataFound\">\n    <img src=\"assets/gif/empty.gif\" alt=\"\">\n  </div>\n\n  <div style=\"margin-top: -5%;\" class=\"row\">\n    <div class=\"col-12 mt-2\">\n      <h6 style=\"color: #272A3F;margin-left:5%;\"> Expired Offers</h6>\n    </div>\n\n    <!--------------- Expiry offer card ------------------>\n    <div class=\"container\">\n      <div *ngIf=\"offerListVisible\" class=\"row mb-2\">\n        <div  *ngFor=\"let offer of expiryofferlist\" id=\"productCard\" class=\"col-6 ion-text-center\">\n          <div class=\"row mt-2\">\n            <!-- <div class=\"col-4\">\n              <img src=\"{{offer.store_logo}}\" style=\"margin:1px;\" height=\"19px\" width=\"19px\" alt=\"\">\n            </div> -->\n            <div class=\"col-12 ion-text-left\">\n              <span style=\"font-size: 14px;color:#404040;\"><b>{{offer.store_name}} </b></span>\n\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-9 ion-text-left mt-2\">\n              <img id=\"product_img\" src=\"{{offer.product_image}}\" alt=\"\">\n            </div>\n\n            <div class=\"col-3 mt-2\">\n              <!-- <div>\n                <ion-icon  id=\"heart\" style=\"margin-left:3px\" (click)=\"selectedItem(product.tbid)\"\n                [ngClass]=\"{'green' : toggle, 'red': !toggle}\" name=\"heart-sharp\"></ion-icon>\n              </div> -->\n              <div>\n                <ion-badge style=\"margin-left: -5px;\" id=\"kg\">{{offer.offer}}{{offer.product_unit}}</ion-badge>\n              </div>\n            </div>\n\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left mt-1\">\n              <p style=\"padding: 0; margin:0;color: #121212;font-size: 12px;\"><b>{{offer.product}}</b></p>\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n\n              <p><span style=\"font-size:10px;color: #404040;text-decoration: line-through\">\n                  <i style=\"color:#23d5ab\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n                  Rs.{{offer.total_cost}}.00</span> <span style=\"margin: 3px;padding:0;font-size:13px;\">\n                  <b>{{offer.offer_price}}.00</b></span></p>\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left\">\n              <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                <i style=\"color:#23d5ab\" class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n                {{offer.other_offer}}\n              </p>\n            </div>\n            <div (click)=\"singleCard(offer.tbid)\" class=\"col-12 ion-text-left \">\n              <p style=\"padding: 0; margin:0;color: #272A3F;font-size: 12px;\">\n                <i style=\"color:#23d5ab\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                {{offer.offer_time}}\n              </p>\n            </div>\n            <!-- <div style=\"margin-top: -18px;\" class=\"col-4 ion-text-left \">\n              <div class=\"dot\">\n                <svg style=\"margin:8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"#fff\"\n                  class=\"bi bi-share\" viewBox=\"0 0 16 16\">\n                  <path\n                    d=\"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z\" />\n                </svg>\n              </div>\n            </div> -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n\n<!-- <button (click)=\"testSlide()\">click</button> -->\n\n  <!------------- Expiry No data found Gif ------------------->\n  <div *ngIf=\"ExpirynoDataFound\">\n    <img src=\"assets/gif/empty.gif\" alt=\"\">\n  </div>\n\n\n  <!-- <button (click)=\"testSlide()\">Slide</button> -->\n</ion-content>\n\n<!----- Single product details card Pop-Up ----->\n<div @fadein *ngIf=\"popUpisvisible\" class=\"container\">\n  <div class=\"card pop-up-card \">\n    <div class=\"container\">\n      <div style=\"font-size: 13px;\" class=\"row\">\n        <div class=\"col-10\">\n          <h5>Report Seller</h5>\n        </div>\n        <div class=\"col-2\">\n          <ion-icon (click)=\"hidepopup()\" style=\"margin:15px;cursor:pointer;color:#eb154b\" name=\"close\"></ion-icon>\n        </div>\n        <div class=\"col-4\">\n          <input type=\"checkbox\" (change)=\"spam()\" [(ngModel)]=\"spamMsg\"> Spam Msg\n        </div>\n        <div class=\"col-4\">\n          <input type=\"checkbox\" (change)=\"storeNA()\" [(ngModel)]=\"storeNa\"> store NA\n        </div>\n        <div class=\"col-4\">\n          <input type=\"checkbox\" (change)=\"OfferDenaid()\" [(ngModel)]=\"offerDenaid\"> Offer Denaid\n        </div>\n        <div class=\"col-12 ion-text-center mt-3\">\n          <p>Others:</p>\n        </div>\n        <div class=\"col-12 ion-text-center\">\n          <input [(ngModel)]=\"other\" type=\"text\">\n          <button (click)=\"reportSeller()\" class=\"btn btn-sm submit-btn\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es2015.js.map