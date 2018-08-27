import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

import { DataService } from './data.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
