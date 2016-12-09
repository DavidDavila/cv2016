import { Component, Output, EventEmitter } from '@angular/core';
import { Router }   from '@angular/router';
import { CoursesService } from './services/index';

@Component({
	selector: 'education',
	templateUrl: './app/components/education/view/index.html',
	styleUrls: ['./app/components/education/view/css/index.css'],
	providers: [CoursesService]
})
export class Education { 
	@Output() userUpdated = new EventEmitter();
	private router:Router;
	public education;
	
	constructor(private _router: Router, private _coursesService: CoursesService) {
		this.router = _router;
		this.education = _coursesService.getAllWorks();
	}
	close(){
		this.userUpdated.emit() || this.router.navigateByUrl('/interview');
	}
}