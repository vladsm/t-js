(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tenogy", [], factory);
	else if(typeof exports === 'object')
		exports["tenogy"] = factory();
	else
		root["tenogy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_3__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_8__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_9__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_10__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_11__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_12__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_13__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_14__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_15__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_16__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_17__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_18__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_19__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_0__ = (function (require, exports) {
	    "use strict";
	    var Utils = (function () {
	        function Utils() {
	        }
	        Utils.uuid = function () {
	            var i;
	            var random;
	            var uuid = "";
	            for (i = 0; i < 32; i++) {
	                random = Math.random() * 16 | 0;
	                if (i === 8 || i === 12 || i === 16 || i === 20) {
	                    uuid += "-";
	                }
	                uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
	                    .toString(16);
	            }
	            return uuid;
	        };
	        Utils.pluralize = function (count, word) {
	            return count === 1 ? word : word + "s";
	        };
	        Utils.store = function (namespace, data) {
	            if (data) {
	                return localStorage.setItem(namespace, JSON.stringify(data));
	            }
	            var store = localStorage.getItem(namespace);
	            return (store && JSON.parse(store)) || [];
	        };
	        Utils.extend = function () {
	            var objs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                objs[_i - 0] = arguments[_i];
	            }
	            var newObj = {};
	            for (var i = 0; i < objs.length; i++) {
	                var obj = objs[i];
	                for (var key in obj) {
	                    if (obj.hasOwnProperty(key)) {
	                        newObj[key] = obj[key];
	                    }
	                }
	            }
	            return newObj;
	        };
	        return Utils;
	    }());
	    exports.Utils = Utils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_1__ = (function (require, exports) {
	    "use strict";
	    var AjaxService = (function () {
	        function AjaxService(config) {
	            this.config = config;
	            this.loading = false;
	        }
	        AjaxService.prototype.execute = function () {
	            this.loading = true;
	            var options = {
	                url: this.config.url,
	                type: "POST",
	                data: this.config.data,
	                contentType: null,
	                dataType: null,
	                headers: { RequestVerificationToken: null }
	            };
	            if (this.config.json) {
	                options.contentType = "application/json";
	                options.data = JSON.stringify(this.config.data);
	                options.dataType = "json";
	            }
	            this.jqxhr = $.ajax(options).done($.proxy(this.success, this)).fail($.proxy(this.failure, this));
	        };
	        AjaxService.prototype.runCallback = function (data, textStatus, jqxhr) {
	            if (this.config.callback) {
	                var scope = this.config.scope || this;
	                this.config.callback.apply(scope, arguments);
	            }
	            this.loading = false;
	        };
	        AjaxService.prototype.success = function (data, textStatus, jqxhr) {
	            if (data.redirect && !this.config.ignoreRedirect) {
	                window.location.replace(data.redirect);
	                return;
	            }
	            this.runCallback(data, textStatus, jqxhr);
	        };
	        AjaxService.prototype.failure = function (jqxhr, textStatus) {
	            this.runCallback(null, textStatus, jqxhr);
	        };
	        AjaxService.prototype.abort = function () {
	            if (!this.loading)
	                return;
	            try {
	                this.jqxhr.abort();
	            }
	            catch (e) { }
	        };
	        return AjaxService;
	    }());
	    exports.AjaxService = AjaxService;
	    function ajax(config) {
	        var service = new AjaxService(config);
	        service.execute();
	        return service;
	    }
	    exports.ajax = ajax;
	    var AjaxServices = (function () {
	        function AjaxServices(serviceEndpoints) {
	            var target = this;
	            for (var endpointName in serviceEndpoints) {
	                target[endpointName] = createServiceMethod(serviceEndpoints[endpointName]);
	            }
	        }
	        return AjaxServices;
	    }());
	    exports.AjaxServices = AjaxServices;
	    function createServiceMethod(endpoint) {
	        return function (parameters, callback, context) {
	            if (context != null) {
	                callback = callback.bind(context);
	            }
	            return ajax({ url: endpoint, json: true, data: parameters, callback: callback });
	        };
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_2__ = (function (require, exports) {
	    "use strict";
	    function dateFromModel(dateModel) {
	        return dateModel ? new Date(dateModel.Year, dateModel.Month - 1, dateModel.Day) : null;
	    }
	    exports.dateFromModel = dateFromModel;
	    function dateTimeFromModel(dateModel) {
	        return dateModel ? new Date(dateModel.Year, dateModel.Month - 1, dateModel.Day, dateModel.Hour, dateModel.Minute, dateModel.Second, dateModel.Millisecond) : null;
	    }
	    exports.dateTimeFromModel = dateTimeFromModel;
	    function dateToModel(date) {
	        if (!date)
	            return null;
	        if (date.toDate) {
	            date = date.toDate();
	        }
	        return {
	            Year: date.getFullYear(),
	            Month: date.getMonth() + 1,
	            Day: date.getDate()
	        };
	    }
	    exports.dateToModel = dateToModel;
	    function dateTimeToModel(date) {
	        if (!date)
	            return null;
	        if (date.toDate) {
	            date = date.toDate();
	        }
	        return {
	            Year: date.getFullYear(),
	            Month: date.getMonth() + 1,
	            Day: date.getDate(),
	            Hour: date.getHours(),
	            Minute: date.getMinutes(),
	            Second: date.getSeconds(),
	            Millisecond: date.getMilliseconds()
	        };
	    }
	    exports.dateTimeToModel = dateTimeToModel;
	    function formatDate(date) {
	        if (!date)
	            return "";
	        if (date.toDate) {
	            date = date.toDate();
	        }
	        return date.toLocaleDateString();
	    }
	    exports.formatDate = formatDate;
	    ;
	    function formatDateTime(date) {
	        if (!date)
	            return "";
	        if (date.toDate) {
	            date = date.toDate();
	        }
	        return formatDate(date) + ", " + padZeros(date.getHours(), 2) + ":" + padZeros(date.getMinutes(), 2);
	    }
	    exports.formatDateTime = formatDateTime;
	    ;
	    function padZeros(num, size) {
	        var s = "00" + num;
	        var numStr = num + "";
	        return numStr.length >= size ? numStr : s.substr(s.length - size);
	    }
	    exports.padZeros = padZeros;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_3__ = (function (require, exports) {
	    "use strict";
	    var markTemplate = "$ko$computed";
	    function computed(target, propertyKey, descriptor) {
	        var method = target[propertyKey];
	        var mark = { name: propertyKey, read: method };
	        method[markTemplate] = mark;
	        return method;
	    }
	    exports.computed = computed;
	    function registerComputed(target) {
	        var original = target;
	        var constructor = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            registerComputedMethods(this);
	            return original.apply(this, args);
	        };
	        constructor.prototype = original.prototype;
	        return constructor;
	    }
	    exports.registerComputed = registerComputed;
	    function registerComputedMethods(target) {
	        var dependentObservables = {};
	        for (var memberName in target) {
	            var member = target[memberName];
	            if (!(member instanceof Function))
	                continue;
	            var computedMember = member[markTemplate];
	            if (computedMember == undefined)
	                continue;
	            if (computedMember.name == null)
	                computedMember.name = memberName;
	            var registeredDependentObservable = dependentObservables[computedMember.name];
	            if (registeredDependentObservable == null) {
	                dependentObservables[computedMember.name] = computedMember;
	            }
	            else {
	                if (computedMember.read != null) {
	                    registeredDependentObservable.read = computedMember.read;
	                }
	                if (computedMember.write != null) {
	                    registeredDependentObservable.write = computedMember.write;
	                }
	            }
	        }
	        var orderedDependentObservables = [];
	        for (var name in dependentObservables) {
	            orderedDependentObservables.push(dependentObservables[name]);
	        }
	        orderedDependentObservables.sort(function (x, y) { return (x.orderIndex - y.orderIndex); });
	        for (var i = 0; i < orderedDependentObservables.length; ++i) {
	            var dependentObservable = orderedDependentObservables[i];
	            if (dependentObservable.read == null) {
	                throw "Computed observable '" + dependentObservable.name + "' is incorrectly defined.";
	            }
	            target[dependentObservable.name] = ko.pureComputed(dependentObservable.read, target);
	            if (dependentObservable.extenders) {
	                target[dependentObservable.name].extend(dependentObservable.extenders);
	            }
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_4__ = (function (require, exports) {
	    "use strict";
	    var BaseBinding = (function () {
	        function BaseBinding() {
	        }
	        BaseBinding.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	        };
	        BaseBinding.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	        };
	        BaseBinding.prototype.preprocess = function (value, name, addBindingCallback) {
	            return value;
	        };
	        BaseBinding.prototype.unwrap = function (value) {
	            if (value == null)
	                return null;
	            return ko.utils.unwrapObservable(value);
	        };
	        BaseBinding.register = function (bindingName, bindingType, supportsVirtualElements) {
	            ko.bindingHandlers[bindingName] = new bindingType();
	            if (supportsVirtualElements) {
	                ko.virtualElements.allowedBindings[bindingName] = true;
	            }
	        };
	        BaseBinding.registerStateful = function (bindingName, bindingType, supportsVirtualElements) {
	            var typeInstance = new bindingType();
	            ko.bindingHandlers[bindingName] = {
	                init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	                    return typeInstance.init(element, valueAccessor, viewModel, bindingContext);
	                },
	                update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	                    return typeInstance.update(element, valueAccessor, viewModel, bindingContext);
	                },
	                preprocess: function (value, name, addBindingCallback) {
	                    return typeInstance.preprocess(value, name, addBindingCallback);
	                }
	            };
	            if (supportsVirtualElements) {
	                ko.virtualElements.allowedBindings[bindingName] = true;
	            }
	        };
	        return BaseBinding;
	    }());
	    exports.BaseBinding = BaseBinding;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_5__ = (function (require, exports, baseBinding_1) {
	    "use strict";
	    var KnockoutBinding = (function (_super) {
	        __extends(KnockoutBinding, _super);
	        function KnockoutBinding(bindingHandlerName) {
	            var _this = _super.call(this) || this;
	            _this.bindingHandler = ko.bindingHandlers[bindingHandlerName];
	            return _this;
	        }
	        KnockoutBinding.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            if (this.bindingHandler.init) {
	                this.bindingHandler.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
	            }
	        };
	        KnockoutBinding.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            if (this.bindingHandler.update) {
	                this.bindingHandler.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
	            }
	        };
	        return KnockoutBinding;
	    }(baseBinding_1.BaseBinding));
	    exports.KnockoutBinding = KnockoutBinding;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_6__ = (function (require, exports, baseBinding_2) {
	    "use strict";
	    var AliasBinding = (function (_super) {
	        __extends(AliasBinding, _super);
	        function AliasBinding() {
	            return _super.apply(this, arguments) || this;
	        }
	        AliasBinding.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            var aliases = valueAccessor();
	            if (!$.isArray(aliases)) {
	                aliases = [aliases];
	            }
	            for (var _i = 0, aliases_1 = aliases; _i < aliases_1.length; _i++) {
	                var alias = aliases_1[_i];
	                if (alias.name == null || alias.name.length === 0) {
	                    throw "Alias name is not specified.";
	                }
	                if (alias.data == null) {
	                    throw "Data is not specified for the '" + alias.name + "' alias.";
	                }
	                bindingContext[alias.name] = alias.data;
	            }
	        };
	        return AliasBinding;
	    }(baseBinding_2.BaseBinding));
	    exports.AliasBinding = AliasBinding;
	    baseBinding_2.BaseBinding.register("alias", AliasBinding, true);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_7__ = (function (require, exports, baseBinding_3) {
	    "use strict";
	    var EnterBinding = (function (_super) {
	        __extends(EnterBinding, _super);
	        function EnterBinding() {
	            return _super.apply(this, arguments) || this;
	        }
	        EnterBinding.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            var _this = this;
	            $(element).keypress(function (event) {
	                var code = event.keyCode || event.which;
	                if (code != 13)
	                    return;
	                var handler = _super.prototype.unwrap.call(_this, valueAccessor());
	                $(element).blur();
	                handler.call(viewModel);
	                event.preventDefault();
	            });
	        };
	        return EnterBinding;
	    }(baseBinding_3.BaseBinding));
	    exports.EnterBinding = EnterBinding;
	    baseBinding_3.BaseBinding.register("enter", EnterBinding, true);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_8__ = (function (require, exports, baseBinding_4) {
	    "use strict";
	    var AlertPanelBinding = (function (_super) {
	        __extends(AlertPanelBinding, _super);
	        function AlertPanelBinding() {
	            return _super.apply(this, arguments) || this;
	        }
	        AlertPanelBinding.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            element.innerHTML = "<div class=\"alert\" data-bind=\"visible: shown, css: typeClass()\">" +
	                "<button type=\"button\" class=\"close\" data-bind=\"click: hide\"><span>&times;</span></button>" +
	                "<strong data-bind=\"text: caption\"></strong> " +
	                "<span data-bind=\"text: message\"></span>" +
	                "</div>";
	            var alertMessage = _super.prototype.unwrap.call(this, valueAccessor());
	            ko.applyBindingsToDescendants(alertMessage, element);
	            return { controlsDescendantBindings: true };
	        };
	        return AlertPanelBinding;
	    }(baseBinding_4.BaseBinding));
	    exports.AlertPanelBinding = AlertPanelBinding;
	    baseBinding_4.BaseBinding.register("alertPanel", AlertPanelBinding);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_0__], __WEBPACK_LOCAL_MODULE_9__ = (function (require, exports, baseBinding_5, utils_1) {
	    "use strict";
	    var SpinBinding = (function (_super) {
	        __extends(SpinBinding, _super);
	        function SpinBinding() {
	            return _super.apply(this, arguments) || this;
	        }
	        SpinBinding.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            var show = _super.prototype.unwrap.call(this, valueAccessor());
	            var spinOptions = _super.prototype.unwrap.call(this, allBindingsAccessor ? allBindingsAccessor.get("spinOptions") : {}) || {};
	            var $el = element;
	            if (show) {
	                setTimeout(function () {
	                    return showSpinner($el, spinOptions);
	                }, 1);
	                return;
	            }
	            var spin = ko.utils.domData.get(element, "spin");
	            if (spin) {
	                spin.stop();
	            }
	        };
	        return SpinBinding;
	    }(baseBinding_5.BaseBinding));
	    exports.SpinBinding = SpinBinding;
	    function showSpinner(element, options) {
	        var spinOptions = {
	            lines: 13,
	            length: 28,
	            width: 14,
	            radius: 42,
	            scale: 0.25,
	            corners: 1,
	            color: '#000',
	            opacity: 0.25,
	            rotate: 0,
	            direction: 1,
	            speed: 1,
	            trail: 60,
	            fps: 20,
	            zIndex: 2e9,
	            className: 'spinner',
	            top: '0',
	            left: '50%',
	            shadow: false,
	            hwaccel: false,
	            position: 'relative'
	        };
	        spinOptions = utils_1.Utils.extend(spinOptions, options);
	        var spin = ko.utils.domData.get(element, "spin");
	        if (!spin) {
	            spin = new Spinner(spinOptions);
	            ko.utils.domData.set(element, "spin", spin);
	        }
	        spin.spin(element);
	    }
	    baseBinding_5.BaseBinding.register("spin", SpinBinding);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_10__ = (function (require, exports, baseBinding_6) {
	    "use strict";
	    var SummernoteBinding = (function (_super) {
	        __extends(SummernoteBinding, _super);
	        function SummernoteBinding() {
	            return _super.apply(this, arguments) || this;
	        }
	        SummernoteBinding.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            var value = valueAccessor();
	            var missingPhrases = ["<p><br></p>", "<p>&nbsp;</p>"];
	            var options = {
	                height: _super.prototype.unwrap.call(this, allBindingsAccessor.get("height")) || 100,
	                callbacks: {
	                    onChange: function (content) {
	                        ko.utils.domData.set(element, "_updating", true);
	                        value(missingPhrases.indexOf(content) > -1 ? null : content);
	                        $(element).val(content);
	                        ko.utils.domData.set(element, "_updating", false);
	                    }
	                }
	            };
	            $(element).summernote(options);
	        };
	        SummernoteBinding.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            var value = _super.prototype.unwrap.call(this, valueAccessor());
	            var updating = ko.utils.domData.get(element, "_updating");
	            if (value && !updating) {
	                $(element).summernote("code", value);
	            }
	        };
	        return SummernoteBinding;
	    }(baseBinding_6.BaseBinding));
	    exports.SummernoteBinding = SummernoteBinding;
	    baseBinding_6.BaseBinding.register("summernote", SummernoteBinding);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_11__ = (function (require, exports, baseBinding_7) {
	    "use strict";
	    var FileUploadBinding = (function (_super) {
	        __extends(FileUploadBinding, _super);
	        function FileUploadBinding() {
	            return _super.apply(this, arguments) || this;
	        }
	        FileUploadBinding.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            var callbackDone = valueAccessor();
	            var allBindings = allBindingsAccessor();
	            var uploading = allBindings.uploading;
	            var options = {};
	            options.url = allBindings.url || "ru";
	            options.maxFileSize = allBindings.maxFileSize || 5;
	            options.acceptFileTypes = allBindings.acceptFileTypes || "";
	            options.done = function (e, data) {
	                if (uploading) {
	                    uploading(false);
	                }
	                callbackDone(data);
	            },
	                $(element).fileupload(options).on("change", function () {
	                    if (uploading) {
	                        uploading(true);
	                    }
	                });
	        };
	        return FileUploadBinding;
	    }(baseBinding_7.BaseBinding));
	    exports.FileUploadBinding = FileUploadBinding;
	    baseBinding_7.BaseBinding.register("fileupload", FileUploadBinding);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_5__], __WEBPACK_LOCAL_MODULE_12__ = (function (require, exports, knockoutBinding_1) {
	    "use strict";
	    var HtmlStatefulBindings = (function (_super) {
	        __extends(HtmlStatefulBindings, _super);
	        function HtmlStatefulBindings() {
	            return _super.call(this, "html") || this;
	        }
	        return HtmlStatefulBindings;
	    }(knockoutBinding_1.KnockoutBinding));
	    exports.HtmlStatefulBindings = HtmlStatefulBindings;
	    knockoutBinding_1.KnockoutBinding.registerStateful("htmlStateful", HtmlStatefulBindings);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_13__ = (function (require, exports) {
	    "use strict";
	    var AlertMessage = (function () {
	        function AlertMessage(message, caption, shown, type) {
	            if (message === void 0) { message = ""; }
	            if (caption === void 0) { caption = ""; }
	            if (shown === void 0) { shown = false; }
	            if (type === void 0) { type = ""; }
	            this.type = ko.observable(message);
	            this.shown = ko.observable(shown);
	            this.caption = ko.observable(caption);
	            this.message = ko.observable(type);
	        }
	        AlertMessage.prototype.typeClass = function () {
	            return "alert-" + this.type();
	        };
	        AlertMessage.prototype.hide = function () {
	            this.shown(false);
	        };
	        AlertMessage.prototype.show = function (message, caption, type) {
	            if (!message && !caption)
	                return;
	            this.message(message);
	            this.caption(caption);
	            this.type(type);
	            this.shown(true);
	        };
	        AlertMessage.prototype.showError = function (message, caption) {
	            this.show(message, caption, "danger");
	        };
	        return AlertMessage;
	    }());
	    exports.AlertMessage = AlertMessage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_3__], __WEBPACK_LOCAL_MODULE_14__ = (function (require, exports, ko_utils_1) {
	    "use strict";
	    var LoadingProgress = (function () {
	        function LoadingProgress(options) {
	            var _this = this;
	            this.options = options;
	            this.loading = ko.observable(false);
	            this.options = this.options || { delay: 800, noWaitMessage: null, waitMessage: null };
	            var delay = this.options.delay;
	            if (delay == null)
	                delay = 800;
	            this.loadingDelayed = ko.observable(false);
	            ko.pureComputed(this.loading)
	                .extend({ rateLimit: delay })
	                .subscribe(function () {
	                _this.loadingDelayed(_this.loading());
	            }, this);
	        }
	        LoadingProgress.prototype.isVisible = function () {
	            return this.loading() && this.loadingDelayed();
	        };
	        LoadingProgress.prototype.start = function () {
	            this.loading(true);
	        };
	        LoadingProgress.prototype.stop = function () {
	            this.loading(false);
	        };
	        LoadingProgress.prototype.running = function () {
	            return this.loading();
	        };
	        LoadingProgress.prototype.hasWaitMessage = function () {
	            return !this.options.noWaitMessage;
	        };
	        LoadingProgress.prototype.waitMessage = function () {
	            return this.options.waitMessage;
	        };
	        return LoadingProgress;
	    }());
	    __decorate([
	        ko_utils_1.computed,
	        __metadata("design:type", Function),
	        __metadata("design:paramtypes", []),
	        __metadata("design:returntype", void 0)
	    ], LoadingProgress.prototype, "isVisible", null);
	    __decorate([
	        ko_utils_1.computed,
	        __metadata("design:type", Function),
	        __metadata("design:paramtypes", []),
	        __metadata("design:returntype", void 0)
	    ], LoadingProgress.prototype, "running", null);
	    __decorate([
	        ko_utils_1.computed,
	        __metadata("design:type", Function),
	        __metadata("design:paramtypes", []),
	        __metadata("design:returntype", void 0)
	    ], LoadingProgress.prototype, "waitMessage", null);
	    LoadingProgress = __decorate([
	        ko_utils_1.registerComputed,
	        __metadata("design:paramtypes", [Object])
	    ], LoadingProgress);
	    exports.LoadingProgress = LoadingProgress;
	    if (!ko.components.isRegistered("loading-progress")) {
	        ko.components.register("loading-progress", {
	            viewModel: {
	                createViewModel: function (params) {
	                    return params.controller;
	                }
	            },
	            template: "<div class=\"loading-progress\" data-bind=\"visible: isVisible\">\r\n\t<div class=\"spinner-container\" data-bind=\"spin: isVisible\"></div>\r\n\t<div class=\"message-container\" data-bind=\"visible: hasWaitMessage\">\r\n\t\t<div class=\"message\" data-bind=\"text: waitMessage\"></div>\r\n\t</div>\r\n</div>"
	        });
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_15__ = (function (require, exports) {
	    "use strict";
	    (function (SortDirection) {
	        SortDirection[SortDirection["asc"] = 1] = "asc";
	        SortDirection[SortDirection["desc"] = 2] = "desc";
	    })(exports.SortDirection || (exports.SortDirection = {}));
	    var SortDirection = exports.SortDirection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_15__], __WEBPACK_LOCAL_MODULE_16__ = (function (require, exports, baseBinding_8, sort_1) {
	    "use strict";
	    var SortBinding = (function (_super) {
	        __extends(SortBinding, _super);
	        function SortBinding() {
	            return _super.apply(this, arguments) || this;
	        }
	        SortBinding.prototype.init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            var $element = $(element);
	            var $controller = $element;
	            var options = allBindingsAccessor();
	            var sortType = options.sortType;
	            var controllerElementSelector = options.parentController;
	            if (controllerElementSelector != null) {
	                $controller = $element.parent(controllerElementSelector);
	            }
	            var sortRule = _super.prototype.unwrap.call(this, valueAccessor());
	            var vm = ko.observable(sortRule);
	            ko.utils.domData.set(element, "vm", vm);
	            $controller.addClass("sort");
	            function sortRuleChanged() {
	                var sr = vm();
	                $controller.removeClass("sort-none sort-asc sort-desc");
	                var direction = sr.direction();
	                var newClass;
	                if (sr.type() === sortType)
	                    newClass = direction === sort_1.SortDirection.asc ? "sort-asc" : (direction === sort_1.SortDirection.desc ? "sort-desc" : "sort-none");
	                else
	                    newClass = "sort-none";
	                $controller.addClass(newClass);
	            }
	            function clickHandler() {
	                var sr = vm();
	                var direction = sr.direction();
	                var newDirection;
	                if (sr.type() === sortType) {
	                    newDirection = direction === sort_1.SortDirection.asc ? sort_1.SortDirection.desc : sort_1.SortDirection.asc;
	                }
	                else {
	                    newDirection = sort_1.SortDirection.asc;
	                    sr.type(sortType);
	                }
	                sr.direction(newDirection);
	            }
	            function viewModelChanged(sr) {
	                if (sr == null)
	                    return;
	                sr.subscribe(sortRuleChanged);
	                $controller.unbind("click", clickHandler);
	                $controller.click(clickHandler);
	            }
	            sortRule.subscribe(sortRuleChanged);
	            vm.subscribe(viewModelChanged);
	            $element.html("<div class=\"arrow-desc\"></div><div class=\"arrow-asc\"></div>");
	            ko.applyBindingsToDescendants(vm, element);
	            viewModelChanged(sortRule);
	            sortRuleChanged();
	            return { controlsDescendantBindings: true };
	        };
	        SortBinding.prototype.update = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
	            var sortRule = _super.prototype.unwrap.call(this, valueAccessor());
	            var vm = ko.utils.domData.get(element, "vm");
	            if (vm) {
	                vm(sortRule);
	            }
	        };
	        return SortBinding;
	    }(baseBinding_8.BaseBinding));
	    exports.SortBinding = SortBinding;
	    baseBinding_8.BaseBinding.register("sort", SortBinding);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_15__], __WEBPACK_LOCAL_MODULE_17__ = (function (require, exports, sort_2) {
	    "use strict";
	    var SortRule = (function () {
	        function SortRule(type, direction) {
	            this.type = ko.observable(type || null);
	            this.direction = ko.observable(direction || sort_2.SortDirection.asc);
	        }
	        SortRule.prototype.subscribe = function (handler, context) {
	            var components = [this.type, this.direction];
	            var changes = Rx.Observable.create(function (observer) {
	                for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
	                    var component = components_1[_i];
	                    component.subscribe(function () { observer.onNext(); });
	                }
	            });
	            changes.debounce(10).subscribe(handler, context);
	        };
	        SortRule.prototype.toModel = function (options) {
	            var type = this.type();
	            var direction = this.direction();
	            return {
	                Type: type == null ? options.defaultType : type,
	                Direction: direction == null ? options.defaultDirection : direction
	            };
	        };
	        return SortRule;
	    }());
	    exports.SortRule = SortRule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_3__], __WEBPACK_LOCAL_MODULE_18__ = (function (require, exports, ko_utils_2) {
	    "use strict";
	    var ListPaging = (function () {
	        function ListPaging(paging, gotoPageHandler) {
	            this.paging = ko.isObservable(paging) ?
	                ko.computed(function () { return normalizePaging.call(this, paging() || []); }, this) :
	                normalizePaging.call(this, paging || []);
	            if (!ko.isObservable(this.paging))
	                this.paging = ko.observable(this.paging);
	            this.gotoPageHandler = gotoPageHandler;
	        }
	        ListPaging.prototype.needShow = function () {
	            return this.paging().length > 1;
	        };
	        ListPaging.prototype.gotoPage = function (page) {
	            if (page.active)
	                return;
	            if (this.gotoPageHandler == null) {
	                throw "gotoPageHandler is not specified for the paging.";
	            }
	            this.gotoPageHandler(page.index);
	        };
	        return ListPaging;
	    }());
	    __decorate([
	        ko_utils_2.computed,
	        __metadata("design:type", Function),
	        __metadata("design:paramtypes", []),
	        __metadata("design:returntype", void 0)
	    ], ListPaging.prototype, "needShow", null);
	    ListPaging = __decorate([
	        ko_utils_2.registerComputed,
	        __metadata("design:paramtypes", [Object, Object])
	    ], ListPaging);
	    exports.ListPaging = ListPaging;
	    function normalizePaging(pagingItems) {
	        return pagingItems.map(function (page) { return ({
	            index: page.index || page.Index,
	            caption: page.caption || page.Caption,
	            active: page.active || page.Active
	        }); });
	    }
	    ;
	    if (!ko.components.isRegistered("list-paging")) {
	        ko.components.register("list-paging", {
	            viewModel: { createViewModel: function (params) { return new ListPaging(params.paging, params.gotoPageHandler); } },
	            template: "<div class=\"list-paging\" data-bind=\"visible: needShow, foreach: paging\">\r\n\t<a href=\"#\" class=\"btn\" data-bind=\"text: caption, click: $parent.gotoPage.bind($parent, $data), css: {'btn-primary': active, 'btn-default': !active}\"></a>\r\n</div>\r\n"
	        });
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_19__ = (function (require, exports) {
	    "use strict";
	    var ListWithServerHtml = (function () {
	        function ListWithServerHtml(items, html, paging, options) {
	            options = options || {};
	            this.items = ko.observable(items || []);
	            this.itemsHtml = ko.observable(html || "");
	            this.paging = ko.observable(paging || []);
	            this.gotoPageHandler = options.gotoPageHandler;
	        }
	        return ListWithServerHtml;
	    }());
	    exports.ListWithServerHtml = ListWithServerHtml;
	    if (!ko.components.isRegistered("list-with-server-html")) {
	        ko.components.register("list-with-server-html", {
	            viewModel: {
	                createViewModel: function (params) {
	                    return ko.isObservable(params.list) ?
	                        ko.pureComputed(function () { return (params.list() || new ListWithServerHtml()); }, null) :
	                        params.list || new ListWithServerHtml();
	                }
	            },
	            template: "<!-- ko with: items -->\r\n<div class=\"list-items\" data-bind=\"htmlStateful: $parent.itemsHtml\"></div>\r\n<!-- /ko -->\r\n<list-paging params=\"paging: paging, gotoPageHandler: gotoPageHandler\"></list-paging>\r\n"
	        });
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_5__, __WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_7__, __WEBPACK_LOCAL_MODULE_8__, __WEBPACK_LOCAL_MODULE_9__, __WEBPACK_LOCAL_MODULE_10__, __WEBPACK_LOCAL_MODULE_11__, __WEBPACK_LOCAL_MODULE_12__, __WEBPACK_LOCAL_MODULE_13__, __WEBPACK_LOCAL_MODULE_14__, __WEBPACK_LOCAL_MODULE_15__, __WEBPACK_LOCAL_MODULE_16__, __WEBPACK_LOCAL_MODULE_17__, __WEBPACK_LOCAL_MODULE_18__, __WEBPACK_LOCAL_MODULE_19__], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, utils_2, ajax_1, dateUtils_1, ko_utils_3, baseBinding_9, knockoutBinding_2, aliasBinding_1, enterBinding_1, alertPanelBinding_1, spinBinding_1, summerNoteBinding_1, fileUploadBinding_1, htmlStatefulBinding_1, alert_1, loadingProgress_1, sort_3, sortBinding_1, sortRule_1, listPaging_1, listWithServerHtml_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(utils_2);
	    __export(ajax_1);
	    __export(dateUtils_1);
	    __export(ko_utils_3);
	    __export(baseBinding_9);
	    __export(knockoutBinding_2);
	    __export(aliasBinding_1);
	    __export(enterBinding_1);
	    __export(alertPanelBinding_1);
	    __export(spinBinding_1);
	    __export(summerNoteBinding_1);
	    __export(fileUploadBinding_1);
	    __export(htmlStatefulBinding_1);
	    __export(alert_1);
	    __export(loadingProgress_1);
	    __export(sort_3);
	    __export(sortBinding_1);
	    __export(sortRule_1);
	    __export(listPaging_1);
	    __export(listWithServerHtml_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ])
});
;