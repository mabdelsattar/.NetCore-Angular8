import { TestBed } from '@angular/core/testing';

import { PaymentDetailsServiceService } from './payment-details-service.service';

describe('PaymentDetailsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentDetailsServiceService = TestBed.get(PaymentDetailsServiceService);
    expect(service).toBeTruthy();
  });
});
