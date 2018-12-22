webpackJsonp(["blockinfo.module"],{

/***/ "../../../../../src/app/block-info/blockinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 info-box\">\n                        <span class=\"heading b-b\">Overview</span>\n                        <ul class=\"blog-info\">\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">ID:</span>\n                                    <span class=\"col-md-8\">{{blockInfo.id}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Timestamp:</span>\n                                    <span class=\"col-md-8\">{{blockInfo.timestamp | timeagofilter}} | {{blockInfo.timestamp | timestampFilter}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Height:</span>\n                                    <span class=\"col-md-8\">{{blockInfo.height}}</span>\n                                </span>\n                            </li>\n\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Previous Block:</span>\n                                    <span class=\"col-md-8\">\n                                        <a (click)=\"getBlockId(blockInfo.previousBlock,'blockId')\" class=\"link-hover\">{{blockInfo.previousBlock}}</a>\n                                    </span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Number Of Transactions:</span>\n                                    <span class=\"col-md-8\">\n                                        <!-- <a class=\"link-hover\" (click)=\"showBlock(blockInfo)\">{{blockInfo.numberOfTransactions}}</a> -->\n                                        <a class=\"link-hover\" (click)=\"numOfTrxs(content);showBlock(blockInfo)\">{{blockInfo.numberOfTransactions}}</a>\n                                    </span>\n\n                                    <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open2(content)\">Launch demo modal</button> -->\n                                    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                                        <div class=\"modal-header\">\n                                            <h4 class=\"modal-title\">Transactions ({{traxlength}})</h4>\n                                            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                                                <span aria-hidden=\"true\">&times;</span>\n                                            </button>\n                                        </div>\n                                        <div class=\"modal-body\">\n                                            <div class=\"list-transactions-modal\">\n                                                <ul class=\"list-transactions\">\n                                                    <li *ngFor = \"let trax of traxList\">\n                                                        <div class=\"transaction-data\">\n                                                            <strong>\n                                                                <span>Transaction ID</span>:</strong> {{trax.id}}\n                                                            <span class=\"pull-right\">{{trax.timestamp | timeagofilter}} | {{trax.timestamp | timestampFilter}}</span>\n\n                                                            \n                                                        </div>\n                                                        <div class=\"transaction-path\">\n                                                            <div class=\"transaction-part pull-left\">\n                                                                <a href=\"javascript:void(0);\" class=\"blue-link\">{{trax.senderId}}</a>\n                                                                <span ng-show=\"transaction.type != 8\" class=\"DDK\">{{trax.amount/100000000}} DDK</span>\n                                                                <!-- <span ng-show=\"transaction.type == 8\" class=\"DDK ng-hide\">0 DDK</span> -->\n                                                            </div>\n                                                            <div class=\"transaction-direction\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\n                                                            <div class=\"transaction-part pull-right\">\n                                                                <a href=\"javascript:void(0);\" class=\"blue-link\">{{trax.recipientId}}</a>\n                                                                <span class=\"DDK\">{{trax.amount/100000000}} DDK</span>\n                                                            </div>\n                                                            <div class=\"clearfix\"></div>\n                                                        </div>\n                                                        <!-- <button type=\"button\" class=\"btn waves-effect btn-sm waves-light btn-outline-info pull-right view-all\" routerLink=\"/transactions\">View All</button> -->\n                                                        <div class=\"transaction-bottom clearfix\">\n                                                            <div class=\"btn waves-effect btn-sm waves-light btn-outline-info pull-left view-all m-r-10\">\n                                                                <span>FEE</span>: {{trax.fee / 100000000}} DDK</div>\n                                                            <div class=\"btn waves-effect btn-sm waves-light btn-outline-info pull-left view-all\">\n                                                                <span>Type</span>: {{trax.trsName}}</div>\n                                                            <div class=\"btn waves-effect btn-sm waves-light btn-outline-info pull-right view-all\">{{trax.amount/100000000}} DDK</div>\n                                                            <div class=\"btn waves-effect btn-sm waves-light btn-outline-info pull-right view-all m-r-10\">{{trax.confirmations}}\n                                                                <span>CONFIRMATIONS</span>\n                                                            </div>\n                                                        </div>\n                                                    </li>                                                   \n                                                </ul>\n                                            </div>\n                                        </div>\n                                        <!-- <div class=\"modal-footer\">\n                                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n                                        </div> -->\n                                    </ng-template>\n\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Total Amount:</span>\n                                    <span class=\"col-md-8\">{{blockInfo.totalAmount/100000000}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Total Fee:</span>\n                                    <span class=\"col-md-8\">{{blockInfo.totalFee/100000000}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Pay load Hash:</span>\n                                    <span class=\"col-md-8\">{{blockInfo.payloadHash}}</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Generator:</span>\n                                    <span class=\"col-md-8\">{{blockInfo.username}}</span>\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/block-info/blockinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_blockDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/blockDetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_blockHeightDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/blockHeightDetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlockInfoComponent = (function () {
    function BlockInfoComponent(router, activatedRoute, BlockDetails, allBxHeight, modalService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.BlockDetails = BlockDetails;
        this.allBxHeight = allBxHeight;
        this.modalService = modalService;
        this.dtOptions = {};
        this.blockInfo = [];
        this.bxHeight = [];
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
    BlockInfoComponent.prototype.ngOnInit = function () {
        if (this.typeId == 'blockId') {
            var blockId = window.location.href.split('/blockId/')[1];
            this.blockDetail(blockId);
        }
        else {
            this.blockHeight();
        }
    };
    BlockInfoComponent.prototype.ngAfterViewInit = function () {
        var flag = true;
        window.localStorage.setItem('flag', flag);
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
    };
    BlockInfoComponent.prototype.numOfTrxs = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg', backdrop: 'static' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ;
    BlockInfoComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    BlockInfoComponent.prototype.blockDetail = function (blockId) {
        var _this = this;
        this.blockInfo = [];
        this.BlockDetails.getBlockDetail(blockId).subscribe(function (resp) {
            if (resp.success) {
                _this.blockInfo = resp.block;
            }
        }, function (error) {
            console.log(error);
        });
    };
    BlockInfoComponent.prototype.blockHeight = function () {
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
    BlockInfoComponent.prototype.getBlockId = function (id, name) {
        this.router.navigate(['/block-info', name, id]);
        this.blockDetail(id);
    };
    BlockInfoComponent.prototype.showBlock = function (block) {
        var _this = this;
        //show transactions here for a particular block
        this.BlockDetails.getTransactions(block.id).subscribe(function (resp) {
            if (resp.success) {
                _this.traxList = resp.transactions;
                _this.traxlength = resp.transactions.length;
            }
            else {
                console.log('error : ', resp);
            }
        });
    };
    BlockInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/block-info/blockinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/block-info/blockinfo.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__shared_services_blockDetails_service__["a" /* BlockDetailsService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_blockHeightDetails_service__["a" /* BlockHeightDetailsService */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], BlockInfoComponent);
    return BlockInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/block-info/blockinfo.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Table layout css */\n.default-table-layout  thead{\n    background: #F9F9F9;\n}\n.default-table-layout  thead tr th{ \n    border-top: #E1E1E1 1px solid !important;\n    border-bottom: #E1E1E1 1px solid !important;\n    font-size: 14px;\n    padding: 10px 18px 10px 10px;\n}\n.default-table-layout tbody tr td{\n    border-bottom: #E1E1E1 1px solid;\n    font-size: 14px;\n    border-top: none;\n    color: #464646;\n    font-weight: 400;\n}\n.default-table-layout.dataTable.no-footer,.default-table-layout.dataTable thead th{\n    border-bottom: none;\n}\n.dataTables_wrapper .dataTables_info{\n    font-size: 14px !important;\n}\n.table-container .container-fluid{\n    padding: 0;\n}\n.info-box .heading{\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.blog-info{\n    padding: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n}\n.blog-info li{\n    margin-bottom: 7px;\n    padding-bottom: 7px;\n}\n.blog-info li:last-child{\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n}\n.info-summary{\n    font-size: 15px;\n}\n.info-summary .col-md-3{\n    color: black;\n    font-weight: 400;\n}\n.info-summary .col-md-8 a{\n  color: #398bf7;\n}\n.address-tag{\n    display: inline-block;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 132px;\n    white-space: nowrap;\n}\n.p-t-em{\n    padding-top: 1.25em;\n}\n.list-transactions-modal{\n    height: 377px;\n    overflow: hidden;\n    overflow-y: auto;\n    padding-right: 15px;\n}\n.list-transactions{\n    padding: 0;\n    margin: 0;\n}\n.list-transactions li{\n    list-style-type: none;\n    font-size: 15px;\n    color: #000;\n    margin-bottom: 15px;\n    background: #fcfcfc;\n    padding: 15px;\n    border: #e9e9e9 1px solid;\n    border-radius: 4px;\n}\n.list-transactions li:last-child{\n    margin-bottom: 0;\n}\n.list-transactions .transaction-data{\n    border-bottom: 1px solid #e9ecef;\n    padding-bottom: 10px;\n}\n.list-transactions .transaction-path,.list-transactions .transaction-bottom{\n    border-bottom: 1px solid #e9ecef;\n    padding: 10px 0;\n}\n.list-transactions .transaction-bottom{\n    border-bottom: none;\n    padding-bottom: 0;\n}\n.transaction-path{\n    display: table;\n    width: 100%;\n}\n.transaction-part{\n    background: #388bf7;\n    color: #fff;\n    padding: 10px;\n    border-radius: 4px;\n    display: table-cell;\n    vertical-align: middle;\n    min-width: 330px;\n    height: 42px;\n}\n.transaction-part a{\n    color: #fff;\n    font-size: 14px;\n    font-weight: 500;\n}\n.transaction-part .DDK{\n    font-size: 12px;\n    font-weight: 500;\n    margin-left: 20px;\n    float: right;\n}\n.transaction-direction{\n    display: table-cell;\n    vertical-align: middle;\n    font-size: 28px;\n    color: #919191;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/block-info/blockinfo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInfoModule", function() { return BlockInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blockinfo_component__ = __webpack_require__("../../../../../src/app/block-info/blockinfo.component.ts");
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
        path: ':name/:id',
        data: {
            title: 'Block',
            urls: [{ title: 'Home', url: '/dashboard' }, { title: 'Block Information' }]
        },
        component: __WEBPACK_IMPORTED_MODULE_3__blockinfo_component__["a" /* BlockInfoComponent */]
    }];
var BlockInfoModule = (function () {
    function BlockInfoModule() {
    }
    BlockInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__blockinfo_component__["a" /* BlockInfoComponent */]]
        })
    ], BlockInfoModule);
    return BlockInfoModule;
}());



/***/ })

});
//# sourceMappingURL=blockinfo.module.chunk.js.map