webpackJsonp(["transactioninfo.module"],{

/***/ "../../../../../src/app/transaction-info/transactioninfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 info-box\">\n                        <span class=\"heading b-b\">Overview</span>\n                        <ul class=\"blog-info\">\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">ID:</span>\n                                    <span class=\"col-md-8\">{{transactionInfo.id}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Height:</span>\n                                    <span class=\"col-md-8\">{{transactionInfo.height}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">BlockId:</span>\n                                    <span class=\"col-md-8\"><a (click)=\"getBlockId(transactionInfo.blockId,'blockId')\" class=\"link-hover\">{{transactionInfo.blockId}}</a></span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Type:</span>\n                                    <span class=\"col-md-8\">{{transactionInfo.type}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Timestamp:</span>\n                                    <span class=\"col-md-8\">{{transactionInfo.timestamp | timeagofilter}} |  {{transactionInfo.timestamp | timestampFilter}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">SenderId:</span>\n                                    <span class=\"col-md-8\">\n                                        <a (click)=\"getSenderId(transactionInfo.senderId)\" class=\"link-hover\">{{transactionInfo.senderId}}</a>\n                                    </span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">RecipientId:</span>\n                                    <span class=\"col-md-8\">\n                                        <a (click)=\"getSenderId(transactionInfo.recipientId)\" class=\"link-hover\">{{transactionInfo.recipientId}}</a>\n                                    </span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Amount:</span>\n                                    <div *ngIf=\"transactionInfo.type === 8; else elseBlock\">\n                                        <span class=\"col-md-8\">{{transactionInfo.stakedAmount/100000000}}\n                                        </span>\n                                    </div>\n                                    <ng-template #elseBlock>\n                                        <span class=\"col-md-8\">{{transactionInfo.amount/100000000}}\n                                        </span>\n                                    </ng-template>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Fee:</span>\n                                    <span class=\"col-md-8\">{{transactionInfo.fee/100000000}}</span>\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/transaction-info/transactioninfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_transactionsDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/transactionsDetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_blockDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/blockDetails.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionInfoComponent = (function () {
    function TransactionInfoComponent(router, BlockDetails, activatedRoute, transactionsDetails) {
        var _this = this;
        this.router = router;
        this.BlockDetails = BlockDetails;
        this.activatedRoute = activatedRoute;
        this.transactionsDetails = transactionsDetails;
        this.dtOptions = {};
        this.transactionInfo = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.typeId = params.name;
            if (_this.typeId == 'transactionId') {
                _this.txsId = params.id;
            }
            else {
                _this.txsBlockId = params.id;
            }
        });
    }
    TransactionInfoComponent.prototype.transactionsDetail = function () {
        var _this = this;
        this.transactionsDetails.getTransactionsDetail(this.txsId).subscribe(function (resp) {
            if (resp.success) {
                _this.transactionInfo = resp.transaction;
            }
        }, function (error) {
            console.log(error);
        });
    };
    TransactionInfoComponent.prototype.blockDetail = function () {
        var _this = this;
        this.transactionInfo = [];
        this.BlockDetails.getBlockDetail(this.txsBlockId).subscribe(function (resp) {
            if (resp.success) {
                _this.transactionInfo = resp.block;
            }
        }, function (error) {
            console.log(error);
        });
    };
    /* For Block ID By Height */
    TransactionInfoComponent.prototype.getBlockId = function (id, name) {
        this.router.navigate(['/block-info', name, id]);
    };
    TransactionInfoComponent.prototype.getSenderId = function (senderId) {
        this.router.navigate(['/user-info', senderId]);
    };
    TransactionInfoComponent.prototype.ngOnInit = function () {
        if (this.typeId == 'transactionId') {
            this.transactionsDetail();
        }
        else {
            this.blockDetail();
        }
    };
    TransactionInfoComponent.prototype.ngAfterViewInit = function () {
        //this.transactionsDetail();
        this.dtOptions = {
            //pagingType: 'full_numbers',
            stateSave: true
        };
    };
    TransactionInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/transaction-info/transactioninfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transaction-info/transactioninfo.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_blockDetails_service__["a" /* BlockDetailsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__shared_services_transactionsDetails_service__["a" /* transactionsDetailsService */]])
    ], TransactionInfoComponent);
    return TransactionInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/transaction-info/transactioninfo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Table layout css */\n.default-table-layout  thead{\n    background: #F9F9F9;\n}\n.default-table-layout  thead tr th{ \n    border-top: #E1E1E1 1px solid !important;\n    border-bottom: #E1E1E1 1px solid !important;\n    font-size: 14px;\n    padding: 10px 18px 10px 10px;\n}\n.default-table-layout tbody tr td{\n    border-bottom: #E1E1E1 1px solid;\n    font-size: 14px;\n    border-top: none;\n    color: #464646;\n    font-weight: 400;\n}\n.default-table-layout.dataTable.no-footer,.default-table-layout.dataTable thead th{\n    border-bottom: none;\n}\n.dataTables_wrapper .dataTables_info{\n    font-size: 14px !important;\n}\n.table-container .container-fluid{\n    padding: 0;\n}\n.info-box .heading{\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.blog-info{\n    padding: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n}\n.blog-info li{\n    margin-bottom: 7px;\n    padding-bottom: 7px;\n}\n.blog-info li:last-child{\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n}\n.info-summary{\n    font-size: 15px;\n}\n.info-summary .col-md-3{\n    color: black;\n    font-weight: 400;\n}\n.info-summary .col-md-8 a{\n  color: #398bf7;\n}\n\n.address-tag{\n    display: inline-block;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 155px;\n    white-space: nowrap;\n}\n\n.p-t-em{\n    padding-top: 1.25em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transaction-info/transactioninfo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionInfoModule", function() { return TransactionInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transactioninfo_component__ = __webpack_require__("../../../../../src/app/transaction-info/transactioninfo.component.ts");
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
            title: 'Transaction',
            urls: [{ title: 'Home', url: '/dashboard' }, { title: 'Transaction Information' }]
        },
        component: __WEBPACK_IMPORTED_MODULE_3__transactioninfo_component__["a" /* TransactionInfoComponent */]
    }];
var TransactionInfoModule = (function () {
    function TransactionInfoModule() {
    }
    TransactionInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__transactioninfo_component__["a" /* TransactionInfoComponent */]]
        })
    ], TransactionInfoModule);
    return TransactionInfoModule;
}());



/***/ })

});
//# sourceMappingURL=transactioninfo.module.chunk.js.map