import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
	let component: ToolbarComponent;
	let fixture: ComponentFixture<ToolbarComponent>;
	let loader: HarnessLoader;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ToolbarComponent, RouterTestingModule],
		});
		fixture = TestBed.createComponent(ToolbarComponent);
		loader = TestbedHarnessEnvironment.loader(fixture);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have sidnav button and profile button', async () => {
		const buttons = await loader.getAllHarnesses(MatButtonHarness);

		expect(buttons.length).toBe(2);
	});
});
