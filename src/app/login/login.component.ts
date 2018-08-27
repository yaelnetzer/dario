import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginTitle: string = "Dario App";
	btnTxt: string = "Login";

  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }

	login(){
		this._auth.login();
	}
}
