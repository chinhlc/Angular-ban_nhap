import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {PeopleState} from './people.state';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private PeopleStatesUrl = 'http://localhost:4500/json-people';    // Địa chỉ REST để Redux lấy Json

  constructor(private http: HttpClient) {}

  getPeopleStates(): Observable<PeopleState[]> {
    return this.http.get<PeopleState[]>(this.PeopleStatesUrl);
  }
}
