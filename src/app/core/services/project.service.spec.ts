import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { Project } from './../models/project.model';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  describe('#getAll()', () => {
    it('should return an Observable', (done: DoneFn) => {
      service.getAll().subscribe(value => {
        expect(value).toBe(Project);
        done();
      });
    });
  })
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
