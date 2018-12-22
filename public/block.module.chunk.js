webpackJsonp(["block.module"],{

/***/ "../../../../../src/app/block/block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"search-container m-b-15\">\n                    <input type='text' class=\"search-box form-control\" placeholder='Search Block...' name=\"searchName\" [(ngModel)]=\"page.searchValue\" (keyup)=\"filterData($event)\"\n                    />\n                    <!-- <button type=\"button\" (click)=\"filterData()\" value=\"Search\" class=\"p-10 btn btn-info btn-sm font-14 text-uppercase waves-effect waves-light\">Search</button> -->\n                </div>\n                <ngx-datatable #table class=\"material bootstrap custom-table\" [rows]=\"blocklist\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"47\"\n                    [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\" [externalPaging]=\"true\" [count]=\"page.totalElements\"\n                    [offset]=\"page.pageNumber\" [limit]=\"page.size\" (page)='setPage($event)' [scrollbarH]=\"true\">\n                </ngx-datatable>\n                <ng-template #blockId let-row=\"row\">\n                    <a (click)=\"getBlockId(row.id,'blockId')\" class=\"link-hover\">{{row.id}}</a>\n                </ng-template>\n                <ng-template #height let-row=\"row\">\n                    <a (click)=\"getBlockHeight(row.height,'height')\" class=\"link-hover\">{{row.height}}</a>\n                </ng-template>\n                <ng-template #generator let-row=\"row\">\n                    <a (click)=\"getSenderId(row.generatorId)\" class=\"address-tag link-hover\">{{row.username}}</a>\n                </ng-template>\n                <ng-template let-row=\"row\">\n                    {{ row.numberOfTransactions }}\n                </ng-template>\n                <ng-template let-row=\"row\">\n                    {{ row.confirmations }}\n                </ng-template>\n                <ng-template #amount let-row=\"row\">\n                    {{ row.totalAmount/100000000 }}\n                </ng-template>\n                <ng-template #fee let-row=\"row\">\n                    {{ row.totalFee/100000000 }}\n                </ng-template>\n                <ng-template #timestamp let-row=\"row\">\n                    {{row.timestamp | timeagofilter }}\n                </ng-template>\n                <ng-template #previousBlock let-row=\"row\">\n                    <a (click)=\"getBlockId(row.previousBlock,'blockId')\" class=\"link-hover\">{{row.previousBlock}}</a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/block/block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_allBlock_service__ = __webpack_require__("../../../../../src/app/shared/services/allBlock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_addressDetail_service__ = __webpack_require__("../../../../../src/app/shared/services/addressDetail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockComponent = (function () {
    function BlockComponent(router, allBlocks, userService) {
        this.router = router;
        this.allBlocks = allBlocks;
        this.userService = userService;
        this.rows = [];
        this.columns = [];
        this.temp = [];
        this.page = { totalElements: 0, pageNumber: 0, size: 20, searchValue: "" };
        this.timeout = 100;
        this.blocklist = [];
        this.fixedTimezone = new Date(Date.UTC(2016, 0, 1, 17, 0, 0, 0));
    }
    BlockComponent.prototype.allBlockList = function (limit, offset) {
        var _this = this;
        this.allBlocks.getAllBlocks(limit, offset).subscribe(function (resp) {
            if (resp.success) {
                _this.blocklist = resp.blocks;
                _this.page.totalElements = resp.count;
            }
        }, function (error) {
            console.log(error);
        });
    };
    BlockComponent.prototype.filterData = function (event) {
        if (event) {
            clearTimeout(this.timeout);
            var that_1 = this;
            this.timeout = setTimeout(function () {
                var searchValue = event.target.value;
                if (searchValue !== '') {
                    if (!isNaN(searchValue)) {
                        that_1.allBlocks.getBlocksBasedOnHeight(searchValue).subscribe(function (resp) {
                            if (parseInt(resp.count) !== 0) {
                                if (resp.success) {
                                    that_1.blocklist = resp.blocks;
                                    that_1.page.totalElements = resp.count;
                                }
                            }
                            else {
                                that_1.allBlocks.getBlocksBasedOnblockId(searchValue).subscribe(function (resp) {
                                    if (resp.success) {
                                        that_1.blocklist = [];
                                        that_1.blocklist.push(resp.block);
                                        that_1.page.totalElements = 1;
                                    }
                                    else {
                                        that_1.blocklist = [];
                                        that_1.page.totalElements = 0;
                                    }
                                });
                            }
                        });
                    }
                    else {
                        that_1.userService.getAddressDetail(searchValue).subscribe(function (resp) {
                            if (resp.success) {
                                that_1.allBlocks.getBlocksBasedOnpublicKey(resp.account.publicKey).subscribe(function (resp) {
                                    if (resp.success) {
                                        that_1.blocklist = resp.blocks;
                                        that_1.page.totalElements = resp.count;
                                    }
                                    else {
                                        that_1.blocklist = [];
                                        that_1.page.totalElements = 0;
                                    }
                                });
                            }
                            else {
                                that_1.blocklist = [];
                                that_1.page.totalElements = 0;
                            }
                        });
                    }
                }
                else {
                    that_1.allBlockList(that_1.page.size, that_1.page.offset);
                }
            }, 1000);
        }
    };
    /* For Block ID By Height */
    BlockComponent.prototype.getBlockId = function (id, name) {
        this.router.navigate(['/block-info', name, id]);
        this.blocklist = [];
    };
    /* For Block Detail By Height */
    BlockComponent.prototype.getBlockHeight = function (height, name) {
        this.router.navigate(['/block-info', name, height]);
    };
    BlockComponent.prototype.getSenderId = function (senderId) {
        this.router.navigate(['/user-info', senderId]);
    };
    BlockComponent.prototype.setPage = function (event) {
        this.page.offset = this.page.size * event.offset;
        this.allBlockList(this.page.size, this.page.offset);
    };
    BlockComponent.prototype.ngAfterViewInit = function () {
        //this.allBlockList();
    };
    BlockComponent.prototype.ngOnInit = function () {
        this.columns = [
            { name: 'Block ID', prop: 'id', width: '220', cellTemplate: this.blockId },
            { name: 'Height', prop: 'height', cellTemplate: this.height },
            { name: 'Generator', prop: 'generatorId', width: '240', cellTemplate: this.generator },
            { name: 'Number Of Tx', prop: 'numberOfTransactions' },
            { name: 'Confirmations', prop: 'confirmations' },
            { name: 'Total Amount', prop: 'totalAmount', cellTemplate: this.amount },
            { name: 'Total Fee', prop: 'totalFee', cellTemplate: this.fee },
            { name: "Time", prop: 'timestamp', cellTemplate: this.timestamp },
            { name: 'Previous Block', prop: 'previousBlock', width: '220', cellTemplate: this.previousBlock }
        ];
        this.setPage({ offset: 0 });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blockId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], BlockComponent.prototype, "blockId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('height'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], BlockComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('generator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], BlockComponent.prototype, "generator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('amount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], BlockComponent.prototype, "amount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fee'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], BlockComponent.prototype, "fee", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('timestamp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], BlockComponent.prototype, "timestamp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('previousBlock'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], BlockComponent.prototype, "previousBlock", void 0);
    BlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/block/block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/block/block.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_services_allBlock_service__["a" /* allBlockService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_addressDetail_service__["a" /* AddressDetailService */]])
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/block/block.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-11{\n    font-size: 11px!important;\n}\n.txFee{\n    font-size: 11px!important;\n    color: #adadad;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/block/block.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockModule", function() { return BlockModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_component__ = __webpack_require__("../../../../../src/app/block/block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{
        path: '',
        data: {
            title: 'Block',
            urls: [{ title: 'Home', url: '/dashboard' }, { title: 'Block' }]
        },
        component: __WEBPACK_IMPORTED_MODULE_3__block_component__["a" /* BlockComponent */]
    }];
var BlockModule = (function () {
    function BlockModule() {
    }
    BlockModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__block_component__["a" /* BlockComponent */]]
        })
    ], BlockModule);
    return BlockModule;
}());



/***/ })

});
//# sourceMappingURL=block.module.chunk.js.map