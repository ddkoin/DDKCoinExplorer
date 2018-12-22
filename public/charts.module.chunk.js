webpackJsonp(["charts.module"],{

/***/ "../../../../../src/app/charts/chart-js/chartjs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Bar Sales Chart</h4>\n                    <h6 class=\"card-subtitle\">This is the simple example of bar chart</h6>\n                    <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" [colors]=\"barChartColors\" (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">Update</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Doughnut Chart</h4>\n                    <h6 class=\"card-subtitle\">This is the simple example of Doughnut chart</h6>\n                    <canvas baseChart height=\"165px\"  [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\" [colors]=\"[{backgroundColor: ['#009efb', '#55ce63', '#90a4ae']}]\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Radar Chart</h4>\n                    <h6 class=\"card-subtitle\">This is the simple example of Radar chart</h6>\n                    <canvas baseChart height=\"150px\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [chartType]=\"radarChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\" [colors]=\"radarChartColors\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Pie Chart</h4>\n                    <h6 class=\"card-subtitle\">This is the simple example of Pie chart</h6>\n                    <canvas baseChart height=\"150px\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\" [colors]=\"[{backgroundColor: ['#009efb', '#55ce63', '#90a4ae']}]\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                \n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Polar Area Chart</h4>\n                    <h6 class=\"card-subtitle\">This is the simple example of Polar Area Chart</h6>\n                    <canvas baseChart height=\"130px\" [data]=\"polarAreaChartData\" [labels]=\"polarAreaChartLabels\" [legend]=\"polarAreaLegend\" [chartType]=\"polarAreaChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\" [colors]=\"[{backgroundColor: ['#009efb', '#55ce63', '#90a4ae', '#7460ee', '#f62d51']}]\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Line Chart</h4>\n                    <h6 class=\"card-subtitle\">This is the simple example of Polar Line Chart</h6>\n                    <canvas baseChart height=\"130\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/charts/chart-js/chartjs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsComponent; });
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

var ChartjsComponent = (function () {
    function ChartjsComponent() {
        //This is line chart
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            barThickness: 10
        };
        this.barChartLabels = [
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }
        ];
        this.barChartColors = [
            { backgroundColor: '#55ce63' },
            { backgroundColor: '#009efb' }
        ];
        // Doughnut
        this.doughnutChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail-Order Sales'
        ];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            { backgroundColor: 'rgba(0,158,251,0.5)', borderColor: 'rgba(0,158,251,1)' },
            { backgroundColor: 'rgba(85,206,99,0.5)', borderColor: 'rgba(85,206,99,1)' }
        ];
        // Pie
        this.pieChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales'
        ];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = [
            'Download Sales',
            'In-Store Sales',
            'Mail Sales',
            'Telesales',
            'Corporate Sales'
        ];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // lineChart
        this.lineChartData = [
            { data: [65, 39, 80, 15, 76, 35, 40], label: 'Series A' },
            { data: [18, 58, 20, 69, 16, 27, 90], label: 'Series B' }
        ];
        this.lineChartLabels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(0,158,251,0.1)',
                borderColor: '#009efb',
                pointBackgroundColor: '#009efb',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#009efb'
            },
            {
                // dark grey
                backgroundColor: 'rgba(85,206,99,0.1)',
                borderColor: '#55ce63',
                pointBackgroundColor: '#55ce63',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#55ce63'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.subtitle = "This is chart page.";
    }
    // events
    ChartjsComponent.prototype.chartClicked = function (e) {
    };
    ChartjsComponent.prototype.chartHovered = function (e) {
    };
    ChartjsComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    ChartjsComponent.prototype.ngAfterViewInit = function () { };
    ChartjsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/charts/chart-js/chartjs.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ChartjsComponent);
    return ChartjsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/chartist-js/chartistjs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Bar chart Example</h4>\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a bar chart</h6>\n               <div class=\"barchrt\" style=\"height:400px;\">\n                  <x-chartist class=\"\" [data]=\"barChart1.data\" [type]=\"barChart1.type\" [options]=\"barChart1.options\" [responsiveOptions]=\"barChart1.responsiveOptions\" [events]=\"barChart1.events\"> </x-chartist>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n               <h4 class=\"card-title\">Line Area chart Example</h4>\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Line chart</h6>\n               <div class=\"linearea\" style=\"height:400px;\">\n                  <x-chartist class=\"\" [data]=\"lineChart1.data\" [type]=\"lineChart1.type\" [options]=\"lineChart1.options\" [responsiveOptions]=\"lineChart1.responsiveOptions\" [events]=\"lineChart1.events\"> </x-chartist>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n               <h4 class=\"card-title\">Line chart Example</h4>\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Line chart</h6>\n               <div class=\"linearea\" style=\"height:400px;\">\n                  <x-chartist class=\"\" [data]=\"lineChart2.data\" [type]=\"lineChart2.type\" [options]=\"lineChart2.options\" [responsiveOptions]=\"lineChart2.responsiveOptions\" [events]=\"lineChart2.events\"> </x-chartist>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n               <h4 class=\"card-title\">Line chart 2 Example</h4>\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Line chart</h6>\n               <div class=\"linearea\" style=\"height:400px;\">\n                  <x-chartist class=\"\" [data]=\"lineChart3.data\" [type]=\"lineChart3.type\" [options]=\"lineChart3.options\" [responsiveOptions]=\"lineChart3.responsiveOptions\" [events]=\"lineChart3.events\"> </x-chartist>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n               <h4 class=\"card-title\">Scatter chart Example</h4>\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Scatter chart</h6>\n               <div class=\"linearea\" style=\"height:400px;\">\n                  <x-chartist class=\"\" [data]=\"scatterChart1.data\" [type]=\"scatterChart1.type\" [options]=\"scatterChart1.options\" [responsiveOptions]=\"scatterChart1.responsiveOptions\" [events]=\"scatterChart1.events\"> </x-chartist>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n               <h4 class=\"card-title\">Pie chart Example</h4>\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Pie chart</h6>\n               <div class=\"piechart\" style=\"height:250px;\">\n                  <x-chartist class=\"\" [data]=\"pieChart1.data\" [type]=\"pieChart1.type\" [options]=\"pieChart1.options\" [responsiveOptions]=\"pieChart1.responsiveOptions\" [events]=\"pieChart1.events\"> </x-chartist>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n               <h4 class=\"card-title\">Donute chart Example</h4>\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Pie chart</h6>\n               <div class=\"piechart\" style=\"height:250px;\">\n                  <x-chartist class=\"\" [data]=\"donuteChart1.data\" [type]=\"donuteChart1.type\" [options]=\"donuteChart1.options\" [responsiveOptions]=\"donuteChart1.responsiveOptions\" [events]=\"donuteChart1.events\"> </x-chartist>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n               <h4 class=\"card-title\">Bipollar chart Example</h4>\n                <h6 class=\"card-subtitle\">This is the simple data export from the json file and creating a Bipollar chart</h6>\n               <div class=\"barchrt\" style=\"height:400px;\">\n                  <x-chartist class=\"\" [data]=\"bipollarChart1.data\" [type]=\"bipollarChart1.type\" [options]=\"bipollarChart1.options\" [responsiveOptions]=\"bipollarChart1.responsiveOptions\" [events]=\"bipollarChart1.events\"> </x-chartist>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\" style=\"height:400px;\">\n                <dynamic-chart class=\"barchrt linearea\"></dynamic-chart>\n            </div>    \n        </div>    \n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/charts/chartist-js/chartistjs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartistjsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var data = __webpack_require__("../../../../../src/app/charts/chartist-js/data.json");
