import { Component, Output, EventEmitter } from '@angular/core';
import { Router }   from '@angular/router';


@Component({
	selector: 'studies',
	templateUrl: './app/components/studies/view/index.html',
	styleUrls: ['./app/components/studies/view/css/index.css']
})
export class Studies {

	@Output() userUpdated = new EventEmitter();
	private router:Router;
	constructor(private _router: Router) {
		this.router = _router;
		
	}
	close(){
		this.userUpdated.emit() || this.router.navigateByUrl('/interview');

	}
	ngOnInit() {
	
	}
	ngOnDestroy() {
	}

}