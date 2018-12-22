webpackJsonp(["delegate-monitor.module"],{

/***/ "../../../../../src/app/delegate-monitor/delegate-monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group m-b-30\">\n    <div class=\"card\">\n        <div class=\"card-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 network-status\">\n                    <h2 class=\"m-b-0\">\n                        <i class=\"mdi mdi-briefcase-check text-info\"></i>\n                    </h2>\n                    <h3 class=\"\">{{currentBlock - 1}}</h3>\n                    <h6 class=\"card-subtitle m-b-0\">Height</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 network-status\">\n                    <h2 class=\"m-b-0\">\n                        <i class=\"mdi mdi-alert-circle text-success\"></i>\n                    </h2>\n                    <h3 class=\"\">45,000,000</h3>\n                    <h6 class=\"card-subtitle m-b-0\">Supply</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 network-status\">\n                    <h2 class=\"m-b-0\">\n                        <i class=\"mdi mdi-wallet text-purple\"></i>\n                    </h2>\n                    <h3 class=\"\">0.030</h3>\n                    <h6 class=\"card-subtitle m-b-0\">DDK/BTC</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body text-center\">\n            <div class=\"row\">\n                <div class=\"col-12 network-status\">\n                    <h2 class=\"m-b-0\">\n                        <i class=\"mdi mdi-buffer text-warning\"></i>\n                    </h2>\n                    <h3 class=\"\">{{ DDKPrice || 180.513 }}</h3>\n                    <h6 class=\"card-subtitle m-b-0\">DDK/USD</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 m-b-30 delegates-info\">\n                        <h3>Delegates</h3>\n                        <span class=\"btn-block\">{{delegateCount}} Total Delegates</span>\n                        <span class=\"btn-block\">{{activeDelegates}} Active Delegates</span>\n                        <span class=\"btn-block\">{{delegateCount - activeDelegates}} Standby Delegates</span>\n                    </div>\n                    <div class=\"col-md-4 m-b-30 delegates-info\">\n                        <h3>Last Block By</h3>\n                        <span class=\"btn-block\">\n                            <div *ngIf=\"lastBlock.username; else elseBlock\">\n                                <a (click)=\"getDelegateInfo(lastBlock.generatorPublicKey)\" class=\"link-hover\">{{lastBlock.username}}</a>\n                            </div>\n                            <ng-template #elseBlock>\n                                <a (click)=\"getDelegateInfo(lastBlock.generatorPublicKey)\" class=\"link-hover\">{{lastBlock.generatorId}}</a>\n                            </ng-template>\n\n                        </span>\n                        <span class=\"btn-block\">\n                            <a href=\"#\">{{lastBlock.id}}</a>\n                        </span>\n                        <span class=\"btn-block\">Applied {{lastBlock.numberOfTransactions}} transactions with {{lastBlock.confirmations}} confirmations</span>\n                    </div>\n\n                    <div class=\"col-md-4 m-b-30 delegates-info\">\n                        <h3>Next Forgers</h3>\n                        <span class=\"btn-block\" *ngFor=\"let delegate of nextForgersList;let i=index\">\n                            <a *ngIf=\"i < 1\">{{nextForgersList[0].username}}</a>\n                        </span>\n                        <ul class=\"next-forgers\">\n                            <li *ngFor=\"let delegate of nextForgersList | slice:1\">\n                                <a (click)=\"getDelegateInfo(delegate.publicKey)\" class=\"link-hover\">{{delegate.username}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-4 delegates-info\">\n                        <h3>Best Forgers</h3>\n                        <span class=\"btn-block\">\n                            <a (click)=\"getDelegateInfo(bestForger.publicKey)\" class=\"link-hover\">{{bestForger.username}}</a>\n                        </span>\n                        <span class=\"btn-block\">{{bestForger.producedblocks}} Blocks Forged</span>\n                        <span class=\"btn-block\">since registration</span>\n                    </div>\n                    <div class=\"col-md-4 delegates-info\">\n                        <h3>Best Productivity</h3>\n                        <span class=\"btn-block\">{{bestProductivity.productivity}}%</span>\n                        <span class=\"btn-block\">\n                            <a (click)=\"getDelegateInfo(bestProductivity.publicKey)\" class=\"link-hover\">by {{bestProductivity.username}}</a>\n                        </span>\n                    </div>\n                    <div class=\"col-md-4 delegates-info\">\n                        <h3>Worst Productivity</h3>\n                        <span class=\"btn-block\">{{worstProductivity.productivity}}%</span>\n                        <span class=\"btn-block\">\n                            <a (click)=\"getDelegateInfo(worstProductivity.publicKey)\" class=\"link-hover\">by {{worstProductivity.username}}</a>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"default-tab-layout m-t-30\">\n                    <h4 class=\"card-title m-b-0 font-medium\">Latest Votes</h4>\n                    <div class=\"table-container p-t-em\">\n                        <ngx-datatable #table class=\"material bootstrap\" [rows]=\"latestVotes\" [columns]=\"columns1\" [columnMode]=\"'force'\" [headerHeight]=\"47\"\n                            [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\" [externalPaging]=\"true\" [count]=\"page1.totalElements\"\n                            [offset]=\"page1.pageNumber\" [limit]=\"page1.size\" (page)='setPage($event)' [scrollbarH]=\"true\">\n                        </ngx-datatable>\n\n                        <ng-template #voters let-row=\"row\">\n                            <span *ngIf=\"row.senderName; else elseBlock\">\n                                <a (click)=\"getSenderId(row.senderId)\" class=\"link-hover\">{{row.senderName}}</a>\n                            </span>\n                            <ng-template #elseBlock>\n                                <a (click)=\"getSenderId(row.senderId)\" class=\"link-hover\">{{row.senderId}}</a>\n                            </ng-template>\n                        </ng-template>\n\n                        <ng-template #transactionId let-row=\"row\">\n                            <a (click)=\"getTxId(row.id,'transactionId')\" class=\"link-hover\">{{row.id}}</a>\n                        </ng-template>\n\n                        <ng-template #timestamp let-row=\"row\">\n                            {{ row.timestamp | timeagofilter }} | {{ row.timestamp | timestampFilter }}\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"default-tab-layout m-t-30\">\n                    <h4 class=\"card-title m-b-0 font-medium\">Newest Delegates</h4>\n                    <div class=\"table-container p-t-em\">\n                        <ngx-datatable #table class=\"material bootstrap\" [rows]=\"latestDelegates\" [columns]=\"columns2\" [columnMode]=\"'force'\" [headerHeight]=\"47\"\n                            [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\" [externalPaging]=\"true\" [count]=\"page2.totalElements\"\n                            [offset]=\"page2.pageNumber\" [limit]=\"page2.size\" (page)='setPage($event)' [scrollbarH]=\"true\">\n                        </ngx-datatable>\n\n                        <ng-template #name let-row=\"row\">\n                            <a (click)=\"getDelegateInfo(row.publicKey)\" class=\"link-hover\">{{row.username}}</a>\n                        </ng-template>\n\n                        <ng-template #address let-row=\"row\">\n                            <a (click)=\"getSenderId(row.address)\" class=\"link-hover\">{{row.address}}</a>\n                        </ng-template>\n\n                        <ng-template #producedBlocks let-row=\"row\">\n                            {{ row.producedblocks }}\n                        </ng-template>\n\n                        <ng-template #missedBlocks let-row=\"row\">\n                            {{row.missedblocks }}\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"default-tab-layout m-t-20\">\n                    <div class=\"tab-btn\">\n                        <button type=\"button\" (click)=\"showActiveDelegates()\">Active Delegates</button>\n                        <button type=\"button\" (click)=\"showStandbyDelegates()\">Standby Delegates</button>\n                    </div>\n                    <div class=\"col-md-12 m-t-20 m-b-20\">\n                        <h4 class=\"card-title font-medium m-b-20\">Active Delegates</h4>\n                        <div class=\"row\">\n                            <div class=\"col-md-3 col-lg-3 col-xlg-2\">\n                                <div class=\"card card-inverse card-info\">\n                                    <div class=\"box bg-info text-center\">\n                                        <h1 class=\"font-light text-white\">{{totalActiveForged}}</h1>\n                                        <h6 class=\"text-white\">Forged block recently</h6>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 col-lg-3 col-xlg-2\">\n                                <div class=\"card card-inverse card-warning\">\n                                    <div class=\"box text-center\">\n                                        <h1 class=\"font-light text-white\">{{totalMissedBlocks}}</h1>\n                                        <h6 class=\"text-white\">Missed block recently</h6>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 col-lg-3 col-xlg-2\">\n                                <div class=\"card card-inverse card-megna\">\n                                    <div class=\"box text-center\">\n                                        <h1 class=\"font-light text-white\">{{activeDelegates - nextForgers.length}}</h1>\n                                        <h6 class=\"text-white\">Not forging</h6>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 col-lg-3 col-xlg-2\">\n                                <div class=\"card card-inverse card-dark\">\n                                    <div class=\"box text-center\">\n                                        <h1 class=\"font-light text-white\">{{activeDelegates - 1}}</h1>\n                                        <h6 class=\"text-white\">In queue for forging</h6>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"table-container\" [hidden]=\"!tab1\">\n                            <ngx-datatable #table class=\"material bootstrap\" [rows]=\"delegatesInfo\" [columns]=\"columns3\" [columnMode]=\"'force'\" [headerHeight]=\"47\"\n                                [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\" [externalPaging]=\"true\" [count]=\"page3.totalElements\"\n                                [offset]=\"page3.pageNumber\" [limit]=\"page3.size\" (page)='setPage($event)' [scrollbarH]=\"true\">\n                            </ngx-datatable>\n\n                            <ng-template #rank let-row=\"row\">\n                                {{row.rank}}\n                            </ng-template>\n\n                            <ng-template #address let-row=\"row\">\n                                <a (click)=\"getSenderId(row.address)\" class=\"link-hover\">{{row.address}}</a>\n                            </ng-template>\n\n                            <ng-template #status let-row=\"row\">\n                                <div class=\"label label-table label-success text-center\">Active</div>\n                            </ng-template>\n\n                            <ng-template #productivity let-row=\"row\">\n                                {{row.productivity }}\n                            </ng-template>\n\n                            <ng-template #approval let-row=\"row\">\n                                {{row.approval }}\n                            </ng-template>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-12 m-t-20 m-b-20\">\n                        <div class=\"table-container\" [hidden]=\"!tab2\">\n                            <h4 class=\"card-title font-medium m-b-20\">Standby Delegates</h4>\n\n                            <ngx-datatable #table class=\"material bootstrap\" [rows]=\"standbyDelegates\" [columns]=\"columns4\" [columnMode]=\"'force'\" [headerHeight]=\"47\"\n                                [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\" [externalPaging]=\"true\" [count]=\"page4.totalElements\"\n                                [offset]=\"page4.pageNumber\" [limit]=\"page4.size\" (page)='setPage($event)' [scrollbarH]=\"true\">\n                            </ngx-datatable>\n\n                            <ng-template #rank let-row=\"row\">\n                                {{row.rank}}\n                            </ng-template>\n\n                            <ng-template #address let-row=\"row\">\n                                <a (click)=\"getSenderId(row.address)\" class=\"link-hover\">{{row.address}}</a>\n                            </ng-template>\n\n                            <ng-template #status let-row=\"row\">\n                                <div class=\"label label-table label-success text-center\">Active</div>\n                            </ng-template>\n\n                            <ng-template #productivity let-row=\"row\">\n                                {{row.productivity }}\n                            </ng-template>\n\n                            <ng-template #approval let-row=\"row\">\n                                {{row.approval }}\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/delegate-monitor/delegate-monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegateMonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_delegates_service__ = __webpack_require__("../../../../../src/app/shared/services/delegates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_blockHeightDetails_service__ = __webpack_require__("../../../../../src/app/shared/services/blockHeightDetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DelegateMonitorComponent = (function () {
    function DelegateMonitorComponent(router, activatedRoute, delegateService, BlockDetails) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.delegateService = delegateService;
        this.BlockDetails = BlockDetails;
        this.rows = [];
        this.columns1 = [];
        this.columns2 = [];
        this.columns3 = [];
        this.columns4 = [];
        this.temp = [];
        this.page1 = { totalElements: 0, pageNumber: 0, size: 20, searchValue: "" };
        this.page2 = { totalElements: 0, pageNumber: 0, size: 20, searchValue: "" };
        this.page3 = { totalElements: 0, pageNumber: 0, size: 20, searchValue: "" };
        this.page4 = { totalElements: 0, pageNumber: 0, size: 20, searchValue: "" };
        this.timeout = 100;
        this.fixedTimezone = new Date(Date.UTC(2016, 0, 1, 17, 0, 0, 0));
        this.lastBlock = {};
        this.bestProductivity = {};
        this.worstProductivity = {};
        this.bestForger = {};
        this.delegatesInfo = [];
        this.standbyDelegates = [];
        this.nextForgers = [];
        this.nextForgersList = [];
        this.latestVotes = [];
        this.latestDelegates = [];
        this.activeDelegates = 3;
        this.totalActiveForged = 0;
        this.totalMissedBlocks = 0;
        this.tab1 = true;
        this.tab2 = false;
    }
    DelegateMonitorComponent.prototype.getProductivityInfo = function (delegatesList) {
        this.totalMissedBlocks = 0;
        var self = this;
        this.worstProductivity = delegatesList[0];
        this.bestProductivity = delegatesList[0];
        var newCount = delegatesList[0];
        delegatesList.forEach(function (delegate) {
            self.totalMissedBlocks = self.totalMissedBlocks + delegate.missedblocks;
            if (delegate.productivity > self.bestProductivity.productivity) {
                self.bestProductivity = delegate;
            }
            if (delegate.productivity < self.worstProductivity.productivity) {
                self.worstProductivity = delegate;
            }
            if (delegate.producedblocks >= newCount.producedblocks) {
                newCount.producedblocks = delegate.producedblocks;
                self.bestForger = delegate;
            }
        });
    };
    DelegateMonitorComponent.prototype.getStandbyDelegates = function (limit, offset) {
        var _this = this;
        this.delegateService.getStandbyDelegates(limit, this.activeDelegates + offset).subscribe(function (resp) {
            if (resp.success) {
                _this.standbyDelegates = resp.delegates;
                _this.page4.totalElements = resp.totalCount - _this.activeDelegates;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorComponent.prototype.getDelegatesDetail = function (limit, offset) {
        var _this = this;
        this.delegateService.getDelegatesDetail(limit, offset).subscribe(function (resp) {
            if (resp.success) {
                _this.delegatesInfo = [];
                _this.delegatesInfo = resp.delegates;
                _this.page3.totalElements = _this.activeDelegates;
                _this.delegateCount = resp.totalCount;
                _this.totalActiveForged = _this.delegatesInfo.length;
                _this.getProductivityInfo(_this.delegatesInfo);
                _this.getStandbyDelegates(_this.page4.size, _this.page4.offset);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorComponent.prototype.getdelegateName = function (publicKey) {
        var self = this;
        this.delegatesInfo.forEach(function (delegate) {
            if (publicKey == delegate.publicKey) {
                self.nextForgersList.push({
                    username: delegate.username,
                    publicKey: delegate.publicKey
                });
            }
        });
    };
    DelegateMonitorComponent.prototype.getNextForgers = function (limit) {
        var _this = this;
        this.nextForgersList = [];
        this.delegateService.getNextForgers(limit).subscribe(function (resp) {
            if (resp.success) {
                var self = _this;
                _this.nextForgers = [];
                _this.nextForgers = resp.delegates;
                _this.nextForgers.forEach(function (publicKey) {
                    self.getdelegateName(publicKey);
                });
                _this.currentBlock = resp.currentBlock;
                _this.getLastBlock(_this.currentBlock);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorComponent.prototype.getLastBlock = function (currentBlockHeight) {
        var _this = this;
        this.BlockDetails.getBlockHeightDetail(currentBlockHeight).subscribe(function (resp) {
            if (resp.success) {
                var self_1 = _this;
                _this.lastBlock = resp.blocks[0];
                _this.delegatesInfo.forEach(function (delegate) {
                    if (self_1.lastBlock.generatorPublicKey == delegate.publicKey) {
                        self_1.lastBlock.username = delegate.username;
                    }
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorComponent.prototype.getLatestVotes = function (limit) {
        var _this = this;
        this.delegateService.getLatestVotes(limit).subscribe(function (resp) {
            if (resp.success) {
                _this.latestVotes = resp.voters;
                _this.page1.totalElements = resp.voters.length;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorComponent.prototype.getLatestDelegates = function (limit) {
        var _this = this;
        this.delegateService.getLatestDelegates(limit).subscribe(function (resp) {
            if (resp.success) {
                _this.latestDelegates = resp.delegates;
                _this.page2.totalElements = resp.delegates.length;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorComponent.prototype.getDelegateInfo = function (publicKey) {
        this.router.navigate(['/delegate', publicKey]);
    };
    DelegateMonitorComponent.prototype.getSenderId = function (address) {
        this.router.navigate(['/user-info', address]);
    };
    DelegateMonitorComponent.prototype.getTxId = function (id, name) {
        this.router.navigate(['/transaction-info', name, id]);
    };
    DelegateMonitorComponent.prototype.getPrice = function () {
        var _this = this;
        this.delegateService.getPrice().subscribe(function (resp) {
            if (resp.success) {
                _this.DDKPrice = resp;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DelegateMonitorComponent.prototype.showStandbyDelegates = function () {
        this.tab1 = false;
        this.tab2 = true;
    };
    DelegateMonitorComponent.prototype.showActiveDelegates = function () {
        this.tab1 = true;
        this.tab2 = false;
    };
    DelegateMonitorComponent.prototype.setPage = function (event) {
        this.page1.offset = this.page1.size * event.offset;
        this.page2.offset = this.page2.size * event.offset;
        this.page3.offset = this.page3.size * event.offset;
        if (this.page4.size > this.activeDelegates) {
            this.page4.size = this.activeDelegates;
            this.page4.offset = this.page4.size * event.offset;
        }
        else {
            this.page4.offset = this.page4.size * event.offset;
        }
        if (this.tab1) {
            this.getDelegatesDetail(this.page3.size, this.page3.offset);
        }
        else {
            this.getStandbyDelegates(this.page4.size, this.page4.offset);
        }
    };
    DelegateMonitorComponent.prototype.ngOnInit = function () {
        this.columns1 = [
            { name: 'Voter', prop: 'senderId', cellTemplate: this.voters },
            { name: 'Transaction', prop: 'id', cellTemplate: this.transactionId },
            { name: 'Time', prop: 'timestamp', cellTemplate: this.timestamp }
        ];
        this.columns2 = [
            { name: 'Delegate', prop: 'username', cellTemplate: this.name },
            { name: 'Address', prop: 'address', cellTemplate: this.addresss },
            { name: 'Time', prop: 'timestamp', cellTemplate: this.timestamp }
        ];
        this.columns3 = [
            { name: 'Rank', prop: 'rank', cellTemplate: this.rank },
            { name: 'Address', prop: 'address', cellTemplate: this.addresss },
            { name: 'Status', cellTemplate: this.status },
            { name: 'Productivity', prop: 'productivity', cellTemplate: this.productivity },
            { name: 'Approval', prop: 'approval', cellTemplate: this.approval }
        ];
        this.columns4 = [
            { name: 'Rank', prop: 'rank', cellTemplate: this.rank },
            { name: 'Address', prop: 'address', cellTemplate: this.addresss },
            { name: 'Status', cellTemplate: this.status },
            { name: 'Productivity', prop: 'productivity', cellTemplate: this.productivity },
            { name: 'Approval', prop: 'approval', cellTemplate: this.approval }
        ];
        this.setPage({ offset: 0 });
    };
    DelegateMonitorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getPrice();
        this.getDelegatesDetail(this.activeDelegates, 0);
        this.getNextForgers(this.page1.size);
        this.getLatestVotes(this.page1.size);
        this.getLatestDelegates(this.page2.size);
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].interval(10000).subscribe(function (x) {
            _this.getNextForgers(_this.page1.size);
            _this.getLatestVotes(_this.page1.size);
            _this.getLatestDelegates(_this.page2.size);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('voters'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "voters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('transactionId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "transactionId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('timestamp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "timestamp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('address'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "addresss", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('producedBlocks'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "producedBlocks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('missedBlocks'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "missedBlocks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rank'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "rank", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('status'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "status", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('productivity'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "productivity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('missedBlocks'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DelegateMonitorComponent.prototype, "approval", void 0);
    DelegateMonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/delegate-monitor/delegate-monitor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delegate-monitor/delegate-monitor.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__shared_services_delegates_service__["a" /* DelegatesService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_blockHeightDetails_service__["a" /* BlockHeightDetailsService */]])
    ], DelegateMonitorComponent);
    return DelegateMonitorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/delegate-monitor/delegate-monitor.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Table layout css */\n.default-table-layout  thead{\n    background: #F9F9F9;\n}\n.default-table-layout  thead tr th{ \n    border-top: #E1E1E1 1px solid !important;\n    border-bottom: #E1E1E1 1px solid !important;\n    font-size: 14px;\n    padding: 10px 18px 10px 10px;\n}\n.default-table-layout tbody tr td{\n    \n    font-size: 14px;\n    border-top: none;\n    color: #464646;\n    font-weight: 400;\n}\n.default-table-layout.dataTable.no-footer,.default-table-layout.dataTable thead th{\n    border-bottom: none;\n}\n.dataTables_wrapper .dataTables_info{\n    font-size: 14px !important;\n}\n.table-container .container-fluid{\n    padding: 0;\n}\n.info-box .heading{\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.blog-info{\n    padding: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n}\n.blog-info li{\n    margin-bottom: 7px;\n    padding-bottom: 7px;\n}\n.blog-info li:last-child{\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n}\n.info-summary{\n    font-size: 15px;\n}\n.info-summary .col-md-3{\n    color: black;\n    font-weight: 400;\n}\n.info-summary .col-md-8 a{\n  color: #398bf7;\n}\n\n.address-tag{\n    display: inline-block;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 132px;\n    white-space: nowrap;\n}\n\n.p-t-em{\n    padding-top: 1.25em;\n}\n\n.next-forgers{\n    list-style: square;\n    padding-left: 18px;\n}\n.next-forgers li{\n    float: left;\n    margin-right: 25px;\n}\n.delegates-info{\n    font-size: 15px;\n}\n.delegates-info h3{\n    position: relative;\n    line-height: 1;\n    padding-bottom: 2px;\n    color: #67757c;\n    font-size: 16px;\n    margin-bottom: 1rem;\n    font-weight: 500;\n}\n.delegates-info h3:after {\n    content: \"\";\n    position: absolute;\n    height: 2px;\n    width: 15%;\n    left: 0;\n    bottom: -10px;\n    background: #66757c;\n}\n\n.network-status .m-b-0{\n    margin-bottom: 0!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delegate-monitor/delegate-monitor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelegateMonitorModule", function() { return DelegateMonitorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delegate_monitor_component__ = __webpack_require__("../../../../../src/app/delegate-monitor/delegate-monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        data: {
            title: 'Delegate Monitor',
            urls: [{ title: 'Home', url: '/delegate-monitor' }, { title: 'Delegate Monitor' }]
        },
        component: __WEBPACK_IMPORTED_MODULE_3__delegate_monitor_component__["a" /* DelegateMonitorComponent */]
    }];
var DelegateMonitorModule = (function () {
    function DelegateMonitorModule() {
    }
    DelegateMonitorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__delegate_monitor_component__["a" /* DelegateMonitorComponent */]]
        })
    ], DelegateMonitorModule);
    return DelegateMonitorModule;
}());



/***/ })

});
//# sourceMappingURL=delegate-monitor.module.chunk.js.map