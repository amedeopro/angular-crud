import  { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CatalogService} from './services/catalog.service';
import {CatalogStore} from './services/catalog.store';

@Component({
  selector: 'ap-catalog',
  template: `
    <ap-catalog-form
        [active]="store.active"
        (add)="actions.add($event)"
        (edit)="actions.edit($event)"
    ></ap-catalog-form>
    <ap-catalog-list
      [devices]="store.devices"
      (delete)="actions.deleteHandler($event)"
      (setActive)="actions.setActive($event)"
    ></ap-catalog-list>
  `,
  styles: [
  ]
})
export class CatalogComponent{

constructor(public actions: CatalogService, public store: CatalogStore) {
  actions.getAll();
}

}
