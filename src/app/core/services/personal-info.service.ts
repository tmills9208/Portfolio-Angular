import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: ApiService) { }

  getInfo() {
    return this.http.get('/info');
  }
}
