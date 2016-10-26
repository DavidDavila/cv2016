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
var index_1 = require('./../../services/index');
var FilmList = (function () {
    function FilmList(_filmService) {
        this._filmService = _filmService;
        this.gotFilm = new core_1.EventEmitter();
        this.filmList = _filmService.getAllFilms();
    }
    FilmList.prototype.getFilm = function (ev) {
        var allLists = document.getElementsByTagName("ul");
        for (var i = 0; i <= allLists.length; i++) {
            if (allLists[i] === event.currentTarget) {
                this.currentFilm = this._filmService.findFilm(i);
                this.gotFilm.next(this.currentFilm);
                break;
            }
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FilmList.prototype, "gotFilm", void 0);
    FilmList = __decorate([
        core_1.Component({
            selector: 'film-list',
            templateUrl: './app/components/film/components/filmList/view/index.html',
            styleUrls: ['./app/components/film/components/filmList/view/css/index.css'],
            providers: [index_1.FilmService]
        }), 
        __metadata('design:paramtypes', [index_1.FilmService])
    ], FilmList);
    return FilmList;
}());
exports.FilmList = FilmList;
;
//# sourceMappingURL=index.js.map