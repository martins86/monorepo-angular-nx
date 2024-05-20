import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, map, switchMap } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'lib-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class UserDetailsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private userService = inject(UserService);

  user$: Observable<User> = this.getParamsId().pipe(
    switchMap((id: string) => this.userService.getUserById(id))
  );

  getParamsId(): Observable<string> {
    return this.activatedRoute.params.pipe(map((params) => params['id']));
  }
}
