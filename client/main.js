(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_messaging_messaging_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/messaging/messaging.component */ "./src/app/pages/messaging/messaging.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");






var routes = [
    { path: '', redirectTo: '/messaging', pathMatch: 'full' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'messaging', component: _pages_messaging_messaging_component__WEBPACK_IMPORTED_MODULE_4__["MessagingComponent"] },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    _pages_messaging_messaging_component__WEBPACK_IMPORTED_MODULE_4__["MessagingComponent"],
    _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _backend_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend-sdk */ "./src/app/backend-sdk/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common-ui */ "./src/app/common-ui/index.ts");
/* harmony import */ var _common_ui_msg_compose_msg_compose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common-ui/msg-compose/msg-compose.component */ "./src/app/common-ui/msg-compose/msg-compose.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["routingComponents"],
                _common_ui__WEBPACK_IMPORTED_MODULE_7__["commonUiComponents"],
                _common_ui_msg_compose_msg_compose_component__WEBPACK_IMPORTED_MODULE_8__["MsgComposeComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _backend_sdk__WEBPACK_IMPORTED_MODULE_2__["SDKBrowserModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backend-sdk/index.ts":
/*!**************************************!*\
  !*** ./src/app/backend-sdk/index.ts ***!
  \**************************************/
/*! exports provided: SDKBrowserModule, CookieBrowser, StorageBrowser, LoopBackConfig, BaseStorage, InternalStorage, SDKStorage, User, Message, AccessToken, SDKToken, LoopBackAuth, ErrorHandler, UserApi, MessageApi, SDKModels, LoggerService, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKBrowserModule", function() { return SDKBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_core_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/core/error.service */ "./src/app/backend-sdk/services/core/error.service.ts");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/core/auth.service */ "./src/app/backend-sdk/services/core/auth.service.ts");
/* harmony import */ var _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/custom/logger.service */ "./src/app/backend-sdk/services/custom/logger.service.ts");
/* harmony import */ var _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/custom/SDKModels */ "./src/app/backend-sdk/services/custom/SDKModels.ts");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage/storage.swaps */ "./src/app/backend-sdk/storage/storage.swaps.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage/cookie.browser */ "./src/app/backend-sdk/storage/cookie.browser.ts");
/* harmony import */ var _storage_storage_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage/storage.browser */ "./src/app/backend-sdk/storage/storage.browser.ts");
/* harmony import */ var _services_custom_User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/custom/User */ "./src/app/backend-sdk/services/custom/User.ts");
/* harmony import */ var _services_custom_Message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/custom/Message */ "./src/app/backend-sdk/services/custom/Message.ts");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/index */ "./src/app/backend-sdk/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _models_index__WEBPACK_IMPORTED_MODULE_13__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _models_index__WEBPACK_IMPORTED_MODULE_13__["Message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_13__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _models_index__WEBPACK_IMPORTED_MODULE_13__["SDKToken"]; });

/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/index */ "./src/app/backend-sdk/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _services_index__WEBPACK_IMPORTED_MODULE_14__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _services_index__WEBPACK_IMPORTED_MODULE_14__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_14__["UserApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_14__["MessageApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _services_index__WEBPACK_IMPORTED_MODULE_14__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_14__["LoggerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _services_index__WEBPACK_IMPORTED_MODULE_14__["BaseLoopBackApi"]; });

/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lb.config */ "./src/app/backend-sdk/lb.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return _lb_config__WEBPACK_IMPORTED_MODULE_15__["LoopBackConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["BaseStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["InternalStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["SDKStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_9__["CookieBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return _storage_storage_browser__WEBPACK_IMPORTED_MODULE_10__["StorageBrowser"]; });


/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/












/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["InternalStorage"],
            useClass: _storage_cookie_browser__WEBPACK_IMPORTED_MODULE_9__["CookieBrowser"]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                _services_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["LoopBackAuth"],
                _services_custom_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"],
                _services_custom_SDKModels__WEBPACK_IMPORTED_MODULE_4__["SDKModels"],
                _services_custom_User__WEBPACK_IMPORTED_MODULE_11__["UserApi"],
                _services_custom_Message__WEBPACK_IMPORTED_MODULE_12__["MessageApi"],
                internalStorageProvider,
                { provide: _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_5__["SDKStorage"], useClass: _storage_storage_browser__WEBPACK_IMPORTED_MODULE_10__["StorageBrowser"] }
            ]
        };
    };
    var SDKBrowserModule_1;
    SDKBrowserModule = SDKBrowserModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
            declarations: [],
            exports: [],
            providers: [
                _services_core_error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
}());

/**
* Have Fun!!!
* - Jon
**/








/***/ }),

/***/ "./src/app/backend-sdk/lb.config.ts":
/*!******************************************!*\
  !*** ./src/app/backend-sdk/lb.config.ts ***!
  \******************************************/
