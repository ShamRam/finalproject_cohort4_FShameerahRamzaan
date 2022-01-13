import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmarkComponent } from './emark.component';

describe('EmarkComponent', () => {
  let component: EmarkComponent;
  let fixture: ComponentFixture<EmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
