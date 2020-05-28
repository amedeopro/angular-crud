import {Device} from '../model/device';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CatalogStore {
  devices: Device[];
  active: Device;
}
