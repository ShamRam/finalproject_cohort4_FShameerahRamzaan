import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmiconComponent } from './smicon.component';

describe('SmiconComponent', () => {
  let component: SmiconComponent;
  let fixture: ComponentFixture<SmiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