/*! exports provided: LoopBackConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackConfig", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.whereOnUrl = function () {
        LoopBackConfig.whereOn = 'url';
    };
    LoopBackConfig.whereOnHeaders = function () {
        LoopBackConfig.whereOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.isHeadersWhereSet = function () {
        return (LoopBackConfig.whereOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = '//0.0.0.0:3000';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.whereOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());



/***/ }),

/***/ "./src/app/backend-sdk/models/BaseModels.ts":
/*!**************************************************!*\
  !*** ./src/app/backend-sdk/models/BaseModels.ts ***!
  \**************************************************/
/*! exports provided: AccessToken, SDKToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return AccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());



/***/ }),

/***/ "./src/app/backend-sdk/models/Message.ts":
/*!***********************************************!*\
  !*** ./src/app/backend-sdk/models/Message.ts ***!
  \***********************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* tslint:disable */
var Message = /** @class */ (function () {
    function Message(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Message`.
     */
    Message.getModelName = function () {
        return "Message";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Message for dynamic purposes.
    **/
    Message.factory = function (data) {
        return new Message(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Message.getModelDefinition = function () {
        return {
            name: 'Message',
            plural: 'messages',
            path: 'messages',
            idName: 'id',
            properties: {
                "content": {
                    name: 'content',
                    type: 'string'
                },
                "senderId": {
                    name: 'senderId',
                    type: 'string'
                },
                "senderName": {
                    name: 'senderName',
                    type: 'string'
                },
                "sentOn": {
                    name: 'sentOn',
                    type: 'Date'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return Message;
}());



/***/ }),

/***/ "./src/app/backend-sdk/models/User.ts":
/*!********************************************!*\
  !*** ./src/app/backend-sdk/models/User.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* tslint:disable */
var User = /** @class */ (function () {
    function User(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    User.getModelName = function () {
        return "User";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of User for dynamic purposes.
    **/
    User.factory = function (data) {
        return new User(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    User.getModelDefinition = function () {
        return {
            name: 'User',
            plural: 'Users',
            path: 'Users',
            idName: 'id',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
            }
        };
    };
    return User;
}());



/***/ }),

/***/ "./src/app/backend-sdk/models/index.ts":
/*!*********************************************!*\
  !*** ./src/app/backend-sdk/models/index.ts ***!
  \*********************************************/
/*! exports provided: User, Message, AccessToken, SDKToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/app/backend-sdk/models/User.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message */ "./src/app/backend-sdk/models/Message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_1__["Message"]; });

/* harmony import */ var _BaseModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseModels */ "./src/app/backend-sdk/models/BaseModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_2__["AccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKToken", function() { return _BaseModels__WEBPACK_IMPORTED_MODULE_2__["SDKToken"]; });

/* tslint:disable */





/***/ }),

/***/ "./src/app/backend-sdk/services/core/auth.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/backend-sdk/services/core/auth.service.ts ***!
  \***********************************************************/
/*! exports provided: LoopBackAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return LoopBackAuth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_storage_swaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage/storage.swaps */ "./src/app/backend-sdk/storage/storage.swaps.ts");
/* harmony import */ var _models_BaseModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/BaseModels */ "./src/app/backend-sdk/models/BaseModels.ts");




/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_3__["SDKToken"]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new _models_BaseModels__WEBPACK_IMPORTED_MODULE_3__["SDKToken"]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_2__["InternalStorage"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_storage_swaps__WEBPACK_IMPORTED_MODULE_2__["InternalStorage"]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());



/***/ }),

/***/ "./src/app/backend-sdk/services/core/base.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/backend-sdk/services/core/base.service.ts ***!
  \***********************************************************/
/*! exports provided: BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return BaseLoopBackApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.service */ "./src/app/backend-sdk/services/core/error.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/backend-sdk/services/core/auth.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lb.config */ "./src/app/backend-sdk/lb.config.ts");
/* harmony import */ var _custom_SDKModels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom/SDKModels */ "./src/app/backend-sdk/services/custom/SDKModels.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */








var CustomQueryEncoderHelper = /** @class */ (function () {
    function CustomQueryEncoderHelper() {
    }
    CustomQueryEncoderHelper.prototype.encodeKey = function (k) {
        return encodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.encodeValue = function (v) {
        return encodeURIComponent(v);
    };
    CustomQueryEncoderHelper.prototype.decodeKey = function (k) {
        return decodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.decodeValue = function (v) {
        return decodeURIComponent(v);
    };
    return CustomQueryEncoderHelper;
}());
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, models, auth, errorHandler) {
        this.http = http;
        this.models = models;
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            console.info('SDK: PubSub functionality is disabled, generate SDK using -io enabled');
        }
        else {
            var httpParams_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new CustomQueryEncoderHelper() });
            // Headers to be sent
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            // Authenticate request
            headers = this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var queryString = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (_lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].isHeadersFilteringSet()) {
                    headers = headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    queryString = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            if (urlParams.where) {
                if (_lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].isHeadersWhereSet()) {
                    /**
                    CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
                    **/
                    headers = headers.append('where', JSON.stringify(urlParams.where));
                }
                else {
                    queryString = "?where=" + encodeURIComponent(JSON.stringify(urlParams.where));
                }
                delete urlParams.where;
            }
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            /* enhancement/configure-where-headers
                  this.searchParams.setJSON(urlParams);
                  let request: Request = new Request(
                    new RequestOptions({
                      headers        : headers,
                      method         : method,
                      url            : `${url}${queryString}`,
                      search         : Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                      body           : body ? JSON.stringify(body) : undefined,
                      withCredentials: LoopBackConfig.getRequestOptionsCredentials()
                    })
                  );
            TODO Fix Merge Conflict */
            Object.keys(urlParams).forEach(function (paramKey) {
                var paramValue = urlParams[paramKey];
                paramValue = typeof paramValue === 'object' ? JSON.stringify(paramValue) : paramValue;
                httpParams_1 = httpParams_1.append(paramKey, paramValue);
            });
            var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"](method, "" + url + queryString, body, {
                headers: headers,
                params: httpParams_1,
                withCredentials: _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getRequestOptionsCredentials()
            });
            return this.http.request(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) { return res.body; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (e) { return _this.errorHandler.handleError(e); }));
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers = headers.append('Authorization', _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getAuthPrefix() + this.auth.getAccessTokenId());
        }
        return headers;
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
            _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath(),
                _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_custom_SDKModels__WEBPACK_IMPORTED_MODULE_6__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_auth_service__WEBPACK_IMPORTED_MODULE_4__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _custom_SDKModels__WEBPACK_IMPORTED_MODULE_6__["SDKModels"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["LoopBackAuth"],
            _error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());



/***/ }),

/***/ "./src/app/backend-sdk/services/core/error.service.ts":
/*!************************************************************!*\
  !*** ./src/app/backend-sdk/services/core/error.service.ts ***!
  \************************************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/* tslint:disable */


/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorResponse.error.error || 'Server error');
    };
    ErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorHandler);
    return ErrorHandler;
}());



/***/ }),

/***/ "./src/app/backend-sdk/services/core/index.ts":
/*!****************************************************!*\
  !*** ./src/app/backend-sdk/services/core/index.ts ***!
  \****************************************************/
/*! exports provided: LoopBackAuth, ErrorHandler, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/backend-sdk/services/core/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ "./src/app/backend-sdk/services/core/error.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]; });

/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/backend-sdk/services/core/base.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseLoopBackApi"]; });

/* tslint:disable */





/***/ }),

/***/ "./src/app/backend-sdk/services/custom/Message.ts":
/*!********************************************************!*\
  !*** ./src/app/backend-sdk/services/custom/Message.ts ***!
  \********************************************************/
/*! exports provided: MessageApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageApi", function() { return MessageApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SDKModels */ "./src/app/backend-sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "./src/app/backend-sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lb.config */ "./src/app/backend-sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/backend-sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/error.service */ "./src/app/backend-sdk/services/core/error.service.ts");

/* tslint:disable */







/**
 * Api services for the `Message` model.
 */
var MessageApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageApi, _super);
    function MessageApi(http, models, auth, errorHandler) {
        var _this = _super.call(this, http, models, auth, errorHandler) || this;
        _this.http = http;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Message` object.)
     * </em>
     */
    MessageApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/messages";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Message id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Message` object.)
     * </em>
     */
    MessageApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/messages/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Message`.
     */
    MessageApi.prototype.getModelName = function () {
        return "Message";
    };
    MessageApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandler"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandler"]])
    ], MessageApi);
    return MessageApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/backend-sdk/services/custom/SDKModels.ts":
/*!**********************************************************!*\
  !*** ./src/app/backend-sdk/services/custom/SDKModels.ts ***!
  \**********************************************************/
/*! exports provided: SDKModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return SDKModels; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/app/backend-sdk/models/User.ts");
/* harmony import */ var _models_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Message */ "./src/app/backend-sdk/models/Message.ts");

/* tslint:disable */



var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            User: _models_User__WEBPACK_IMPORTED_MODULE_2__["User"],
            Message: _models_Message__WEBPACK_IMPORTED_MODULE_3__["Message"],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SDKModels);
    return SDKModels;
}());



/***/ }),

/***/ "./src/app/backend-sdk/services/custom/User.ts":
/*!*****************************************************!*\
  !*** ./src/app/backend-sdk/services/custom/User.ts ***!
  \*****************************************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SDKModels */ "./src/app/backend-sdk/services/custom/SDKModels.ts");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "./src/app/backend-sdk/services/core/base.service.ts");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lb.config */ "./src/app/backend-sdk/lb.config.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/backend-sdk/services/core/auth.service.ts");
/* harmony import */ var _core_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/error.service */ "./src/app/backend-sdk/services/core/error.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */








/**
 * Api services for the `User` model.
 */
var UserApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserApi, _super);
    function UserApi(http, models, auth, errorHandler) {
        var _this = _super.call(this, http, models, auth, errorHandler) || this;
        _this.http = http;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UserApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The response body contains properties of the AccessToken created on login.
     * Depending on the value of `include` parameter, the body may contain additional properties:
     *
     *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        }));
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` – `{string}` -
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.User#getCurrent
     * @methodOf sdk.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getPath() + "/" + _lb_config__WEBPACK_IMPORTED_MODULE_5__["LoopBackConfig"].getApiVersion() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.User#login} or
     * {@link sdk.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.User#login}
     *
     * @returns object An AccessToken instance.
     */
    UserApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandler"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _SDKModels__WEBPACK_IMPORTED_MODULE_3__["SDKModels"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["LoopBackAuth"],
            _core_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandler"]])
    ], UserApi);
    return UserApi;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseLoopBackApi"]));



/***/ }),

