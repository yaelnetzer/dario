import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	btnTxt: string = "Logout";

	userList = [];

  constructor(private _router:Router,private _data:DataService,private _auth:AuthService) { }

  ngOnInit() {
	  this._auth.handleLoginCallback();
  }

	logout(){
		this._auth.logout();
	}

	getUserActionList(){
		this._data.getUserActionList(this._auth.userProfile).subscribe(
			data => { this.userList = data[0]},
			err => console.error(err),
			() => console.log('done loading user actions list')
		);
	}
}
