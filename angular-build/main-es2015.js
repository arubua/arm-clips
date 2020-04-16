(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container \" [routerLink] = \"['/home']\">\r\n\r\n  <a href=\"\"><h4>Playing</h4></a>\r\n  <div class=\"container-flex category\">\r\n\r\n  <mat-card  *ngFor=\"let playingMovie of playingMovies\">\r\n    <img mat-card-image src=\"https://image.tmdb.org/t/p/w500{{playingMovie?.poster_path}}\" >\r\n      <mat-card-title>{{playingMovie?.title|ellipsis:50}}</mat-card-title>\r\n      <mat-card-subtitle>{{playingMovie.release_date|date: longDate}}</mat-card-subtitle>\r\n      <mat-card-content>{{playingMovie?.overview|ellipsis:170}}</mat-card-content>\r\n  </mat-card>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <a href=\"\"><h4>Popular</h4></a>\r\n  <div class=\"container-flex category\">\r\n\r\n    <mat-card  *ngFor=\"let popMovie of popMovies\">\r\n      <img mat-card-image src=\"https://image.tmdb.org/t/p/w500{{popMovie?.poster_path}}\" >\r\n      <mat-card-title>{{popMovie?.title|ellipsis:50}}</mat-card-title>\r\n      <mat-card-subtitle>{{popMovie?.release_date|date: longDate}}</mat-card-subtitle>\r\n      <mat-card-content>{{popMovie?.overview|ellipsis:150}}</mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <a href=\"\"><h4>Top Rated</h4></a>\r\n  <div class=\"container-flex category\">\r\n\r\n    <mat-card  *ngFor=\"let ratedMovie of ratedMovies\">\r\n      <img mat-card-image src=\"https://image.tmdb.org/t/p/w500{{ratedMovie?.poster_path}}\" >\r\n      <mat-card-title>{{ratedMovie?.title|ellipsis:40}}</mat-card-title>\r\n      <mat-card-subtitle>{{ratedMovie?.release_date|date: longDate}}</mat-card-subtitle>\r\n      <mat-card-content>{{ratedMovie?.overview|ellipsis:150}}</mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <a href=\"\"><h4>Upcoming</h4></a>\r\n  <div class=\"container-flex category\">\r\n\r\n    <mat-card  *ngFor=\"let upcomingMovie of upcomingMovies\">\r\n      <img mat-card-image src=\"https://image.tmdb.org/t/p/w500{{upcomingMovie?.poster_path}}\">\r\n      <mat-card-title>{{upcomingMovie?.title|ellipsis:40}}</mat-card-title>\r\n      <mat-card-subtitle>{{upcomingMovie?.release_date|date: longDate}}</mat-card-subtitle>\r\n      <mat-card-content>{{upcomingMovie?.overview|ellipsis:150}}</mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-details.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-details.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <mat-tab-group>\r\n    <mat-tab label=\"Overview\">\r\n      <div id=\"overview\" >\r\n        <img src=\"https://image.tmdb.org/t/p/w500{{movie?.backdrop_path}}\">\r\n        <div class=\"details\">\r\n          <h1>{{movie?.original_title}}</h1>\r\n          <div>\r\n            <mat-icon class=\"material-icons\">timer</mat-icon><span>{{movie?.runtime}} mins</span>\r\n            <mat-icon class=\"material-icons\">star</mat-icon><span>{{movie?.vote_average}}</span>\r\n            <mat-icon class=\"material-icons\">date_range</mat-icon><span>{{movie?.release_date | date: \"MMM yyyy\"}}</span>\r\n          </div>\r\n          <br>\r\n          <strong *ngFor=\"let genre of movie.genres\"> {{genre.name}} .</strong>\r\n          <p>{{movie?.overview}}</p><br>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"credits\">\r\n        <h2>Cast</h2>\r\n        <mat-card class=\"class\" *ngFor=\"let cast of credits.cast\">\r\n          <img mat-card-image src=\"https://image.tmdb.org/t/p/w92{{cast?.profile_path}}\">\r\n          <mat-card-footer>{{cast.name}}</mat-card-footer>\r\n        </mat-card>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n\r\n    </mat-tab>\r\n    <mat-tab label=\"Trailer\">\r\n\r\n    </mat-tab>\r\n    <mat-tab label=\"See Also\">\r\n        <div class=\"gallery\" *ngFor=\"let playingMovie of playingMovies\" >\r\n          <a routerLink=\"{{playingMovie?.id}}\" target=\"\" href=\"https://image.tmdb.org/t/p/w500{{playingMovie?.poster_path}}\">\r\n            <img src=\"https://image.tmdb.org/t/p/w500{{playingMovie?.poster_path}}\" width=\"350\" height=\"500\">\r\n          </a>\r\n        </div>\r\n\r\n      <div class=\"clearfix\"></div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/navbar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/navbar.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar \">\r\n  <button mat-button  routerLink=\"/home\"aria-hidden=\"false\" aria-label=\"home icon\" routerLinkActive=\"active\"><mat-icon >home</mat-icon></button>\r\n  <button mat-button  routerLink=\"/now_playing\" routerLinkActive=\"active\">Now Playing</button>\r\n  <button mat-button routerLink=\"/popular\" routerLinkActive=\"active\">Popular</button>\r\n  <button mat-button routerLink=\"/top_rated\" routerLinkActive=\"active\">Top Rated</button>\r\n  <button mat-button routerLink=\"/upcoming\" routerLinkActive=\"active\">Upcoming</button>\r\n  <mat-form-field><input matInput type=\"search\" placeholder=\"Search Movie\" ></mat-form-field>\r\n</nav>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "arm-clips";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _movies_movie_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movies/movie.module */ "./src/app/movies/movie.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav/navbar.component */ "./src/app/nav/navbar.component.ts");
/* harmony import */ var _shared_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/ellipsis.pipe */ "./src/app/shared/ellipsis.pipe.ts");
/* harmony import */ var _home_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/dashboard.component */ "./src/app/home/dashboard.component.ts");
/* harmony import */ var _shared_clip_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/clip.service */ "./src/app/shared/clip.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _nav_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
            _home_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
            _shared_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_15__["EllipsisPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot([
                { path: "home", component: _home_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] },
                { path: "", redirectTo: "home", pathMatch: "full" },
                { path: "**", redirectTo: "home", pathMatch: "full" }
            ]),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _movies_movie_module__WEBPACK_IMPORTED_MODULE_12__["MoviesModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"]
        ],
        providers: [
            _shared_clip_service__WEBPACK_IMPORTED_MODULE_17__["ClipService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/dashboard.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/dashboard.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-flex {\r\n  font-family: 'Dosis', sans-serif;\r\n  display:flex;\r\n  flex-flow: row wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.category {\r\n  vertical-align: baseline;\r\n  flex-wrap: wrap;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\nmat-card {\r\n  margin: .5%;\r\n  max-width: 15%;\r\n  min-width: 310px;\r\n  text-align: center;\r\n  padding-bottom: 0;\r\n  background-color:#ffffff ;\r\n  border-radius: 0;\r\n  vertical-align: baseline;\r\n}\r\n.mat-card:not([class*=mat-elevation-z]) {\r\n  box-shadow: 0 2px 1px -1px rgba(213, 214, 209, .6),\r\n              1px 1px 1px 0 rgb(179, 192, 128),\r\n              1px 1px 3px 0 rgba(47, 46, 51, 1);\r\n}\r\nmat-card-title {\r\n  font-size: medium;\r\n  float: right;\r\n  width: 50%;\r\n  text-align: center;\r\n  color:#2f2e33 ;\r\n}\r\na{\r\n text-decoration: none;\r\n}\r\nh4 {\r\n  margin-left: .4%;\r\n  margin-bottom: 0;\r\n  font-size: 1.5em;\r\n  color: #f50057;\r\n\r\n}\r\n.mat-card-image {\r\n  max-width: 50%;\r\n  float:left;\r\n  margin-bottom: 0;\r\n  border-radius: 0;\r\n}\r\nmat-card-content{\r\n  width: 50%;\r\n  float: right;\r\n  text-align: left;\r\n  color: #2f2e33 ;\r\n  font-size: small;\r\n}\r\nmat-card-subtitle{\r\n  width: 50%;\r\n  float: right;\r\n  text-align: center;\r\n  color: #f50057;\r\n  font-size: small;\r\n  margin-bottom: 5px;\r\n}\r\nmat-card-footer{\r\n  width: 50%;\r\n  float: right;\r\n  text-align: center;\r\n  color: #f50057;\r\n}\r\nmat-divider{\r\n  color: #2f2e33;\r\n}\r\n.clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFOzsrQ0FFNkM7QUFDL0M7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7O0FBRWhCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsZXgge1xyXG4gIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhdGVnb3J5IHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBtYXJnaW46IC41JTtcclxuICBtYXgtd2lkdGg6IDE1JTtcclxuICBtaW4td2lkdGg6IDMxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgyMTMsIDIxNCwgMjA5LCAuNiksXHJcbiAgICAgICAgICAgICAgMXB4IDFweCAxcHggMCByZ2IoMTc5LCAxOTIsIDEyOCksXHJcbiAgICAgICAgICAgICAgMXB4IDFweCAzcHggMCByZ2JhKDQ3LCA0NiwgNTEsIDEpO1xyXG59XHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IzJmMmUzMyA7XHJcbn1cclxuXHJcbmF7XHJcbiB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuaDQge1xyXG4gIG1hcmdpbi1sZWZ0OiAuNCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiAjZjUwMDU3O1xyXG5cclxufVxyXG4ubWF0LWNhcmQtaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50e1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMyZjJlMzMgO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxubWF0LWNhcmQtc3VidGl0bGV7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZjUwMDU3O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbm1hdC1jYXJkLWZvb3RlcntcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmNTAwNTc7XHJcbn1cclxubWF0LWRpdmlkZXJ7XHJcbiAgY29sb3I6ICMyZjJlMzM7XHJcbn1cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/dashboard.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/dashboard.component.ts ***!
  \*********************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_clip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/clip.service */ "./src/app/shared/clip.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(clipService) {
        this.clipService = clipService;
        this.baseUrl = "https://image.tmdb.org/t/p/";
    }
    ngOnInit() {
        this.getNowPlaying();
        this.getPopular();
        this.getTopRated();
        this.getUpcoming();
    }
    getNowPlaying() {
        this.clipService.getNowPlaying().subscribe((res) => {
            console.log(res.results);
            this.playingMovies = res.results.slice(0, 4);
            console.log(this.playingMovies);
        });
    }
    getPopular() {
        this.clipService.getPopular().subscribe((res) => {
            console.log(res.results);
            this.popMovies = res.results.slice(0, 4);
            console.log(this.popMovies);
        });
    }
    getTopRated() {
        this.clipService.getTopRated().subscribe((res) => {
            console.log(res.results);
            this.ratedMovies = res.results.slice(0, 4);
            console.log(this.ratedMovies);
        });
    }
    getUpcoming() {
        this.clipService.getUpcoming().subscribe((res) => {
            console.log(res.results);
            this.upcomingMovies = res.results.slice(0, 4);
            console.log(this.upcomingMovies);
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _shared_clip_service__WEBPACK_IMPORTED_MODULE_2__["ClipService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/home/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/movies/movie-details.component.css":
/*!****************************************************!*\
  !*** ./src/app/movies/movie-details.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n\r\n  background-color: #303030;\r\n}\r\nimg{\r\n  float: left;\r\n\r\n}\r\nmat-icon{\r\n  vertical-align: middle;\r\n  display: inline;\r\n}\r\nspan{\r\n  vertical-align: middle;\r\n  display: inline;\r\n  padding-left: .2rem;\r\n  padding-right: .7rem;\r\n}\r\nstrong {\r\n  padding-top: 1rem;\r\n}\r\n.details{\r\n  float: right;\r\n  width: 57%;\r\n  padding-right: 10%;\r\n  color: white;\r\n}\r\nh1{\r\n  margin-top: 0;\r\n}\r\n.details img{\r\n  padding-right: 12px;\r\n  margin-right:5px;\r\n\r\n}\r\ncredits {\r\n  margin: 0 auto;\r\n}\r\nmat-card{\r\n  width: 60px;\r\n  height: 107px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  float: left;\r\n  margin: 3% 5%;\r\n  line-height: 2;\r\n  font-size: small;\r\n  background-size: cover;\r\n  background-position: center;\r\n  border: 1px solid #f50057;\r\n}\r\nh2{\r\n  margin-left: 8px;\r\n  color: white;\r\n}\r\n.gallery img{\r\n  width: 90px;\r\n  height: 90px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin-right: 2%;\r\n  margin-top:2%;\r\n}\r\n.clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7O0FBRWI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCO0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxufVxyXG5pbWd7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcblxyXG59XHJcbm1hdC1pY29ue1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbnNwYW57XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAuMnJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAuN3JlbTtcclxufVxyXG5zdHJvbmcge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcbi5kZXRhaWxze1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogNTclO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaDF7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmRldGFpbHMgaW1ne1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjVweDtcclxuXHJcbn1cclxuY3JlZGl0cyB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxubWF0LWNhcmR7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAxMDdweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDMlIDUlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1MDA1NztcclxufVxyXG5cclxuXHJcbmgye1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5nYWxsZXJ5IGltZ3tcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgbWFyZ2luLXRvcDoyJTtcclxufVxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/movies/movie-details.component.ts":
/*!***************************************************!*\
  !*** ./src/app/movies/movie-details.component.ts ***!
  \***************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_clip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/clip.service */ "./src/app/shared/clip.service.ts");




let MovieDetailsComponent = class MovieDetailsComponent {
    constructor(router, clipService) {
        this.router = router;
        this.clipService = clipService;
        this.baseUrl = "https://image.tmdb.org/t/p/";
    }
    ngOnInit() {
        const id = this.router.snapshot.paramMap.get("id");
        console.log(id);
        this.clipService.getMovie(id).subscribe((movie) => {
            console.log(movie);
            this.movie = movie;
        });
        this.clipService.getCredits(id).subscribe((credits) => {
            console.log(credits);
            this.credits = credits;
        });
    }
};
MovieDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_clip_service__WEBPACK_IMPORTED_MODULE_3__["ClipService"] }
];
MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "movie-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-details.component.css */ "./src/app/movies/movie-details.component.css")).default]
    })
], MovieDetailsComponent);



