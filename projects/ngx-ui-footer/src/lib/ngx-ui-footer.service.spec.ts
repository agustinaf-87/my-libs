import { TestBed } from '@angular/core/testing';

import { NgxUiFooterService } from './ngx-ui-footer.service';

describe('NgxUiFooterService', () => {
  let service: NgxUiFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUiFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
