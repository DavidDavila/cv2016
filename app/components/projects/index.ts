import { Component } from '@angular/core';

@Component({
	selector: 'projects',
	templateUrl: './app/components/projects/view/index.html',
	styleUrls: ['./app/components/projects/view/css/index.css']
})
export class Projects {
	constructor() {
		
	}
	ngOnInit() {
		var menu = document.getElementById('menu');
		setTimeout(()=>{menu.className = 'open'},0);
	}

}