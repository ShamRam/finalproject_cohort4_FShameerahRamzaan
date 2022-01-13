import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolclassesComponent } from './schoolclasses.component';

describe('SchoolclassesComponent', () => {
  let component: SchoolclassesComponent;
  let fixture: ComponentFixture<SchoolclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolclassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
