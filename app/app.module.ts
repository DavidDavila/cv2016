import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute }   from '@angular/router';

import {MaterialModule} from '@angular/material';

import { AppComponent }  from './app.component';

import { Home }  from './views/home/index';
import { Interview }  from './views/interview/index';


import { Menu } from './components/menu/index';
import { Dropdown } from './components/dropdown/index';
import { Workflow } from './components/workflow/index';
import { Education } from './components/education/index';

import { Autocomplete } from './components/autocomplete/index';
import { Projects } from './components/projects/index';

import { Routes } from './router';

 
@NgModule({
  imports:      [ BrowserModule,  MaterialModule.forRoot(), FormsModule, RouterModule.forRoot(Routes)],
  declarations: [ AppComponent, Menu, Home, Interview, Projects, Workflow, Education, Dropdown, Autocomplete ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }