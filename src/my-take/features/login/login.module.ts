import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/modules/shared.module';
import { LoginComponent } from './components/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, SharedModule, LoginRoutingModule],
})
export class LoginModule {}
