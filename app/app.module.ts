import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Film } from './components/film/index';
import { FilmList } from './components/film/components/filmList/index';


 
@NgModule({
  imports:      [ BrowserModule, FormsModule  ],
  declarations: [ AppComponent, Film, FilmList ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }