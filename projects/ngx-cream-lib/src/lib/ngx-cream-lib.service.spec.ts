import { TestBed } from '@angular/core/testing';

import { NgxCreamLibService } from './ngx-cream-lib.service';

describe('NgxCreamLibService', () => {
  let service: NgxCreamLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCreamLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
