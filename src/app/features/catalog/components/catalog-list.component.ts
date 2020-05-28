import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Device} from '../model/device';
import {CatalogStore} from '../services/catalog.store';

@Component({
  selector: 'ap-catalog-list',
  template: `
    <div class="list-group-item" [ngClass]="{active: store.active?.id === device?.id}" *ngFor="let device of devices" (click)="setActive.emit(device)">
      {{device.label}}
      <div class="pull-right">
        <span class="mr-2" [style.color]="device.price > 500 ? 'red' : null">{{device.price | number: '1.2-2'}}</span>
        <i class="fa fa-trash" (click)="delete.emit(device)"></i>
      </div>
    </div>
  `,
})

export class CatalogListComponent {
  @Input() devices: Device[];
  @Output() delete: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() setActive: EventEmitter<Device> = new EventEmitter<Device>();

  constructor(public store: CatalogStore){}
}
