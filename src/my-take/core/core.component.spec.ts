import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreComponent } from './core.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

describe('CoreComponent', () => {
	let component: CoreComponent;
	let fixture: ComponentFixture<CoreComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, CoreComponent, ToolbarComponent],
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(CoreComponent);
				component = fixture.componentInstance;

				fixture.detectChanges();
			});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
