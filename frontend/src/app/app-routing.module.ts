import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarrerasComponent } from './components/carreras/add-carreras/add-carreras.component';
import { EditCarrerasComponent } from './components/carreras/edit-carreras/edit-carreras.component';
import { ViewCarrerasComponent } from './components/carreras/view-carreras/view-carreras.component';
import { AddEstudiantesComponent } from './components/estudiantes/add-estudiantes/add-estudiantes.component';
import { EditEstudiantesComponent } from './components/estudiantes/edit-estudiantes/edit-estudiantes.component';
import { ViewEstudiantesComponent } from './components/estudiantes/view-estudiantes/view-estudiantes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/estudiantes',
    pathMatch: 'full'
  },
  {
    path: 'estudiantes',
    component: ViewEstudiantesComponent
  },
  {
    path: 'carreras',
    component: ViewCarrerasComponent
  },
  {
    path: 'estudiantes/add',
    component: AddEstudiantesComponent
  },
  {
    path: 'estudiantes/edit/:id',
    component: EditEstudiantesComponent
  },
  {
    path: 'carreras/add',
    component: AddCarrerasComponent
  },
  {
    path: 'carreras/edit/:id',
    component: EditCarrerasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
