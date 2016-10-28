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
var OtherProjects = (function () {
    function OtherProjects() {
        this.menuList = [
            { name: 'Boilerplate React Redux', link: 'https://github.com/DavidDavila/boilerplate-redux' },
            { name: 'BoilerPlate React Redux Async with ReactToolBox', link: 'https://github.com/DavidDavila/BoilerPlate-Redux-Async-ReactToolBox' },
            { name: 'Angular2 HelloWorld', link: 'https://github.com/DavidDavila/Angular2-HelloWorld' }
        ];
    }
    OtherProjects = __decorate([
        core_1.Component({
            templateUrl: './app/views/otherProjects/view/index.html',
            styleUrls: ['./app/views/otherProjects/view/css/index.css']
        }), 
        __metadata('design:paramtypes', [])
    ], OtherProjects);
    return OtherProjects;
}());
exports.OtherProjects = OtherProjects;
//# sourceMappingURL=index.js.map