/***/ }),

/***/ "./src/app/movies/movie.module.ts":
/*!****************************************!*\
  !*** ./src/app/movies/movie.module.ts ***!
  \****************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _now_playing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./now-playing.component */ "./src/app/movies/now-playing.component.ts");
/* harmony import */ var _popular_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popular.component */ "./src/app/movies/popular.component.ts");
/* harmony import */ var _top_rated_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-rated.component */ "./src/app/movies/top-rated.component.ts");
/* harmony import */ var _upcoming_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upcoming.component */ "./src/app/movies/upcoming.component.ts");
/* harmony import */ var _movie_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie-details.component */ "./src/app/movies/movie-details.component.ts");
/* harmony import */ var _shared_safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/safe.pipe */ "./src/app/shared/safe.pipe.ts");













let MoviesModule = class MoviesModule {
};
MoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: "now_playing", component: _now_playing_component__WEBPACK_IMPORTED_MODULE_7__["NowPlayingMovieComponent"] },
                { path: "popular", component: _popular_component__WEBPACK_IMPORTED_MODULE_8__["PopularMovieComponent"] },
                { path: "top_rated", component: _top_rated_component__WEBPACK_IMPORTED_MODULE_9__["TopRatedMovieComponent"] },
                { path: "upcoming", component: _upcoming_component__WEBPACK_IMPORTED_MODULE_10__["UpcomingMovieComponent"] },
                { path: "now_playing/:id", component: _movie_details_component__WEBPACK_IMPORTED_MODULE_11__["MovieDetailsComponent"] },
                { path: "popular/:id", component: _movie_details_component__WEBPACK_IMPORTED_MODULE_11__["MovieDetailsComponent"] },
                { path: "top_rated/:id", component: _movie_details_component__WEBPACK_IMPORTED_MODULE_11__["MovieDetailsComponent"] },
                { path: "upcoming/:id", component: _movie_details_component__WEBPACK_IMPORTED_MODULE_11__["MovieDetailsComponent"] },
                { path: "", redirectTo: "home", pathMatch: "full" },
                { path: "**", redirectTo: "home", pathMatch: "full" }
            ]),
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"]
        ],
        declarations: [
            _now_playing_component__WEBPACK_IMPORTED_MODULE_7__["NowPlayingMovieComponent"],
            _popular_component__WEBPACK_IMPORTED_MODULE_8__["PopularMovieComponent"],
            _top_rated_component__WEBPACK_IMPORTED_MODULE_9__["TopRatedMovieComponent"],
            _upcoming_component__WEBPACK_IMPORTED_MODULE_10__["UpcomingMovieComponent"],
            _movie_details_component__WEBPACK_IMPORTED_MODULE_11__["MovieDetailsComponent"],
            _shared_safe_pipe__WEBPACK_IMPORTED_MODULE_12__["SafePipe"]
        ]
    })
], MoviesModule);



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.container-flex {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n  width: 100%;\r\n  padding: 0;\r\n}\r\n.gallery {\r\n  float: left;\r\n  width: 24.99999%;\r\n  min-width: 106px;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n  flex-wrap: wrap;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\ndiv.gallery img {\r\n  width: 100%;\r\n\r\n  height: auto;\r\n\r\n}\r\ndiv.gallery img:hover {\r\n  opacity: .8;\r\n}\r\n.gallery.desc {\r\n  text-align: center;\r\n  position: absolute;\r\n  z-index: 999;\r\n  top: 40%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n.clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2QjtBQUdBO0VBQ0UsV0FBVzs7RUFFWCxZQUFZOztBQUVkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFFBQVE7RUFDUixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lci1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uZ2FsbGVyeSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI0Ljk5OTk5JTtcclxuICBtaW4td2lkdGg6IDEwNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuZGl2LmdhbGxlcnkgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5kaXYuZ2FsbGVyeSBpbWc6aG92ZXIge1xyXG4gIG9wYWNpdHk6IC44O1xyXG59XHJcbi5nYWxsZXJ5LmRlc2Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHRvcDogNDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/movies/now-playing.component.ts":
/*!*************************************************!*\
  !*** ./src/app/movies/now-playing.component.ts ***!
  \*************************************************/
/*! exports provided: NowPlayingMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowPlayingMovieComponent", function() { return NowPlayingMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_clip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/clip.service */ "./src/app/shared/clip.service.ts");





let NowPlayingMovieComponent = class NowPlayingMovieComponent {
    constructor(http, router, clipService) {
        this.http = http;
        this.router = router;
        this.clipService = clipService;
        this.baseUrl = "https://image.tmdb.org/t/p/";
    }
    ngOnInit() {
        this.getNowPlaying();
    }
    getNowPlaying() {
        this.clipService.getNowPlaying().subscribe((res) => {
            console.log(res.results);
            this.playingMovies = res.results;
        });
    }
};
NowPlayingMovieComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_clip_service__WEBPACK_IMPORTED_MODULE_4__["ClipService"] }
];
NowPlayingMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="container-flex" routerLink = '/now_playing' >
  <div class="gallery" *ngFor="let playingMovie of playingMovies" >
    <a routerLink="{{playingMovie?.id}}" target="" href="https://image.tmdb.org/t/p/w500{{playingMovie?.poster_path}}">
      <img src="https://image.tmdb.org/t/p/w500{{playingMovie?.poster_path}}" width="350" height="500">
    </a>
  </div>
