import { Injectable } from '@angular/core';
import { ALLFILMS } from './mocks/mock.films'

@Injectable()

export class FilmService{
	getAllFilms(){
		return ALLFILMS;
	}
}