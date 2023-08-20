import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { CoreComponent } from './components/core.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
	declarations: [CoreComponent, ToolbarComponent],
	imports: [CommonModule, SharedModule, CoreRoutingModule],
})
export class CoreModule {}