/***/ "./src/app/backend-sdk/services/custom/index.ts":
/*!******************************************************!*\
  !*** ./src/app/backend-sdk/services/custom/index.ts ***!
  \******************************************************/
/*! exports provided: UserApi, MessageApi, SDKModels, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/app/backend-sdk/services/custom/User.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["UserApi"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message */ "./src/app/backend-sdk/services/custom/Message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageApi", function() { return _Message__WEBPACK_IMPORTED_MODULE_1__["MessageApi"]; });

/* harmony import */ var _SDKModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDKModels */ "./src/app/backend-sdk/services/custom/SDKModels.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _SDKModels__WEBPACK_IMPORTED_MODULE_2__["SDKModels"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.service */ "./src/app/backend-sdk/services/custom/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]; });

/* tslint:disable */






/***/ }),

/***/ "./src/app/backend-sdk/services/custom/logger.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/backend-sdk/services/custom/logger.service.ts ***!
  \***************************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lb_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lb.config */ "./src/app/backend-sdk/lb.config.ts");

/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (_lb_config__WEBPACK_IMPORTED_MODULE_2__["LoopBackConfig"].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/backend-sdk/services/index.ts":
/*!***********************************************!*\
  !*** ./src/app/backend-sdk/services/index.ts ***!
  \***********************************************/
/*! exports provided: LoopBackAuth, ErrorHandler, UserApi, MessageApi, SDKModels, LoggerService, BaseLoopBackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index */ "./src/app/backend-sdk/services/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoopBackAuth", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["LoopBackAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLoopBackApi", function() { return _core_index__WEBPACK_IMPORTED_MODULE_0__["BaseLoopBackApi"]; });

/* harmony import */ var _custom_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom/index */ "./src/app/backend-sdk/services/custom/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["UserApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageApi", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["MessageApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKModels", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["SDKModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _custom_index__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]; });

