webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./address/address.module": [
		"../../../../../src/app/address/address.module.ts",
		"common",
		"address.module"
	],
	"./apps/apps.module": [
		"../../../../../src/app/apps/apps.module.ts",
		"common",
		"apps.module"
	],
	"./authentication/authentication.module": [
		"../../../../../src/app/authentication/authentication.module.ts",
		"authentication.module"
	],
	"./block-info/blockinfo.module": [
		"../../../../../src/app/block-info/blockinfo.module.ts",
		"common",
		"blockinfo.module"
	],
	"./block/block.module": [
		"../../../../../src/app/block/block.module.ts",
		"common",
		"block.module"
	],
	"./charts/charts.module": [
		"../../../../../src/app/charts/charts.module.ts",
		"common",
		"charts.module"
	],
	"./dashboards/dashboard.module": [
		"../../../../../src/app/dashboards/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./delegate-monitor-info/delegateMonitorInfo.module": [
		"../../../../../src/app/delegate-monitor-info/delegateMonitorInfo.module.ts",
		"common",
		"delegateMonitorInfo.module"
	],
	"./delegate-monitor/delegate-monitor.module": [
		"../../../../../src/app/delegate-monitor/delegate-monitor.module.ts",
		"common",
		"delegate-monitor.module"
	],
	"./transaction-info/transactioninfo.module": [
		"../../../../../src/app/transaction-info/transactioninfo.module.ts",
		"common",
		"transactioninfo.module"
	],
	"./transactions/transactions.module": [
		"../../../../../src/app/transactions/transactions.module.ts",
		"common",
		"transactions.module"
	],
	"./user-info/user-info.module": [
		"../../../../../src/app/user-info/user-info.module.ts",
		"common",
		"user-info.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Approutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_full_full_component__ = __webpack_require__("../../../../../src/app/layouts/full/full.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_blank_blank_component__ = __webpack_require__("../../../../../src/app/layouts/blank/blank.component.ts");


var Approutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_full_full_component__["a" /* FullComponent */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboards/dashboard.module#DashboardModule' },
            { path: 'block', loadChildren: './block/block.module#BlockModule' },
            { path: 'block-info', loadChildren: './block-info/blockinfo.module#BlockInfoModule' },
            { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsModule' },
            { path: 'unconfirmedTransactions', loadChildren: './transactions/transactions.module#TransactionsModule' },
            { path: 'transaction-info/:name/:id', loadChildren: './transaction-info/transactioninfo.module#TransactionInfoModule' },
            { path: 'user-info/:id', loadChildren: './user-info/user-info.module#UserInfoModule' },
            { path: 'address', loadChildren: './address/address.module#AddressModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartModule' },
            { path: 'apps', loadChildren: './apps/apps.module#AppsModule' },
            { path: 'delegate-monitor', loadChildren: './delegate-monitor/delegate-monitor.module#DelegateMonitorModule' },
            { path: 'delegate/:publicKey', loadChildren: './delegate-monitor-info/delegateMonitorInfo.module#DelegateMonitorInfoModule' }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_blank_blank_component__["a" /* BlankComponent */],
        children: [
            {
                path: 'authentication',
                loadChildren: './authentication/authentication.module#AuthenticationModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/authentication/404'
    }
];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n    <app-spinner></app-spinner>\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_full_full_component__ = __webpack_require__("../../../../../src/app/layouts/full/full.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_blank_blank_component__ = __webpack_require__("../../../../../src/app/layouts/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_header_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_spinner_component__ = __webpack_require__("../../../../../src/app/shared/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_allTransactions_service__ = __webpack_require__("../../../../../src/app/shared/services/allTransactions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_allBlock_service__ = __webpack_require__("../../../../../src/app/shared/services/allBlock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_blockHeightDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/blockHeightDetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_transactionsDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/transactionsDetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_blockDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/blockDetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_addressDetail_service__ = __webpack_require__("../../../../../src/app/shared/services/addressDetail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_senderidDetail_service__ = __webpack_require__("../../../../../src/app/shared/services/senderidDetail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_delegates_service__ = __webpack_require__("../../../../../src/app/shared/services/delegates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_spinner_component__["a" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__layouts_full_full_component__["a" /* FullComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layouts_blank_blank_component__["a" /* BlankComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_header_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_sidebar_sidebar_component__["a" /* SidebarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* Approutes */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_12_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__shared_services_delegates_service__["a" /* DelegatesService */], __WEBPACK_IMPORTED_MODULE_22__shared_services_senderidDetail_service__["a" /* SenderidDetailService */], __WEBPACK_IMPORTED_MODULE_21__shared_services_addressDetail_service__["a" /* AddressDetailService */], __WEBPACK_IMPORTED_MODULE_18__shared_services_blockHeightDetails_service__["a" /* BlockHeightDetailsService */], __WEBPACK_IMPORTED_MODULE_16__shared_services_allTransactions_service__["a" /* allTransactionsService */], __WEBPACK_IMPORTED_MODULE_17__shared_services_allBlock_service__["a" /* allBlockService */], __WEBPACK_IMPORTED_MODULE_19__shared_services_transactionsDetails_service__["a" /* transactionsDetailsService */], __WEBPACK_IMPORTED_MODULE_20__shared_services_blockDetails_service__["a" /* BlockDetailsService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["HashLocationStrategy"]
                }],
            // exports: [
            //   OrdinalPipe
            // ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Only router without any element -->\n<!-- ============================================================== -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/blank/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'blank-layout',
            template: __webpack_require__("../../../../../src/app/layouts/blank/blank.component.html"),
            styleUrls: []
        })
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/full/full.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\" class=\"blue\"[ngClass]=\"\n    {\n        'defaultdark': color == 'defaultdark',\n        'greendark': color == 'greendark',\n        'reddark': color == 'reddark',\n        'bluedark': color == 'bluedark',\n        'purpledark': color == 'purpledark',\n        'megnadark': color == 'megnadark',\n        'default': color == 'default',\n        'green': color == 'green',\n        'red': color == 'red',\n        'blue': color == 'blue',\n        'purple': color == 'purple',\n        'megna': color == 'megna', \n        'mini-sidebar': showMinisidebar,\n        'dark-theme': showDarktheme\n    }\n\">\n    <!-- ============================================================== -->\n    <!-- Topbar header - style you can find in pages.scss -->\n    <!-- ============================================================== -->\n\n    <ap-navigation></ap-navigation>\n    <!-- ============================================================== -->\n    <!-- Left Sidebar - style you can find in sidebar.scss  -->\n    <!-- ============================================================== -->\n    <!-- <aside class=\"left-sidebar\"> -->\n        <!-- Sidebar scroll-->\n        <!-- <div class=\"scroll-sidebar\" [perfectScrollbar]=\"config\">\n            <ap-sidebar></ap-sidebar>\n        </div> -->\n        <!-- End Sidebar scroll-->\n    <!-- </aside> -->\n    <!-- ============================================================== -->\n    <!-- End Left Sidebar - style you can find in sidebar.scss  -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- Page wrapper  -->\n    <!-- ============================================================== -->\n    <div class=\"page-wrapper\">\n        <!-- ============================================================== -->\n        <!-- Container fluid  -->\n        <!-- ============================================================== -->\n        <div class=\"container-fluid\">\n            <breadcrumb></breadcrumb>\n            <!-- ============================================================== -->\n            <!-- Start Page Content -->\n            <!-- ============================================================== -->\n            <router-outlet></router-outlet>\n            <!-- ============================================================== -->\n            <!-- End Start Page Content -->\n            <!-- ============================================================== -->\n            <!-- ============================================================== -->\n            <!-- Setting Right sidebar -->\n            <!-- ============================================================== -->\n            <!-- <button class=\"right-side-toggle btn-inverse btn btn-circle btn-lg\" (click)=\"showSettings = !showSettings\"><i class=\"ti-settings text-white fa-spin\"></i></button>\n            <div class=\"right-sidebar\" [ngClass]=\"{'shw-rside': showSettings}\">\n                <div class=\"slimscrollright\">\n                    <div class=\"rpanel-title\"> Settings <span><i class=\"ti-close right-side-toggle\" (click)=\"showSettings = !showSettings\"></i></span> </div>\n                    <div class=\"r-panel-body\" [perfectScrollbar]=\"config\">\n                        \n                        <ul>    \n                            <li class=\"m-b-20 m-t-20\"><b>Light Sidebar / Colors</b></li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"default\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Default</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"green\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-success\">Green</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"red\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-danger\">Red</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"blue\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-info\">Blue</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"purple\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-purple\">Purple</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"megna\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-megna\">Megna</span>\n                                    </label>\n                                </div>\n                            </li>\n                        </ul>    \n                            <hr>\n                        <ul>    \n                            <li class=\"m-b-20\"><b>Dark Sidebar / Colors</b></li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"defaultdark\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Default</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"greendark\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-success\">Green</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"reddark\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-danger\">Red</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"bluedark\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-info\">Blue</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"purpledark\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-purple\">Purple</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"megnadark\" [(ngModel)]=\"color\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description text-megna\">Megna</span>\n                                    </label>\n                                </div>\n                            </li>\n                        </ul>\n                        <hr>\n                        <ul>\n                            <li class=\"m-b-20 m-t-20\"><b>General Setting</b></li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input class=\"custom-control-input sidebartoggler\" type=\"checkbox\" [(ngModel)]=\"showMinisidebar\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Mini Sidebar</span>\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-check\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" [(ngModel)]=\"showDarktheme\" class=\"custom-control-input\"> \n                                        <span class=\"custom-control-indicator\"></span> \n                                        <span class=\"custom-control-description\">Dark Theme</span> \n                                    </label>\n                                </div>\n                            </li>\n                        </ul>\n                        <hr>\n                    </div>\n                </div>\n            </div> -->\n            <!-- ============================================================== -->\n            <!-- End Right sidebar -->\n            <!-- ============================================================== -->\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Container fluid  -->\n        <!-- ============================================================== -->\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Page wrapper  -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- footer -->\n    <!-- ============================================================== -->\n    <footer class=\"footer\">\n        Copyright 2016-2018 DDKCoin. All rights reserved.\n    </footer>\n    <!-- ============================================================== -->\n    <!-- End footer -->\n    <!-- ============================================================== -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/full/full.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/full/full.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullComponent = (function () {
    function FullComponent(router) {
        this.router = router;
        this.color = 'defaultdark';
        this.showSettings = false;
        this.showMinisidebar = false;
        this.showDarktheme = false;
        this.config = {};
    }
    FullComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
    };
    FullComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'full-layout',
            template: __webpack_require__("../../../../../src/app/layouts/full/full.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/full/full.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], FullComponent);
    return FullComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->\n<div class=\"row page-titles\">\n    <div class=\"col-md-5 align-self-center\">\n        <h4 class=\"text-themecolor m-b-0\">{{pageInfo?.title}}</h4>\n    </div>\n    <div class=\"col-md-7 align-self-center\">\n        <ol class=\"breadcrumb\">\n            <ng-template ngFor let-url [ngForOf]=\"pageInfo?.urls\" let-last=\"last\">\n                <li class=\"breadcrumb-item\" *ngIf=\"!last\" [routerLink]=\"url.url\">\n                    <a href='javascript:void(0)'>{{url.title}}</a>\n                </li>\n                <li class=\"breadcrumb-item active\" *ngIf=\"last\">{{url.title}}</li>\n            </ng-template>\n        </ol>\n    </div>\n</div>\n<!-- ============================================================== -->\n<!-- End Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "../../../../../src/app/shared/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this
            .router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'breadcrumb',
            template: __webpack_require__("../../../../../src/app/shared/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header-navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\">\n    <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n        <!-- Logo -->\n        <!-- ============================================================== -->\n        <div class=\"navbar-header logo-container\">\n            <a class=\"navbar-brand\" href=\"index.html\">\n            \n                    <img src=\"assets/images/logo.png\" alt=\"homepage\" class=\"DDkoin-logo\" width=\"100\" />\n            \n            </a>\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Logo -->\n\n\n        <!-- User profile and search -->\n        <!-- ============================================================== -->\n        <div class=\"search-menu-box\">\n            <ul class=\"navbar-nav my-lg-0 \">\n                <li>\n                    <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Home</a>\n                </li>\n                <li class=\"nav-item dropdown bockchain-menu\" ngbDropdown>\n                    <a ngbDropdownToggle class=\"waves-effect waves-dark\" href=\"javascript:void(0)\" routerLinkActive=\"active\">Blockchain</a>\n                    <i class=\"fa fa-angle-down fa-inverse\"></i>\n                    <div class=\"dropdown-menu dropdown-menu-right mailbox animated bounceInDown\" ngbDropdownMenu>\n                        <ul>\n                            <li>\n                                <a class=\"drop-title\" routerLink=\"/transactions\">View Transaction</a>\n                            </li>\n                            <li>\n                                <a class=\"drop-title\" routerLink=\"/unconfirmedTransactions\">View Pending Transaction</a>\n                            </li>\n                            <li>\n                                <a class=\"drop-title\" routerLink=\"/block\">View Block</a>\n                        </ul>\n                    </div>\n                </li>\n                <li>\n                    <a routerLink=\"/delegate-monitor\" routerLinkActive=\"active\">Delegate Monitor</a>\n                </li>\n                <li class=\"nav-item hidden-sm-down search-box\">\n                    <a class=\"nav-link hidden-sm-down text-muted waves-effect waves-dark\" href=\"javascript:void(0)\">\n                        <i class=\"ti-search\"></i>\n                    </a>\n                    <form class=\"app-search\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\">\n                        <a class=\"srh-btn\">\n                            <i class=\"ti-close\"></i>\n                        </a>\n                    </form>\n                </li>\n                <!-- ============================================================== -->\n                <!-- Ends user profile and search  -->\n            </ul>\n        </div>\n    </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/shared/header-navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* declare var jquery:any;
declare var $ :any; */
var NavigationComponent = (function () {
    function NavigationComponent(modalService) {
        this.modalService = modalService;
        this.config = {};
        this.isOpen = false;
        this.isCollapsed = false;
        // This is for Notifications
        this.notifications = [{
                round: 'round-danger',
                icon: 'ti-link',
                title: 'Luanch Admin',
                subject: 'Just see the my new admin!',
                time: '9:30 AM'
            }, {
                round: 'round-success',
                icon: 'ti-calendar',
                title: 'Event today',
                subject: 'Just a reminder that you have event',
                time: '9:10 AM'
            }, {
                round: 'round-info',
                icon: 'ti-settings',
                title: 'Settings',
                subject: 'You can customize this template as you want',
                time: '9:08 AM'
            }, {
                round: 'round-primary',
                icon: 'ti-user',
                title: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }];
        // This is for Mymessages
        this.mymessages = [{
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            }, {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            }, {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            }, {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }];
    }
    Object.defineProperty(NavigationComponent.prototype, "opened", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.open = function () {
        this.isOpen = true;
    };
    NavigationComponent.prototype.close = function () {
        this.isOpen = false;
    };
    NavigationComponent.prototype.toggleMenu = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
        var set = function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            var topOffset = 0;
            if (width < 1170) {
                __WEBPACK_IMPORTED_MODULE_0_jquery__("#main-wrapper").addClass("mini-sidebar");
            }
            else {
                __WEBPACK_IMPORTED_MODULE_0_jquery__("#main-wrapper").removeClass("mini-sidebar");
            }
        };
        __WEBPACK_IMPORTED_MODULE_0_jquery__(window).ready(set);
        __WEBPACK_IMPORTED_MODULE_0_jquery__(window).on("resize", set);
        __WEBPACK_IMPORTED_MODULE_0_jquery__(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(".app-search").toggle(200);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__("body").trigger("resize");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"])('class.open'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NavigationComponent.prototype, "opened", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavigationComponent.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavigationComponent.prototype, "close", null);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'ap-navigation',
            template: __webpack_require__("../../../../../src/app/shared/header-navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/addressDetail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressDetailService = (function () {
    function AddressDetailService(http) {
        this.http = http;
    }
    /* For All Transactions List Services */
    AddressDetailService.prototype.getAddressDetail = function (address) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/accounts?address=' + address)
            .map(function (res) { return res.json(); });
    };
    AddressDetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AddressDetailService);
    return AddressDetailService;
}());

/* return this.http.get(environment.serverUrl + '/api/blocks/get?id='+id) */


/***/ }),

/***/ "../../../../../src/app/shared/services/allBlock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allBlockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var allBlockService = (function () {
    function allBlockService(http) {
        this.http = http;
    }
    /* For All Transactions List Services */
    allBlockService.prototype.getAllBlocks = function (limit, offset) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/blocks', {
            params: {
                limit: limit,
                offset: offset,
                orderBy: 'timestamp:desc'
            }
        })
            .map(function (res) { return res.json(); });
    };
    allBlockService.prototype.getBlocksBasedOnHeight = function (height) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/blocks', {
            params: {
                height: height
            }
        })
            .map(function (res) { return res.json(); });
    };
    allBlockService.prototype.getBlocksBasedOnblockId = function (blockId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/blocks/get', {
            params: {
                id: blockId
            }
        })
            .map(function (res) { return res.json(); });
    };
    allBlockService.prototype.getBlocksBasedOnpublicKey = function (publicKey) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/blocks', {
            params: {
                generatorPublicKey: publicKey
            }
        })
            .map(function (res) { return res.json(); });
    };
    allBlockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], allBlockService);
    return allBlockService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/allTransactions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allTransactionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var allTransactionsService = (function () {
    function allTransactionsService(http) {
        this.http = http;
    }
    /* For All Transactions List Services */
    allTransactionsService.prototype.getAllTransactions = function (limit, offset) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions', {
            params: {
                limit: limit,
                offset: offset,
                orderBy: 'timestamp:desc'
            }
        })
            .map(function (res) { return res.json(); });
    };
    allTransactionsService.prototype.getUnconfirmedTransactions = function (limit, offset) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions/unconfirmed', {
            params: {
                limit: limit,
                offset: offset,
                orderBy: 'timestamp:desc'
            }
        })
            .map(function (res) { return res.json(); });
    };
    allTransactionsService.prototype.getTransactionsBasedOnHeight = function (height) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions', {
            params: {
                height: height,
                orderBy: 'height:desc'
            }
        })
            .map(function (res) { return res.json(); });
    };
    allTransactionsService.prototype.getTransactionsBasedOnId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions', {
            params: {
                id: id
            }
        })
            .map(function (res) { return res.json(); });
    };
    allTransactionsService.prototype.getTransactionsBasedOnSender = function (senderId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions', {
            params: {
                senderId: senderId
            }
        })
            .map(function (res) { return res.json(); });
    };
    allTransactionsService.prototype.getTransactionsBasedOnType = function (type) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions', {
            params: {
                type: type
            }
        })
            .map(function (res) { return res.json(); });
    };
    allTransactionsService.prototype.getTransactionsHistory = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions/getTransactionHistory')
            .map(function (res) { return res.json(); });
    };
    allTransactionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], allTransactionsService);
    return allTransactionsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/blockDetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockDetailsService = (function () {
    function BlockDetailsService(http) {
        this.http = http;
    }
    /* For All Block List Services */
    BlockDetailsService.prototype.getBlockDetail = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/blocks/get?id=' + id)
            .map(function (res) { return res.json(); });
    };
    BlockDetailsService.prototype.getTransactions = function (blockId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions', {
            params: {
                blockId: blockId
            }
        })
            .map(function (res) { return res.json(); });
    };
    BlockDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BlockDetailsService);
    return BlockDetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/blockHeightDetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockHeightDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockHeightDetailsService = (function () {
    function BlockHeightDetailsService(http) {
        this.http = http;
    }
    /* For All Block List Services */
    BlockHeightDetailsService.prototype.getBlockHeightDetail = function (height) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/blocks?height=' + height)
            .map(function (res) { return res.json(); });
    };
    BlockHeightDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BlockHeightDetailsService);
    return BlockHeightDetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/delegates.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegatesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DelegatesService = (function () {
    function DelegatesService(http) {
        this.http = http;
    }
    /* For All Delegate List Services */
    DelegatesService.prototype.getDelegatesDetail = function (limit, offset) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + '/api/delegates', {
            params: {
                limit: limit,
                offset: offset
            }
        })
            .map(function (res) { return res.json(); });
    };
    DelegatesService.prototype.getStandbyDelegates = function (limit, offset) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + '/api/delegates', {
            params: {
                offset: offset
            }
        })
            .map(function (res) { return res.json(); });
    };
    DelegatesService.prototype.getNextForgers = function (limit) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + '/api/delegates/getNextForgers', {
            params: {
                limit: limit
            }
        })
            .map(function (res) { return res.json(); });
    };
    DelegatesService.prototype.getLatestVotes = function (limit) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + '/api/delegates/getLatestVoters', {
            params: {
                limit: limit
            }
        })
            .map(function (res) { return res.json(); });
    };
    DelegatesService.prototype.getLatestDelegates = function (limit) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + '/api/delegates/getLatestDelegates', {
            params: {
                limit: limit
            }
        })
            .map(function (res) { return res.json(); });
    };
    DelegatesService.prototype.getDelegate = function (publicKey) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + '/api/delegates/get?publicKey=' + publicKey)
            .map(function (res) { return res.json(); });
    };
    DelegatesService.prototype.getVoters = function (publickey) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + '/api/delegates/voters?publicKey=' + publickey)
            .map(function (res) { return res.json(); });
    };
    DelegatesService.prototype.getPrice = function () {
        return this.http.get('http://ddkoin.com/price/price-ddk-api.php?com=sell')
            .map(function (res) { return res.json(); });
    };
    DelegatesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DelegatesService);
    return DelegatesService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/senderidDetail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SenderidDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SenderidDetailService = (function () {
    function SenderidDetailService(http) {
        this.http = http;
    }
    SenderidDetailService.prototype.getSenderidDetail = function (address) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/accounts', {
            params: {
                address: address
            }
        })
            .map(function (res) { return res.json(); });
    };
    /* For All Transactions List Services */
    SenderidDetailService.prototype.getSenderTransactions = function (limit, offset, recipientId, publicKey) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions', {
            params: {
                limit: limit,
                offset: offset,
                senderPublicKey: publicKey,
                recipientId: recipientId,
                orderBy: 'timestamp:desc'
            }
        })
            .map(function (res) { return res.json(); });
    };
    SenderidDetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SenderidDetailService);
    return SenderidDetailService;
}());

