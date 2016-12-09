import { Injectable } from '@angular/core';
import { ALLCOURSES } from './mocks/mock.works';

@Injectable()

export class CoursesService{
	getAllWorks(){
		return ALLCOURSES;
	}
}