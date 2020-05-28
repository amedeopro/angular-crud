import {Injectable} from '@angular/core';
import {Device} from '../model/device';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {CatalogStore} from './catalog.store';

@Injectable({
  providedIn: 'root'
})


export class CatalogService {



  constructor(
    private http: HttpClient,
    private store: CatalogStore
  ) {}

  getAll(){
    this.http.get<Device[]>(`http://localhost:3000/devices`)
      .subscribe(res => {
        this.store.devices = res;
      });
  }

  deleteHandler(device: Device){
    this.http.delete(`http://localhost:3000/devices/` + device.id)
      .subscribe(res => {
        // const index = this.devices.findIndex(d => d.id === device.id)
        // this.devices.splice(index, 1)
        this.getAll();
        this.store.active = null;
      });
  }

  add(form: NgForm){
    this.http.post(`http://localhost:3000/devices/`, form.value)
      .subscribe(res => {
        this.getAll();
        form.reset();
      });
  }

  setActive(device: Device){
    this.store.active = device;
  }

  edit(form: NgForm){
    this.http.patch<Device>(`http://localhost:3000/devices/${this.store.active.id}`, form.value)
      .subscribe(res => {
        this.getAll()
        form.reset();
      });
  }
}