</div>
<div class="clearfix"></div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")).default]
    })
], NowPlayingMovieComponent);



/***/ }),

/***/ "./src/app/movies/popular.component.ts":
/*!*********************************************!*\
  !*** ./src/app/movies/popular.component.ts ***!
  \*********************************************/
/*! exports provided: PopularMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularMovieComponent", function() { return PopularMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_clip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/clip.service */ "./src/app/shared/clip.service.ts");




let PopularMovieComponent = class PopularMovieComponent {
    constructor(router, clipService) {
        this.router = router;
        this.clipService = clipService;
        this.baseUrl = "https://image.tmdb.org/t/p/";
    }
    ngOnInit() {
        this.getPopular();
    }
    getPopular() {
        this.clipService.getPopular().subscribe((res) => {
            console.log(res.results);
            this.popMovies = res.results;
        });
    }
};
PopularMovieComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_clip_service__WEBPACK_IMPORTED_MODULE_3__["ClipService"] }
];
PopularMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="container-flex" routerLink = '/popular'>
  <div class="gallery" *ngFor="let popMovie of popMovies" >
    <a routerLink="{{popMovie?.id}}" target="" href="https://image.tmdb.org/t/p/w500{{popMovie?.poster_path}}">
      <img src="https://image.tmdb.org/t/p/w500{{popMovie?.poster_path}}" width="350" height="500">
    </a>
  </div>
