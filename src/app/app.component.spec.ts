import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyTakeComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [MyTakeComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyTakeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myTakeWeb'`, () => {
    const fixture = TestBed.createComponent(MyTakeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myTakeWeb');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyTakeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('myTakeWeb app is running!');
  });
});
