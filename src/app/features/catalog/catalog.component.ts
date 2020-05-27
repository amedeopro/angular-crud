import  { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from './model/device';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ap-catalog',
  template: `
    <ap-catalog-form
        [active]="active"
        (add)="add($event)"
        (edit)="edit($event)"
    ></ap-catalog-form>
    <ap-catalog-list
      [devices]="devices"
      (delete)="deleteHandler($event)"
      (setActive)="setActive($event)"
    ></ap-catalog-list>
  `,
  styles: [
  ]
})
export class CatalogComponent{

  devices: Device[];
  active: Device;

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll(){
    this.http.get<Device[]>(`http://localhost:3000/devices`)
      .subscribe(res => {
        this.devices = res;
      });
  }

  deleteHandler(device: Device){
    this.http.delete(`http://localhost:3000/devices/` + device.id)
      .subscribe(res => {
        // const index = this.devices.findIndex(d => d.id === device.id)
        // this.devices.splice(index, 1)
        this.getAll();
        this.active = null;
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
    this.active = device;
  }

  edit(form: NgForm){
    this.http.patch<Device>(`http://localhost:3000/devices/${this.active.id}`, form.value)
      .subscribe(res => {
        this.getAll()
        form.reset();
      });
  }



}
