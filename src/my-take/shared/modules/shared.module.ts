import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TakeCardComponent } from '@shared/components/take-card/take-card.component';
import { MaterialModule } from './material/material.module';

@NgModule({
	declarations: [TakeCardComponent],
	imports: [MaterialModule],
	exports: [MaterialModule, ReactiveFormsModule, TakeCardComponent],
})
export class SharedModule {}