/* tslint:disable */




/***/ }),

/***/ "./src/app/backend-sdk/storage/cookie.browser.ts":
/*!*******************************************************!*\
  !*** ./src/app/backend-sdk/storage/cookie.browser.ts ***!
  \*******************************************************/
/*! exports provided: CookieBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieBrowser", function() { return CookieBrowser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + encodeURI(value) + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(decodeURI(value));
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CookieBrowser);
    return CookieBrowser;
}());



/***/ }),

/***/ "./src/app/backend-sdk/storage/storage.browser.ts":
/*!********************************************************!*\
  !*** ./src/app/backend-sdk/storage/storage.browser.ts ***!
  \********************************************************/
/*! exports provided: StorageBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageBrowser", function() { return StorageBrowser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StorageBrowser);
    return StorageBrowser;
}());



/***/ }),

/***/ "./src/app/backend-sdk/storage/storage.swaps.ts":
/*!******************************************************!*\
  !*** ./src/app/backend-sdk/storage/storage.swaps.ts ***!
  \******************************************************/
/*! exports provided: BaseStorage, InternalStorage, SDKStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return BaseStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalStorage", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKStorage", function() { return SDKStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));



/***/ }),

/***/ "./src/app/common-ui/index.ts":
/*!************************************!*\
  !*** ./src/app/common-ui/index.ts ***!
  \************************************/
/*! exports provided: commonUiComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonUiComponents", function() { return commonUiComponents; });
/* harmony import */ var _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-title/page-title.component */ "./src/app/common-ui/page-title/page-title.component.ts");
/* harmony import */ var _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-content/page-content.component */ "./src/app/common-ui/page-content/page-content.component.ts");
/* harmony import */ var _msg_bubble_msg_bubble_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msg-bubble/msg-bubble.component */ "./src/app/common-ui/msg-bubble/msg-bubble.component.ts");
/* harmony import */ var _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-footer/page-footer.component */ "./src/app/common-ui/page-footer/page-footer.component.ts");




var commonUiComponents = [
    _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__["PageTitleComponent"],
    _page_content_page_content_component__WEBPACK_IMPORTED_MODULE_1__["PageContentComponent"],
    _msg_bubble_msg_bubble_component__WEBPACK_IMPORTED_MODULE_2__["MsgBubbleComponent"],
    _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_3__["PageFooterComponent"]
];


/***/ }),

