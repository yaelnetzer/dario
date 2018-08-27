import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
	{
		path:'',//login as landing page
		component:LoginComponent
	},
	{
		path:'list',
		component:ListComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
