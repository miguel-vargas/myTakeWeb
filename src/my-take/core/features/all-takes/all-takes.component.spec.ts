import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTakesComponent } from './all-takes.component';

describe('AllTakesComponent', () => {
  let component: AllTakesComponent;
  let fixture: ComponentFixture<AllTakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllTakesComponent]
    });
    fixture = TestBed.createComponent(AllTakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