</div>
<div class="clearfix"></div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")).default]
    })
], PopularMovieComponent);



/***/ }),

/***/ "./src/app/movies/top-rated.component.ts":
/*!***********************************************!*\
  !*** ./src/app/movies/top-rated.component.ts ***!
  \***********************************************/
/*! exports provided: TopRatedMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedMovieComponent", function() { return TopRatedMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_clip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/clip.service */ "./src/app/shared/clip.service.ts");



let TopRatedMovieComponent = class TopRatedMovieComponent {
    constructor(clipService) {
        this.clipService = clipService;
        this.baseUrl = "https://image.tmdb.org/t/p/";
    }
    ngOnInit() {
        this.getTopRated();
    }
    getTopRated() {
        this.clipService.getTopRated().subscribe((res) => {
            console.log(res.results);
            this.ratedMovies = res.results;
        });
    }
};
TopRatedMovieComponent.ctorParameters = () => [
    { type: _shared_clip_service__WEBPACK_IMPORTED_MODULE_2__["ClipService"] }
];
TopRatedMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="container-flex" routerLink = '/top_rated' >
  <div class="gallery" *ngFor="let ratedMovie of ratedMovies" >
    <a routerLink="{{ratedMovie?.id}}" target="" href="https://image.tmdb.org/t/p/w500{{ratedMovie?.poster_path}}">
      <img src="https://image.tmdb.org/t/p/w500{{ratedMovie?.poster_path}}" width="350" height="500">
    </a>
  </div>
