import { TestBed } from '@angular/core/testing';

import { EzHighlightService } from './ez-highlight.service';

describe('EzHighlightService', () => {
  let service: EzHighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EzHighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
