import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalFooterComponent } from './external-footer.component';

describe('ExternalFooterComponent', () => {
  let component: ExternalFooterComponent;
  let fixture: ComponentFixture<ExternalFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExternalFooterComponent]
    });
    fixture = TestBed.createComponent(ExternalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
