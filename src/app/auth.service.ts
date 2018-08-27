import { Injectable } from '@angular/core';

import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
	// Create Auth0 instance
	auth0 = new auth0.WebAuth({
		clientID: 'NNeGNE3LZFoKhawNRfVFezuX0c2Fs37G',
		domain: 'yaelnetzer.auth0.com',
		responseType: 'token',
		audience: 'https://yaelnetzer.auth0.com/userinfo',
		redirectUri: 'http://localhost:4200/list',
		scope: 'openid profile'
	});

	expiresAt: number;
	userProfile: any;
	accessToken: string;
	authenticated: boolean;

	constructor() {
		this.getAccessToken();
	}

	login() {
		this.auth0.authorize();
	}

	handleLoginCallback() {
		this.auth0.parseHash((err, authResult) => {
			if (authResult && authResult.accessToken) {
				window.location.hash = '';
				this.getUserInfo(authResult);
				console.log('ss');
			} else if (err) {
				console.error(err);
			}
		});
	}

	getAccessToken() {
		this.auth0.checkSession({}, (err, authResult) => {
			if (authResult && authResult.accessToken) {
				this.getUserInfo(authResult);
			}
		});
	}

	getUserInfo(authResult) {
		this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
			if (profile) {
				this._setSession(authResult, profile);
			}
		});
	}

	private _setSession(authResult, profile) {
		this.expiresAt = authResult.expiresIn * 1000 + Date.now();
		this.accessToken = authResult.accessToken;
		this.userProfile = profile;
		this.authenticated = true;
	}

	logout() {
		this.auth0.logout({
			returnTo: 'http://localhost:4200'
		});
	}

	isLoggedIn(): boolean {
		return Date.now() < this.expiresAt && this.authenticated;
	}
}