import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

export function getUrlParams(
  param: string
): Observable<string | string[]> {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.params.pipe(
    map((params) => (param ? params[param] : params))
  );
}
