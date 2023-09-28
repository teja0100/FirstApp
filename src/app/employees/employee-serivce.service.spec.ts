import { TestBed } from '@angular/core/testing';

import { EmployeeSerivce } from './employee.service';

describe('EmployeeSerivce', () => {
  let service: EmployeeSerivce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSerivce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