/***/ "./src/app/common-ui/msg-bubble/msg-bubble.component.html":
/*!****************************************************************!*\
  !*** ./src/app/common-ui/msg-bubble/msg-bubble.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"single-message__holder\">\n    <div [ngClass]=\"{\n        'single-message__align--right': isMsgFromMe,\n        'single-message__align--left': !isMsgFromMe\n    }\">\n        <div class=\"single-message__content\">{{ messageObj.content }}</div>\n        <div class=\"single-message__sender\">{{ isMsgFromMe? 'You' : messageObj.senderName }}</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/common-ui/msg-bubble/msg-bubble.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/common-ui/msg-bubble/msg-bubble.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-message__holder {\n  font-size: 14px;\n  clear: both; }\n\n.single-message__content {\n  background-color: #86e23c;\n  white-space: pre-wrap;\n  position: relative;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 10px;\n  color: #fff; }\n\n.single-message__align--left {\n  margin-left: 8px;\n  float: left; }\n\n.single-message__align--left .single-message__sender {\n    position: relative;\n    float: left; }\n\n.single-message__align--left .single-message__sender::before {\n      border-color: transparent #86e23c transparent transparent;\n      border-style: solid;\n      position: absolute;\n      border-width: 8px;\n      content: \"\";\n      height: 0px;\n      left: -15px;\n      width: 0px;\n      top: -32px; }\n\n.single-message__align--right {\n  margin-right: 8px;\n  float: right; }\n\n.single-message__align--right .single-message__sender {\n    position: relative;\n    float: right; }\n\n.single-message__align--right .single-message__sender::after {\n      border-color: transparent transparent transparent #86e23c;\n      border-style: solid;\n      position: absolute;\n      border-width: 8px;\n      content: \"\";\n      height: 0px;\n      left: 26px;\n      width: 0px;\n      top: -32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW50ei5kZXYvRGVza3RvcC9wcm9qZWN0cy9fcGVyc29uYWwvbGlnLW1lc3NhZ2luZy1leGFtL2FuZ3VsYXIvc3JjL2FwcC9jb21tb24tdWkvbXNnLWJ1YmJsZS9tc2ctYnViYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHlCQUFtQztFQUNuQyxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRmQ7SUFLTyxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQU5sQjtNQVNXLHlEQUFtRTtNQUNuRSxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsV0FBVztNQUNYLFdBQVc7TUFDWCxVQUFVO01BQ1YsVUFBVSxFQUFBOztBQUt0QjtFQUNJLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBRmY7SUFLTyxrQkFBa0I7SUFDbEIsWUFBWSxFQUFBOztBQU5uQjtNQVNXLHlEQUFtRTtNQUNuRSxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsV0FBVztNQUNYLFVBQVU7TUFDVixVQUFVO01BQ1YsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLXVpL21zZy1idWJibGUvbXNnLWJ1YmJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtbWVzc2FnZSB7XG5cbiAgICAmX19ob2xkZXIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LCAyMjYsIDYwKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJl9fYWxpZ24tLWxlZnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgICAuc2luZ2xlLW1lc3NhZ2VfX3NlbmRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICBcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCByZ2IoMTM0LCAyMjYsIDYwKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2FsaWduLS1yaWdodCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAgICAgLnNpbmdsZS1tZXNzYWdlX19zZW5kZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiKDEzNCwgMjI2LCA2MCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/common-ui/msg-bubble/msg-bubble.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common-ui/msg-bubble/msg-bubble.component.ts ***!
  \**************************************************************/
/*! exports provided: MsgBubbleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgBubbleComponent", function() { return MsgBubbleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MsgBubbleComponent = /** @class */ (function () {
    function MsgBubbleComponent() {
    }
    MsgBubbleComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MsgBubbleComponent.prototype, "messageObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MsgBubbleComponent.prototype, "isMsgFromMe", void 0);
    MsgBubbleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-msg-bubble',
            template: __webpack_require__(/*! ./msg-bubble.component.html */ "./src/app/common-ui/msg-bubble/msg-bubble.component.html"),
            styles: [__webpack_require__(/*! ./msg-bubble.component.scss */ "./src/app/common-ui/msg-bubble/msg-bubble.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MsgBubbleComponent);
    return MsgBubbleComponent;
}());



/***/ }),

