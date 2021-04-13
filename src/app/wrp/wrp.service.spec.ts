import { TestBed } from '@angular/core/testing';

import { WrpService } from './wrp.service';

describe('WrpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WrpService = TestBed.get(WrpService);
    expect(service).toBeTruthy();
  });
});
