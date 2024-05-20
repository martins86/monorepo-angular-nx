import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly api = 'https://65009f9718c34dee0cd53786.mockapi.io/users';
  httpClient = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.api);
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.api}/${id}`);
  }
}