var ChartistjsComponent = (function () {
    function ChartistjsComponent() {
        // Barchart
        this.barChart1 = {
            type: 'Bar',
            data: data['Bar'],
            options: {
                seriesBarDistance: 15,
                axisX: {
                    showGrid: false, offset: 70
                },
                axisY: {
                    showGrid: true, offset: 50
                }
            },
            responsiveOptions: [
                [
                    'screen and (min-width: 640px)',
                    {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 1 === 0 ? "" + value : null;
                            }
                        }
                    }
                ]
            ]
        };
        // Line chart
        this.lineChart1 = {
            type: 'Line',
            data: data['LineWithArea'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true
            }
        };
        // Line chart 2
        this.lineChart2 = {
            type: 'Line',
            data: data['Line'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true
            }
        };
        // Line chart 2
        this.lineChart3 = {
            type: 'Line',
            data: data['Line2'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true
            }
        };
        // Scatter chart
        this.scatterChart1 = {
            type: 'Line',
            data: data['Scatter'],
            options: {
                showLine: false,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 13 === 0 ? "W" + value : null;
                    }
                }
            },
            responsiveOptions: [
                [
                    'screen and (min-width: 640px)',
                    {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 4 === 0 ? "W" + value : null;
                            }
                        }
                    }
                ]
            ]
        };
        //Pie chart
        this.pieChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
                donut: true,
                donutWidth: 50,
                startAngle: 270,
                total: 200,
                showLabel: false
            }
        };
        this.donuteChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
                donut: true,
                showLabel: false
            }
            // events: {
            //   draw(data: any): boolean {
            //     return data;
            //   }
            // }
        };
        // Bi Poller chart
        this.bipollarChart1 = {
            type: 'Bar',
            data: data['Bi-PolarBar'],
            options: {
                high: 10,
                low: -10,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }
        };
    }
    ChartistjsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/charts/chartist-js/chartistjs.component.html")
        })
    ], ChartistjsComponent);
    return ChartistjsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/chartist-js/data.json":
