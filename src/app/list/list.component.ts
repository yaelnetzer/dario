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
	pageHeader: string = "Hello!";
	show: boolean = true;

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
			data => {
					this.userList=data;
					this.show=false;
					this.pageHeader=this._auth.userProfile.given_name+", here is your list:"},
			err => console.error(err),
			() => console.log('done loading user actions list')
		);
	}
}
