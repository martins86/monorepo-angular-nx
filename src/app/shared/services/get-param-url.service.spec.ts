import { TestBed } from '@angular/core/testing';

import { GetParamUrlService } from './get-param-url.service';

describe('GetParamUrlService', () => {
  let service: GetParamUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetParamUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
