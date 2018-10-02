import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { Gun } from '@app/models/guns';
import { GunsService } from '@app/services/guns.service';

@Injectable({
  providedIn: 'root'
})
export class GunResolver implements Resolve<Gun[]> {
  constructor(private gundata: GunsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Gun[]> {
    return this.gundata.getGuns();
  }
}
