import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
	sUser:string;

  constructor(private _http:HttpClient) {}
	getUserActionList(params) {
		this.sUser=params.given_name+' '+params.family_name;

		return this._http.get('api/users/?user='+this.sUser);
	}
}
