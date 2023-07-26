import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@shared/modules/material/material.module';
import { CoreComponent } from './core.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

describe('CoreComponent', () => {
	let component: CoreComponent;
	let fixture: ComponentFixture<CoreComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [CoreComponent, ToolbarComponent],
			imports: [MaterialModule, RouterTestingModule],
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