/***/ (function(module, exports) {

module.exports = {"Bar":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[5,4,3,7,5,10],[3,2,9,5,4,6]]},"Line":{"labels":["Monday","Tuesday","Wednesday","Thursday","Friday"],"series":[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},"Line2":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"series":[[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9],[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null],[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]]},"Scatter":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"series":[[53.761530227932376,55.06077543488965,90.15619763154757,37.945743703232026,90.15064659594809,72.37213982905773,29.242023161826005,10.613377393892765,41.13272180459888,66.89170357483623,85.47173517613665,80.61313435041848,33.86466777842112,6.993834151672074,58.93321826442517,84.4944785171936,66.47863439014286,26.61792342884319,64.7715312645164,66.7721238997995,24.81459377695263,82.09485043326285,94.28939258245515,81.16315118589196,26.285515136087987,94.25034710171474,82.86738500874603,42.275860431799764,7.252221593822195,12.509815755028853,57.592396396889086,16.98227807583916,82.13296667627357,20.7798608815297,1.4886093931434141,27.717128889831557,83.02006467579533,46.825802760236044,4.449951322677559,63.949111152579285,76.2705142938321,92.84217568625859,33.34033701723147,83.32421059421287,30.95015406095809,99.26555827017742,64.73104862164556,58.3205528852039,98.07205383638176,34.217237701943006,76.84029415694194,77.51086205882534],[68.01743447487219,33.569040390627556,55.83518094287856,6.424873491809824,40.24108430485855,12.867529962712322,33.9171424717146,66.13486382709537,75.36042883674916,37.18758127466557,46.080488500245266,40.98286341759507,25.372664387026923,40.063178151024424,73.6495194240123,48.56310577188692,22.903651846539972,91.5635618730181,84.08459591966795,49.153284675642595,34.82239557500657,38.7753190443602,77.57931404198679,78.24594487949813,42.96149738863182,68.87344162290039,73.35891706187205,79.20638493178991,39.862955442611494,67.72254472880542,32.5667298714178,67.8951691474951,68.22845079029227,24.013142038835245,84.77387385278308,81.96540495436318,21.938120212431865,20.591735159801374,44.392082366517926,99.42917256114683,75.80197000496361,44.95928290576234,56.30251437622547,81.39575345403685,46.6480941362678,60.30444929651577,63.904344644822956,96.31525902388087,80.79036620032171,67.94970208668927,81.84914397158013,64.34930133297705],[94.83796449464408,0.05012881656139001,78.03842883107683,86.85066315022306,63.09834842166116,23.82558487142836,95.04013234951407,91.84355248378253,12.28927042529946,91.59027939302398,44.15426456286402,38.40309269293461,3.0323072732378,51.442756807992104,51.067878308530304,68.87925798432126,9.786004373688861,93.42472024399827,7.196590706996409,90.61672585107475,82.64800742042794,29.33983554466535,27.575295787547738,63.76900610636933,44.31691167371892,35.02049600051234,77.91406665575869,9.594366007019817,33.17507518940415,45.94854823450043,6.028395302814493,97.36303808493578,20.735238575670635,11.577295085428618,49.377810037702986,7.984978938697163,81.52380171386066,86.62152122764415,46.81516933597669,72.70055546352265,39.482785893198404,2.1729768023229346,32.730007414228865,11.8384494034782,97.04367174876609,37.87839695714026,96.1605067491887,24.340714355822968,90.92986653306863,1.9182109464024322,36.43773292877359,51.562138311337314],[90.93023971442824,91.24607758668748,83.11135627737995,38.89630350329263,47.48702934796674,83.10718371512166,93.40725921590878,62.65211828434698,76.93458061916239,94.13663459332706,15.47636651231441,93.70144628274673,80.7911280644665,32.06886936152644,6.458421962605865,14.668285135928372,10.700783089925082,46.997088144127886,53.02589740808132,15.662154340561152,94.70275097718405,59.27632659816442,53.88591373783527,21.602789791233846,29.326094253488066,8.159091366607441,52.57892041859127,71.68439221439431,61.773032787481455,43.02319475997418,97.7745443722398,41.77024219267196,32.79576671635134,26.614574588124352,96.60428591791621,68.90454201273897,33.39711159158707,94.56531035270376,83.77269890317353,72.91107164394433,50.31188574983041,54.67801129631369,69.65510719649639,59.96153020907791,50.66882388014429,97.73196339743835,12.936677564924759,30.197501751145396,7.071721221094629,60.85688790258899,51.276925828485446,30.951614223635193]]},"LineWithArea":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,5000,15000,8000,15000,9000,30000,0],[0,3000,5000,2000,8000,1000,5000,0]]},"Bi-PolarBar":{"labels":["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10"],"series":[[1,2,4,8,6,-2,-1,-4,-6,-2]]},"DistributedSeries":{"labels":["XS","S","M","L","XL","XXL","XXXL"],"series":[20,60,120,200,180,20,10]},"Pie":{"series":[20,10,30,40]}}

