import { TestBed, inject } from '@angular/core/testing';

import { GunsService } from './guns.service';

describe('GunsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GunsService]
    });
  });

  it('should be created', inject([GunsService], (service: GunsService) => {
    expect(service).toBeTruthy();
  }));
});
