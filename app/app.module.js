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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var index_1 = require("./views/home/index");
var index_2 = require("./views/interview/index");
var index_3 = require("./components/menu/index");
var index_4 = require("./components/dropdown/index");
var index_5 = require("./components/workflow/index");
var index_6 = require("./components/education/index");
var index_7 = require("./components/autocomplete/index");
var index_8 = require("./components/projects/index");
var router_2 = require("./router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, material_1.MaterialModule.forRoot(), forms_1.FormsModule, router_1.RouterModule.forRoot(router_2.Routes)],
        declarations: [app_component_1.AppComponent, index_3.Menu, index_1.Home, index_2.Interview, index_8.Projects, index_5.Workflow, index_6.Education, index_4.Dropdown, index_7.Autocomplete],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map