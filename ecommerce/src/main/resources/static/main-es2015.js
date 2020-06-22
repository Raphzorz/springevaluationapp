(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecommerce/services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");




const _c0 = ["ecommerceC"];
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Evaluation App");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter your username to enter the store");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter your user name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.login(_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.logged = false;
        this.users = [];
    }
    ngOnInit() {
    }
    //The database is queried for a matching entry
    login(userName) {
        this.ecommerceService.getUserByName(userName)
            .subscribe((users) => {
            this.users = users;
            this.users.forEach(users => {
                if (users.userName) {
                    this.logged = true;
                    //Assigning the logged user to be the user selected/logged in
                    this.ecommerceService.loggedUser = users;
                }
            }, (error) => console.log(error));
        });
        //If the user did not log in then the username is wrong
        if (!this.logged) {
            this.userNotFound();
        }
    }
    // In case a wrong loginis entered
    userNotFound() {
        const element = document.getElementById("login-input-bar");
        element.classList.add("error-class");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__["EcommerceService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ecommerceC = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__["EcommerceService"]])], decls: 4, vars: 2, consts: [["class", "container align-content-center justify-content-center", 4, "ngIf"], [3, "hidden"], ["ecommerceC", ""], [1, "container", "align-content-center", "justify-content-center"], [1, "my-5"], [1, "card-body"], [1, "sidenav"], [1, "login-main-text"], [1, "main"], [1, "col-md-6", "col-sm-12"], [1, "login-form"], [1, "form-group"], ["for", "login-input-bar"], ["type", "text", "id", "login-input-bar", "placeholder", "User Name", 1, "form-control"], ["userInput", ""], ["type", "submit", 1, "btn", "btn-login", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 20, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-ecommerce", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.logged);
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.main-head[_ngcontent-%COMP%]{\r\n  height: 150px;\r\n  background: #FFF;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background-color: #292B2C;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n  .login-form[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .register-form[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n  .main[_ngcontent-%COMP%]{\r\n    margin-left: 40%;\r\n  }\r\n\r\n  .sidenav[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n  .login-form[_ngcontent-%COMP%]{\r\n    margin-top: 80%;\r\n  }\r\n\r\n  .register-form[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n  }\r\n}\r\n\r\n.login-main-text[_ngcontent-%COMP%]{\r\n  margin-top: 20%;\r\n  padding: 60px;\r\n  color: #fff;\r\n}\r\n\r\n.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-weight: 300;\r\n}\r\n\r\n.btn-black[_ngcontent-%COMP%]{\r\n  background-color: #000 !important;\r\n  color: #fff;\r\n}\r\n\r\n.btn-login[_ngcontent-%COMP%]{\r\n  background-color:#2D5358;\r\n  color: #ffffff;\r\n}\r\n\r\n.error-class[_ngcontent-%COMP%] {\r\n  border:  1px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVSxpQkFBaUIsQ0FBQztBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87RUFDVDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWFpbi1oZWFke1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyQjJDO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi5tYWluIHtcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAubG9naW4tZm9ybXtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1mb3Jte1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gIC5tYWlue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB9XHJcblxyXG4gIC5zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWZvcm17XHJcbiAgICBtYXJnaW4tdG9wOiA4MCU7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItZm9ybXtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubG9naW4tbWFpbi10ZXh0e1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBwYWRkaW5nOiA2MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi10ZXh0IGgye1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5idG4tYmxhY2t7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnRuLWxvZ2lue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzJENTM1ODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmVycm9yLWNsYXNzIHtcclxuICBib3JkZXI6ICAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__["EcommerceService"]]
            }]
    }], function () { return [{ type: _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__["EcommerceService"] }]; }, { ecommerceC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ecommerceC']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ecommerce/ecommerce.component */ "./src/app/ecommerce/ecommerce.component.ts");
/* harmony import */ var _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ecommerce/products/products.component */ "./src/app/ecommerce/products/products.component.ts");
/* harmony import */ var _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ecommerce/shopping-cart/shopping-cart.component */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _ecommerce_baskets_baskets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ecommerce/baskets/baskets.component */ "./src/app/ecommerce/baskets/baskets.component.ts");
/* harmony import */ var _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ecommerce/services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_9__["EcommerceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_5__["EcommerceComponent"],
        _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
        _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"],
        _ecommerce_baskets_baskets_component__WEBPACK_IMPORTED_MODULE_8__["BasketsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_5__["EcommerceComponent"],
                    _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                    _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"],
                    _ecommerce_baskets_baskets_component__WEBPACK_IMPORTED_MODULE_8__["BasketsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_9__["EcommerceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
    _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_5__["EcommerceComponent"],
    _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
    _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"],
    _ecommerce_baskets_baskets_component__WEBPACK_IMPORTED_MODULE_8__["BasketsComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/ecommerce/baskets/baskets.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/baskets/baskets.component.ts ***!
  \********************************************************/
/*! exports provided: BasketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketsComponent", function() { return BasketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");



class BasketsComponent {
    constructor(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.baskets = this.ecommerceService.ProductBaskets;
    }
    ngOnInit() {
        this.paid = false;
        this.sub = this.ecommerceService.BasketsChanged.subscribe(() => {
            this.baskets = this.ecommerceService.ProductBaskets;
        });
    }
}
BasketsComponent.ɵfac = function BasketsComponent_Factory(t) { return new (t || BasketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__["EcommerceService"])); };
BasketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasketsComponent, selectors: [["app-baskets"]], decls: 0, vars: 0, template: function BasketsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9iYXNrZXRzL2Jhc2tldHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-baskets',
                templateUrl: './baskets.component.html',
                styleUrls: ['./baskets.component.css',]
            }]
    }], function () { return [{ type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_1__["EcommerceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.ts ***!
  \**************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/ecommerce/products/products.component.ts");
/* harmony import */ var _baskets_baskets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baskets/baskets.component */ "./src/app/ecommerce/baskets/baskets.component.ts");






const _c0 = ["productsC"];
const _c1 = ["shoppingCartC"];
const _c2 = ["basketsC"];
const _c3 = function (a0) { return { "collapse": a0, "navbar-collapse": true }; };
class EcommerceComponent {
    constructor() {
        this.collapsed = true;
        this.basketFinished = false;
    }
    ngOnInit() {
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
    finishBasket(basketFinished) {
        this.basketFinished = basketFinished;
    }
    reset() {
        this.basketFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.basketsC.paid = false;
    }
}
EcommerceComponent.ɵfac = function EcommerceComponent_Factory(t) { return new (t || EcommerceComponent)(); };
EcommerceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcommerceComponent, selectors: [["app-ecommerce"]], viewQuery: function EcommerceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productsC = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shoppingCartC = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.basketsC = _t.first);
    } }, decls: 19, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 3, "ngClass"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], [3, "hidden", "onBasketFinished"], ["shoppingCartC", ""], [1, "row"], [1, "col-md-12"], [3, "hidden"], ["productsC", ""], [1, "col-md-3"], [1, "col-md-6", "offset-3"], ["basketsC", ""]], template: function EcommerceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Raphael Ellul Falzon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EcommerceComponent_Template_button_click_4_listener() { return ctx.toggleCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-shopping-cart", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBasketFinished", function EcommerceComponent_Template_app_shopping_cart_onBasketFinished_9_listener($event) { return ctx.finishBasket($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-products", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-baskets", 12, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx.collapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.basketFinished);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.basketFinished);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.basketFinished);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _baskets_baskets_component__WEBPACK_IMPORTED_MODULE_4__["BasketsComponent"]], styles: [".btn[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 4px;\r\n  display: block;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  outline: none;\r\n  overflow: hidden;\r\n  position: relative;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  font-size: 15px;\r\n  background-color: #2D5358;\r\n  padding: 12px 40px;\r\n  margin: 0 auto;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 490%;\r\n  width: 140%;\r\n  background: #2F8075;\r\n  transition: all .5s ease-in-out;\r\n  transform: translateX(-98%) translateY(-25%) rotate(45deg);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover:after {\r\n  transform: translateX(-9%) translateY(-25%) rotate(45deg);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover:after {\r\n  opacity: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7O0FBRWY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFFbkIsK0JBQStCO0VBRS9CLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUVFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBR0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9lY29tbWVyY2UvZWNvbW1lcmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmJ1dHRvbiBzdHVmZiovXHJcblxyXG4uYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRDUzNTg7XHJcbiAgcGFkZGluZzogMTJweCA0MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxufVxyXG5cclxuLmJ0bjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA0OTAlO1xyXG4gIHdpZHRoOiAxNDAlO1xyXG4gIGJhY2tncm91bmQ6ICMyRjgwNzU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTk4JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOTglKSB0cmFuc2xhdGVZKC0yNSUpIHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5idG46aG92ZXI6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOSUpIHRyYW5zbGF0ZVkoLTI1JSkgcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmJ0biBzcGFuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi5idG46aG92ZXI6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ecommerce',
                templateUrl: './ecommerce.component.html',
                styleUrls: ['./ecommerce.component.css']
            }]
    }], function () { return []; }, { productsC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['productsC']
        }], shoppingCartC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['shoppingCartC']
        }], basketsC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['basketsC']
        }] }); })();


