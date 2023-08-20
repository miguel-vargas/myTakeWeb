import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeCardComponent } from './take-card.component';

describe('TakeCardComponent', () => {
  let component: TakeCardComponent;
  let fixture: ComponentFixture<TakeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeCardComponent]
    });
    fixture = TestBed.createComponent(TakeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
