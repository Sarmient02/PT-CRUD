import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-view-carreras',
  templateUrl: './view-carreras.component.html',
  styleUrls: ['./view-carreras.component.css']
})
export class ViewCarrerasComponent {
  carreras:any[] = [];

  constructor(private carreraService:CarreraService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerCarreras();
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

  eliminarCarrera(id:number){
    this.carreras.splice(id,1);
    this.carreraService.deleteCarrera(id).subscribe(
      res => {
        console.log(res);
        this.obtenerCarreras();
        this.toastr.error('Carrera eliminada con éxito', 'Carrera eliminada');
      },
      err => console.error(err)
    );
  }
}
