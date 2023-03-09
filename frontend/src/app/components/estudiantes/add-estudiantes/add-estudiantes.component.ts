import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-add-estudiantes',
  templateUrl: './add-estudiantes.component.html',
  styleUrls: ['./add-estudiantes.component.css']
})
export class AddEstudiantesComponent {
  lista:any[] = [
    {id:1 ,nombre: 'Juan Perez', correo: 'asd@gmail.com', carrera: 'Ingenieria en Sistemas', FechaNacimiento: '1990-01-01'},
    {id:2 ,nombre: 'Maria Lopez', correo: 'maria@gmail.com', carrera: 'Ingenieria en Sistemas', FechaNacimiento: '1990-01-01'},
    {id:3 ,nombre: 'Pedro Martinez', correo: 'pedr@gmail.com', carrera: 'Ingenieria en Sistemas', FechaNacimiento: '1990-01-01'},
    {id:4 ,nombre: 'Jose Perez', correo: 'jose@gmail.com', carrera: 'Ingenieria en Sistemas', FechaNacimiento: '1990-01-01'},
  ];

  carreras:any[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private estudianteService: EstudianteService, private carreraService: CarreraService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
      career: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerCarreras();
  }

  agregarEstudiante(){

    const birthdateInputValue = this.form.get('birthdate')?.value;
    const birthdate = birthdateInputValue ? new Date(birthdateInputValue) : null;
    const formattedBirthdate = birthdate ? birthdate.toISOString() : null;

    const estudiante: any = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value,
      careerId: this.form.get('career')?.value,
      birthdate: formattedBirthdate
    }
    console.log(estudiante)
    this.estudianteService.saveEstudiante(estudiante).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Estudiante agregado con exito', 'Estudiante agregado');
        this.form.reset();
      },
      err => {
        console.log(err);
        this.toastr.error('Error al agregar estudiante', 'Error');
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
