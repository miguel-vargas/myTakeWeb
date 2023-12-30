import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { PlaceComponent } from './place.component';

describe('PlaceComponent', () => {
  let component: PlaceComponent;
  let fixture: ComponentFixture<PlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        PlaceComponent,
        RouterTestingModule,
      ]
    });
    fixture = TestBed.createComponent(PlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
