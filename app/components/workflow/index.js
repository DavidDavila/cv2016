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
var index_1 = require('./services/index');
var Workflow = (function () {
    function Workflow(_router, _workService) {
        this._router = _router;
        this._workService = _workService;
        this.userUpdated = new core_1.EventEmitter();
        this.router = _router;
        this.showLineBar = true;
        this.currentProject = undefined;
        this.works = _workService.getAllWorks();
    }
    Workflow.prototype.close = function () {
        this.showAllProjects();
        this.userUpdated.emit() || this.router.navigateByUrl('/interview');
    };
    Workflow.prototype.showProject = function (index) {
        this.currentProject = this._workService.findWork(index);
    };
    Workflow.prototype.showAllProjects = function () {
        this.currentProject = undefined;
    };
    Workflow.prototype.getElement = function (index, className) {
        var projects = document.getElementsByClassName(className);
        return projects[index];
    };
    Workflow.prototype.over = function (index, classElement) {
        this.getElement(index, classElement).className = classElement + ' hover';
    };
    Workflow.prototype.blur = function (index, classElement) {
        this.getElement(index, classElement).className = classElement;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Workflow.prototype, "userUpdated", void 0);
    Workflow = __decorate([
        core_1.Component({
            selector: 'work-flow',
            templateUrl: './app/components/workflow/view/index.html',
            styleUrls: ['./app/components/workflow/view/css/index.css'],
            providers: [index_1.WorkService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.WorkService])
    ], Workflow);
    return Workflow;
}());
exports.Workflow = Workflow;
//# sourceMappingURL=index.js.map