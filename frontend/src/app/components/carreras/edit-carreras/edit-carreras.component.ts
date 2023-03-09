import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-carreras',
  templateUrl: './edit-carreras.component.html',
  styleUrls: ['./edit-carreras.component.css']
})
export class EditCarrerasComponent {
  
  carrera:any;
  form: FormGroup;
  id:any;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private estudianteService: EstudianteService, private carreraService: CarreraService, private activatedRoute: ActivatedRoute,private router: Router) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    this.form = this.fb.group({
      id: [''],
      code: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[0-9]*$')]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carreraService.getCareerById(this.id).subscribe(resp=>{
      this.carrera = resp;
      console.log(this.carrera);
      this.editar(resp);
    },
      error=>{console.error(error)}
    );
  }

  editar(carrera:any){
    this.form.setValue({
      id: carrera.id,
      name: carrera.name,
      code: carrera.code
    });
  }

  guardarCarrera(){

    const carrera: any = {
      id: this.form.get('id')?.value,
      name: this.form.get('name')?.value,
      code: this.form.get('code')?.value
    }
    console.log(carrera)
    this.carreraService.updateCarrera(this.id, carrera).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Carrera actualizada con éxito', 'Carrera actualizada');
        this.form.reset();
        this.router.navigate(['/carreras']);
      },
      err => {
        console.log(err);
        this.toastr.error('Error al agregar carrera', 'Error');
      }
    );
  }

}
