import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from 'src/environments/environment';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly api = environment.api;
  httpClient = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.api);
  }

  getUsersById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.api}/${id}`);
  }
}
