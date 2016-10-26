import { Component } from '@angular/core';
import { FilmModel as Film } from './model/index';

@Component({
	selector: 'peliculas-list',
	templateUrl: './app/components/filmList/view/index.html'
})
export class FilmList {

	public filmList:Array<Film>;
	constructor() {
		var fightClub = new Film('Fight Club', 'David Fincher', 1999);
		var memento = new Film('Memento', 'Christopher Nolan', 2000);
		var matrix = new Film('Matrix', 'Lilly Wachowski', 1999);

		this.filmList = [fightClub, memento, matrix];
	}

}