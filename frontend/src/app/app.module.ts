import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewEstudiantesComponent } from './components/estudiantes/view-estudiantes/view-estudiantes.component';
import { AddEstudiantesComponent } from './components/estudiantes/add-estudiantes/add-estudiantes.component';
import { EditEstudiantesComponent } from './components/estudiantes/edit-estudiantes/edit-estudiantes.component';
import { ViewCarrerasComponent } from './components/carreras/view-carreras/view-carreras.component';
import { AddCarrerasComponent } from './components/carreras/add-carreras/add-carreras.component';
import { EditCarrerasComponent } from './components/carreras/edit-carreras/edit-carreras.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewEstudiantesComponent,
    AddEstudiantesComponent,
    EditEstudiantesComponent,
    ViewCarrerasComponent,
    AddCarrerasComponent,
    EditCarrerasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
