import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-add-carreras',
  templateUrl: './add-carreras.component.html',
  styleUrls: ['./add-carreras.component.css']
})
export class AddCarrerasComponent {

  carreras:any[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private estudianteService: EstudianteService, private carreraService: CarreraService) {
    this.form = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[0-9]*$')]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerCarreras();
  }

  agregarCarrera(){

    const carrera: any = {
      name: this.form.get('name')?.value
    }
    console.log(carrera)
    this.carreraService.saveCarrera(carrera).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Carrera agregada con éxito', 'Carrera agregada');
        this.form.reset();
      },
      err => {
        console.log(err);
        this.toastr.error('Error al agregar carrera', 'Error');
      }
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

}
