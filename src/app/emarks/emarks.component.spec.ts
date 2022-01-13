import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmarksComponent } from './emarks.component';

describe('EmarksComponent', () => {
  let component: EmarksComponent;
  let fixture: ComponentFixture<EmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
