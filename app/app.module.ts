import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FilmList } from './components/filmList/index';

 
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FilmList ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }