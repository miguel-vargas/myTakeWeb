import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MaterialModule } from '@shared/modules/material/material.module';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
	let component: ToolbarComponent;
	let fixture: ComponentFixture<ToolbarComponent>;
	let loader: HarnessLoader;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ToolbarComponent],
			imports: [MaterialModule],
		});
		fixture = TestBed.createComponent(ToolbarComponent);
		loader = TestbedHarnessEnvironment.loader(fixture);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('When unauthenticated', () => {
		it('should have two auth buttons', async () => {
			const buttons = await loader.getAllHarnesses(MatButtonHarness);

			expect(buttons.length).toBe(2);
		});
	});

	describe('When authenticated', () => {
		it('should have sidnav button', async () => {
			const buttons = await loader.getAllHarnesses(MatButtonHarness);

			expect(buttons.length).toBe(1);
		});
	});
});
