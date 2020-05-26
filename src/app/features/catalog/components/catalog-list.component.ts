import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Device} from '../model/device';

@Component({
  selector: 'ap-catalog-list',
  template: `
    <div class="list-group-item" *ngFor="let device of devices" (click)="setActive.emit(device)">
      {{device.label}} - {{device.price}}
      <div class="pull-right">
        <i class="fa fa-trash" (click)="delete.emit(device)"></i>
      </div>
    </div>
  `,
})

export class CatalogListComponent {
  @Input() devices: Device[];
  @Output() delete: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() setActive: EventEmitter<Device> = new EventEmitter<Device>();
}
