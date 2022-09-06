import { TestBed } from '@angular/core/testing';

import { DemoControllerService } from './demo-controller.service';

describe('DemoControllerService', () => {
  let service: DemoControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
