import { Component } from '@angular/core';
import { FilmModel as newFilm } from './model/index';

@Component({
	selector: 'film-list',
	templateUrl: './app/components/film/filmList/view/index.html'
})

export class FilmList {

	public filmList:Array<newFilm>;

	constructor() {
		var fightClub = new newFilm('Fight Club', 'David Fincher', 1999);
		var memento = new newFilm('Memento', 'Christopher Nolan', 2000);
		var matrix = new newFilm('Matrix', 'Lilly Wachowski', 1999);
		this.filmList = [fightClub, memento, matrix];
	}
};