/***/ "./src/app/common-ui/msg-compose/msg-compose.component.html":
/*!******************************************************************!*\
  !*** ./src/app/common-ui/msg-compose/msg-compose.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-compose__holder\" #computeHeight>\n  <form (ngSubmit)=\"sendMessage()\" class=\"message-compose__form\">\n      <input type=\"text\" name=\"message\" [(ngModel)]=\"newMessage\" placeholder=\"Start a new message\" class=\"form__input message-compose__input\">\n      <button class=\"form__button form__button--dark form__button--pull-right message-compose__button\">send</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/common-ui/msg-compose/msg-compose.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/common-ui/msg-compose/msg-compose.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-compose__form {\n  display: flex;\n  padding: 10px; }\n\n.message-compose__input {\n  flex: 1;\n  margin: 0;\n  margin-right: 10px; }\n\n.message-compose__button {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW50ei5kZXYvRGVza3RvcC9wcm9qZWN0cy9fcGVyc29uYWwvbGlnLW1lc3NhZ2luZy1leGFtL2FuZ3VsYXIvc3JjL2FwcC9jb21tb24tdWkvbXNnLWNvbXBvc2UvbXNnLWNvbXBvc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxhQUFhO0VBQ2IsYUFBYSxFQUFBOztBQUdqQjtFQUNJLE9BQU87RUFDUCxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLXVpL21zZy1jb21wb3NlL21zZy1jb21wb3NlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtY29tcG9zZSB7XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAmX19pbnB1dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/common-ui/msg-compose/msg-compose.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/common-ui/msg-compose/msg-compose.component.ts ***!
  \****************************************************************/
/*! exports provided: MsgComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgComposeComponent", function() { return MsgComposeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MsgComposeComponent = /** @class */ (function () {
    function MsgComposeComponent() {
        this.newMsgEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.elemHeightReporter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MsgComposeComponent.prototype.ngOnInit = function () {
    };
    MsgComposeComponent.prototype.ngAfterViewInit = function () {
        var elem = this.computeHeight.nativeElement;
        this.elemHeightReporter.emit(elem.offsetHeight);
    };
    MsgComposeComponent.prototype.sendMessage = function () {
        if (!this.newMessage)
            return;
        this.newMsgEvent.emit(this.newMessage);
        this.newMessage = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MsgComposeComponent.prototype, "newMsgEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MsgComposeComponent.prototype, "elemHeightReporter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('computeHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MsgComposeComponent.prototype, "computeHeight", void 0);
    MsgComposeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-msg-compose',
            template: __webpack_require__(/*! ./msg-compose.component.html */ "./src/app/common-ui/msg-compose/msg-compose.component.html"),
            styles: [__webpack_require__(/*! ./msg-compose.component.scss */ "./src/app/common-ui/msg-compose/msg-compose.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MsgComposeComponent);
    return MsgComposeComponent;
}());



/***/ }),

/***/ "./src/app/common-ui/page-content/page-content.component.html":
/*!********************************************************************!*\
  !*** ./src/app/common-ui/page-content/page-content.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content__holder\">\n    <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/common-ui/page-content/page-content.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/common-ui/page-content/page-content.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi11aS9wYWdlLWNvbnRlbnQvcGFnZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common-ui/page-content/page-content.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/common-ui/page-content/page-content.component.ts ***!
  \******************************************************************/
/*! exports provided: PageContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContentComponent", function() { return PageContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageContentComponent = /** @class */ (function () {
    function PageContentComponent() {
    }
    PageContentComponent.prototype.ngOnInit = function () {
    };
    PageContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-content',
            template: __webpack_require__(/*! ./page-content.component.html */ "./src/app/common-ui/page-content/page-content.component.html"),
            styles: [__webpack_require__(/*! ./page-content.component.scss */ "./src/app/common-ui/page-content/page-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageContentComponent);
    return PageContentComponent;
}());



/***/ }),

/***/ "./src/app/common-ui/page-footer/page-footer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/common-ui/page-footer/page-footer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'general__position--fixedBottom': fixedAtBottom}\">\n    <div class=\"page-footer__holder\">\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/common-ui/page-footer/page-footer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/common-ui/page-footer/page-footer.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-footer__holder {\n  border-top: 1px solid #ccd6dd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW50ei5kZXYvRGVza3RvcC9wcm9qZWN0cy9fcGVyc29uYWwvbGlnLW1lc3NhZ2luZy1leGFtL2FuZ3VsYXIvc3JjL2FwcC9jb21tb24tdWkvcGFnZS1mb290ZXIvcGFnZS1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSw2QkFBd0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi11aS9wYWdlLWZvb3Rlci9wYWdlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWZvb3RlciB7XG5cbiAgICAmX19ob2xkZXIge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIwNCwgMjE0LCAyMjEpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/common-ui/page-footer/page-footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/common-ui/page-footer/page-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: PageFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function() { return PageFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageFooterComponent = /** @class */ (function () {
    function PageFooterComponent() {
    }
    PageFooterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageFooterComponent.prototype, "fixedAtBottom", void 0);
    PageFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-footer',
            template: __webpack_require__(/*! ./page-footer.component.html */ "./src/app/common-ui/page-footer/page-footer.component.html"),
            styles: [__webpack_require__(/*! ./page-footer.component.scss */ "./src/app/common-ui/page-footer/page-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageFooterComponent);
    return PageFooterComponent;
}());



/***/ }),

