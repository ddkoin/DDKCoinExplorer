webpackJsonp(["address.module"],{

/***/ "../../../../../src/app/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 info-box\">\n                        <span class=\"heading b-b\">Overview</span>\n                        <ul class=\"blog-info\">\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Balance:</span>\n                                    <span class=\"col-md-8\">6.558848137440000009 Ether</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">DDK Value:</span>\n                                    <span class=\"col-md-8\">$4,521.34 (@ $689.35/DDK)</span>\n                                </span>\n                            </li>\n                            <li>\n                                <span class=\"row info-summary\">\n                                    <span class=\"col-md-3\">Transactions:</span>\n                                    <span class=\"col-md-8\">2188 txns</span>\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <div class=\"col-md-12 default-tab-layout m-t-20\">\n                        <ngb-tabset #t=\"ngbTabset\" (tabChange)=\"showComments($event)\">\n                            <ngb-tab id=\"tab-selectbyid1\" title=\"Transactions\">\n                                <ng-template ngbTabContent>\n                                    <div class=\"table-container p-t-em\">\n                                        <table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover default-table-layout\">\n                                            <thead>\n                                                <tr>\n                                                    <th>TxHash</th>\n                                                    <th>Block</th>\n                                                    <th>Age</th>\n                                                    <th>From</th>\n                                                    <th></th>\n                                                    <th>To</th>\n                                                    <th>Value</th>\n                                                    <th class=\"txFee\">[TxFee]</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xb7d3422c4397cc613142ef</a>\n                                                    </td>\n                                                    <td>5593391</td>\n                                                    <td>43 secs ago</td>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xf096e3b06de41f</a>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"https://etherscan.io/images/green-arrow-right.png\">\n                                                    </td>\n                                                    <td>\n                                                        <i class=\"fa fa-file-text-o m-r-0\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Contract\"></i>\n                                                        <a href=\"#\" class=\"address-tag\">0xd77bcd9cf4212a41defbcd2e2ff0f50fea2be643</a>\n                                                    </td>\n                                                    <td>0 DDK</td>\n                                                    <td class=\"font-11\">0.00014842</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xb7d3422c4397cc613142ef</a>\n                                                    </td>\n                                                    <td>5593391</td>\n                                                    <td>43 secs ago</td>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xf096e3b06de41f</a>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"https://etherscan.io/images/green-arrow-right.png\">\n                                                    </td>\n                                                    <td>\n                                                        <i class=\"fa fa-file-text-o m-r-0\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Contract\"></i>\n                                                        <a href=\"#\" class=\"address-tag\">0xd77bcd9cf4212a41defbcd2e2ff0f50fea2be643</a>\n                                                    </td>\n                                                    <td>0 DDK</td>\n                                                    <td class=\"font-11\">0.00014842</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xb7d3422c4397cc613142ef</a>\n                                                    </td>\n                                                    <td>5593391</td>\n                                                    <td>43 secs ago</td>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xf096e3b06de41f</a>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"https://etherscan.io/images/green-arrow-right.png\">\n                                                    </td>\n                                                    <td>\n                                                        <i class=\"fa fa-file-text-o m-r-0\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Contract\"></i>\n                                                        <a href=\"#\" class=\"address-tag\">0xd77bcd9cf4212a41defbcd2e2ff0f50fea2be643</a>\n                                                    </td>\n                                                    <td>0 DDK</td>\n                                                    <td class=\"font-11\">0.00014842</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xb7d3422c4397cc613142ef</a>\n                                                    </td>\n                                                    <td>5593391</td>\n                                                    <td>43 secs ago</td>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xf096e3b06de41f</a>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"https://etherscan.io/images/green-arrow-right.png\">\n                                                    </td>\n                                                    <td>\n                                                        <i class=\"fa fa-file-text-o m-r-0\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Contract\"></i>\n                                                        <a href=\"#\" class=\"address-tag\">0xd77bcd9cf4212a41defbcd2e2ff0f50fea2be643</a>\n                                                    </td>\n                                                    <td>0 DDK</td>\n                                                    <td class=\"font-11\">0.00014842</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xb7d3422c4397cc613142ef</a>\n                                                    </td>\n                                                    <td>5593391</td>\n                                                    <td>43 secs ago</td>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xf096e3b06de41f</a>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"https://etherscan.io/images/green-arrow-right.png\">\n                                                    </td>\n                                                    <td>\n                                                        <i class=\"fa fa-file-text-o m-r-0\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Contract\"></i>\n                                                        <a href=\"#\" class=\"address-tag\">0xd77bcd9cf4212a41defbcd2e2ff0f50fea2be643</a>\n                                                    </td>\n                                                    <td>0 DDK</td>\n                                                    <td class=\"font-11\">0.00014842</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xb7d3422c4397cc613142ef</a>\n                                                    </td>\n                                                    <td>5593391</td>\n                                                    <td>43 secs ago</td>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xf096e3b06de41f</a>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"https://etherscan.io/images/green-arrow-right.png\">\n                                                    </td>\n                                                    <td>\n                                                        <i class=\"fa fa-file-text-o m-r-0\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Contract\"></i>\n                                                        <a href=\"#\" class=\"address-tag\">0xd77bcd9cf4212a41defbcd2e2ff0f50fea2be643</a>\n                                                    </td>\n                                                    <td>0 DDK</td>\n                                                    <td class=\"font-11\">0.00014842</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xb7d3422c4397cc613142ef</a>\n                                                    </td>\n                                                    <td>5593391</td>\n                                                    <td>43 secs ago</td>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xf096e3b06de41f</a>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"https://etherscan.io/images/green-arrow-right.png\">\n                                                    </td>\n                                                    <td>\n                                                        <i class=\"fa fa-file-text-o m-r-0\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Contract\"></i>\n                                                        <a href=\"#\" class=\"address-tag\">0xd77bcd9cf4212a41defbcd2e2ff0f50fea2be643</a>\n                                                    </td>\n                                                    <td>0 DDK</td>\n                                                    <td class=\"font-11\">0.00014842</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xb7d3422c4397cc613142ef</a>\n                                                    </td>\n                                                    <td>5593391</td>\n                                                    <td>43 secs ago</td>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xf096e3b06de41f</a>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"https://etherscan.io/images/green-arrow-right.png\">\n                                                    </td>\n                                                    <td>\n                                                        <i class=\"fa fa-file-text-o m-r-0\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Contract\"></i>\n                                                        <a href=\"#\" class=\"address-tag\">0xd77bcd9cf4212a41defbcd2e2ff0f50fea2be643</a>\n                                                    </td>\n                                                    <td>0 DDK</td>\n                                                    <td class=\"font-11\">0.00014842</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xb7d3422c4397cc613142ef</a>\n                                                    </td>\n                                                    <td>5593391</td>\n                                                    <td>43 secs ago</td>\n                                                    <td>\n                                                        <a href=\"#\" class=\"address-tag\">0xf096e3b06de41f</a>\n                                                    </td>\n                                                    <td>\n                                                        <img src=\"https://etherscan.io/images/green-arrow-right.png\">\n                                                    </td>\n                                                    <td>\n                                                        <i class=\"fa fa-file-text-o m-r-0\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Contract\"></i>\n                                                        <a href=\"#\" class=\"address-tag\">0xd77bcd9cf4212a41defbcd2e2ff0f50fea2be643</a>\n                                                    </td>\n                                                    <td>0 DDK</td>\n                                                    <td class=\"font-11\">0.00014842</td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab id=\"tab-selectbyid2\" >\n                                <ng-template ngbTabTitle >Comments</ng-template>\n                                <ng-template ngbTabContent> </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                        <!-- <div *ngIf=\"show\" id=\"comments-container\"></div> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressComponent = (function () {
    function AddressComponent() {
        this.dtOptions = {};
        this.show = false;
    }
    AddressComponent.prototype.showComments = function ($event) {
        if ($event.activeId == "tab-selectbyid1") {
            this.show = true;
            this.loadCommenents();
        }
        else {
            this.show = false;
        }
    };
    AddressComponent.prototype.ngAfterViewInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
    };
    AddressComponent.prototype.loadCommenents = function () {
        $(document).ready(function () {
            $('#comments-container').comments({
                profilePictureURL: 'https://app.viima.com/static/media/user_profiles/user-icon.png',
                getComments: function (success, error) {
                    var commentsArray = [];
                    var usersArray = [];
                    success(commentsArray);
                }
            });
        });
    };
    AddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/address/address.component.html"),
            styles: [__webpack_require__("../../../../../src/app/address/address.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/address/address.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Table layout css */\n.default-table-layout  thead{\n    background: #F9F9F9;\n}\n.default-table-layout  thead tr th{ \n    border-top: #E1E1E1 1px solid !important;\n    border-bottom: #E1E1E1 1px solid !important;\n    font-size: 14px;\n    padding: 10px 18px 10px 10px;\n}\n.default-table-layout tbody tr td{\n    border-bottom: #E1E1E1 1px solid;\n    font-size: 14px;\n    border-top: none;\n    color: #464646;\n    font-weight: 400;\n}\n.default-table-layout.dataTable.no-footer,.default-table-layout.dataTable thead th{\n    border-bottom: none;\n}\n.dataTables_wrapper .dataTables_info{\n    font-size: 14px !important;\n}\n.table-container .container-fluid{\n    padding: 0;\n}\n.info-box .heading{\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.info-summary .col-md-3{\n    color: black;\n    font-weight: 400;\n}\n.info-summary .col-md-8 a{\n  color: #398bf7;\n}\n.info-summary{\n    font-size: 15px;\n}\n.blog-info{\n    padding: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n}\n.blog-info li{\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n}\n.blog-info li:last-child{\n    margin-bottom: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n}\n.address-tag{\n    display: inline-block;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 155px;\n    white-space: nowrap;\n}\n.p-t-em{\n    padding-top: 1.25em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/address/address.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModule", function() { return AddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_component__ = __webpack_require__("../../../../../src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        data: {
            title: 'Address',
            urls: [{ title: 'Home', url: '/dashboard' }, { title: 'Address' }]
        },
        component: __WEBPACK_IMPORTED_MODULE_4__address_component__["a" /* AddressComponent */]
    }];
var AddressModule = (function () {
    function AddressModule() {
    }
    AddressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__address_component__["a" /* AddressComponent */]]
        })
    ], AddressModule);
    return AddressModule;
}());



/***/ })

});
//# sourceMappingURL=address.module.chunk.js.map