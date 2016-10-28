import { Component } from '@angular/core';
import { FilmService } from './../../services/index';
import { FilmModel as Film } from './../../model/index';

@Component({
	selector: 'add-film',
	templateUrl: './app/components/film/components/addFilm/view/index.html',
	styleUrls: ['./app/components/film/components/addFilm/view/css/index.css'],
	providers: [FilmService]
})
export class AddFilm {
	public showForm: boolean;

	constructor( private _filmService:FilmService) {
		this.showForm = false;
	}
	createFlim(title, director, year){
		var newFilm: Film = new Film(title, director, year);
		this._filmService.insertFilm(newFilm)
		this.showForm = !this.showForm
	}
	
}