</div>
<div class="clearfix"></div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")).default]
    })
], TopRatedMovieComponent);



/***/ }),

/***/ "./src/app/movies/upcoming.component.ts":
/*!**********************************************!*\
  !*** ./src/app/movies/upcoming.component.ts ***!
  \**********************************************/
/*! exports provided: UpcomingMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingMovieComponent", function() { return UpcomingMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_clip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/clip.service */ "./src/app/shared/clip.service.ts");



let UpcomingMovieComponent = class UpcomingMovieComponent {
    constructor(clipService) {
        this.clipService = clipService;
        this.baseUrl = "https://image.tmdb.org/t/p/";
    }
    ngOnInit() {
        this.getUpcoming();
    }
    getUpcoming() {
        this.clipService.getUpcoming().subscribe((res) => {
            console.log(res.results);
            this.upcomingMovies = res.results;
        });
    }
};
UpcomingMovieComponent.ctorParameters = () => [
    { type: _shared_clip_service__WEBPACK_IMPORTED_MODULE_2__["ClipService"] }
];
UpcomingMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
  <div class="container-flex" routerLink = '/upcoming' >
  <div class="gallery" *ngFor="let upcomingMovie of upcomingMovies" >
    <a routerLink="{{upcomingMovie?.id}}" target="" href="https://image.tmdb.org/t/p/w500{{upcomingMovie?.poster_path}}">
      <img src="https://image.tmdb.org/t/p/w500{{upcomingMovie?.poster_path}}" width="350" height="500">
    </a>
  </div>
