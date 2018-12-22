webpackJsonp(["delegateMonitorInfo.module"],{

/***/ "../../../../../src/app/delegate-monitor-info/delegateMonitorInfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group m-b-30\">\n    <div class=\"card\">\n        <div class=\"card-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 network-status\">\n                    <h2 class=\"m-b-0\">\n                        <i class=\"mdi mdi-briefcase-check text-info\"></i>\n                    </h2>\n                    <h3 class=\"\">{{currentHeight - 1}}</h3>\n                    <h6 class=\"card-subtitle m-b-0\">Height</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 network-status\">\n                    <h2 class=\"m-b-0\">\n                        <i class=\"mdi mdi-alert-circle text-success\"></i>\n                    </h2>\n                    <h3 class=\"\">45,000,000</h3>\n                    <h6 class=\"card-subtitle m-b-0\">Supply</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 network-status\">\n                    <h2 class=\"m-b-0\">\n                        <i class=\"mdi mdi-wallet text-purple\"></i>\n                    </h2>\n                    <h3 class=\"\">0.030</h3>\n                    <h6 class=\"card-subtitle m-b-0\">DDK/BTC</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 network-status\">\n                    <h2 class=\"m-b-0\">\n                        <i class=\"mdi mdi-buffer text-warning\"></i>\n                    </h2>\n                    <h3 class=\"\">7.43</h3>\n                    <h6 class=\"card-subtitle m-b-0\">DDK/USD</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 info-box\">\n                        <span class=\"heading b-b\">Overview</span>\n                        <ul class=\"blog-info\">\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Name:</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.username}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Address:</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.address}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Public Key:</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.publicKey}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Rate:</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.rate}}</span>\n                                </span>\n                            </li>\n\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Rank / Status</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.rank}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Approval:</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.approval}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Vote weight:</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.vote/100000000}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Forged:</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.producedblocks}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Missed Blocks:</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.missedblocks}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">productivity:</span>\n                                    <span class=\"col-md-8\">{{delegateInfo.productivity}}</span>\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n        <div class=\"card m-b-0\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 info-box\">\n                        <span class=\"heading b-b\">Votes {{ votesCount }}</span>\n                        <ul class=\"next-forgers\">\n                            <li *ngFor=\"let voters of Voters\">\n                                <div *ngIf=\"voters.username; else elseBlock\"><a (click)=\"getAddressInfo(voters.address)\" class=\"link-hover\">{{ voters.username }}</a></div>\n                                <ng-template #elseBlock><a (click)=\"getAddressInfo(voters.address)\" class=\"link-hover\">{{ voters.address }}</a></ng-template>\n                                \n                            </li>\n                           <!--  <li>\n                                <a href=\"#\">will</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">punkrock</a>\n                            </li> -->\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/delegate-monitor-info/delegateMonitorInfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegateMonitorInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_blockDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/blockDetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_blockHeightDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/blockHeightDetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_delegates_service__ = __webpack_require__("../../../../../src/app/shared/services/delegates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DelegateMonitorInfoComponent = (function () {
    function DelegateMonitorInfoComponent(router, activatedRoute, BlockDetails, allBxHeight, delegateService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.BlockDetails = BlockDetails;
        this.allBxHeight = allBxHeight;
        this.delegateService = delegateService;
        this.dtOptions = {};
        this.blockInfo = [];
        this.bxHeight = [];
        this.delegateInfo = {};
        this.votesCount = Number;
        this.activatedRoute.params.subscribe(function (params) {
            _this.typeId = params.name;
            if (_this.typeId == 'blockId') {
                _this.blockId = params.id;
            }
            else {
                _this.bxsHight = params.id;
            }
        });
    }
    DelegateMonitorInfoComponent.prototype.blockDetail = function () {
        var _this = this;
        this.blockInfo = [];
        this.BlockDetails.getBlockDetail(this.blockId).subscribe(function (resp) {
            if (resp.success) {
                _this.blockInfo = resp.block;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorInfoComponent.prototype.blockHeight = function () {
        var _this = this;
        this.blockInfo = [];
        this.allBxHeight.getBlockHeightDetail(parseInt(this.bxsHight)).subscribe(function (resp) {
            if (resp.success) {
                _this.blockInfo = resp.blocks[0];
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorInfoComponent.prototype.getLatestHeight = function () {
        var _this = this;
        this.delegateService.getNextForgers(10).subscribe(function (resp) {
            if (resp.success) {
                _this.currentHeight = resp.currentBlock;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorInfoComponent.prototype.getDelegate = function (publicKey) {
        var _this = this;
        this.delegateService.getDelegate(publicKey).subscribe(function (resp) {
            if (resp.success) {
                _this.delegateInfo = resp.delegate;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorInfoComponent.prototype.getVoters = function (publicKey) {
        var _this = this;
        this.delegateService.getVoters(publicKey).subscribe(function (resp) {
            if (resp.success) {
                _this.Voters = resp.accounts;
                _this.votesCount = resp.accounts.length;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorInfoComponent.prototype.getAddressInfo = function (address) {
        this.router.navigate(['/user-info', address]);
    };
    DelegateMonitorInfoComponent.prototype.ngOnInit = function () {
        if (this.typeId == 'blockId') {
            this.blockDetail();
        }
        else {
            this.blockHeight();
        }
    };
    DelegateMonitorInfoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.publicKey = window.location.href.split('/delegate/')[1];
        this.getDelegate(this.publicKey);
        this.getVoters(this.publicKey);
        this.getLatestHeight();
        var flag = true;
        window.localStorage.setItem('flag', flag);
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.getLatestHeight();
        var that = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].interval(10000).subscribe(function (x) {
            _this.getLatestHeight();
        });
    };
    DelegateMonitorInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/delegate-monitor-info/delegateMonitorInfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delegate-monitor-info/delegateMonitorInfo.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__shared_services_blockDetails_service__["a" /* BlockDetailsService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_blockHeightDetails_service__["a" /* BlockHeightDetailsService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_delegates_service__["a" /* DelegatesService */]])
    ], DelegateMonitorInfoComponent);
    return DelegateMonitorInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/delegate-monitor-info/delegateMonitorInfo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Table layout css */\n.default-table-layout  thead{\n    background: #F9F9F9;\n}\n.default-table-layout  thead tr th{ \n    border-top: #E1E1E1 1px solid !important;\n    border-bottom: #E1E1E1 1px solid !important;\n    font-size: 14px;\n    padding: 10px 18px 10px 10px;\n}\n.default-table-layout tbody tr td{\n    border-bottom: #E1E1E1 1px solid;\n    font-size: 14px;\n    border-top: none;\n    color: #464646;\n    font-weight: 400;\n}\n.default-table-layout.dataTable.no-footer,.default-table-layout.dataTable thead th{\n    border-bottom: none;\n}\n.dataTables_wrapper .dataTables_info{\n    font-size: 14px !important;\n}\n.table-container .container-fluid{\n    padding: 0;\n}\n.info-box .heading{\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.blog-info{\n    padding: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n}\n.blog-info li{\n    margin-bottom: 7px;\n    padding-bottom: 7px;\n}\n.blog-info li:last-child{\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n}\n.info-summary{\n    font-size: 15px;\n}\n.info-summary .col-md-3{\n    color: black;\n    font-weight: 400;\n}\n.info-summary .col-md-8 a{\n  color: #398bf7;\n}\n\n.address-tag{\n    display: inline-block;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 132px;\n    white-space: nowrap;\n}\n\n.p-t-em{\n    padding-top: 1.25em;\n}\n\n\n\n.next-forgers{\n    list-style: square;\n    padding-left: 18px;\n}\n.next-forgers li{\n    float: left;\n    margin-right: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delegate-monitor-info/delegateMonitorInfo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelegateMonitorInfoModule", function() { return DelegateMonitorInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delegateMonitorInfo_component__ = __webpack_require__("../../../../../src/app/delegate-monitor-info/delegateMonitorInfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        data: {
            title: 'Delegate Monitor Info',
            urls: [{ title: 'Home', url: '/dashboard' }, { title: 'Delegate Monitor Information' }]
        },
        component: __WEBPACK_IMPORTED_MODULE_3__delegateMonitorInfo_component__["a" /* DelegateMonitorInfoComponent */]
    }];
var DelegateMonitorInfoModule = (function () {
    function DelegateMonitorInfoModule() {
    }
    DelegateMonitorInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__delegateMonitorInfo_component__["a" /* DelegateMonitorInfoComponent */]]
        })
    ], DelegateMonitorInfoModule);
    return DelegateMonitorInfoModule;
}());



/***/ })

});
//# sourceMappingURL=delegateMonitorInfo.module.chunk.js.map