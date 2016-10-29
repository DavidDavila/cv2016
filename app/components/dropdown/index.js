"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Dropdown = (function () {
    function Dropdown(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.job = 'Creative FullStack Developer';
    }
    Dropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this._activatedRoute.params.subscribe(function (params) {
            _this.author = params['company'] ? 'Hello ' + params['company'] : _this.author = 'David Dávila Pino';
            _this.job = params['company'] ? 'If you are looking for a Creative FullStack Developer ...' : 'Creative FullStack Developer';
        });
    };
    Dropdown.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    Dropdown = __decorate([
        core_1.Component({
            selector: 'dropdown',
            templateUrl: './app/components/dropdown/view/index.html',
            styleUrls: ['./app/components/dropdown/view/css/index.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;
//# sourceMappingURL=index.js.map