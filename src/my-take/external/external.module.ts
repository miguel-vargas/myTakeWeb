import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { ExternalComponent } from './components/external.component';
import { ExternalRoutingModule } from './external-routing.module';
import { ExternalToolbarComponent } from './components/external-toolbar/external-toolbar.component';

@NgModule({
	declarations: [ExternalComponent, ExternalToolbarComponent],
	imports: [CommonModule, SharedModule, ExternalRoutingModule],
})
export class ExternalModule {}
