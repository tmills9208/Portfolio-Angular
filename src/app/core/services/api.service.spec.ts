import { environment } from './../../../environments/environment';
import { TestBed, getTestBed } from '@angular/core/testing';
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
    injector = getTestBed();
    service = injector.inject(ApiService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  describe('#get', () => {

    it('should return an Observable', (done: DoneFn) => {
      service.get(environment.backendTestUrl).subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    });

    it('should return a Promise', (done: DoneFn) => {
      service.get(environment.backendTestUrl).subscribe(value => {
        expect(value).toBe('promise value');
        done();
      });
    });
  });

  describe('#post', () => {

  });

  describe('#put', () => {

  });

  describe('#delete', () => {

  });
});

// https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