/***/ }),

/***/ "../../../../../src/app/charts/chartist-js/dynamic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicChartComponent; });
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

var data = __webpack_require__("../../../../../src/app/charts/chartist-js/data.json");
var DynamicChartComponent = (function () {
    function DynamicChartComponent() {
        this.chartTypes = ['Bar', 'Line'];
        this.type = 'Bar';
        this.data = data['Bar'];
        this.options = {
            axisX: {
                showLabel: false
            },
            axisY: {
                showLabel: false
            }
        };
    }
    DynamicChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dynamic-chart',
            template: "\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h4>Dynamic Chart Types</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <select class=\"form-control\" [(ngModel)]=\"type\">\n          <option *ngFor=\"let type of chartTypes\" [ngValue]=\"type\">{{type}}</option>\n        </select>\n      </div>\n    </div>\n    <x-chartist\n      [data]=\"data\"\n      [type]=\"type\"\n      [options]=\"options\">\n    </x-chartist>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], DynamicChartComponent);
    return DynamicChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_chartist__ = __webpack_require__("../../../../ng-chartist/dist/ng-chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__charts_routing__ = __webpack_require__("../../../../../src/app/charts/charts.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chartist_js_chartistjs_component__ = __webpack_require__("../../../../../src/app/charts/chartist-js/chartistjs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chartist_js_dynamic_component__ = __webpack_require__("../../../../../src/app/charts/chartist-js/dynamic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chart_js_chartjs_component__ = __webpack_require__("../../../../../src/app/charts/chart-js/chartjs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_chartist__["ChartistModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__charts_routing__["a" /* ChartsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__chart_js_chartjs_component__["a" /* ChartjsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__chartist_js_dynamic_component__["a" /* DynamicChartComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chartist_js_chartistjs_component__["a" /* ChartistjsComponent */]
            ]
        })
    ], ChartModule);
    return ChartModule;
}());



/***/ }),

/***/ "../../../../../src/app/charts/charts.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chartist_js_chartistjs_component__ = __webpack_require__("../../../../../src/app/charts/chartist-js/chartistjs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_js_chartjs_component__ = __webpack_require__("../../../../../src/app/charts/chart-js/chartjs.component.ts");


var ChartsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'chartistjs',
                component: __WEBPACK_IMPORTED_MODULE_0__chartist_js_chartistjs_component__["a" /* ChartistjsComponent */],
                data: {
                    title: 'Chartis js',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Chartis js Page' }]
                }
            },
            {
                path: 'chartjs',
                component: __WEBPACK_IMPORTED_MODULE_1__chart_js_chartjs_component__["a" /* ChartjsComponent */],
                data: {
                    title: 'Chart js',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Chart js Page' }]
                }
            }
        ]
    }
];


/***/ })

});
//# sourceMappingURL=charts.module.chunk.js.map