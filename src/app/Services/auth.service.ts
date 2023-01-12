import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public estaLogueado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
