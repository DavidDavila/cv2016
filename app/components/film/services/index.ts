import { Injectable } from '@angular/core';
import { FilmModel as Film} from './../model/index';
import { ALLFILMS } from './mocks/mock.films';

@Injectable()

export class FilmService{
	getAllFilms(){
		return ALLFILMS;
	}
	findFilm(i = 0){
		return this.getAllFilms()[i];
	}
	insertFilm(newFilm: Film){
		return ALLFILMS.push(newFilm);
	}
}