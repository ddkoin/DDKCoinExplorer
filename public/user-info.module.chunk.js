webpackJsonp(["user-info.module"],{

/***/ "../../../../../src/app/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"col-md-12 info-box\">\n                    <span class=\"heading b-b\">Overview</span>\n                    <ul class=\"blog-info\">\n                        <li>\n                            <span class=\"row info-summary\">\n                                <span class=\"col-md-3\">Address:</span>\n                                <span class=\"col-md-8\">{{addressInfo.address}}</span>\n                            </span>\n                        </li>\n                        <li>\n                            <span class=\"row info-summary\">\n                                <span class=\"col-md-3\">Balance:</span>\n                                <span class=\"col-md-8\">{{(addressInfo.balance - addressInfo.totalFrozeAmount)/100000000}}</span>\n                            </span>\n                        </li>\n                        <li>\n                            <span class=\"row info-summary\">\n                                <span class=\"col-md-3\">PublicKey:</span>\n                                <span class=\"col-md-8\">{{addressInfo.publicKey}}</span>\n                            </span>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"col-md-12 default-tab-layout m-t-20\">\n                    <div class=\"tab-btn\">\n                        <button type=\"button\" [class.active]=\"clicked === tab1\" (click)=\"showTransactions()\">Transactions</button>\n                        <button type=\"button\" [class.active]=\"clicked === tab2\" (click)=\"showComments()\">Comments</button>\n                    </div>\n                    <div [hidden]=\"!tab1\">\n                        <ngx-datatable #table class=\"material bootstrap\" [rows]=\"senderInfo\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"47\"\n                            [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\" [externalPaging]=\"true\" [count]=\"page.totalElements\"\n                            [offset]=\"page.pageNumber\" [limit]=\"page.size\" (page)='setPage($event)' [scrollbarH]=\"true\">\n                        </ngx-datatable>\n\n                        <ng-template #senderId let-row=\"row\">\n                            <span *ngIf=\"row.senderName; else elseBlock\">\n                                <a (click)=\"getSenderId(row.senderId)\" class=\"address-tag link-hover\">{{row.senderName}}</a>\n                            </span>\n                            <ng-template #elseBlock>\n                                <a (click)=\"getSenderId(row.senderId)\" class=\"address-tag link-hover\">{{row.senderId}}</a>\n                            </ng-template>\n                        </ng-template>\n\n                        <ng-template #recipientId let-row=\"row\">\n                            <span *ngIf=\"row.recipientName; else elseBlock\">\n                                <a (click)=\"getSenderId(row.recipientId)\" class=\"address-tag link-hover\">{{row.recipientName}}</a>\n                            </span>\n                            <ng-template #elseBlock>\n                                <a (click)=\"getSenderId(row.recipientId)\" class=\"address-tag link-hover\">{{row.recipientId}}</a>\n                            </ng-template>\n                        </ng-template>\n\n                        <ng-template #fee let-row=\"row\">\n                            {{row.fee / 100000000 }}\n                        </ng-template>\n\n                        <ng-template #amount let-row=\"row\">\n                            <span *ngIf=\"row.type !== 8; else stakedAmount\">{{row.amount/100000000}}</span>\n                            <ng-template #stakedAmount>\n                                {{ row.stakedAmount/100000000}}\n                            </ng-template>\n                        </ng-template>\n\n                        <ng-template #timestamp let-row=\"row\">\n                            {{row.timestamp | timeagofilter }}\n                        </ng-template>\n                    </div>\n                    <div [hidden]=\"!tab2\" id=\"comments-container\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_addressDetail_service__ = __webpack_require__("../../../../../src/app/shared/services/addressDetail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_senderidDetail_service__ = __webpack_require__("../../../../../src/app/shared/services/senderidDetail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserInfoComponent = (function () {
    function UserInfoComponent(senderidDetail, activatedRoute, addressDetail) {
        var _this = this;
        this.senderidDetail = senderidDetail;
        this.activatedRoute = activatedRoute;
        this.addressDetail = addressDetail;
        this.rows = [];
        this.columns = [];
        this.temp = [];
        this.page = { totalElements: 0, pageNumber: 0, size: 20, searchValue: "" };
        this.timeout = 100;
        this.addressInfo = [];
        this.senderInfo = [];
        this.explorerServer = "http://159.65.139.248:7003";
        this.tab1 = true;
        this.tab2 = false;
        this.show = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.typeId = params.id;
        });
    }
    UserInfoComponent.prototype.showTransactions = function () {
        this.tab1 = true;
        this.tab2 = false;
    };
    UserInfoComponent.prototype.showComments = function () {
        this.tab1 = false;
        this.tab2 = true;
        this.loadCommenents(this.addressInfo, this.explorerServer);
    };
    UserInfoComponent.prototype.AddressDetail = function () {
        var _this = this;
        this.addressDetail.getAddressDetail(this.typeId).subscribe(function (resp) {
            if (resp.success) {
                _this.addressInfo = resp.account;
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserInfoComponent.prototype.senderIdDetail = function (limit, offset) {
        var _this = this;
        this.senderidDetail.getSenderidDetail(this.typeId).subscribe(function (resp) {
            if (resp.success) {
                var data = {};
                var publicKey = resp.account.publicKey;
                _this.senderidDetail.getSenderTransactions(limit, offset, _this.typeId, publicKey).subscribe(function (resp) {
                    if (resp.success) {
                        _this.senderInfo = resp.transactions;
                        _this.page.totalElements = resp.count;
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserInfoComponent.prototype.setPage = function (event) {
        this.page.offset = this.page.size * event.offset;
        this.senderIdDetail(this.page.size, this.page.offset);
    };
    UserInfoComponent.prototype.getSenderId = function (senderId) {
        console.log("his is working");
    };
    UserInfoComponent.prototype.ngAfterViewInit = function () {
        this.AddressDetail();
    };
    UserInfoComponent.prototype.ngOnInit = function () {
        this.columns = [
            { name: 'Sender ID', prop: 'senderId', width: '240', cellTemplate: this.senderId },
            { name: 'Recipient ID', prop: 'recipientId', width: '240', cellTemplate: this.recipientId },
            { name: 'Tx Type', prop: 'trsName' },
            { name: 'Tx Fee', prop: 'fee', cellTemplate: this.fee },
            { name: 'Height', prop: 'height' },
            { name: 'Time', prop: 'timestamp', cellTemplate: this.timestamp },
            { name: 'Amount', prop: 'amount', cellTemplate: this.amount }
        ];
        this.setPage({ offset: 0 });
    };
    UserInfoComponent.prototype.loadCommenents = function (userInfo, explorerServer) {
        $(document).ready(function () {
            $('#comments-container').comments({
                profilePictureURL: 'https://app.viima.com/static/media/user_profiles/user-icon.png',
                getComments: function (success, error) {
                    $.ajax({
                        type: 'get',
                        url: explorerServer + '/api/comments/',
                        success: function (commentsArray) {
                            success(commentsArray);
                        },
                        error: error
                    });
                },
                getUsers: function (success, error) {
                    $.ajax({
                        type: 'get',
                        url: explorerServer + '/api/users/',
                        success: function (userArray) {
                            success(userArray);
                        },
                        error: error
                    });
                },
                postComment: function (commentJSON, success, error) {
                    commentJSON.fullname = userInfo.address;
                    $.ajax({
                        type: 'post',
                        url: explorerServer + '/api/comments/',
                        data: commentJSON,
                        success: function (comment) {
                            success(comment);
                        },
                        error: error
                    });
                },
                putComment: function (commentJSON, success, error) {
                    $.ajax({
                        type: 'put',
                        url: explorerServer + '/api/comments/' + commentJSON.id,
                        data: commentJSON,
                        success: function (comment) {
                            success(comment);
                        },
                        error: error
                    });
                },
                deleteComment: function (commentJSON, success, error) {
                    $.ajax({
                        type: 'delete',
                        url: explorerServer + '/api/comments/' + commentJSON.id,
                        success: success,
                        error: error
                    });
                },
                upvoteComment: function (commentJSON, success, error) {
                    var commentURL = explorerServer + '/api/comments/' + commentJSON.id;
                    var upvotesURL = commentURL + '/upvotes/';
                    $.ajax({
                        type: 'post',
                        url: upvotesURL,
                        data: {
                            comment: commentJSON.id,
                            user_has_upvoted: commentJSON.user_has_upvoted
                        },
                        success: function () {
                            success(commentJSON);
                        },
                        error: error
                    });
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('senderId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], UserInfoComponent.prototype, "senderId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('recipientId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], UserInfoComponent.prototype, "recipientId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('timestamp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], UserInfoComponent.prototype, "timestamp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fee'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], UserInfoComponent.prototype, "fee", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('amount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], UserInfoComponent.prototype, "amount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('stakedAmount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], UserInfoComponent.prototype, "stakedAmount", void 0);
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-info/user-info.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_senderidDetail_service__["a" /* SenderidDetailService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__shared_services_addressDetail_service__["a" /* AddressDetailService */]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-info/user-info.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Table layout css */\n.default-table-layout  thead{\n    background: #F9F9F9;\n}\n.default-table-layout  thead tr th{ \n    border-top: #E1E1E1 1px solid !important;\n    border-bottom: #E1E1E1 1px solid !important;\n    font-size: 14px;\n    padding: 10px 18px 10px 10px;\n}\n.default-table-layout tbody tr td{\n    border-bottom: #E1E1E1 1px solid;\n    font-size: 14px;\n    border-top: none;\n    color: #464646;\n    font-weight: 400;\n}\n.default-table-layout.dataTable.no-footer,.default-table-layout.dataTable thead th{\n    border-bottom: none;\n}\n.dataTables_wrapper .dataTables_info{\n    font-size: 14px !important;\n}\n.table-container .container-fluid{\n    padding: 0;\n}\n.info-box .heading{\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.info-summary .col-md-3{\n    color: black;\n    font-weight: 400;\n}\n.info-summary .col-md-8 a{\n  color: #398bf7;\n}\n.info-summary{\n    font-size: 15px;\n}\n.blog-info{\n    padding: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n}\n.blog-info li{\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.blog-info li:last-child{\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n}\n.address-tag{\n    display: inline-block;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 155px;\n    white-space: nowrap;\n}\n.p-t-em{\n    padding-top: 1.25em;\n}\n\n.alert-message{\n    padding: 40px 20px;\n    text-align: center;\n    margin: 0;\n    font-size: 16px;\n    font-weight: 400;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoModule", function() { return UserInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_info_component__ = __webpack_require__("../../../../../src/app/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [{
        path: '',
        data: {
            title: 'User Detail',
            urls: [{ title: 'Home', url: '/dashboard' }, { title: 'User Detail' }]
        },
        component: __WEBPACK_IMPORTED_MODULE_4__user_info_component__["a" /* UserInfoComponent */]
    }];
var UserInfoModule = (function () {
    function UserInfoModule() {
    }
    UserInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__user_info_component__["a" /* UserInfoComponent */]]
        })
    ], UserInfoModule);
    return UserInfoModule;
}());



/***/ })

});
//# sourceMappingURL=user-info.module.chunk.js.map