</div>
<div class="clearfix"></div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")).default]
    })
], UpcomingMovieComponent);



/***/ }),

/***/ "./src/app/nav/navbar.component.css":
/*!******************************************!*\
  !*** ./src/app/nav/navbar.component.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav{\r\n  padding: 2%;\r\n  background-color: #303030;\r\n  text-align: center;\r\n}\r\nmat-form-field{\r\n  float: right;\r\n color: white;\r\n}\r\nbutton{\r\n  padding: .7rem;\r\n  margin-right: .5rem;\r\n}\r\n.mat-button {\r\n  color: grey;\r\n}\r\n.matInput {\r\n  margin-left: 15rem;\r\n}\r\nnav button:last-child{\r\n  margin-right: 5%;\r\n}\r\n.active{\r\n  background-color: #f50057;\r\n  color: white;\r\n}\r\n.clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7Q0FDYixZQUFZO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIGZsb2F0OiByaWdodDtcclxuIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5idXR0b257XHJcbiAgcGFkZGluZzogLjdyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG4ubWF0LWJ1dHRvbiB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuLm1hdElucHV0IHtcclxuICBtYXJnaW4tbGVmdDogMTVyZW07XHJcbn1cclxubmF2IGJ1dHRvbjpsYXN0LWNoaWxke1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwMDU3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/nav/navbar.component.ts":
/*!*****************************************!*\
  !*** ./src/app/nav/navbar.component.ts ***!
  \*****************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "nav-bar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/nav/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/clip.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/clip.service.ts ***!
  \****************************************/
