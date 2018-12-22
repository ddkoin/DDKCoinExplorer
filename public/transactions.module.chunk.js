webpackJsonp(["transactions.module"],{

/***/ "../../../../../src/app/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"search-container m-b-15\">\n                    <input type='text' class=\"search-box form-control\" placeholder='Search Transaction...' name=\"searchName\" [(ngModel)]=\"page.searchValue\"\n                        (keyup)=\"filterData($event)\" />\n                </div>\n                <ngx-datatable #table class=\"material bootstrap\" [rows]=\"transactionlist\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"47\"\n                    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\" [externalPaging]=\"true\" [count]=\"page.totalElements\"\n                    [offset]=\"page.pageNumber\" [limit]=\"page.size\" (page)='setPage($event)' [scrollbarH]=\"true\">\n                </ngx-datatable>\n                <ng-template #transactionId let-row=\"row\">\n                    <a (click)=\"getTxId(row.id,'transactionId')\" class=\"address-tag link-hover\">{{row.id}}</a>\n                </ng-template>\n                <ng-template let-row=\"row\">{{ row.trsName }}</ng-template>\n                <ng-template let-row=\"row\">{{ row.height }}</ng-template>\n                <ng-template #blockId let-row=\"row\">\n                    <a (click)=\"getBlockId(row.blockId,'blockId')\" class=\"address-tag link-hover\">{{row.blockId}}</a>\n                </ng-template>\n                <ng-template #senderId let-row=\"row\">\n                    <span *ngIf=\"row.senderName; else elseBlock\">\n                        <a (click)=\"getSenderId(row.senderId)\" class=\"address-tag link-hover\">{{row.senderName}}</a>\n                    </span>\n                    <ng-template #elseBlock>\n                        <a (click)=\"getSenderId(row.senderId)\" class=\"address-tag link-hover\">{{row.senderId}}</a>\n                    </ng-template>\n                </ng-template>\n                <ng-template #recipientId let-row=\"row\">\n                    <span *ngIf=\"row.recipientName; else elseBlock\">\n                        <a (click)=\"getSenderId(row.recipientId)\" class=\"address-tag link-hover\">{{row.recipientName}}</a>\n                    </span>\n                    <ng-template #elseBlock>\n                        <a (click)=\"getSenderId(row.recipientId)\" class=\"address-tag link-hover\">{{row.recipientId}}</a>\n                    </ng-template>\n                </ng-template>\n                <ng-template #timestamp let-row=\"row\">{{row.timestamp | timeagofilter }}</ng-template>\n                <ng-template #amount let-row=\"row\">\n                    <span *ngIf=\"row.type !== 8; else stakedAmount\">{{row.amount/100000000}}</span>\n                    <ng-template #stakedAmount>{{ row.stakedAmount/100000000}}</ng-template>\n                </ng-template>\n                <ng-template #fee let-row=\"row\">{{ row.fee/100000000 }}</ng-template>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_allTransactions_service__ = __webpack_require__("../../../../../src/app/shared/services/allTransactions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_allBlock_service__ = __webpack_require__("../../../../../src/app/shared/services/allBlock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var transactionTypes = __webpack_require__("../../../../../src/assets/json/transactionTypes.js");
var TransactionsComponent = (function () {
    function TransactionsComponent(router, allTransaction, http, blockService) {
        this.router = router;
        this.allTransaction = allTransaction;
        this.http = http;
        this.blockService = blockService;
        this.rows = [];
        this.columns = [];
        this.temp = [];
        this.page = { totalElements: 0, pageNumber: 0, size: 20, searchValue: "" };
        this.timeout = 100;
        this.transactionlist = [];
        this.transactionInfo = [];
        this.fixedTimezone = new Date(Date.UTC(2016, 0, 1, 17, 0, 0, 0));
    }
    TransactionsComponent.prototype.filterData = function (event) {
        if (event) {
            clearTimeout(this.timeout);
            var that_1 = this;
            this.timeout = setTimeout(function () {
                var searchValue = event.target.value;
                if (searchValue !== '') {
                    if (!isNaN(searchValue)) {
                        that_1.allTransaction.getTransactionsBasedOnId(searchValue).subscribe(function (resp) {
                            if (parseInt(resp.count) !== 0) {
                                if (resp.success) {
                                    that_1.transactionlist = resp.transactions;
                                    that_1.page.totalElements = resp.count;
                                }
                            }
                            else {
                                that_1.allTransaction.getTransactionsBasedOnHeight(searchValue).subscribe(function (resp) {
                                    if (resp.success) {
                                        that_1.transactionlist = resp.transactions;
                                        that_1.page.totalElements = resp.count;
                                    }
                                    else {
                                        that_1.transactionlist = [];
                                        that_1.page.totalElements = 0;
                                    }
                                });
                            }
                        });
                    }
                    else {
                        if (searchValue.toUpperCase().indexOf('DDK') !== -1) {
                            that_1.allTransaction.getTransactionsBasedOnSender(searchValue).subscribe(function (resp) {
                                if (resp.success) {
                                    that_1.transactionlist = resp.transactions;
                                    that_1.page.totalElements = resp.count;
                                }
                                else {
                                    that_1.transactionlist = [];
                                    that_1.page.totalElements = 0;
                                }
                            });
                        }
                        else {
                            if (transactionTypes[searchValue.toUpperCase()] !== undefined) {
                                that_1.allTransaction.getTransactionsBasedOnType(transactionTypes[searchValue.toUpperCase()]).subscribe(function (resp) {
                                    if (resp.success) {
                                        that_1.transactionlist = resp.transactions;
                                        that_1.page.totalElements = resp.count;
                                    }
                                    else {
                                        that_1.transactionlist = [];
                                        that_1.page.totalElements = 0;
                                    }
                                });
                            }
                            else {
                                that_1.transactionlist = [];
                                that_1.page.totalElements = 0;
                            }
                        }
                    }
                }
                else {
                    that_1.allTransactionsList(that_1.page.size, that_1.page.offset);
                }
            }, 1000);
        }
    };
    TransactionsComponent.prototype.allTransactionsList = function (limit, offset) {
        var _this = this;
        var trsType = window.location.href.split('/')[4];
        if (trsType === 'transactions') {
            this.allTransaction.getAllTransactions(limit, offset).subscribe(function (resp) {
                if (resp.success) {
                    _this.transactionlist = resp.transactions;
                    _this.page.totalElements = resp.count;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.allTransaction.getUnconfirmedTransactions(limit, offset).subscribe(function (resp) {
                if (resp.success) {
                    _this.transactionlist = resp.transactions;
                    _this.page.totalElements = resp.count;
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    TransactionsComponent.prototype.getTransactionId = function (id) {
        localStorage.setItem('transactionId', id);
        this.router.navigate(['/transaction-info', id]);
    };
    /* For Transactions Detail By ID */
    TransactionsComponent.prototype.getTxId = function (id, name) {
        this.router.navigate(['/transaction-info', name, id]);
    };
    /* For Block ID By Height */
    TransactionsComponent.prototype.getBlockId = function (id, name) {
        this.router.navigate(['/block-info', name, id]);
    };
    /* For Amount Detail By Address */
    TransactionsComponent.prototype.getSenderId = function (senderId) {
        this.router.navigate(['/user-info', senderId]);
    };
    TransactionsComponent.prototype.setPage = function (event) {
        this.page.offset = this.page.size * event.offset;
        this.allTransactionsList(this.page.size, this.page.offset);
    };
    TransactionsComponent.prototype.ngAfterViewInit = function () {
    };
    TransactionsComponent.prototype.ngOnInit = function () {
        this.transactionlist = [];
        this.columns = [
            { name: 'Transation ID', prop: 'id', width: '200', cellTemplate: this.transactionId },
            { name: 'Tx Type', prop: 'trsName' },
            { name: 'Height', prop: 'height' },
            { name: 'Block ID', prop: 'blockId', width: '200', cellTemplate: this.blockId },
            { name: 'Sender ID', prop: 'senderId', width: '240', cellTemplate: this.senderId },
            { name: 'Recipient ID', prop: 'recipientId', width: '240', cellTemplate: this.recipientId },
            { name: 'Time', prop: 'timestamp', cellTemplate: this.timestamp },
            { name: 'Amount', prop: 'amount', cellTemplate: this.amount },
            { name: 'Tx Fee', prop: 'fee', cellTemplate: this.fee }
        ];
        this.setPage({ offset: 0 });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transactionId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], TransactionsComponent.prototype, "transactionId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blockId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], TransactionsComponent.prototype, "blockId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('senderId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], TransactionsComponent.prototype, "senderId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('recipientId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], TransactionsComponent.prototype, "recipientId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('timestamp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], TransactionsComponent.prototype, "timestamp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('amount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], TransactionsComponent.prototype, "amount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fee'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], TransactionsComponent.prototype, "fee", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('stakedAmount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], TransactionsComponent.prototype, "stakedAmount", void 0);
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/transactions.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_services_allTransactions_service__["a" /* allTransactionsService */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__shared_services_allBlock_service__["a" /* allBlockService */]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/transactions/transactions.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address-tag{\n    display: inline-block;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 132px;\n    white-space: nowrap;\n}\n.font-11{\n    font-size: 11px!important;\n}\n.txFee{\n    font-size: 11px!important;\n    color: #adadad;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/transactions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsModule", function() { return TransactionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transactions_component__ = __webpack_require__("../../../../../src/app/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{
        path: '',
        data: {
            title: 'Transactions',
            urls: [{ title: 'Home', url: '/dashboard' }, { title: 'Transactions' }]
        },
        component: __WEBPACK_IMPORTED_MODULE_4__transactions_component__["a" /* TransactionsComponent */]
    }];
var TransactionsModule = (function () {
    function TransactionsModule() {
    }
    TransactionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__transactions_component__["a" /* TransactionsComponent */]]
        })
    ], TransactionsModule);
    return TransactionsModule;
}());



/***/ }),

/***/ "../../../../../src/assets/json/transactionTypes.js":
/***/ (function(module, exports) {

/** 
 * @desc Total transations used in DDK and their types
 * @param {Integer} SEND - send transation
 * @param {Integer} SIGNATURE - signature transation
 * @param {Integer} DELEGATE - register a delegate transation
 * @param {Integer} VOTE - vote transation
 * @param {Integer} MULTI - register multi signature transation
 * @param {Integer} DAPP - dapp transation
 * @param {Integer} IN_TRANSFER - in-transafer transation
 * @param {Integer} OUT_TRANSFER - out-transafer transation
 * @param {Integer} STAKE - froze transation
 * @param {Integer} CONTRACT - contract transation
 * @param {Integer} SENDSTAKE - send freeze transation
 * @returns {Object}
*/
module.exports = {
	SEND: 0,
	SIGNATURE: 1,
	DELEGATE: 2,
	VOTE: 3,
	MULTI: 4,
	DAPP: 5,
	IN_TRANSFER: 6,
	OUT_TRANSFER: 7,
	STAKE: 8,
	CONTRACT: 9,
	SENDSTAKE : 10,
	REFER	:	11
};

/*************************************** END OF FILE *************************************/


/***/ })

});
//# sourceMappingURL=transactions.module.chunk.js.map