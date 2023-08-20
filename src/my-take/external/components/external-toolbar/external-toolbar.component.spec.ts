import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalToolbarComponent } from './external-toolbar.component';

describe('ExternalToolbarComponent', () => {
  let component: ExternalToolbarComponent;
  let fixture: ComponentFixture<ExternalToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalToolbarComponent]
    });
    fixture = TestBed.createComponent(ExternalToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
