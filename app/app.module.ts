import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';

import { Home }  from './views/home/index';
import { OtherProjects }  from './views/other-projects/index';


import { Menu } from './components/menu/index';
import { Film } from './components/film/index';
import { FilmList } from './components/film/components/filmList/index';

import { Routes } from './router';


 
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(Routes)],
  declarations: [ AppComponent, Menu, Home, OtherProjects, Film, FilmList ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }