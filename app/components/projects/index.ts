import { Component } from '@angular/core';
declare var google: any;
declare var skrollr: any;

@Component({
	selector: 'projects',
	templateUrl: './app/components/projects/view/index.html',
	styleUrls: ['./app/components/projects/view/css/index.css']
})
export class Projects {
	constructor() {
		
	}
	ngOnInit() {
		this.map();
		var s = skrollr.init();
		let body = document.getElementsByTagName('body')[0];
		body.style.height =  null; 
	}
	ngOnDestroy() {
		 skrollr.init().destroy();
	}
	map(){
		var map;
		var infoBubble;

		// Initial position of the map
		var center = new google.maps.LatLng(-25.363882, 131.044922);

	    // Map options
	    var mapOptions = {
	        zoom: 4,
	        center: center,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    // Attach the map to the document
	    map = new google.maps.Map(document.getElementById('map_canvas'),
	    mapOptions);
	    // The marker
	    var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(-25.363882, 131.044922),
	        map: map,
	        title: 'marker7'
	    });


		
	}

}