/***/ }),

/***/ "./src/app/ecommerce/models/product-basket.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/models/product-basket.model.ts ***!
  \**********************************************************/
/*! exports provided: ProductBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBasket", function() { return ProductBasket; });
class ProductBasket {
    constructor(product, user) {
        this.product = product;
        this.user = user;
    }
}


/***/ }),

/***/ "./src/app/ecommerce/models/product-baskets.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/ecommerce/models/product-baskets.model.ts ***!
  \***********************************************************/
/*! exports provided: ProductBaskets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBaskets", function() { return ProductBaskets; });
class ProductBaskets {
    constructor() {
        this.productBaskets = [];
    }
}


/***/ }),

/***/ "./src/app/ecommerce/products/products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_product_basket_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product-basket.model */ "./src/app/ecommerce/models/product-basket.model.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ProductsComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsComponent_tr_39_Template_input_ngModelChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const basket_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addToCartPreemptiveList(basket_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const basket_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "tr-", basket_r3.product.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](basket_r3.product.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](basket_r3.product.productType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", basket_r3.product.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", basket_r3.product.id);
} }
class ProductsComponent {
    constructor(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.productBaskets = [];
        this.products = [];
        this.toAddToCartList = [];
        this.productSelected = false;
        this.name = "";
        this.selectedCategory = 'All';
        this.filter = false;
    }
    ngOnInit() {
        this.productBaskets = [];
        this.loadProducts();
        this.loadBaskets();
    }
    keyListener() {
        document.getElementById('search-bar').addEventListener('keypress', e => this.validateTextField(e));
    }
    // Regex
    validateTextField(event) {
        var regex = new RegExp("^[a-zA-Z\\s]*$/*");
        const element = document.getElementById("search-bar");
        if (!regex.test(event.key)) {
            event.preventDefault();
            element.classList.add("error-class");
            return false;
        }
        else {
            element.classList.remove("error-class");
        }
    }
    addCheckedItemsToCart() {
        // This triggers if the user has made a purchase earlier
        const sucessdiv = document.getElementById("success");
        if (!sucessdiv.classList.contains("d-none")) {
            sucessdiv.classList.add("d-none");
        }
        //First checking what products there are in the cart so as not to add duplicates.
        var triggered = false;
        var listOfCardIds = this.checkCartForDuplicates();
        let i;
        for (i = 0; i < this.toAddToCartList.length; ++i) {
            // Remove the checked state of the checkboxes that have been added
            triggered = false;
            let j;
            for (j = 0; j < listOfCardIds.length; ++j) {
                if (listOfCardIds[j] == this.toAddToCartList[i].product.id) {
                    // this.toAddToCartList.splice(i,1)
                    triggered = true;
                    break;
                }
            }
            // @ts-ignore
            document.getElementById(this.toAddToCartList[i].product.id).checked = false;
            document.getElementById("tr-" + this.toAddToCartList[i].product.id).classList.remove("selected-class");
            if (!triggered) {
                this.addToCart(this.toAddToCartList[i]);
            }
        }
        // Clear cart after adding to basket
        this.toAddToCartList = [];
    }
    checkCartForDuplicates() {
        var listOfCartIds = [];
        let j;
        for (j = 0; j < this.ecommerceService.ProductBaskets.productBaskets.length; ++j) {
            listOfCartIds.push(this.ecommerceService.ProductBaskets.productBaskets[j].product.id);
        }
        return listOfCartIds;
    }
    addToCart(basket) {
        this.ecommerceService.SelectedProductBasket = basket;
        this.selectedProductBasket = this.ecommerceService.SelectedProductBasket;
        this.productSelected = true;
    }
    getProductIndex(product) {
        return this.ecommerceService.ProductBaskets.productBaskets.findIndex(value => value.product === product);
    }
    loadProducts() {
        this.ecommerceService.getAllProducts()
            .subscribe((products) => {
            this.products = products;
            this.products.forEach(product => {
                this.productBaskets.push(new _models_product_basket_model__WEBPACK_IMPORTED_MODULE_1__["ProductBasket"](product, this.user));
            });
        }, (error) => console.log(error));
    }
    // Products are added to this "virtual" list (not seen by the user) before being added to the cart
    addToCartPreemptiveList(product) {
        const element = document.getElementById("tr-" + product.product.id);
        if (!this.toAddToCartList.includes(product)) {
            element.classList.add("selected-class");
            this.toAddToCartList.push(product);
            return;
        }
        else {
            element.classList.remove("selected-class");
            this.toAddToCartList.splice(this.toAddToCartList.indexOf(product), 1);
        }
    }
    //event handler for the select element's change event
    selectChangeHandler(event) {
        //update the ui
        this.selectedCategory = event.target.value;
    }
    loadFilteredProducts(keyword) {
        //  First remove the checked products so as not to be able to add unseen products
        this.toAddToCartList = [];
        this.ecommerceService.getProductByKeyword(keyword, this.selectedCategory)
            .subscribe((products) => {
            this.products = products;
            // Delete the list before adding the item
            this.productBaskets = [];
            this.products.forEach(product => {
                this.productBaskets.push(new _models_product_basket_model__WEBPACK_IMPORTED_MODULE_1__["ProductBasket"](product, this.user));
            });
        }, (error) => console.log(error));
    }
    loadBaskets() {
        this.sub = this.ecommerceService.BasketsChanged.subscribe(() => {
            this.shoppingCartBaskets = this.ecommerceService.ProductBaskets;
        });
    }
    reset() {
        this.productBaskets = [];
        this.loadProducts();
        this.ecommerceService.ProductBaskets.productBaskets = [];
        this.loadBaskets();
        this.productSelected = false;
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 40, vars: 1, consts: [[1, "container"], [1, "display-2", "font-weight-bold"], ["id", "search-form"], [1, "form-group", "form-inline"], ["for", "search-bar"], ["id", "search-bar", "maxlength", "30", "pattern", "^[a-zA-Z\\\\s]*$/*", "placeholder", "Search by product name", "type", "text", 1, "shadow-sm", "form-control", 3, "keypress"], ["titleInput", ""], ["for", "product-types"], ["id", "product-types", "name", "productType", "form", "search-form", 1, "ml-2", "form-control", "form-control-md", "shadow-sm", "rounded", 3, "change"], ["chosenCategory", ""], ["hidden", ""], ["value", "Music"], ["value", "Games"], ["value", "Books"], [1, "ml-2", "btn", 3, "click"], ["aria-hidden", "true", 1, "ml-2", "fa", "fa-search"], [1, "btn", "add-button", 3, "click"], [1, "table", "text-center"], [1, "thead-dark"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "custom-control", "custom-checkbox", "custom-checkbox-green"], ["type", "checkbox", "name", "cb", 1, "custom-control-input-green", "custom-control-input", 3, "id", "ngModel", "ngModelChange"], [1, "custom-control-label", 3, "for"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ProductsComponent_Template_input_keypress_7_listener() { return ctx.keyListener(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductsComponent_Template_select_change_10_listener($event) { return ctx.selectChangeHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.loadFilteredProducts(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_26_listener() { return ctx.addCheckedItemsToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Add selected to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Product Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Select For Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProductsComponent_tr_39_Template, 9, 6, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productBaskets);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".error-class[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.selected-class[_ngcontent-%COMP%] {\n  background: #A0EBC4;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 4px;\n  display: block;\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  color: #fff;\n  font-weight: 700;\n  font-size: 15px;\n  background-color: #2D5358;\n  padding: 7px 40px;\n  margin: 0 auto;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);\n}\n.btn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 490%;\n  width: 140%;\n  background: #2F8075;\n  transition: all .5s ease-in-out;\n  transform: translateX(-98%) translateY(-25%) rotate(45deg);\n}\n.btn[_ngcontent-%COMP%]:hover:enabled:after {\n  transform: translateX(-9%) translateY(-25%) rotate(45deg);\n}\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.btn[_ngcontent-%COMP%]:hover:enabled:after {\n  opacity: 0;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  transition: background-color .8s linear;\n}\n\n.custom-control-input-green[_ngcontent-%COMP%]:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #28a745 !important;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25) !important;\n}\n.custom-control-input-green[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #28a745 !important;\n  background-color: #2F8075 !important;\n}\n.custom-control-input-green[_ngcontent-%COMP%]:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #2F8075 !important;\n}\n.custom-control-input-green[_ngcontent-%COMP%]:not(:disabled):active    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #2F8075 !important;\n  border-color: #2F8075 !important;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEsZUFBZTtBQUVmO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsMENBQTBDO0FBQzVDO0FBR0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFFbkIsK0JBQStCO0VBRS9CLDBEQUEwRDtBQUM1RDtBQUVBO0VBRUUseURBQXlEO0FBQzNEO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBR0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1Q0FBdUM7QUFDekM7QUFFQSxhQUFhO0FBRWI7RUFDRSxnQ0FBZ0M7RUFDaEMsMkRBQTJEO0FBQzdEO0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7QUFFQSxjQUFjO0FBRWQ7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSZWQgYm9yZGVyIGFyYW91bmQgaW5wdXQgYm94ZXMqL1xuLmVycm9yLWNsYXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4vKlRyaWdnZXJlZCB3aGVuIGNoZWNrYm94IGlzIGNsaWNrZWQqL1xuLnNlbGVjdGVkLWNsYXNzIHtcbiAgYmFja2dyb3VuZDogI0EwRUJDNDtcbn1cblxuLypCdXR0b24gc3R1ZmYqL1xuXG4uYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ1MzU4O1xuICBwYWRkaW5nOiA3cHggNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcbn1cblxuXG4uYnRuOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNDkwJTtcbiAgd2lkdGg6IDE0MCU7XG4gIGJhY2tncm91bmQ6ICMyRjgwNzU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTk4JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTk4JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xufVxuXG4uYnRuOmhvdmVyOmVuYWJsZWQ6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOSUpIHRyYW5zbGF0ZVkoLTI1JSkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xufVxuXG4uYnRuIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cblxuLmJ0bjpob3ZlcjplbmFibGVkOmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnRhYmxlIHRyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuOHMgbGluZWFyO1xufVxuXG4vKkNoZWNrYm94ZXMqL1xuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQtZ3JlZW46Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC4yNSkgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0LWdyZWVuOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY4MDc1ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dC1ncmVlbjpmb2N1czpub3QoOmNoZWNrZWQpIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMyRjgwNzUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0LWdyZWVuOm5vdCg6ZGlzYWJsZWQpOmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGODA3NSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyRjgwNzUgIWltcG9ydGFudDtcbn1cblxuLypUYWJsZSBzdHVmZiovXG5cbnRhYmxlIHRkIHtcblxuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css'],
            }]
    }], function () { return [{ type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ecommerce/services/EcommerceService.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/services/EcommerceService.ts ***!
  \********************************************************/
/*! exports provided: EcommerceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceService", function() { return EcommerceService; });
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_product_baskets_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product-baskets.model */ "./src/app/ecommerce/models/product-baskets.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





//This class takes care of the communications between the backend & frontend
class EcommerceService {
    constructor(http) {
        this.http = http;
        this.productsUrl = "/api/products";
        this.basketsUrl = "/api/baskets";
        this.saveUsersUrl = "/api/users/save-user?userName=";
        this.getUserNameUrl = "/api/users/get-user-by-name?userName=";
        this.keywordSearchUrl = "/api/products/filter-products?keyword=";
        //Product Baskets is the list of items in the cart
        this.baskets = new _models_product_baskets_model__WEBPACK_IMPORTED_MODULE_1__["ProductBaskets"]();
        this.productBasketSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.basketsSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.users = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.ProductBasketChanged = this.productBasketSubject.asObservable();
        this.BasketsChanged = this.basketsSubject.asObservable();
    }
    getAllProducts() {
        return this.http.get(this.productsUrl);
    }
    getUserByName(userName) {
        return this.http.get(this.getUserNameUrl + userName);
    }
    getProductByKeyword(keyword, category) {
        return this.http.get(this.keywordSearchUrl + keyword + "&category=" + category);
    }
    checkForPreviousPurchases(basket) {
        return this.http.post(this.basketsUrl + "/check", basket);
    }
    saveBasket(basket) {
        return this.http.post(this.basketsUrl, basket);
    }
    set SelectedProductBasket(value) {
        this.productBasket = value;
        this.productBasketSubject.next();
    }
    get SelectedProductBasket() {
        return this.productBasket;
    }
    set ProductBaskets(value) {
        this.baskets = value;
        this.basketsSubject.next();
    }
    get ProductBaskets() {
        return this.baskets;
    }
}
EcommerceService.ɵfac = function EcommerceService_Factory(t) { return new (t || EcommerceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
EcommerceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EcommerceService, factory: EcommerceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EcommerceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_product_baskets_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product-baskets.model */ "./src/app/ecommerce/models/product-baskets.model.ts");
/* harmony import */ var _models_product_basket_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-basket.model */ "./src/app/ecommerce/models/product-basket.model.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ShoppingCartComponent_h5_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Items In Basket:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingCartComponent_h5_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cart is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShoppingCartComponent_ul_20_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingCartComponent_ul_20_li_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const basket_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.removeFromCart(basket_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const basket_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", basket_r5.product.productName, " - ", basket_r5.product.productType, ". ");
} }
function ShoppingCartComponent_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShoppingCartComponent_ul_20_li_1_Template, 5, 2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.baskets.productBaskets);
} }
function ShoppingCartComponent_div_25_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r9.productName, "");
} }
function ShoppingCartComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Attention!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please remove the below items from your cart. They have already been purchased ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShoppingCartComponent_div_25_p_5_Template, 2, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.listOfAlreadyPurchasedProducts);
} }
class ShoppingCartComponent {
    constructor(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.products = [];
        this.listOfAlreadyPurchasedProducts = [];
        this.safeToSave = false;
        this.basketFinished = false;
        this.onBasketFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.baskets = new _models_product_baskets_model__WEBPACK_IMPORTED_MODULE_1__["ProductBaskets"]();
        this.loadCart();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    //Removes an item from the cart
    removeFromCart(productBasket) {
        let index = this.getProductIndex(productBasket.product);
        if (index > -1) {
            this.ecommerceService.ProductBaskets.productBaskets.splice(this.getProductIndex(productBasket.product), 1);
        }
    }
    getProductIndex(product) {
        return this.ecommerceService.ProductBaskets.productBaskets.findIndex(value => value.product === product);
    }
    // This method is triggered whenever the ProductBasketChanged method is triggered
    loadCart() {
        this.user = this.ecommerceService.loggedUser;
        this.sub = this.ecommerceService.ProductBasketChanged.subscribe(() => {
            let productBasket = this.ecommerceService.SelectedProductBasket;
            if (productBasket) {
                if ((this.baskets.productBaskets))
                    this.baskets.productBaskets.push(new _models_product_basket_model__WEBPACK_IMPORTED_MODULE_2__["ProductBasket"](productBasket.product, this.ecommerceService.loggedUser));
                //NB: This.baskets.productBaskets contains the User & The Product
            }
            //this.baskets or ProductBaskets are the list of items in the cart.
            this.ecommerceService.ProductBaskets = this.baskets;
            this.baskets = this.ecommerceService.ProductBaskets;
        });
    }
    //Checks the user's purchase history and does not allow them to purchase the same product twice
    checkBeforeSaveToBasket() {
        this.safeToSave = false;
        this.listOfAlreadyPurchasedProducts = [];
        this.ecommerceService.checkForPreviousPurchases(this.baskets).subscribe((products) => {
            this.products = products;
            this.products.forEach(product => {
                this.listOfAlreadyPurchasedProducts.push(product);
            });
            // If there are already purchased products then the basket shall be cancelled
            if (this.listOfAlreadyPurchasedProducts.length < 1) {
                this.safeToSave = true;
            }
            this.saveToBasket();
        }, (error) => console.log(error));
    }
    // If none of the items have been found in past purchases, this will trigger and save to basket
    saveToBasket() {
        if (this.safeToSave == true) {
            this.ecommerceService.saveBasket(this.baskets).subscribe();
            const sucessdiv = document.getElementById("success");
            sucessdiv.classList.remove("d-none");
            this.reset();
        }
    }
    reset() {
        this.basketFinished = false;
        this.baskets = new _models_product_baskets_model__WEBPACK_IMPORTED_MODULE_1__["ProductBaskets"]();
        this.baskets.productBaskets = [];
        this.ecommerceService.ProductBaskets.productBaskets = [];
    }
}
ShoppingCartComponent.ɵfac = function ShoppingCartComponent_Factory(t) { return new (t || ShoppingCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"])); };
ShoppingCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartComponent, selectors: [["app-shopping-cart"]], outputs: { myEvent: "myEvent", onBasketFinished: "onBasketFinished" }, decls: 29, vars: 6, consts: [["type", "button", "data-toggle", "modal", "data-target", "#shopping-cart", 1, "btn"], [1, "d-inline", "small", "btn-text"], [1, "ml-2", "fa", "fa-shopping-cart"], ["id", "shopping-cart", "tabindex", "-1", "role", "dialog", "aria-labelledby", "shopping-basket", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "shopping-cart-label", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "card", "bg-transparent", "mb-3", "vw-25", "bbasket-0"], [1, "card-body"], ["class", "card-text", 4, "ngIf"], ["class", "list-group-item bbasket-0", 4, "ngIf"], [1, "btn", "btn-light", "btn-block", 3, "disabled", "click"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], ["id", "success", "role", "alert", 1, "alert", "alert-success", "mt-4", "d-none"], [1, "card-text"], [1, "list-group-item", "bbasket-0"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["type", "button", "aria-label", "remove-from-cart", 1, "close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["class", "d-inline-flex ml-3", 4, "ngFor", "ngForOf"], ["type", "button", "data-dismiss", "alert", 1, "close"], [1, "d-inline-flex", "ml-3"]], template: function ShoppingCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Shopping Basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ShoppingCartComponent_h5_18_Template, 2, 0, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ShoppingCartComponent_h5_19_Template, 2, 0, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ShoppingCartComponent_ul_20_Template, 2, 1, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingCartComponent_Template_button_click_22_listener() { return ctx.checkBeforeSaveToBasket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Finalise Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ShoppingCartComponent_div_25_Template, 8, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Your purchase was successful! :) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Products (", ctx.baskets.productBaskets.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baskets.productBaskets.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baskets.productBaskets.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.baskets.productBaskets.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.baskets.productBaskets.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfAlreadyPurchasedProducts.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".btn[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 4px;\r\n  display: block;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  outline: none;\r\n  overflow: hidden;\r\n  position: relative;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  font-size: 15px;\r\n  background-color: #2D5358;\r\n  padding: 12px 40px;\r\n  margin: 0 auto;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 490%;\r\n  width: 140%;\r\n  background: #2F8075;\r\n  transition: all .5s ease-in-out;\r\n  transform: translateX(-98%) translateY(-25%) rotate(45deg);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover:after {\r\n  transform: translateX(-9%) translateY(-25%) rotate(45deg);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover:after {\r\n  opacity: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7O0FBRWY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCwwQ0FBMEM7QUFDNUM7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFFbkIsK0JBQStCO0VBRS9CLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUVFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9lY29tbWVyY2Uvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkJ1dHRvbiBzdHVmZiovXHJcblxyXG4uYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRDUzNTg7XHJcbiAgcGFkZGluZzogMTJweCA0MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxufVxyXG5cclxuXHJcbi5idG46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogNDkwJTtcclxuICB3aWR0aDogMTQwJTtcclxuICBiYWNrZ3JvdW5kOiAjMkY4MDc1O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05OCUpIHRyYW5zbGF0ZVkoLTI1JSkgcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTk4JSkgdHJhbnNsYXRlWSgtMjUlKSByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOSUpIHRyYW5zbGF0ZVkoLTI1JSkgcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTklKSB0cmFuc2xhdGVZKC0yNSUpIHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5idG4gc3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5idG46aG92ZXI6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-cart',
                templateUrl: './shopping-cart.component.html',
                styleUrls: ['./shopping-cart.component.css']
            }]
    }], function () { return [{ type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"] }]; }, { myEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onBasketFinished: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rapha\IdeaProjects\boot\ecommerce\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map