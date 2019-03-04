import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {PeopleState} from './people.state';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  // Tạo địa chỉ REST để Redux lấy Json
  private PeopleStatesUrl = 'http://localhost:4500/json-people';

  constructor(private http: HttpClient) {}

  // 5/7
  getPeopleStates(): Observable<PeopleState[]> {
    return this.http.get<PeopleState[]>(this.PeopleStatesUrl);
  }
}
