import { Component } from '@angular/core';


@Component({
	selector: 'projects',
	templateUrl: './app/components/projects/view/index.html',
	styleUrls: ['./app/components/projects/view/css/index.css']
})
export class Projects {
	public classMenu:string;
	public currentView:string;
	constructor() {
		this.classMenu = '';
		this.currentView = '';
	}
	ngOnInit() {
		setTimeout((()=>{this.classMenu = 'open'}).bind(this),0);
	}
	goTo( classMenu:string ){
		this.classMenu += ' ' + classMenu;
		this.currentView = classMenu;
		classMenu === 'left' ?

			history.pushState({},'interview/studies','interview/studies')
			:
			classMenu === 'right' ?
				history.pushState({},'interview/studies','interview/workflow')
				:
				history.pushState({},'interview/studies','interview/myself')
	}
	userUpdated(){
		this.classMenu= 'open';
		this.currentView = '';
	}

}