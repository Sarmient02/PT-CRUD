import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarrerasComponent } from './view-carreras.component';

describe('ViewCarrerasComponent', () => {
  let component: ViewCarrerasComponent;
  let fixture: ComponentFixture<ViewCarrerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCarrerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