/*! exports provided: ClipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipService", function() { return ClipService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ClipService = class ClipService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://api.themoviedb.org/3/";
        this.apiKey = "566ddfa3dcc475f0aaff81a58fe7038b";
        this.language = "en-US";
        this.page = 1;
        this.region = "US";
        this.atr = "videos,images";
    }
    getNowPlaying() {
        return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&region=${this.region}`);
    }
    getPopular() {
        return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&region=${this.region}`);
    }
    getTopRated() {
        return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&region=${this.region}`);
    }
    getUpcoming() {
        return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&region=${this.region}`);
    }
    getMovie(id) {
        return this.http.get(
        // tslint:disable-next-line: max-line-length
        `${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=${this.language}&append_to_response=${this.atr}&include_image_language=en,null`);
    }
    getCredits(id) {
        return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`);
    }
};
ClipService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClipService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ClipService);



/***/ }),

/***/ "./src/app/shared/ellipsis.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/ellipsis.pipe.ts ***!
  \*****************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EllipsisPipe = class EllipsisPipe {
    transform(val, args) {
        if (args === undefined) {
            return val;
        }
        if (val.length > args) {
            return val.substring(0, args) + "...";
        }
        else {
            return val;
        }
    }
};
EllipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "ellipsis"
    })
], EllipsisPipe);



/***/ }),

/***/ "./src/app/shared/safe.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/shared/safe.pipe.ts ***!
  \*************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case "html": return this.sanitizer.bypassSecurityTrustHtml(value);
            case "style": return this.sanitizer.bypassSecurityTrustStyle(value);
            case "script": return this.sanitizer.bypassSecurityTrustScript(value);
            case "url": return this.sanitizer.bypassSecurityTrustUrl(value);
            case "resourceUrl": return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "safe"
    })
], SafePipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ANGULAR\arm-clips\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);