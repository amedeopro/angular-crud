import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Device} from '../model/device';

@Component({
  selector: 'ap-catalog-form',
  template: `
    <form #f="ngForm" (submit)="add.emit(f)" class="form-group form-inline">
      <input
        type="text"
        [ngModel]="active?.label"
        name="label"
        class="form-control mr-2"
        placeholder="Inserisci il device"
      >
      <input
        type="number"
        [ngModel]="active?.price"
        name="price"
        class="form-control mr-2"
        placeholder="Inserisci il prezzo"
      >
      <button class="btn btn-primary mr-2" type="submit">Inserisci</button>
      <button class="btn btn-primary" type="button" (click)="edit.emit(f)">Modifica</button>
    </form>
  `,
  styles: [
  ]
})
export class CatalogFormComponent{
  @Input() active: Device;
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

}
