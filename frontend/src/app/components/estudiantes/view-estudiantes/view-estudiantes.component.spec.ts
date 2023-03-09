import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEstudiantesComponent } from './view-estudiantes.component';

describe('ViewEstudiantesComponent', () => {
  let component: ViewEstudiantesComponent;
  let fixture: ComponentFixture<ViewEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
