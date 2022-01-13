import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolclassComponent } from './schoolclass.component';

describe('SchoolclassComponent', () => {
  let component: SchoolclassComponent;
  let fixture: ComponentFixture<SchoolclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
