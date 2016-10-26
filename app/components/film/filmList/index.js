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
var index_1 = require('./model/index');
var FilmList = (function () {
    function FilmList() {
        var fightClub = new index_1.FilmModel('Fight Club', 'David Fincher', 1999);
        var memento = new index_1.FilmModel('Memento', 'Christopher Nolan', 2000);
        var matrix = new index_1.FilmModel('Matrix', 'Lilly Wachowski', 1999);
        this.filmList = [fightClub, memento, matrix];
    }
    FilmList = __decorate([
        core_1.Component({
            selector: 'film-list',
            templateUrl: './app/components/film/filmList/view/index.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FilmList);
    return FilmList;
}());
exports.FilmList = FilmList;
;
//# sourceMappingURL=index.js.map