"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Projects = (function () {
    function Projects() {
    }
    Projects.prototype.ngOnInit = function () {
        this.map();
        var s = skrollr.init();
        var body = document.getElementsByTagName('body')[0];
        body.style.height = null;
    };
    Projects.prototype.ngOnDestroy = function () {
        skrollr.init().destroy();
    };
    Projects.prototype.map = function () {
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
        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        // The marker
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-25.363882, 131.044922),
            map: map,
            title: 'marker7'
        });
    };
    Projects = __decorate([
        core_1.Component({
            selector: 'projects',
            templateUrl: './app/components/projects/view/index.html',
            styleUrls: ['./app/components/projects/view/css/index.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Projects);
    return Projects;
}());
exports.Projects = Projects;
//# sourceMappingURL=index.js.map