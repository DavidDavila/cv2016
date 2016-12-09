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
var core_1 = require("@angular/core");
var Projects = (function () {
    function Projects() {
        this.classMenu = '';
        this.currentView = '';
    }
    Projects.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout((function () { _this.classMenu = 'open'; }).bind(this), 0);
    };
    Projects.prototype.goTo = function (classMenu) {
        this.classMenu += ' ' + classMenu;
        this.currentView = classMenu;
        classMenu === 'right' ?
            history.pushState({}, 'interview/studies', 'interview/workflow')
            :
                classMenu === 'left' ?
                    history.pushState({}, 'interview/studies', 'interview/studies')
                    :
                        history.pushState({}, 'interview/studies', 'interview/myself');
    };
    Projects.prototype.userUpdated = function () {
        this.classMenu = 'open';
        this.currentView = '';
    };
    return Projects;
}());
Projects = __decorate([
    core_1.Component({
        selector: 'projects',
        templateUrl: './app/components/projects/view/index.html',
        styleUrls: ['./app/components/projects/view/css/index.css']
    }),
    __metadata("design:paramtypes", [])
], Projects);
exports.Projects = Projects;
//# sourceMappingURL=index.js.map