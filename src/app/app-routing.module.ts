import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './features/catalog/catalog.component';
import {CatalogListComponent} from './features/catalog/components/catalog-list.component';


const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: '', component: CatalogListComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
