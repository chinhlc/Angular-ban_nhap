import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  data = {
    textSlogan: 'Bye You - Dependency Injection (share-module)'
  };
  constructor() { }
}
