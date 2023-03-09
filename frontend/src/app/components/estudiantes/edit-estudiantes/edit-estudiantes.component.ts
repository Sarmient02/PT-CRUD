import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-estudiantes',
  templateUrl: './edit-estudiantes.component.html',
  styleUrls: ['./edit-estudiantes.component.css']
})
export class EditEstudiantesComponent implements OnInit {

  form: FormGroup;
  id:any;
  carreras:any[] = [];
  estudiante:any;
  selectedCareer:any;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private estudianteService: EstudianteService, private carreraService: CarreraService, private activatedRoute: ActivatedRoute, private router: Router, private datePipe: DatePipe) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
      career: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.carreraService.getCareers().subscribe(resp=>{
      this.carreras = resp;
    }, 
      error=>{console.error(error)}
    );

    this.estudianteService.getEstudianteById(this.id).subscribe(resp=>{
      this.estudiante = resp;
      console.log(this.estudiante);
      this.editar(resp);
    },
      error=>{console.error(error)}
    );
  }

  editar(estudiante:any){
    this.form.setValue({
      id: estudiante.id,
      name: estudiante.name,
      email: estudiante.email,
      phone: estudiante.phone,
      career: estudiante.careerId,
      birthdate: this.formatDate(estudiante.birthdate)
    });
    this.selectedCareer=estudiante.careerId;
  }

  formatDate(date: Date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  guardarEstudiante(){
    const birthdateInputValue = this.form.get('birthdate')?.value;
    const birthdate = birthdateInputValue ? new Date(birthdateInputValue) : null;
    const formattedBirthdate = birthdate ? birthdate.toISOString() : null;

    const estudiante: any = {
      id: this.form.get('id')?.value,
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value,
      careerId: this.form.get('career')?.value,
      birthdate: formattedBirthdate
    }
    console.log(estudiante)
    this.estudianteService.updateEstudiante(this.id, estudiante).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Estudiante actualizado con éxito', 'Estudiante actualizado');
        this.form.reset();
        this.router.navigate(['/estudiantes']);
      },
      err => {
        console.log(err);
        this.toastr.error('Error al agregar estudiante', 'Error');
      }
    );
  }

}
