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
var Home = (function () {
    function Home(_router) {
        this._router = _router;
        this.title = 'Welcome,';
        this.subTitle = 'What are you interested in?';
        this.parentRouter = _router;
    }
    Home.prototype.ngOnInit = function () {
        var s = skrollr.init();
    };
    Home.prototype.download = function () {
        this.title = "Great! ";
        this.subTitle = "Anything else?";
    };
    Home.prototype.ngOnDestroy = function () {
        skrollr.init().destroy();
    };
    Home.prototype.goTo = function () {
        var _this = this;
        event.stopPropagation();
        this.title = "Perfect";
        this.subTitle = "let´s go!";
        var home = document.getElementById('home');
        home.className = 'out';
        setTimeout((function () {
            var scrollStep = -window.scrollY / (1000 / 15), scrollInterval = setInterval((function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                }
                else {
                    clearInterval(scrollInterval);
                    setTimeout((function () { return _this.parentRouter.navigateByUrl('/interview'); }).bind(_this), 300);
                }
            }).bind(_this), 7);
        }).bind(this), 800);
    };
    return Home;
}());
Home = __decorate([
    core_1.Component({
        templateUrl: './app/views/home/view/index.html',
        styleUrls: ['./app/views/home/view/css/index.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], Home);
exports.Home = Home;
//# sourceMappingURL=index.js.map