/* return this.http.get(environment.serverUrl + '/api/blocks/get?id='+id) */


/***/ }),

/***/ "../../../../../src/app/shared/services/transactionsDetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transactionsDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var transactionsDetailsService = (function () {
    function transactionsDetailsService(http) {
        this.http = http;
    }
    /* For All Transactions List Services */
    transactionsDetailsService.prototype.getTransactionsDetail = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + '/api/transactions/get?id=' + id)
            .map(function (res) { return res.json(); });
    };
    transactionsDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], transactionsDetailsService);
    return transactionsDetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sidebar/menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
var ROUTES = [
    {
        path: '/dashboard', title: 'Dashboards', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    }, {
        path: '', title: 'Forms & Tables', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    }, {
        path: '', title: 'Tables', icon: 'mdi mdi-table', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/tables/basictable', title: 'Basic Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/tables/smarttable', title: 'Smart Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/tables/datatable', title: 'Data Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    }, {
        path: '', title: 'Charts & Icons', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    }, {
        path: '', title: 'Charts', icon: 'mdi mdi-chart-arc', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/charts/chartjs', title: 'Chart Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/charts/chartistjs', title: 'Chartist Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    }, {
        path: '', title: 'Pages', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    }, {
        path: '', title: 'Authentication', icon: 'mdi mdi-lock', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/authentication/login', title: 'Login', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/signup', title: 'Register', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/authentication/404', title: '404', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar-nav\">\n    <ul id=\"sidebarnav\">\n        <li class=\"user-profile\" [class.active]=\"showMenu === 'user'\">\n          <a class=\"has-arrow waves-effect waves-dark\" href=\"javascript:void(0)\" (click)=\"addExpandClass('user')\" aria-expanded=\"false\"><img src=\"assets/images/users/profile.png\" alt=\"user\" /><span class=\"hide-menu\">Steave Jobs </span></a>\n          <ul aria-expanded=\"false\" class=\"collapse\" [class.in]=\"showMenu === 'user'\">\n            <li><a href=\"javascript:void()\">My Profile </a></li>\n            <li><a href=\"javascript:void()\">My Balance</a></li>\n            <li><a href=\"javascript:void()\">Inbox</a></li>\n            <li><a href=\"javascript:void()\">Account Setting</a></li>\n            <li><a href=\"javascript:void()\">Logout</a></li>\n          </ul>  \n        </li>\n        <li class=\"nav-devider\"></li>\n        <!-- First level menu -->\n            <li [class.active]=\"showMenu === sidebarnavItem.title\" *ngFor=\"let sidebarnavItem of sidebarnavItems\" [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\" >\n                <div class=\"nav-small-cap\" *ngIf=\"sidebarnavItem.extralink === true\">{{sidebarnavItem.title}}</div>\n                <a [routerLink]=\"sidebarnavItem.class === '' ? [sidebarnavItem.path] : null\" [ngClass]=\"[sidebarnavItem.class]\" *ngIf=\"!sidebarnavItem.extralink;\" (click)=\"addExpandClass(sidebarnavItem.title)\">\n                    <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\n                    <span class=\"hide-menu\">{{sidebarnavItem.title}}\n                    <span *ngIf=\"sidebarnavItem.label != '' \" [ngClass]=\"[sidebarnavItem.labelClass]\">{{sidebarnavItem.label}}</span>\n                    </span>    \n                </a>\n                <!-- Second level menu -->\n                <ul class=\"collapse\" *ngIf=\"sidebarnavItem.submenu.length > 0\" [ngClass]=\"{'in' : showMenu === sidebarnavItem.title }\">\n                    <li *ngFor=\"let sidebarnavSubItem of sidebarnavItem.submenu\" [class.active]=\"showSubMenu === sidebarnavSubItem.title\" [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'active'\">\n                        <a [routerLink]=\"sidebarnavSubItem.submenu.length > 0 ? null : [sidebarnavSubItem.path]\" [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'router-link-active'\" [ngClass]=\"[sidebarnavSubItem.class]\"  *ngIf=\"!sidebarnavSubItem.extralink;\" (click)=\"addActiveClass(sidebarnavSubItem.title)\">\n                            <i [ngClass]=\"[sidebarnavSubItem.icon]\"></i>\n                            {{sidebarnavSubItem.title}}\n                        </a>\n                        <!-- Third level menu -->\n                        <ul class=\"collapse\" *ngIf=\"sidebarnavSubItem.submenu.length > 0\" [ngClass]=\"{'in' : showSubMenu === sidebarnavSubItem.title }\">\n                            <li *ngFor=\"let sidebarnavSubsubItem of sidebarnavSubItem.submenu\" routerLinkActive=\"active\" [ngClass]=\"[sidebarnavSubsubItem.class]\">\n                                <a [routerLink]=\"[sidebarnavSubsubItem.path]\" *ngIf=\"!sidebarnavSubsubItem.extralink;\" [routerLinkActive]=\"sidebarnavSubsubItem.submenu.length > 0 ? '' : 'router-link-active'\">\n                                    <i [ngClass]=\"[sidebarnavSubsubItem.icon]\"></i>\n                                    {{sidebarnavSubsubItem.title}}\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n    </ul>\n</nav> "

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_items__ = __webpack_require__("../../../../../src/app/shared/sidebar/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
    }
    //this is for the open close
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.addActiveClass = function (element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    };
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarnavItems = __WEBPACK_IMPORTED_MODULE_2__menu_items__["a" /* ROUTES */].filter(function (sidebarnavItem) { return sidebarnavItem; });
        $(function () {
            $(".sidebartoggler").on('click', function () {
                if ($("#main-wrapper").hasClass("mini-sidebar")) {
                    $("body").trigger("resize");
                    $("#main-wrapper").removeClass("mini-sidebar");
                }
                else {
                    $("body").trigger("resize");
                    $("#main-wrapper").addClass("mini-sidebar");
                }
            });
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ap-sidebar',
            template: __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SpinnerComponent = (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */] || event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationCancel */] || event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationError */]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    serverUrl: "http://localhost:7007"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map