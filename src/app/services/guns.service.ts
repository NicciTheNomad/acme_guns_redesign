import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Gun } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class GunsService {
  // baseURL = 'https://5b905f7b3ef10a001445d02e.mockapi.io/guns';

  baseURL = '/api/guns/';

  constructor(private http: HttpClient) {}

  // addGun(newGun: Gun): Observable<Gun> {
  //   console.log('adding a Gun in service:', newGun);
  //   return this.http.post<Gun>(this.baseURL, newGun);
  // }

  getGuns(): Observable<Gun[]> {
    console.log('getting all Guns in service');
    return this.http.get<Gun[]>(this.baseURL);
  }

  getGun(gun_id): Observable<Gun> {
    console.log('getting a single Gun in service', gun_id);
    return this.http.get<Gun>(`${this.baseURL}/${gun_id}`);
  }

  getPistols(): Observable<Gun[]> {
    console.log('getting pisols only in servce');
    return this.http.get<Gun[]>(`${this.baseURL}/?filter=pistol`);
  }

  getCollectibles(): Observable<Gun[]> {
    console.log('getting pisols only in servce');
    return this.http.get<Gun[]>(`${this.baseURL}/?filter=commemorative`);
  }
  // updateGun(gun): Observable<Gun> {
  //   console.log('updating a Gun in service', gun._id);
  //   return this.http.put<Gun>(this.baseURL + gun._id, gun);
  // }

  // deleteGun(gun_id): Observable<Gun> {
  //   console.log('deleting a Gun in service', gun_id);
  //   return this.http.delete<Gun>(this.baseURL + gun_id);
  // }
}
