import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstudiantesComponent } from './edit-estudiantes.component';

describe('EditEstudiantesComponent', () => {
  let component: EditEstudiantesComponent;
  let fixture: ComponentFixture<EditEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
