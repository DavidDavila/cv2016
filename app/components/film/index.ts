import { Component, Input } from '@angular/core';
import { AddFilm } from './components/addFilm/index';
import { FilmList } from './components/filmList/index';
import { FilmModel } from './model/index';


@Component({
	selector: 'film',
	templateUrl: './app/components/film/view/index.html'
})

export class Film {
	public currentFilm: FilmModel;
	constructor() {
		
	}
	private getCurrentFilm(film){
		this.currentFilm = film;
	}

};



