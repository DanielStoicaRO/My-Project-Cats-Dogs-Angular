import { TestBed } from '@angular/core/testing';

import { TakemehomeService } from './takemehome.service';

describe('TakemehomeService', () => {
  let service: TakemehomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakemehomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
