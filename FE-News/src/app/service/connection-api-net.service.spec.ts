import { TestBed } from '@angular/core/testing';

import { ConnectionApiNetService } from './connection-api-net.service';

describe('ConnectionApiNetService', () => {
  let service: ConnectionApiNetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionApiNetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
