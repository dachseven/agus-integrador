import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisEstudiosComponent } from './mis-estudios.component';

describe('MisEstudiosComponent', () => {
  let component: MisEstudiosComponent;
  let fixture: ComponentFixture<MisEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