/***/ "./src/app/common-ui/page-title/page-title.component.html":
/*!****************************************************************!*\
  !*** ./src/app/common-ui/page-title/page-title.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header__holder\" #headerHolder>\n    <div class=\"page-header__title\">Chat app</div>\n    <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/common-ui/page-title/page-title.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/common-ui/page-title/page-title.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header__holder {\n  border-bottom: 1px solid #ccd6dd;\n  padding: 15px; }\n\n.page-header__title {\n  text-align: center;\n  font-weight: bold;\n  color: #515151;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW50ei5kZXYvRGVza3RvcC9wcm9qZWN0cy9fcGVyc29uYWwvbGlnLW1lc3NhZ2luZy1leGFtL2FuZ3VsYXIvc3JjL2FwcC9jb21tb24tdWkvcGFnZS10aXRsZS9wYWdlLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZ0NBQTJDO0VBQzNDLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tdWkvcGFnZS10aXRsZS9wYWdlLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIHtcblxuICAgICZfX2hvbGRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjA0LCAyMTQsIDIyMSk7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzUxNTE1MTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/common-ui/page-title/page-title.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common-ui/page-title/page-title.component.ts ***!
  \**************************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent() {
        this.headerHeightReporter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PageTitleComponent.prototype.ngOnInit = function () {
    };
    PageTitleComponent.prototype.ngAfterViewInit = function () {
        var elem = this.headerHolder.nativeElement;
        this.headerHeightReporter.emit(elem.offsetHeight);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageTitleComponent.prototype, "headerHeightReporter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerHolder'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageTitleComponent.prototype, "headerHolder", void 0);
    PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-title',
            template: __webpack_require__(/*! ./page-title.component.html */ "./src/app/common-ui/page-title/page-title.component.html"),
            styles: [__webpack_require__(/*! ./page-title.component.scss */ "./src/app/common-ui/page-title/page-title.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageTitleComponent);
    return PageTitleComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-title></app-page-title>\n\n<app-page-content>\n  <div class=\"general__padding--10\">\n      <form (ngSubmit)=\"submitForm()\">\n          <fieldset>\n            <input class=\"form__input\" [(ngModel)]=\"credentials.username\" name=\"username\" type=\"text\" placeholder=\"User name\" (focus)=\"changeFormError()\">\n            <input class=\"form__input\" [(ngModel)]=\"credentials.password\" name=\"password\" type=\"password\" placeholder=\"password\" (focus)=\"changeFormError()\">\n            <div [ngClass]=\"{form__errors: submitError}\">{{ submitError }}</div>\n            <button class=\"form__button\">Sign up / Log in</button>\n          </fieldset>\n          <p class=\"form__extra-text\">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. Others will be able to find you by searching for your email address or phone number when provided.</p>\n        </form>\n  </div>\n</app-page-content>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_backend_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/backend-sdk */ "./src/app/backend-sdk/index.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userApi, router) {
        this.userApi = userApi;
        this.router = router;
        this.credentials = {
            username: '',
            password: ''
        };
        this.submitError = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var isAuthenticated = this.userApi.isAuthenticated();
        if (isAuthenticated)
            this.router.navigate(['messaging']);
    };
    LoginComponent.prototype.changeFormError = function (msg) {
        if (msg === void 0) { msg = ''; }
        this.submitError = msg;
    };
    LoginComponent.prototype.validateForm = function () {
        this.changeFormError();
        var valid = this.credentials.username && this.credentials.password;
        if (!valid)
            this.submitError = "* User name and password fields are required";
        return valid;
    };
    LoginComponent.prototype.submitForm = function () {
        if (!this.validateForm())
            return;
        var test = this.userApi.login(this.credentials).subscribe(this.loginSuccess.bind(this), this.loginError.bind(this));
    };
    LoginComponent.prototype.loginSuccess = function (token) {
        this.router.navigate(['messaging']);
    };
    LoginComponent.prototype.loginError = function (error) {
        switch (error.code) {
            case "LOGIN_FAILED":
                this.signUp();
                break;
            default:
                this.changeFormError(error.message);
        }
    };
    LoginComponent.prototype.signUp = function () {
        var credentials = Object.assign({}, this.credentials);
        credentials['email'] = credentials.username + '@' + credentials.username + '.com'; // Loopback framework requires email
        this.userApi.create(credentials).subscribe(this.submitForm.bind(this), this.signUpError.bind(this));
    };
    LoginComponent.prototype.signUpError = function (error) {
        var userExists = error.message.includes("User already exists");
        if (userExists)
            this.changeFormError("* Incorrect User name or password");
        else
            this.changeFormError(error.message);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_backend_sdk__WEBPACK_IMPORTED_MODULE_3__["UserApi"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/messaging/messaging.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/messaging/messaging.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-title (headerHeightReporter)=\"receivedHeaderHeightHandler($event)\">\n  <button class=\"form__button form__button--dark form__button--pull-right\" (click)=\"logOut()\">Log out</button>\n</app-page-title>\n\n<app-page-content>\n  <div class=\"messages__holder general__padding--5\" [style.height]=\"computeRemainingHeight()+'px'\" #autoScrollToBottom (scroll)=\"onScroll()\">\n    <div *ngFor=\"let messageObj of messagesObj\">\n      <app-msg-bubble [messageObj]=\"messageObj\" [isMsgFromMe]=\"isMsgFromMe(messageObj)\"></app-msg-bubble>\n    </div>\n  </div>\n</app-page-content>\n\n<app-page-footer [fixedAtBottom]=\"true\">\n  <app-msg-compose (newMsgEvent)=\"newMsgEventHandler($event)\" (elemHeightReporter)=\"receivedFooterHeightHandler($event)\"></app-msg-compose>\n</app-page-footer>"

/***/ }),

/***/ "./src/app/pages/messaging/messaging.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/messaging/messaging.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messages__holder {\n  scroll-behavior: smooth;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW50ei5kZXYvRGVza3RvcC9wcm9qZWN0cy9fcGVyc29uYWwvbGlnLW1lc3NhZ2luZy1leGFtL2FuZ3VsYXIvc3JjL2FwcC9wYWdlcy9tZXNzYWdpbmcvbWVzc2FnaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZXNzYWdpbmcvbWVzc2FnaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2VzIHtcblxuICAgICZfX2hvbGRlciB7XG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/messaging/messaging.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/messaging/messaging.component.ts ***!
  \********************************************************/
/*! exports provided: MessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingComponent", function() { return MessagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_backend_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/backend-sdk */ "./src/app/backend-sdk/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MessagingComponent = /** @class */ (function () {
    function MessagingComponent(userApi, messageApi, router) {
        this.userApi = userApi;
        this.messageApi = messageApi;
        this.router = router;
        this.innerHeight = 0;
        this.bodyMargins = 10;
        this.headerHolderHeight = 0;
        this.footerHolderHeight = 0;
        this.disableScrollDown = false;
    }
    MessagingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onResize({});
        var isAuthenticated = this.userApi.isAuthenticated();
        if (!isAuthenticated)
            this.router.navigate(['login']);
        this.loggedInUserId = this.userApi.getCurrentId();
        this.userApi.getCurrent().subscribe(function (userInfo) { return _this.loggedInUserObjAsync = userInfo; });
        setInterval(this.getMessages.bind(this), 1000); // TODO: cancel Interval
        this.getMessages();
    };
    MessagingComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    MessagingComponent.prototype.onResize = function (event) {
        this.innerHeight = window.innerHeight;
    };
    MessagingComponent.prototype.receivedHeaderHeightHandler = function (height) {
        this.headerHolderHeight = height;
    };
    MessagingComponent.prototype.receivedFooterHeightHandler = function (height) {
        this.footerHolderHeight = height;
    };
    MessagingComponent.prototype.computeRemainingHeight = function () {
        return this.innerHeight - this.headerHolderHeight - this.footerHolderHeight - this.bodyMargins;
    };
    MessagingComponent.prototype.onScroll = function () {
        var elem = this.autoScrollToBottom.nativeElement;
        var atBottom = elem.scrollHeight - elem.scrollTop === elem.clientHeight;
        this.disableScrollDown = !atBottom;
    };
    MessagingComponent.prototype.scrollToBottom = function () {
        if (this.disableScrollDown)
            return;
        try {
            var elem = this.autoScrollToBottom.nativeElement;
            elem.scrollTop = elem.scrollHeight;
        }
        catch (err) { }
    };
    MessagingComponent.prototype.logOut = function () {
        this.userApi.logout();
        this.ngOnInit();
    };
    MessagingComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageApi.find().subscribe(function (messages) { return _this.messagesObj = messages; });
        this.scrollToBottom();
    };
    MessagingComponent.prototype.isMsgFromMe = function (messageObj) {
        return messageObj.senderId === this.loggedInUserId;
    };
    MessagingComponent.prototype.newMsgEventHandler = function (msgContent) {
        this.messageApi.create({
            "content": msgContent,
            "senderId": this.loggedInUserId,
            "senderName": this.loggedInUserObjAsync.username,
            "sentOn": new Date().toISOString(),
            "id": null
        }).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('autoScrollToBottom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessagingComponent.prototype, "autoScrollToBottom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MessagingComponent.prototype, "onResize", null);
    MessagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-messaging',
            template: __webpack_require__(/*! ./messaging.component.html */ "./src/app/pages/messaging/messaging.component.html"),
            styles: [__webpack_require__(/*! ./messaging.component.scss */ "./src/app/pages/messaging/messaging.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_backend_sdk__WEBPACK_IMPORTED_MODULE_1__["UserApi"], src_app_backend_sdk__WEBPACK_IMPORTED_MODULE_1__["MessageApi"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MessagingComponent);
    return MessagingComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-title></app-page-title>\n\n<app-page-content>\n    <h3>Page Not Found | 404</h3>\n</app-page-content>"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW50ei5kZXYvRGVza3RvcC9wcm9qZWN0cy9fcGVyc29uYWwvbGlnLW1lc3NhZ2luZy1leGFtL2FuZ3VsYXIvc3JjL2FwcC9wYWdlcy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFLLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7IHRleHQtYWxpZ246IGNlbnRlcjsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mantz.dev/Desktop/projects/_personal/lig-messaging-exam/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map