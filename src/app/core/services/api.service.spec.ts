import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ApiService } from './api.service';

describe('ApiServiceService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#get should return real value', () => {
    expect(service.get())
  });
});

// https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
