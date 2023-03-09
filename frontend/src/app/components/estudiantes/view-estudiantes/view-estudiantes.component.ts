import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { DatePipe } from '@angular/common';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-view-estudiantes',
  templateUrl: './view-estudiantes.component.html',
  styleUrls: ['./view-estudiantes.component.css']
})
export class ViewEstudiantesComponent {
  lista:any[] = [];
  carreras:any[] = [];

  constructor(private toastr: ToastrService, private estudianteService: EstudianteService, private datePipe: DatePipe, private carreraService: CarreraService) { }

  ngOnInit(): void {
    this.obtenerEstudiantes();
    this.obtenerCarreras();
  }

  obtenerEstudiantes(){
    this.estudianteService.getEstudiantes().subscribe(
      res => {
        this.lista = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  obtenerCarreras(){
    this.carreraService.getCareers().subscribe(
      res => {
        this.carreras = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  eliminarEstudiante(id:number){
    this.lista.splice(id,1);
    this.estudianteService.deleteEstudiante(id).subscribe(
      res => {
        console.log(res);
        this.toastr.error('Estudiante eliminado con exito', 'Estudiante eliminado');
        this.obtenerEstudiantes();
      },
      err => console.error(err)
    );
    
  }

  formatDate(date: Date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  obtenerNombreCarrera(id:number){
    return this.carreras.find(x => x.id == id)?.name;
  }

}
