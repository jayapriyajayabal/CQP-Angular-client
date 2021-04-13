import { TestBed } from '@angular/core/testing';

import { TPLItemService } from './tplitem.service';

describe('TplitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TPLItemService = TestBed.get(TPLItemService);
    expect(service).toBeTruthy();
  });
});
