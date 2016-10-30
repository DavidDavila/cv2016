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
		var center = new google.maps.LatLng(40.4167754, -3.7037901999999576);
		let style= [{"featureType":"all","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"geometry","stylers":[{"color":"#d6a41d"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"weight":2},{"gamma":0.8}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#d6a41d"}]},{"featureType":"landscape","elementType":"geometry","stylers":[]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20},{"visibility":"on"},{"color":"#ffffff"}]}];
	    // Map options
	    var mapOptions = {
	        zoom: 3,
	        scrollwheel: false,
	        center: center,
	        styles: style,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    // Attach the map to the document
	    map = new google.maps.Map(document.getElementById('map_canvas'),
	    mapOptions);
	    // The marker
	    var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(40.4167754,  -3.7037901999999576),
	        map: map,
	        title: 'marker7'
	    });

	    // http://jsfiddle.net/landwire/WppF6/24/
		
	}

}