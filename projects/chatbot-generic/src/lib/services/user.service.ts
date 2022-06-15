import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string = 'user';

  constructor() { }

  setUser(username: string) {
    this.username = username;
  }

  getUser(): string {
    return this.username;
  }
}
