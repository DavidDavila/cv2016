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
var router_1 = require("@angular/router");
var index_1 = require("./services/index");
var Education = (function () {
    function Education(_router, _coursesService) {
        this._router = _router;
        this._coursesService = _coursesService;
        this.userUpdated = new core_1.EventEmitter();
        this.router = _router;
        this.education = _coursesService.getAllWorks();
    }
    Education.prototype.close = function () {
        this.userUpdated.emit() || this.router.navigateByUrl('/interview');
    };
    return Education;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Education.prototype, "userUpdated", void 0);
Education = __decorate([
    core_1.Component({
        selector: 'education',
        templateUrl: './app/components/education/view/index.html',
        styleUrls: ['./app/components/education/view/css/index.css'],
        providers: [index_1.CoursesService]
    }),
    __metadata("design:paramtypes", [router_1.Router, index_1.CoursesService])
], Education);
exports.Education = Education;
//# sourceMappingURL=index.js.map